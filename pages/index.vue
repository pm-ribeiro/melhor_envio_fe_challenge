<template>
  <!-- mobile -->
  <div
    v-if="$vuetify.breakpoint.mobile"
    class="text-center background-image py-10"
  >
    <h1 class="me-mobile-title mb-3 white--text">
      O serviço de rastreio <br />
      exclusivo do Melhor Envio.
    </h1>
    <p class="text-center white--text">
      Um serviço de rastreio de encomendas <br />
      totalmente gratuito
    </p>

    <v-btn depressed large color="secondary" class="primary--text mt-10">
      dê o primeiro passo
    </v-btn>

    <v-img
      class="mt-16"
      :src="require('@/assets/images/map_large.svg')"
      alt="Mapa"
      height="154"
      contain
    ></v-img>
  </div>

  <!-- desktop -->
  <v-row
    v-else
    align="center"
    justify="center"
    class="fill-height py-lg-16 background-image"
  >
    <v-col :cols="$vuetify.breakpoint.mobile ? 12 : 5">
      <v-row no-gutters align="center" justify="center">
        <div class="left-column__container">
          <p class="white--text me-title">
            O serviço de rastreio exclusivo do Melhor Envio
          </p>

          <div class="h-divider"></div>

          <p class="me-subtitle white--text mb-10">
            Um serviço de rastreio de encomendas totalmente gratuito.
          </p>

          <v-btn
            depressed
            color="secondary"
            class="primary--text"
            to="/detailed_tracking/1"
          >
            quero utilizar
          </v-btn>
          <!-- https://auth.melhorrastreio.com.br/login -->
        </div>
      </v-row>
    </v-col>
    <v-col :cols="$vuetify.breakpoint.mobile ? 12 : 5">
      <v-row no-gutters align="center" justify="center">
        <v-img
          :src="require('@/assets/images/map_large.svg')"
          alt="Mapa"
          height="308"
          contain
        ></v-img>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {},
  data: () => ({}),
}
</script>

<style lang="scss" scoped>
.left-column__container {
  max-width: 324px;
  display: flex;
  flex-flow: column;
  align-content: flex-start;
  justify-content: start;
  align-items: start;
}

.h-divider {
  margin: 20px 0;
  height: 4px;
  width: 72px;
  background-color: white;
}

.background-image {
  width: 100%;
  min-height: 84vh;
  background-image: url('../assets/images/mobile_bkg.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
