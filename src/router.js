import Vue from 'vue'
import Router from 'vue-router'
import Listagem from './views/Listagem.vue'
import Detalhe from './views/Detalhe.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            name: 'listagem',
            path: '/',
            component: Listagem
        },
        {
            name: 'detalhe',
            path: '/detalhe/:id',
            component: Detalhe
        }
    ]
})
