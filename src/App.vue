<template>
  <v-app dark>
    <AppBar />

    <v-main>
      <template v-if="supported">
        <Camera ref="camera" @ready="startDetection" />
        <DetectionResult />
      </template>
      <div
        v-else
        class="pa-4 font-weight-black"
      >{{ $t('bad_browser') }}</div>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import Camera from '@/components/Camera.vue';
import DetectionResult from '@/components/DetectionResult.vue';
import Detector from '@/model/Detector';

export default {
  name: 'App',
  components: {
    AppBar,
    Camera,
    DetectionResult,
  },
  data() {
    return {
      detectorIsReady: false,
    };
  },
  created() {
    this.supported = Detector.supported;
    if (this.supported) {
      this.detector = new Detector();
      this.detector.isReady.then(() => {
        this.detectorIsReady = true;
      });
    }
  },
  mounted() {
    if (this.supported) {
      this.startCamera();
    }
  },
  methods: {
    startCamera() {
      this.$refs.camera.start();
    },
    pauseCamera() {
      this.$refs.camera.pause();
    },
    async startDetection(element) {
      await this.detector.isReady;
      const codes = await this.detector.detect(element);
      codes.forEach((code) => {
        console.log(code);
      });
      this.pauseCamera();
    },
  },
};
</script>
