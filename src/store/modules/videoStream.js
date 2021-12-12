export default {
  namespaced: true,
  stream: null,
  state: {
    deviceId: null,
  },
  mutations: {
    setDeviceId(state, id) {
      state.deviceId = id;
    },
  },
  actions: {
    async createStream({ commit }) {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: { ideal: 'environment' },
        },
      });
      const track = this.videoStream.getVideoTracks()?.[0];
      commit('setDeviceId', track?.getSettings()?.deviceId ?? null);
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
        }
      });
    },
  ],
};
