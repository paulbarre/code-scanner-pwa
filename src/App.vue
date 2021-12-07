<template>
  <v-app dark>
    <AppBar />

    <v-main>
      <div
        v-if="!supported"
        class="pa-4 font-weight-black"
      >{{ $t('bad_browser') }}</div>
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
  created() {
    this.supported = Detector.supported;
  },
};
</script>
