<template>
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">ASSISTIR AO TRAILER</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" :src="embedUrl" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'

    export default {
        props: ['url'],
        computed: {
            embedUrl() {
                const videoId = this.getVideoId(this.url)
                return `https://www.youtube.com/embed/${videoId}`
            }
        },
        methods: {
            getVideoId(url) {
                return _.last(_.split(url, '/'))
            }
        }
    }
</script>
