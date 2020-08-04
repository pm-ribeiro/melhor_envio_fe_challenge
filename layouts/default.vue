<template>
  <v-app>
    <PublicToolbar></PublicToolbar>
    <v-main>
      <v-container fluid class="fill-height pa-0">
        <nuxt />
      </v-container>
    </v-main>
    <PublicFooter></PublicFooter>
  </v-app>
</template>

<script>
export default {
  computed: {},
}
</script>
