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
    async load({ commit }) {
      try {
        const allDevices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = allDevices
          .filter(({ kind, label }) => kind === DEVICE_KINDS.VIDEOINPUT && label);
        commit('setDevices', videoDevices);
      } catch (err) {
        console.error('Failed to enumerate devices:', err.message);
        commit('setDevices', []);
      }
    },
  },
  plugins: [
    (store) => {
      store.subscribe((mutation, state) => {
        if (
          mutation.type === 'permissions/update'
          && state.permissions.cameraGranted
        ) {
          store.dispatch('devices/load');
        }
      });
    },
  ],
};
