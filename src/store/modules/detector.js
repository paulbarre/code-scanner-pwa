export default {
  namespaced: true,
  state: {
    supported: 'BarcodeDetector' in window,
    ready: false,
    supportedFormats: [],
  },
  mutations: {
    setSupportedFormats(state, formats) {
      state.supportedFormats = formats;
    },
  },
  actions: {
    async loadSupportedFormats({ commit }) {
      try {
        const supportedFormats = await window.BarcodeDetector.getSupportedFormats();
        commit('setSupportedFormats', supportedFormats);
      } catch (err) {
        console.error('Impossible to get supported formats');
        commit('setSupportedFormats', []);
      }
    },
    async init({ state, dispatch }) {
      if (!state.supported) {
        return;
      }
      await dispatch('loadSupportedFormats');
    },
  },
  plugins: [
    (store) => {
      store.dispatch('detector/init');
    },
  ],
};
