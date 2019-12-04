<template lang="html">
    <label class="filter">
        <input type="checkbox" @click="addType"> {{eventType}}
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
        addType() {
            this.$emit('addType', this.eventType)
        }
    },
    props: ['eventType']


}
</script>

<style lang="scss" scoped>

</style>
