<template>
  <div>
    <div>{{ $t('message') }} [{{ $i18n.locale }}]</div>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="fr">fr</option>
      <option value="ja">ja</option>
    </select>
  </div>
</template>

<script>
import { saveLocale } from '@/i18n';

export default {
  computed: {
    locale: {
      get() {
        return this.$i18n.locale;
      },
      set(val) {
        this.$i18n.locale = val;
        saveLocale(val);
      },
    },
  },
};
</script>
