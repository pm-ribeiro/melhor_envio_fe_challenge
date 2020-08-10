<template>
  <v-app-bar fixed flat app color="primary" height="88" class="px-xl-10">
    <nuxt-link to="/">
      <v-img
        :src="getAssetsImage('melhor_envio_white.svg')"
        alt="Melhor Envio"
        width="120"
        contain
      ></v-img>
    </nuxt-link>
    <v-spacer></v-spacer>
    <div v-if="!$vuetify.breakpoint.mobile">
      <v-btn
        text
        color="secondary"
        class="text-capitalize"
        href="https://melhorenvio.com.br/"
      >
        Melhor Envio
      </v-btn>

      <v-btn
        text
        color="secondary"
        class="text-capitalize ml-10"
        href="https://melhorenvio.com.br/login"
      >
        Login
      </v-btn>

      <v-btn
        depressed
        color="secondary"
        small
        class="primary--text text-lowercase ml-10"
        href="https://melhorenvio.com.br/cadastre-se"
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
  methods: {
    getAssetsImage(path) {
      return path ? require(`@/assets/images/logos/${path}`) : ''
    },
  },
}
</script>
