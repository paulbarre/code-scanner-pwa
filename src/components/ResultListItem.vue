<template>
  <v-list-item two-line>
    <v-list-item-content>
      <v-list-item-title>{{ rawValue }}</v-list-item-title>
      <v-list-item-subtitle>{{ format }}</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <div>
        <v-btn v-if="isURL" :href="rawValue" target="_blank" icon>
          <v-icon small>mdi-open-in-new</v-icon>
        </v-btn>
        <v-btn icon @click="copyToClipboard" class="ml-2">
          <v-icon small>mdi-content-copy</v-icon>
        </v-btn>
      </div>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export const FORMATS = Object.freeze({
  AZTEC: 'aztec',
  CODE_128: 'code_128',
  CODE_39: 'code_39',
  CODE_93: 'code_93',
  CODABAR: 'codabar',
  DATA_MATRIX: 'data_matrix',
  EAN_13: 'ean_13',
  EAN_8: 'ean_8',
  ITF: 'itf',
  PDF417: 'pdf417',
  QR_CODE: 'qr_code',
  UPC_A: 'upc_a',
  UPC_E: 'upc_e',
  UNKNOWN: 'unknown',
});

export default {
  props: {
    rawValue: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      required: true,
      validator: (val) => Object.values(FORMATS).includes(val),
    },
  },
  computed: {
    isURL() {
      return this.rawValue.match(/^https?:\/\/.+$/);
    },
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.rawValue);
      this.$emit('copy');
    },
  },
};
</script>
