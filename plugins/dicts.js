export const dicts = {
  orderStatusTable: {
    encaminhado: 'Objeto encaminhado',
    postado: 'Objeto postado',
    coletado: 'Coleta realizada',
  },
  iconTableColor: {
    encaminhado: '#3598DC',
    postado: '#FFC917',
    coletado: '#3B3F51',
  },
}

export default function (_, inject) {
  inject('dicts', dicts)
}
