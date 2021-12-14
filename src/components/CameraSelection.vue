<template>
  <v-menu offset-y open-on-hover v-model="opened">
    <template #activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        text
        v-show="hasSelection"
        absolute
        bottom
        right
        class="mr-4"
      >
        <v-icon>mdi-video</v-icon>
        <v-icon x-small>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item-group v-model="current">
        <v-list-item
          v-for="({ label, deviceId }) in devices"
          :key="deviceId"
          :value="deviceId"
        >
          <v-list-item-title>{{ label }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      opened: false,
      current: null,
    };
  },
  computed: {
    ...mapState('devices', ['devices']),
    ...mapState('videoStream', ['deviceId']),
    hasSelection() {
      return this.devices.length > 1;
    },
  },
  watch: {
    deviceId(val) {
      if (!this.current) {
        this.current = val;
      }
    },
    current(val) {
      this.$store.dispatch('videoStream/createStream', val);
    },
  },
};
</script>
