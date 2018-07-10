import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        detalhe: {},
        listagem: []
    },
    mutations: {
        setListagem(state, listagem) {
            state.listagem.splice(0)
            Array.prototype.push.apply(state.listagem, listagem)
        },
        setDetalhe(state, detalhe) {
            state.detalhe = detalhe
        }
    },
    actions: {
        async buscarListagem({commit}) {
            const {data} = await axios.get('/series')
            commit('setListagem', data)
        },
        async buscarDetalhe({commit}, id) {
            const {data} = await axios.get(`/series/${id}`)
            commit('setDetalhe', data)
        }
    }
})
