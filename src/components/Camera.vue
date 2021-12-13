<template>
  <div class="wrapper">
    <div
      v-show="!cameraGranted"
      class="font-weight-black message"
    >{{ $t('camera_not_allowed') }}</div>
    <video id="video" ref="video" autoplay></video>
    <CameraSelection />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CameraSelection from '@/components/CameraSelection.vue';

export default {
  components: {
    CameraSelection,
  },
  computed: {
    ...mapState('permissions', ['cameraGranted']),
    ...mapState('videoStream', ['deviceId']),
  },
  watch: {
    deviceId(val) {
      if (val) {
        this.$store.dispatch('videoStream/attachStreamToVideo', this.$refs.video);
      } else {
        this.$refs.video.srcObject = null;
      }
    },
  },
  mounted() {
    this.$store.dispatch('detector/attachVideo', this.$refs.video);
  },
  beforeDestroy() {
    this.$store.dispatch('detector/detachVideo');
  },
  methods: {
    play() {
      this.$refs.video.play();
    },
    pause() {
      this.$refs.video.pause();
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
