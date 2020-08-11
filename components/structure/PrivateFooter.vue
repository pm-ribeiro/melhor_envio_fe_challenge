<template>
  <v-footer padless color="primary">
    <v-col cols="12">
      <v-row no-gutters align="start" justify="space-around" class="py-10">
        <v-col :cols="mobile ? '12' : '4'" class="pa-3">
          <v-row no-gutters align="start" justify="center">
            <div class="d-flex flex-column align-start private-footer__links">
              <a href="#" class="secondary--text">melhor rastreio</a>
              <a href="#" class="secondary--text">página inicial</a>
              <a href="#" class="secondary--text">suporte</a>
            </div>
          </v-row>
        </v-col>
        <v-col :cols="mobile ? '12' : '4'" class="pa-3">
          <v-row no-gutters align="start" justify="center">
            <div class="d-flex flex-column align-center">
              <span class="secondary--text mb-2">feito com &hearts; por</span>

              <img
                :src="getAssetsImage('melhor_envio')"
                alt="Melhor Envio"
                height="55"
              />
            </div>
          </v-row>
        </v-col>
        <v-col :cols="mobile ? '12' : '4'" class="pa-3">
          <v-row no-gutters align="start" justify="center">
            <div class="d-flex flex-column align-start private-footer__links">
              <p class="secondary--text ma-0 mb-1 font-weight-bold">
                Melhor Rastreio 2018 <br />
                Todos os direitos reservados.
              </p>
              <a href="#" class="secondary--text">Termos de uso </a>
              <div class="d-flex align-start mt-3">
                <v-icon color="secondary" class="mr-3">mdi-facebook</v-icon>
                <v-icon color="secondary">mdi-twitter</v-icon>
              </div>
            </div>
          </v-row>
        </v-col>
      </v-row>
      <!-- credits -->
      <v-row no-gutters align="center" justify="center" class="secondary--text">
        <div style="width: 24px;"></div>
        <v-spacer></v-spacer>
        <span class="mr-2">
          &copy; {{ new Date().getFullYear() }}
          - Patrícia Moreno Ribeiro |
        </span>

        <v-btn
          x-small
          icon
          color="secondary"
          href="https://github.com/pm-ribeiro"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>

        <v-btn
          x-small
          icon
          color="secondary"
          href="https://github.com/pm-ribeiro"
          class="mx-2"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          text
          color="secondary"
          icon
          small
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <v-icon>
            {{ $vuetify.theme.dark ? 'mdi-brightness-2' : 'mdi-brightness-7' }}
          </v-icon>
        </v-btn>
      </v-row>
    </v-col>
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
      return path && this.$vuetify.theme.dark
        ? require(`@/assets/images/private_footer/${path}_dark.svg`)
        : require(`@/assets/images/private_footer/${path}.svg`)
    },
  },
}
</script>

<style lang="scss">
.private-footer {
  &__links {
    a {
      // color: var(--secondary-color) !important;
      text-decoration: none;
    }
  }
}
</style>
