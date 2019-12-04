<template lang="html">
    <div class="container" >
        <!-- <div v-if="password"> -->
        <!-- @dragenter.prevent @dragover.prevent @drop.prevent='dropItem($event)' -->
        <!-- draggable="true" @dragstart="dragStart($event, major.key)" @drag='drag($event)' -->
        <p><strong>Todo</strong> </p>
        <ol>
            <li v-for='major in todoMajore' :key="major.key">
                <div class="">
                    {{major.todo}}
                    <span class="delete" @click="del(major.key, 'major')">X</span>
                </div>
            </li>
        </ol>

        <p><strong>Idei</strong></p>
        <ol>
            <li v-for='minor in todoMinore' :key="minor.key">
                {{minor.todo}}
                <span class="delete" @click="del(minor.key, 'minor')">X</span>
            </li>
        </ol>

        <form @submit.prevent="addTodo">
            <textarea name="name" rows="8" cols="80" v-model="todo"></textarea>

            <label for="check"><input type="checkbox" v-model='major' id='check'>Todo?</label>
            <button>Add</button>
        </form>
    </div>

</template>

<script>
    import axios from 'axios'
    import firebase from 'firebase/app'
    export default {
        data() {
            return {
                todoMinore: [],
                todoMajore: [],
                todo: null,
                major: false,
                keyToModif: null,
            }
        },
        methods: {
            // dragStart(ev, key) {
            //     // console.log(ev.originalTarget.innerText);
            //     dragon = true
            //     const dt = ev.dataTransfer
            //     dt.setData('text/plain', ev.originalTarget.innerText)
            //     dt.effectAllowed = 'move'
            //     this.keyToModif = key
            // },
            // dropItem(ev) {
            //     const dt = ev.dataTransfer
            //     var data = dt.getData('text/plain')
            //     console.log(ev.target.innerText);
            // },
            // drag(ev) {
            //     console.log(ev)
            // },
            addTodo() {
                this.$store.dispatch('todoDB/addTodo', {todo: this.todo, major: this.major})
                .then(() => {
                    this.major ? this.todoMajore.push(this.lastKeyAdded)
                                : this.todoMinore.push(this.lastKeyAdded)
                                this.todo = ''
                })
            },
            del(key, major) {
                this.$store.dispatch('todoDB/deleteTodo', {"key": key, "major": major})
                if (major=="major") {
                    let objToDel = this.todoMajore.find(o=> o.key == key)
                    let indx = this.todoMajore.indexOf(objToDel)
                    this.todoMajore.splice(indx, 1)
                }
                else {
                    let objToDel = this.todoMinore.find(o=> o.key == key)
                    let indx = this.todoMinore.indexOf(objToDel)
                    this.todoMinore.splice(indx, 1)
                }
            }
        },
        created() {
            // this.$store.dispatch('todoDB/loadTodos', "majore")
            // this.$store.dispatch('todoDB/loadTodos', "minore")
            firebase.database().ref("majore").once('value')
                .then(data => {
                    const obj = data.val()
                    for (let key in obj) {
                        this.todoMajore.push({todo: obj[key].todo, key: key})
                    }
                })
                .catch()
            firebase.database().ref("minore").once('value')
                .then(data => {
                    const obj = data.val()
                    for (let key in obj) {
                        this.todoMinore.push({todo: obj[key].todo, key: key})
                    }
                })
                .catch()
        },
        computed: {
            lastKeyAdded () {
                return this.$store.getters['todoDB/lastEntry']
            },
            password () {
                // return true
                if (this.pass=="Rayban") return true
                return false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .drop {
        height: 100px;
        width: 100px;
        box-sizing: border-box;
        &:-moz-drag-over {
             border: 1px solid black;
        }
    }
    .container {
        width: 90%;
        margin: auto;
        height: 120vh;
    }

    li {
        margin: 7px 0 7px 0;
        max-width: 500px;
        cursor: default;
        &:hover {
            color: red;
        }
        div {
            justify-content: space-between;
            display: flex;
        }
        .delete {
            font-size: 18px;
            cursor: pointer;
            // margin-left: max;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        textarea {
            max-width: 500px;
            width: 100%;
        }
        button {
            // margin-top: 15px;
            display: block;
            width: 100px;
            height: 30px;
        }
        input[type='checkbox'] {
            margin: 15px 10px 15px 0;
            height: 20px;
            width: 20px;
        }
    }
</style>
