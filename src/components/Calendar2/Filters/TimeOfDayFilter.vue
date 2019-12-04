<template lang="html">
    <div class="">

        <ul>
            <li>
                <div class="toggle-group">
                    <div class="switchBtn" @click="addTod" :class="{active:activ}">
                        <div class="innerCircle">
                        </div>
                    </div>
                    <span class="toggleText" @click="addTod" :class="{activeText: activ}">{{todf.tod}}</span>
                </div>

            </li>
        </ul>
    </div>
</template>S

<script>
export default {
    data() {
        return {
            activ: false
        }
    },
    props: ['todf'],
    methods: {
        addTod() {
            var vm = this
            vm.activ =! vm.activ
            if (vm.$store.state.cal2AddedTod.indexOf(vm.todf.hours) >=0 ) {
                vm.$store.commit('removeTod', vm.todf.hours)
            }
            else {
                vm.$store.commit('addTod', vm.todf.hours)
            }
        }
    }
}
</script>

<style lang="css" scoped>
    .toggle-group {

    }
a {
    text-decoration: none;
    color: black;
    font-size: 90%;
}
a:hover {
    color: rgb(22, 160, 133);
}
ul {
    list-style-type:none;
    margin-bottom: 1px;
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
