const PERMISSIONS = Object.freeze({
  GRANTED: 'granted',
  DENIED: 'denied',
  PROMPT: 'prompt',
});

export default {
  namespaced: true,
  state: {
    cameraGranted: false,
    cameraDenied: false,
  },
  mutations: {
    update(state, permission) {
      state.cameraGranted = permission === PERMISSIONS.GRANTED;
      state.cameraDenied = permission === PERMISSIONS.DENIED;
    },
  },
  actions: {
    async init({ commit }) {
      const permissions = await navigator.permissions.query({ name: 'camera' });
      commit('update', permissions.state);
      permissions.onchange = ((e) => {
        if (e.type === 'change') {
          commit('update', e.target.state);
        }
      });
    },
  },
  plugins: [
    ({ state, dispatch }) => {
      if (state.detector.supported) {
        dispatch('permissions/init');
      }
    },
  ],
};
