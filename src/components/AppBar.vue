<template>
  <v-app-bar app>
    <v-app-bar-title>Code Scanner</v-app-bar-title>
    <v-spacer></v-spacer>
    <CameraSelection :current="runningDevice" />
    <Locale />
  </v-app-bar>
</template>

<script>
import CameraSelection from '@/components/CameraSelection.vue';
import Locale from '@/components/Locale.vue';

export default {
  components: {
    CameraSelection,
    Locale,
  },
  props: {
    runningDevice: String,
  },
};
</script>
