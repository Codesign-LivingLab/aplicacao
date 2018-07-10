import moment from 'moment'
import _ from 'lodash'
import 'moment/locale/pt-br'

export default {
    install(Vue) {
        moment.locale('pt-br')
        Vue.filter('data', (val) => moment(val).format('DD/MMMM/YYYY'))
        Vue.filter('lista', (val) => _.join(val, ', '))
        Vue.prototype.$moment = moment
    }
}
