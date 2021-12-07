<template>
  <div>Camera allowed: {{ cameraAllowed }}</div>
</template>

<script>
export default {
  data() {
    return {
      cameraAllowed: false,
    };
  },
  mounted() {
    this.listenPermissions();
  },
  methods: {
    async listenPermissions() {
      const permissions = await navigator.permissions.query({ name: 'camera' });
      this.cameraAllowed = permissions.state !== 'denied';
      permissions.onchange = ((e) => {
        if (e.type !== 'change') {
          return;
        }
        const newState = e.target.state;
        this.cameraAllowed = newState !== 'denied';
      });
    },
  },
};
</script>
