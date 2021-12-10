<template>
  <div class="wrapper">
    <div
      v-show="!allowed"
      class="font-weight-black message"
    >{{ $t('camera_not_allowed') }}</div>
    <video id="video" ref="video" autoplay @loadeddata="onVideoStateChange"></video>
  </div>
</template>

<script>
import videoCamera from '@/mixins/videoCamera';

const MEDIA_STATE = Object.freeze({
  HAVE_NOTHING: 0,
  HAVE_METADATA: 1,
  HAVE_CURRENT_DATA: 2,
  HAVE_FUTURE_DATA: 3,
  HAVE_ENOUGH_DATA: 4,
});

export default {
  mixins: [videoCamera],
  data() {
    return {
      started: false,
    };
  },
  watch: {
    allowed: {
      handler(val) {
        if (val && this.started) {
          this.createVideoStream();
        } else if (!val) {
          this.stopVideoStream();
        }
      },
      immediate: true,
    },
    started(val) {
      // There are some cases state is `prompt`, but we need to ask for media to
      // show the prompt.
      if (val && this.allowed) {
        this.createVideoStream();
      }
    },
  },
  created() {
    this.videoStream = null;
  },
  methods: {
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
            facingMode: { ideal: 'environment' },
          },
        });
        const deviceId = this.videoStream.getVideoTracks()?.[0]?.getSettings()?.deviceId;
        this.$emit('open', deviceId);
      } catch (err) {
        this.videoStream = null;
      } finally {
        this.creatingStream = false;
        this.$refs.video.srcObject = this.videoStream;
      }
    },
    stopVideoStream() {
      const tracks = this.videoStream?.getVideoTracks() ?? [];
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
  border-radius: 0.5rem;
  width: 100vw;
  max-width: 1000px;
  height: 70vh;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.wrapper video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
