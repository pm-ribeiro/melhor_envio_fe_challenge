<template>
  <v-data-table
    :headers="headers"
    :items="events"
    hide-default-footer
    class="elevation-1"
  >
    <template v-slot:item.status="{ item }">
      <div class="d-flex align-center justify-start py-3">
        <img :src="changeIcons(item.status)" height="38" width="38" />
        <div class="d-flex flex-column align-start justify-start ml-8">
          {{ $dicts.orderStatusTable[item.status] }} <br />
          {{ item.created_at }}
        </div>
      </div>
    </template>

    <template v-slot:item.location="{ item }">
      <span class="mr-2">{{ locationText(item.status) }}</span>
      {{ item.location }}
    </template>
  </v-data-table>
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
  methods: {
    changeIcons(path) {
      return path
        ? require(`@/assets/images/icons/progress_table/${path}.svg`)
        : ''
    },
    locationText(status) {
      if (status === 'encaminhado') {
        return 'para'
      } else if (status === 'postado') {
        return 'em'
      } else if (status === 'coletado') {
        return 'por'
      }
    },
  },
}
</script>
