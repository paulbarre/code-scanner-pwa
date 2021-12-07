<template>
  <div id="app">
    <div v-if="supported">
      <div v-if="!isReady">Loading</div>
      <div v-else>
        <Camera />
        <div>Supported formats: {{ detector.supportedFormats.join(', ') }}</div>
      </div>
    </div>
    <div v-else>
      Sorry. This application is not supported by your browser.
    </div>
    <Locale />
  </div>
</template>

<script>
import Camera from '@/components/Camera.vue';
import Locale from '@/components/Locale.vue';
import Detector from '@/model/Detector';

export default {
  name: 'App',
  components: {
    Camera,
    Locale,
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

video {
  border: 3px solid black;
}
</style>
