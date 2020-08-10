<template>
  <v-footer padless color="primary">
    <v-row no-gutters align="start" justify="space-around" class="py-10">
      <v-col :cols="mobile ? '12' : '4'">
        <v-row no-gutters align="start" justify="center">
          <div class="d-flex flex-column align-start private-footer__links">
            <a href="#">melhor rastreio</a>
            <a href="#">página inicial</a>
            <a href="#">suporte</a>
          </div>
        </v-row>
      </v-col>
      <v-col :cols="mobile ? '12' : '4'">
        <v-row no-gutters align="start" justify="center">
          <div class="d-flex flex-column align-center">
            <span class="white--text mb-2">feito com &hearts; por</span>

            <img
              :src="getAssetsImage('melhor_envio.svg')"
              alt="Melhor Envio"
              height="55"
            />
          </div>
        </v-row>
      </v-col>
      <v-col :cols="mobile ? '12' : '4'">
        <v-row no-gutters align="start" justify="center">
          <div class="d-flex flex-column align-start private-footer__links">
            <p class="white--text ma-0 mb-1 font-weight-bold">
              Melhor Rastreio 2018 <br />
              Todos os direitos reservados.
            </p>
            <a href="#">Termos de uso </a>
            <div class="d-flex align-start mt-3">
              <v-icon color="white" class="mr-3">mdi-facebook</v-icon>
              <v-icon color="white">mdi-twitter</v-icon>
            </div>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.mobile
    },
  },
  methods: {
    getAssetsImage(path) {
      return path ? require(`@/assets/images/private_footer/${path}`) : ''
    },
  },
}
</script>

<style lang="scss">
.private-footer {
  &__links {
    a {
      color: white !important;
      text-decoration: none;
    }
  }
}
</style>
