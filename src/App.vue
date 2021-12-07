<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-if="supported">
      <div v-if="!isReady">Loading</div>
      <div v-else>
        <video ref="video" autoplay></video>
        <div>Supported formats: {{ detector.supportedFormats.join(', ') }}</div>
      </div>
    </div>
    <div v-else>
      Sorry. This application is not supported by your device.
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Detector from '@/model/Detector';

export default {
  name: 'App',
  components: {
    HelloWorld,
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
      this.createVideoStream();
    });
  },
  methods: {
    async createVideoStream() {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      console.log(videoStream);
      if (videoStream) {
        this.$refs.video.srcObject = videoStream;
      }
    },
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
