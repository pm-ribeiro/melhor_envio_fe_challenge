<template>
  <v-row no-gutters align="start" justify="center" class="fill-height">
    <v-col v-if="pageLoaded" cols="6" class="pt-16">
      <h1>Informações de Rastreio</h1>
      <v-row no-gutters align="center" justify="start" class="mt-6">
        <div
          v-for="(item, index) in defaultStatus"
          :key="index"
          class="d-flex justify-start align-start"
        >
          <div class="d-flex flex-column align-center justify-center">
            <v-img
              :src="require(`@/assets/images/icons/${item.iconPath}`)"
              height="36"
              contain
            />
            <h4 class="mt-3">{{ item.text }}</h4>
            <h6 class="mt-1">{{ item.completeDate }}</h6>
          </div>
          <div
            v-if="index < defaultStatus.length - 1"
            class="progress-divider"
          ></div>
        </div>
      </v-row>
      {{ orderData.events }}
      <v-data-table
        :headers="headers"
        :items="orderData.events"
        hide-default-footer
        class="elevation-1"
      >
        <template v-slot:item.status="{ item }">
          <div class="d-flex align-center justify-start py-3">
            <img
              :src="changeIcons(item.status)"
              height="38"
              width="38"
              :color="$dicts.iconTableColor[item.status]"
            />
            <div class="d-flex flex-column align-start justify-start ml-6">
              {{ $dicts.orderStatusTable[item.status] }} <br />
              {{ item.created_at }}
            </div>
          </div>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      pageLoaded: false,
      orderData: {},
      defaultStatus: [
        {
          iconPath: 'coletado.svg',
          text: 'Coleta',
        },
        {
          iconPath: 'postado.svg',
          text: 'Postado',
        },
        {
          iconPath: 'encaminhado.svg',
          text: 'Encaminhado',
        },
        {
          iconPath: 'saiu_entrega.svg',
          text: 'Saiu para entrega',
        },
        {
          iconPath: 'entregue.svg',
          text: 'Entregue',
        },
      ],
      headers: [
        {
          text: 'Status',
          align: 'start',
          sortable: false,
          value: 'status',
        },
        { text: 'Movimentação', value: 'location', sortable: false },
      ],
    }
  },
  beforeMount() {
    this.fetchOrderData()
    this.pageLoaded = true
  },
  methods: {
    async fetchOrderData() {
      try {
        const orderData = await this.$axios.get(
          'https://demo5836336.mockable.io/tracking%3Fsearch=PM371835103BR'
        )
        this.orderData = orderData.data.data
        console.log(this.orderData)
      } catch (error) {
        console.log(error)
      }
    },
    changeIcons(path) {
      return path ? require(`@/assets/images/icons/${path}.svg`) : ''
    },
  },
}
</script>

<style lang="scss" scoped>
.progress-divider {
  border: 2px solid #2bc866;
  width: 140px;
  margin-top: 18px;
}
</style>
