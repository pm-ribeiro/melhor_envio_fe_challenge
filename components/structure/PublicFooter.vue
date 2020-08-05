<template>
  <v-footer absolute app padless color="secondary">
    <v-card flat tile width="100%">
      <v-card-text class="py-xl-10">
        <v-row no-gutters align="center" justify="center">
          <v-col
            v-if="!mobile"
            cols="6"
            class="d-flex align-center justify-center"
          >
            <span>sic mundus creatus est.</span>
          </v-col>
          <v-col :cols="mobile ? '12' : '6'">
            <v-row no-gutters align="center" justify="center">
              <div v-for="(logo, index) in logos" :key="index" class="ma-8">
                <v-img
                  :src="getAssetsImage(logo)"
                  alt="Melhor Envio"
                  height="40"
                  contain
                ></v-img>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <v-row no-gutters align="center" justify="center">
          <div style="width: 24px;"></div>
          <v-spacer></v-spacer>
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
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            icon
            small
            @click="$vuetify.theme.dark = !$vuetify.theme.dark"
          >
            <v-icon>
              {{
                $vuetify.theme.dark ? 'mdi-brightness-2' : 'mdi-brightness-7'
              }}
            </v-icon>
          </v-btn>
        </v-row>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      logos: ['correios.svg', 'jadlog.svg', 'via_brasil.svg', 'latam.svg'],
    }
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.mobile
    },
  },
  methods: {
    getAssetsImage(path) {
      return path ? require(`@/assets/images/logos/${path}`) : ''
    },
  },
}
</script>
