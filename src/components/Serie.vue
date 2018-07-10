<template>
    <div>
        <router-link :to="{ name: 'detalhe', params: { id: item._id }}">
            <cartaz :url="item.cartaz"/>
        </router-link>
        <h2>{{item.titulo}}</h2>
    </div>
</template>

<script>
    import Cartaz from './Cartaz.vue'

    export default {
        props: ['item'],
        components: {
            Cartaz
        }
    }
</script>
