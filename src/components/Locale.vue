<template>
  <v-menu offset-y open-on-hover>
    <template #activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        text
      >
        <v-icon>mdi-translate</v-icon>
        <v-icon x-small>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item-group v-model="locale">
        <v-list-item
          v-for="({ locale, language }) in availableLocales"
          :key="locale"
          :value="locale"
        >
          <v-list-item-title>{{ language }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
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
  created() {
    // TODO- Deduct from locales folder
    this.availableLocales = [
      { locale: 'en', language: 'English' },
      { locale: 'fr', language: 'Français' },
      { locale: 'ja', language: '日本語' },
    ];
  },
};
</script>
