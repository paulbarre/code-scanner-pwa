<template>
  <v-app dark>
    <AppBar />

    <v-main>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import Detector from '@/model/Detector';

export default {
  name: 'App',

  components: {
    AppBar,
  },
  data() {
    return {
      isReady: false,
    };
  },
  created() {
    this.supported = Detector.supported;
    this.detector = new Detector();
    this.detector.isReady.then(() => {
      this.isReady = true;
    });
  },
};
</script>
