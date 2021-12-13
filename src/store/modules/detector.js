export default {
  namespaced: true,
  detector: null,
  videoElement: null,
  state: {
    supported: 'BarcodeDetector' in window,
    supportedFormats: [],
    ready: false,
  },
  mutations: {
    setSupportedFormats(state, formats) {
      state.supportedFormats = formats;
    },
    setReady(state) {
      state.ready = true;
    },
  },
  actions: {
    async loadSupportedFormats({ commit }) {
      try {
        const supportedFormats = await window.BarcodeDetector.getSupportedFormats();
        commit('setSupportedFormats', supportedFormats);
      } catch (err) {
        console.error('Impossible to get supported formats.', err.message);
        commit('setSupportedFormats', []);
      }
    },
    async createDetector({ state }) {
      this.detector = new window.BarcodeDetector({
        formats: state.supportedFormats,
      });
    },
    async init({ dispatch, commit }) {
      await dispatch('loadSupportedFormats');
      await dispatch('createDetector');
      commit('setReady');
    },
    async startDetection({ rootState }) {
      return new Promise((resolve) => {
        if (!this.detector) {
          resolve([]);
          return;
        }
        const loop = () => {
          if (!rootState.videoStream.detectable) {
            console.debug('Video stream is not detectable anymore. Stop detection loop.');
            resolve([]);
            return;
          }
          this.detector.detect(this.videoElement).then((barcodes) => {
            if (barcodes.length > 0) {
              resolve(barcodes);
            } else {
              requestAnimationFrame(loop);
            }
          }).catch((err) => {
            console.log('Error', err.message);
          });
        };
        loop();
      });
    },
    attachVideo(_, videoElement) {
      this.videoElement = videoElement;
    },
    detachVideo() {
      this.videoElement = null;
    },
  },
  plugins: [
    ({ state, dispatch }) => {
      if (state.detector.supported) {
        dispatch('detector/init');
      }
    },
  ],
};
