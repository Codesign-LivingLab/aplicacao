<template>
    <div>
        <h1>SERIES DE TV</h1>
        <series :items="listagem"/>
    </div>
</template>

<script>
    import store from '../store'
    import Series from '../components/Series.vue'

    export default {
        components: {
            Series
        },
        beforeRouteEnter(to, from, next) {
            store.dispatch('buscarListagem').then(res => next())
        },
        data() {
            return {
                listagem: this.$store.state.listagem
            }
        }
    }
</script>
