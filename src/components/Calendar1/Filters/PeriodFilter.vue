<template lang="html">
    <label class="filter">
        <input type="checkbox" @click="addPeriod"> {{tod}}
    </label>
</template>

<script>
    export default {
        methods: {
            addPeriod() {
                this.$emit('addPeriod', this.tod)
            }
        },
        props: ['tod']
    }
</script>

<style lang="css">
</style>
