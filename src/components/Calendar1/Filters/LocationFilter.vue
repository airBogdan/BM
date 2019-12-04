<template lang="html">
    <label class="filter">
        <input type="checkbox" @click="addLocation"> {{eventLocation}}
    </label>
</template>

<script>
    import Events from './../../../Events.json'
    export default {
        data() {
            return {
                events: Events
            }
        },
        methods: {
            addLocation() {
                this.$emit('addLocation', this.eventLocation)
            }
        },
        props: ['eventLocation']
    }
</script>

<style lang="css">
</style>
