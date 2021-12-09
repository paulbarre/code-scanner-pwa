<template>
  <v-app dark>
    <AppBar />

    <v-main>
      <template v-if="supported">
        <Camera class="mt-6" ref="camera" @ready="startDetection" />
        <div class="d-flex justify-center mt-16">
          <v-progress-circular width="2" indeterminate v-show="loading"></v-progress-circular>
        </div>
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
      loading: true,
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
      this.loading = true;
      this.$refs.camera.start();
    },
    stopCamera() {
      this.$refs.camera.stop();
    },
    async startDetection(element) {
      await this.detector.isReady;
      this.loading = false;
      const codes = (await this.detector.detect(element))
        // It happens code are doubled. Reduce to avoid duplications
        .reduce((list, curr) => {
          if (list.map((code) => code.rawValue).includes(curr.rawValue)) {
            return list;
          }
          return [...list, curr];
        }, []);
      if (codes.length > 0) {
        this.$refs.results.show(codes);
        this.stopCamera();
      }
    },
  },
};
</script>
