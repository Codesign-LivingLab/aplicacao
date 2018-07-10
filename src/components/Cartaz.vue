<template>
    <div class="hold-poster" :style="style"></div>
</template>

<script>
    export default {
        props: ['url'],
        computed: {
            style() {
                return {
                    'background-image': `url(${this.url})`
                }
            }
        }
    }
</script>
