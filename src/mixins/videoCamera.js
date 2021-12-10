const PERMISSIONS = Object.freeze({
  GRANTED: 'granted',
  DENIED: 'denied',
  PROMPT: 'prompt',
});

export default {
  data() {
    return {
      cameraPermission: null,
    };
  },
  computed: {
    allowed() {
      return this.cameraPermission !== PERMISSIONS.DENIED;
    },
  },
  mounted() {
    this.listenPermissions();
  },
  methods: {
    async listenPermissions() {
      const permissions = await navigator.permissions.query({ name: 'camera' });
      this.cameraPermission = permissions.state;
      permissions.onchange = ((e) => {
        if (e.type !== 'change') {
          return;
        }
        const newState = e.target.state;
        this.cameraPermission = newState;
      });
    },
  },
};
