<template>
  <v-bottom-sheet v-model="visible">
    <v-list height="80vh" class="overflow-y-auto">
      <v-subheader>{{ results.length }} codes found</v-subheader>
      <div v-for="({ rawValue, format }, index) in results" :key="`result-${index}`">
        <ResultListItem
          :rawValue="rawValue"
          :format="format"
        />
        <v-divider></v-divider>
      </div>
    </v-list>
  </v-bottom-sheet>
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
      console.log(results);
      this.results = results;
      this.visible = true;
    },
  },
};
</script>
