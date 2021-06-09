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
        <h4 class="mt-3" :class="coletado ? 'primary--text' : ''">Coletado</h4>
        <h6 class="mt-1">
          {{ currentStatusText(coletado) }}
        </h6>
      </div>

      <!-- postado -->
      <div class="d-flex flex-column align-center justify-center">
        <h4 class="mt-3" :class="postado ? 'primary--text' : ''">Postado</h4>
        <h6 v-if="postado" class="mt-1">
          {{ currentStatusText(postado) }}
        </h6>
      </div>

      <!-- encaminhado -->
      <div class="d-flex flex-column align-center justify-center">
        <h4 class="mt-3" :class="encaminhado ? 'primary--text' : ''">
          Encaminhado
        </h4>
        <h6 class="mt-1">
          {{ currentStatusText(encaminhado) }}
        </h6>
      </div>

      <!-- saiu para entrega -->
      <div class="d-flex flex-column align-center justify-center">
        <h4 class="mt-3" :class="saiu_entrega ? 'primary--text' : ''">
          Saiu para entrega
        </h4>
        <h6 class="mt-1">
          {{ currentStatusText(saiu_entrega) }}
        </h6>
      </div>

      <!-- entregue -->
      <div class="d-flex flex-column align-center justify-center">
        <h4 class="mt-3" :class="entregue ? 'primary--text' : ''">Entregue</h4>
        <h6 class="mt-1">
          {{ currentStatusText(entregue) }}
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
    currentStatus: {
      type: String,
      default: '',
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
      console.table(this.events)

      this.events.forEach((item) => {
        switch (item.status) {
          case 'coletado':
            this.coletado = item
            break
          case 'postado':
            this.postado = item
            break
          case 'encaminhado':
            this.encaminhado = item
            break
          case 'saiu_entrega':
            this.saiu_entrega = item
            break
          case 'entregue':
            this.entregue = item
            break
        }
      })
    },
    currentStatusText(event) {
      if (!event) {
        return ''
      }

      if (event.status === this.currentStatus) {
        return 'Atualmente'
      }

      return event.created_at
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
