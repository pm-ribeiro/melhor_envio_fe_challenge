<template>
  <v-app-bar fixed flat app color="primary" class="px-10">
    <nuxt-link to="/">
      <v-img
        :src="getAssetsImage(melhorEnvioLogo)"
        alt="Melhor Envio"
        width="120"
        contain
      ></v-img>
    </nuxt-link>
    <v-spacer></v-spacer>
    <div v-if="!$vuetify.breakpoint.mobile">
      <v-btn text color="secondary" class="text-capitalize">
        Melhor Envio
      </v-btn>

      <v-btn
        text
        color="secondary"
        class="text-capitalize ml-10"
        @click="login()"
      >
        Login
      </v-btn>

      <v-btn
        depressed
        color="secondary"
        small
        class="primary--text text-lowercase ml-10"
        @click="register()"
      >
        Cadastre-se
      </v-btn>
    </div>
    <div v-else>
      <MobileMenu></MobileMenu>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    melhorEnvioLogo() {
      return this.$vuetify.theme.dark
        ? 'melhor_envio.svg'
        : 'melhor_envio_white.svg'
    },
  },
  methods: {
    getAssetsImage(path) {
      return path ? require(`@/assets/images/logos/${path}`) : ''
    },
  },
}
</script>
