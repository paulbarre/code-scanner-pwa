<template>
  <v-menu offset-y open-on-hover v-model="opened">
    <template #activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        text
        v-show="hasSelection"
      >
        <v-icon>mdi-video</v-icon>
        <v-icon x-small>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item-group v-model="current">
        <v-list-item
          v-for="({ label, deviceId }) in videoDevices"
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
import videoCamera from '@/mixins/videoCamera';

const DEVICE_KINDS = Object.freeze({
  VIDEOINPUT: 'videoinput',
  AUDIOINPUT: 'audioinput',
  AUDIOOUTPUT: 'audiooutput',
});

export default {
  mixins: [videoCamera],
  props: {
    current: String,
  },
  data() {
    return {
      videoDevices: [],
      selectedCamera: null,
      opened: false,
    };
  },
  computed: {
    hasSelection() {
      return true; // this.allowed && this.videoDevices.length > 1;
    },
  },
  watch: {
    allowed: {
      handler(val) {
        if (val) {
          this.listCameras();
        }
      },
      immediate: true,
    },
    opened(val) {
      if (val) {
        console.log(this.deviceId);
      }
    },
  },
  methods: {
    async listCameras() {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        this.videoDevices = devices
          .filter(({ kind, label }) => kind === DEVICE_KINDS.VIDEOINPUT && label);
        console.log('Video devices', this.videoDevices);
      } catch (err) {
        console.error('Failed to enumerate devices');
        this.videoDevices = [];
      }
    },
  },
};
</script>
