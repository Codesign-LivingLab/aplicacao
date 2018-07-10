<template>
    <div>
        <div v-for="item in items">
            <serie :item="item"/>
        </div>
    </div>
</template>

<script>
    import Serie from './Serie'

    export default {
        props: ['items'],
        components: {
            Serie
        }
    }
</script>
