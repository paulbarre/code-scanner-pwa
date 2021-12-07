<template>
  <div>
    <div>Camera allowed: {{ cameraAllowed }}</div>
    <video ref="video" autoplay></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cameraAllowed: false,
    };
  },
  watch: {
    cameraAllowed(val) {
      if (val) {
        this.createVideoStream();
      }
    },
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
    async createVideoStream() {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoStream) {
        this.$refs.video.srcObject = videoStream;
      }
    },
  },
};
</script>
