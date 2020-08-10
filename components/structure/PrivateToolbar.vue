<template>
  <v-app-bar fixed app color="secondary" height="88" class="px-xl-10 px-lg-6">
    <nuxt-link to="/">
      <v-img
        :src="getAssetsImage(melhorEnvioLogo)"
        alt="Melhor Envio"
        width="120"
        contain
      ></v-img>
    </nuxt-link>
    <v-spacer></v-spacer>
    <div class="d-flex flex-column align-end">
      <span>Correios</span>
      <h4>{{ $route.params.id }}</h4>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    melhorEnvioLogo() {
      return this.$vuetify.theme.dark
        ? 'melhor_envio_white.svg'
        : 'melhor_envio.svg'
    },
  },
  methods: {
    getAssetsImage(path) {
      return path ? require(`@/assets/images/logos/${path}`) : ''
    },
  },
}
</script>
