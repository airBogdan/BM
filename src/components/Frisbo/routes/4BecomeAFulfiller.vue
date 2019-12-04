<template lang="html">
    <div>
        <h1>Devino fulfiller</h1>
        <modal-menu></modal-menu>
    </div>
</template>

<script>
import ModalMenu from './../comp/0ModalMenu.vue'
export default {
    components: {
        ModalMenu,
    }
}
</script>

<style lang="css" scoped>
div {
    background: linear-gradient(270deg, #34dd79 0, #34dd79 51%, #34dd79 0, #fff 0, #fff);
    height: 50vh;
}
h1 {
    padding-top: 120px;
}
</style>
