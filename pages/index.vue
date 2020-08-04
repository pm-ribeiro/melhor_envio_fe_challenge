<template>
  <v-row
    align="center"
    justify="center"
    class="fill-height"
    :class="$vuetify.theme.dark ? 'dark-background' : 'green-background'"
  >
    <v-col class="text-center">
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn :href="source" icon large target="_blank" v-on="on">
            <v-icon large>mdi-code-tags</v-icon>
          </v-btn>
        </template>
        <span>Source</span>
      </v-tooltip>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    drawer: null,
  }),
}
</script>
