<template>
  <v-app-bar app>
    <v-app-bar-title>Code Scanner</v-app-bar-title>
    <v-spacer></v-spacer>
    <Locale />
  </v-app-bar>
</template>

<script>
import Locale from '@/components/Locale.vue';

export default {
  components: {
    Locale,
  },
};
</script>
