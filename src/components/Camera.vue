<template>
  <div class="wrapper">
    <div
      v-show="cameraPermission !== PERMISSIONS.GRANTED"
      class="font-weight-black message"
    >{{ $t('camera_not_allowed') }}</div>
    <video id="video" ref="video" autoplay @loadeddata="onVideoStateChange"></video>
  </div>
</template>

<script>
const PERMISSIONS = Object.freeze({
  GRANTED: 'granted',
  DENIED: 'denied',
  PROMPT: 'prompt',
});

const MEDIA_STATE = Object.freeze({
  HAVE_NOTHING: 0,
  HAVE_METADATA: 1,
  HAVE_CURRENT_DATA: 2,
  HAVE_FUTURE_DATA: 3,
  HAVE_ENOUGH_DATA: 4,
});

export default {
  data() {
    return {
      cameraPermission: null,
      started: false,
    };
  },
  watch: {
    cameraPermission(val) {
      if (val !== PERMISSIONS.DENIED && this.started) {
        this.createVideoStream();
      }
    },
    started(val) {
      // There are some cases state is `prompt`, but we need to ask for media to
      // show the prompt.
      if (val && this.cameraPermission !== PERMISSIONS.DENIED) {
        this.createVideoStream();
      }
    },
  },
  created() {
    this.videoStream = null;
    this.PERMISSIONS = PERMISSIONS;
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
    async createVideoStream() {
      if (this.creatingStream || this.videoStream) {
        return;
      }
      try {
        this.creatingStream = true;
        this.videoStream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            facingMode: { exact: "environment" },
          },
        });
      } catch (err) {
        this.videoStream = null;
      } finally {
        this.creatingStream = false;
        this.$refs.video.srcObject = this.videoStream;
      }
    },
    stopVideoStream() {
      const tracks = this.videoStream?.getTracks() ?? [];
      tracks.forEach((track) => {
        track.stop();
      });
      this.videoStream = null;
      this.$refs.video.srcObject = null;
    },
    start() {
      if (this.started && this.$refs.video.paused) {
        this.$refs.video.play();
        return;
      }
      this.started = true;
    },
    pause() {
      this.$refs.video.pause();
    },
    stop() {
      this.started = false;
      this.stopVideoStream();
    },
    onVideoStateChange() {
      if (this.$refs.video.readyState === MEDIA_STATE.HAVE_ENOUGH_DATA) {
        this.$emit('ready', this.$refs.video);
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  border-radius: 1rem;
  border: 2px solid white;
  width: 300px;
  height: 300px;
  max-width: 90vw;
  max-height: 90vw;
  margin: 0 auto;
  position: relative;
}

.wrapper video {
  width: 100%;
  height: 100%;
}

.message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
