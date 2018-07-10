<template>
    <div class="container content">
        <div class="row no-gutters">
            <div class="col-lg-7">
                <div class="hold-categoria">SÉRIES TV</div>
                <div class="hold-title-filme">{{serie.titulo}}</div>
                <div class="hold-infos-series">{{serie.dataEstreia | data}} | TEMPORADAS: {{serie.temporadas}}</div>
                <p>
                    {{serie.sinopse}}
                    <br>
                    <strong>Estrelando: {{serie.elenco | lista}}</strong>
                </p>
                <button class="assista" data-toggle="modal" data-target="#exampleModalCenter">ASSISTA O TRAILER</button>
            </div>
            <div class="col d-none d-sm-block">
                <cartaz :url="serie.cartaz"/>
            </div>
            <trailer :url="serie.trailer"/>
        </div>
    </div>
</template>
<script>
    import store from '../store'
    import Trailer from '../components/Trailer.vue'
    import Cartaz from '../components/Cartaz.vue'

    export default {
        components: {
            Trailer,
            Cartaz
        },
        beforeRouteEnter(to, from, next) {
            store.dispatch('buscarDetalhe', to.params.id).then(res => next())
        },
        data() {
            return {
                serie: this.$store.state.detalhe
            }
        }
    }
</script>
