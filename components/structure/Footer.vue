<template>
  <v-footer fixed app padless color="secondary">
    <div class="footer__container">
      <v-row no-gutters align="center" justify="space-between">
        <v-col cols="6">
          <span>Uma frase grande para companhar essa seção</span>
        </v-col>
        <v-col cols="6">
          <v-img
            v-for="(logo, index) in logos"
            :key="index"
            :src="getAssetsImage(logo)"
            alt="Melhor Envio"
            width="120"
            contain
          ></v-img>
        </v-col>
      </v-row>

      <v-row no-gutters align="center" justify="center">
        <span class="mr-2">
          &copy; {{ new Date().getFullYear() }}
          - Patrícia Moreno Ribeiro |
        </span>

        <v-btn
          x-small
          icon
          color="primary"
          href="https://github.com/pm-ribeiro"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>

        <v-btn
          x-small
          icon
          color="primary"
          href="https://github.com/pm-ribeiro"
          class="mx-2"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>

        <v-btn
          text
          color="primary"
          icon
          small
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <v-icon>
            {{ $vuetify.theme.dark ? 'mdi-brightness-2' : 'mdi-brightness-7' }}
          </v-icon>
        </v-btn>
      </v-row>
    </div>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      logos: ['correios.svg'],
    }
  },
  methods: {
    getAssetsImage(path) {
      return path ? require(`@/assets/images/logos/${path}`) : ''
    },
  },
}
</script>

<style lang="scss" scoped>
.footer__container {
  min-height: 162px;
  border: 1px solid red;
  width: 100%;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  align-content: space-around;
}
</style>
