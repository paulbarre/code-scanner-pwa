const DEVICE_KINDS = Object.freeze({
  VIDEOINPUT: 'videoinput',
  AUDIOINPUT: 'audioinput',
  AUDIOOUTPUT: 'audiooutput',
});

export default {
  namespaced: true,
  state: {
    devices: [],
  },
  mutations: {
    setDevices(state, devices) {
      state.devices = devices;
    },
  },
  actions: {
    async loadDevices() {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        this.videoDevices = devices
          .filter(({ kind, label }) => kind === DEVICE_KINDS.VIDEOINPUT && label);
        console.log('Video devices', this.videoDevices);
      } catch (err) {
        console.error('Failed to enumerate devices');
        this.videoDevices = [];
      }
    },
    async init({ dispatch }) {
      await dispatch('loadDevices');
    },
  },
  plugins: [
    (store) => {
      store.dispatch('devices/init');
    },
  ],
};
