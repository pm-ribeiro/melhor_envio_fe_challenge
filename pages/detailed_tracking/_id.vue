<template>
  <v-row no-gutters align="start" justify="center" class="fill-height">
    <v-col v-if="pageLoaded" cols="11" xl="6" lg="10" class="py-16">
      <h1 class="mb-8">Informações de Rastreio</h1>

      <ProgressLinear
        v-if="!mobile"
        :events="orderData.events"
        :current-status="orderData.status"
      ></ProgressLinear>

      <ProgressTable :events="orderData.events" class="mt-10"></ProgressTable>
    </v-col>
    <div v-else class="py-16 text-center">
      <h3 class="mb-6">Carregando dados ...</h3>
      <v-progress-circular
        indeterminate
        color="primary"
        size="48"
      ></v-progress-circular>
    </div>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      pageLoaded: false,
      orderData: {},
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
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.mobile
    },
  },
  beforeMount() {
    this.fetchOrderData()
  },
  methods: {
    async fetchOrderData() {
      try {
        const { data: order } = await this.$axios.get(
          'https://demo5836336.mockable.io/tracking%3Fsearch=PM371835103BR'
        )

        this.orderData = order.data
        this.$router.push(this.orderData.tracking)
        this.pageLoaded = true
      } catch (error) {
        console.error(error)
      }
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
