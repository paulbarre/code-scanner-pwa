<template>
  <v-app dark>
    <AppBar />

    <v-main>
      <template v-if="supported">
        <Camera class="mt-6" ref="camera" />
        <div class="d-flex justify-center mt-16">
          <v-progress-circular width="2" indeterminate v-show="loading"></v-progress-circular>
        </div>
        <DetectionResult ref="results" @close="playCamera" />
      </template>
      <div
        v-else
        class="pa-4 font-weight-black"
      >{{ $t('bad_browser') }}</div>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import AppBar from '@/components/AppBar.vue';
import Camera from '@/components/Camera.vue';
import DetectionResult from '@/components/DetectionResult.vue';

export default {
  name: 'App',
  components: {
    AppBar,
    Camera,
    DetectionResult,
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState('detector', ['supported', 'ready']),
    ...mapState('videoStream', ['detectable']),
  },
  watch: {
    detectable: 'startDetection',
    ready: 'startDetection',
  },
  methods: {
    async startDetection() {
      if (!this.ready || !this.detectable) {
        return;
      }
      this.loading = false;
      const codes = (await this.$store.dispatch('detector/startDetection'))
        // It happens code are doubled. Reduce to avoid duplications
        .reduce((list, curr) => {
          if (list.map((code) => code.rawValue).includes(curr.rawValue)) {
            return list;
          }
          return [...list, curr];
        }, []);
      if (codes.length > 0) {
        this.$refs.results.show(codes);
        this.$refs.camera.pause();
      }
    },
    playCamera() {
      this.$refs.camera.play();
      this.startDetection();
    },
  },
};
</script>
