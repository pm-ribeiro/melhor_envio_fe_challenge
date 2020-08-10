<template>
  <v-app>
    <Toolbar></Toolbar>
    <v-main>
      <v-container fluid class="fill-height pa-0">
        <nuxt />
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
export default {
  computed: {},
}
</script>
