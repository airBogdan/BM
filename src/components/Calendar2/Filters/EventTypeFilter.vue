<template lang="html">
    <div class="">
        <ul>
            <li>
                <div class="toggle-group">
                    <div class="switchBtn" @click="addEventType" :class="{active:activ}">
                        <div class="innerCircle">
                        </div>
                    </div>
                    <span class="toggleText" @click="addEventType" :class="{activeText: activ}">{{eventType}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return{
            activ: false
        }
    },
    props: ['eventType'],
    methods: {
        addEventType() {
            this.activ =! this.activ
            var vm = this
            if (vm.$store.state.cal2AddedEventType.indexOf(vm.eventType)>=0) {
                vm.$store.commit('removeEventType', vm.eventType)
            }
            else {
                vm.$store.commit('addEventType', vm.eventType)
            }
        }
    }
}
</script>

<style lang="css" scoped>
    ul {
        margin-bottom: 1px;
        list-style-type:none;
    }
.activeText {
    color: #16a085;
}
.toggleText {
    cursor: pointer;
    font-size: 94%;
}
.toggleText:hover {
    color: #16a085;
}
.innerCircle {
    height: 11px;
    width: 11px;
    background: white;
    border-radius: 50%;
    position: relative;
    top: 1px;
    left: 2px;
    transition: all 300ms ease-in-out;
}
.switchBtn {
    cursor: pointer;
    height: 13px;
    width:23px;
    background: #ccc;
    display: inline-block;
    border-radius: 30px;
    transition: all 300ms ease-in-out;
}
.switchBtn.active {
    background: #16a085;
}
.switchBtn.active > .innerCircle {
    margin-left: 9px;
}
</style>
