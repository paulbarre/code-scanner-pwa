<template>
  <v-list-item two-line>
    <v-list-item-content>
      <v-list-item-title>{{ rawValue }}</v-list-item-title>
      <v-list-item-subtitle>{{ format }}</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <div>
        <v-btn icon>
          <v-icon small>mdi-open-in-new</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon small>mdi-content-copy</v-icon>
        </v-btn>
      </div>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import { FORMATS } from '@/model/Detector';

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
};
</script>
