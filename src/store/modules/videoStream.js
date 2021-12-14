const MEDIA_STATE = Object.freeze({
  HAVE_NOTHING: 0,
  HAVE_METADATA: 1,
  HAVE_CURRENT_DATA: 2,
  HAVE_FUTURE_DATA: 3,
  HAVE_ENOUGH_DATA: 4,
});

export default {
  namespaced: true,
  stream: null,
  state: {
    deviceId: null,
    detectable: false,
  },
  mutations: {
    setDeviceId(state, id) {
      state.deviceId = id;
    },
    setDetectable(state, val) {
      state.detectable = val;
    },
  },
  actions: {
    async createStream({ commit, dispatch }, deviceId = null) {
      if (this.stream) {
        await dispatch('releaseStream');
      }
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            ...(!deviceId && { facingMode: { ideal: 'environment' } }),
            deviceId,
          },
        });
        const track = this.stream.getVideoTracks()?.[0];
        commit('setDeviceId', track?.getSettings()?.deviceId ?? null);
      } catch (err) {
        console.error('Impossible to create video stream.', err.message);
        alert(`Impossible to create video stream. ${err.message}`);
        this.stream = null;
        commit('setDeviceId', null);
      }
    },
    releaseStream({ commit }) {
      const tracks = this.videoStream?.getTracks() ?? [];
      tracks.forEach((track) => {
        track.stop();
      });
      this.stream = null;
      commit('setDeviceId', null);
      commit('setDetectable', false);
    },
    attachStreamToVideo({ commit }, videoElement) {
      /* eslint-disable no-param-reassign */
      videoElement.srcObject = this.stream;
      videoElement.onloadeddata = ({ target }) => {
        commit('setDetectable', target.readyState === MEDIA_STATE.HAVE_ENOUGH_DATA);
      };
      /* eslint-enable no-param-reassign */
    },
  },
  plugins: [
    (store) => {
      store.subscribe((mutation, state) => {
        if (mutation.type !== 'permissions/update') {
          return;
        }
        if (!state.permissions.cameraDenied) {
          store.dispatch('videoStream/createStream');
        } else {
          store.dispatch('videoStream/releaseStream');
        }
      });
    },
  ],
};
