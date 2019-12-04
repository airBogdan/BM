<template lang="html">
    <div class="">
        <ul>
            <li>
                <div class="toggle-group">
                    <div class="switchBtn" @click="addDays" :class="{active:activ}">
                        <div class="innerCircle">
                        </div>
                    </div>
                    <span class="toggleText" @click="addDays" :class="{activeText: activ}">{{day.day}}</span>
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
    props:['day'],
    methods: {
        addDays() {
            this.activ=!this.activ
            var vm = this
            if (vm.$store.state.cal2AddedDays.indexOf(vm.day.indexD) >=0) {
                vm.$store.commit('removeDay', vm.$store.state.cal2AddedDays.indexOf(vm.day.indexD))
            }
            else {
                vm.$store.commit('addDay', vm.day.indexD)
            }

        }
    }
}
</script>

<style lang="css" scoped>

    a {
        text-decoration: none;
        color: black;
        font-size: 90%;
    }
    a:hover {
        color: rgb(22, 160, 133);
    }
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
