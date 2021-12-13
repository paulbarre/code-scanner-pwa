<template>
  <v-app-bar app>
    <v-app-bar-title>Code Scanner</v-app-bar-title>
    <v-spacer></v-spacer>
    <Locale />
    <AboutDialog />
  </v-app-bar>
</template>

<script>
import Locale from '@/components/Locale.vue';
import AboutDialog from '@/components/AboutDialog.vue';

export default {
  components: {
    Locale,
    AboutDialog,
  },
};
</script>
