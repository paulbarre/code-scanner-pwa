<template>
  <div>
    <slot name="activator" v-bind="{ show }"></slot>

    <v-dialog v-model="visible" fullscreen>
      <v-card>
        <v-toolbar dark flat>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="visible = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <slot></slot>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
  },
};
</script>
