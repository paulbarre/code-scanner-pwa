<template>
  <FullscreenDialog ref="about" title="Code Scanner">
    <template #activator="{ show }">
      <v-btn text @click="show">
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
    </template>

    <v-list dense>
      <v-subheader>Formats supported by your device</v-subheader>
      <v-list-item v-for="format in supportedFormats" :key="format">{{ format }}</v-list-item>
    </v-list>
  </FullscreenDialog>
</template>

<script>
import { mapState } from 'vuex';
import FullscreenDialog from '@/components/FullscreenDialog.vue';

export default {
  components: {
    FullscreenDialog,
  },
  computed: {
    ...mapState('detector', ['supportedFormats']),
  },
};
</script>
