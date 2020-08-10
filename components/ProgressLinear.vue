<template>
  <div>
    <v-row v-if="events" no-gutters align="start" justify="space-between">
      <!-- coletado -->
      <img
        :src="
          coletado && coletado.created_at
            ? changeIcons('coletado_verde')
            : changeIcons('coletado_cinza')
        "
        width="36"
        height="36"
        class="ml-9"
      />

      <v-divider
        class="progress-divider"
        :class="
          postado ? 'progress-divider--complete' : 'progress-divider--disable '
        "
      ></v-divider>

      <!-- postado -->
      <img
        :src="
          postado && postado.created_at
            ? changeIcons('postado_verde')
            : changeIcons('postado_cinza')
        "
        height="36"
        width="36"
      />

      <v-divider
        class="progress-divider"
        :class="
          encaminhado
            ? 'progress-divider--complete'
            : 'progress-divider--disable '
        "
      ></v-divider>

      <!-- encaminhado -->
      <img
        :src="
          encaminhado.created_at
            ? changeIcons('encaminhado_verde')
            : changeIcons('encaminhado_cinza')
        "
        height="36"
        width="36"
      />

      <v-divider
        class="progress-divider"
        :class="
          saiu_entrega
            ? 'progress-divider--complete'
            : 'progress-divider--disable '
        "
      ></v-divider>

      <!-- saiu para entrega -->
      <img
        :src="
          saiu_entrega && saiu_entrega.created_at
            ? changeIcons('saiu_entrega_verde')
            : changeIcons('saiu_entrega_cinza')
        "
        height="36"
        width="36"
      />

      <v-divider
        class="progress-divider"
        :class="
          entregue ? 'progress-divider--complete' : 'progress-divider--disable '
        "
      ></v-divider>

      <!-- entregue -->
      <img
        :src="
          entregue && entregue.created_at
            ? changeIcons('entregue_verde')
            : changeIcons('entregue_cinza')
        "
        height="36"
        width="36"
        class="mr-4"
      />
    </v-row>
    <v-row v-if="events" no-gutters align="start" justify="space-between">
      <!-- coletado -->
      <div class="d-flex flex-column align-center justify-center">
        <h4 class="mt-3">Coletado</h4>
        <h6 class="mt-1">
          {{ coletado ? coletado.created_at : '' }}
        </h6>
      </div>

      <!-- postado -->
      <div class="d-flex flex-column align-center justify-center">
        <h4 class="mt-3">Postado</h4>
        <h6 v-if="postado" class="mt-1">
          {{ postado ? postado.created_at : '' }}
        </h6>
      </div>

      <!-- encaminhado -->
      <div class="d-flex flex-column align-center justify-center">
        <h4 class="mt-3">Encaminhado</h4>
        <h6 class="mt-1">
          {{ encaminhado ? encaminhado.created_at : '' }}
        </h6>
      </div>

      <!-- saiu para entrega -->
      <div class="d-flex flex-column align-center justify-center">
        <h4 class="mt-3">Saiu para entrega</h4>
        <h6 class="mt-1">
          {{ saiu_entrega ? saiu_entrega.created_at : '' }}
        </h6>
      </div>

      <!-- entregue -->
      <div class="d-flex flex-column align-center justify-center">
        <h4 class="mt-3">Entregue</h4>
        <h6 class="mt-1">
          {{ entregue ? entregue.created_at : '' }}
        </h6>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      coletado: {},
      postado: {},
      encaminhado: {},
      saiu_entrega: {},
      entregue: {},
    }
  },
  beforeMount() {
    this.currentEvents()
  },
  methods: {
    changeIcons(path) {
      return path
        ? require(`@/assets/images/icons/progress_bar/${path}.svg`)
        : ''
    },
    currentEvents() {
      this.coletado = this.events.find((event) => event.status === 'coletado')
      this.postado = this.events.find((event) => event.status === 'postado')
      this.encaminhado = this.events.find(
        (event) => event.status === 'encaminhado'
      )
      this.saiu_entrega = this.events.find(
        (event) => event.status === 'saiu_entrega'
      )
      this.entregue = this.events.find((event) => event.status === 'entregue')
    },
  },
}
</script>

<style lang="scss" scoped>
.progress-divider {
  margin-top: 16px;
  &--complete {
    border: 2px solid #2bc866;
  }
  &--disable {
    border: 2px solid #c8cdda;
  }
}
</style>
