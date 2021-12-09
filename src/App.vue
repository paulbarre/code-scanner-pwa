<template>
  <v-app dark>
    <AppBar />

    <v-main>
      <template v-if="supported">
        <Camera class="mt-6" ref="camera" @ready="startDetection" />
        <DetectionResult ref="results" @close="startCamera" />
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
    stopCamera() {
      this.$refs.camera.stop();
    },
    async startDetection(element) {
      console.log('start detect');
      await this.detector.isReady;
      const codes = await this.detector.detect(element);
      if (codes.length > 0) {
        this.$refs.results.show(codes);
        this.stopCamera();
      }
    },
  },
};
</script>
