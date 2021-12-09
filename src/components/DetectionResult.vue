<template>
  <v-dialog v-model="visible" fullscreen>
    <v-card>
      <v-toolbar dark flat>
        <v-toolbar-title>{{ results.length }} codes found</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list class="overflow-y-auto">
        <div v-for="({ rawValue, format }, index) in results" :key="`result-${index}`">
          <ResultListItem
            :rawValue="rawValue"
            :format="format"
            @copy="copySnackbar = true"
          />
          <v-divider></v-divider>
        </div>
      </v-list>
    </v-card>

    <v-snackbar v-model="copySnackbar" timeout="2000">
      <span>Text copied</span>
    </v-snackbar>
  </v-dialog>
</template>

<script>
import ResultListItem from './ResultListItem.vue';

export default {
  components: {
    ResultListItem,
  },
  data() {
    return {
      visible: false,
      results: [],
      copySnackbar: false,
    };
  },
  watch: {
    visible(val) {
      if (!val) {
        this.results = [];
        this.$emit('close');
      }
    },
  },
  methods: {
    show(results = []) {
      if (results.length === 0) {
        return;
      }
      this.results = results;
      this.visible = true;
    },
  },
};
</script>
