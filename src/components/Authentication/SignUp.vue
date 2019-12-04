<template lang="html">
    <div id="authContainer">

        <NavbarComp >
            <router-link v-for="item in navbarItems" :key="item.name" :to="{ name: item.linkName}" >{{item.name}}</router-link>
        </NavbarComp>

        <form @submit.prevent='authenticate'>
            <p id="error"> error: {{error}}</p>
            <div class="inputField" :class="{invalidInput: $v.email.$error}">
                <label for="email">Email</label>
                <input type="email" name='email' id="email" v-model="email" @blur="$v.email.$touch()">
            </div>
            <p v-if="($v.email.$dirty && $v.email.$invalid)">Please provide a valid email address</p>

            <div class="inputField" :class="{invalidInput: $v.password.$error}">
                <label for="password">Password</label>
                <input type="password" name='password' id='password' v-model='password' @blur="$v.password.$touch()">
            </div>
            <p v-if="($v.password.$dirty && $v.password.$invalid)">The password must be at least 6 characters</p>

            <div class="inputField" :class="{invalidInput: $v.confirmPassword.$error}">
                <label for="password">Confirm password</label>
                <input type="password" name='confirmPassword' id='confirmPassword' v-model='confirmPassword' @blur="$v.confirmPassword.$touch()">
            </div>
            <p v-if="($v.confirmPassword.$dirty && $v.confirmPassword.$invalid)">The passwords must match</p>
            <!-- <p>{{auth}}</p> -->

            <!-- <div class="inputField" :class="{invalid: !$v.terms.$model}">
                <input type="checkbox" id="terms" v-model="terms" @change="$v.terms.$touch()">
                <label for="terms">Accept the terms of use (just example)</label>
            </div> -->

            <div id="submitButton">
                <button type="submit" >Sign up</button>
            </div>
        </form>
    </div>
</template>

<script>
    import { required, email, minLength, sameAs, requiredUnless } from 'vuelidate/lib/validators'
    import NavbarComp from './../Navbar.vue'
    export default {
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: '',
                // terms: '',
                navbarItems: [
                    {name: 'Dashboard', linkName: 'CRUD'},
                    {name: 'Sign in', linkName: 'SignIn'}
                ]
            }
        },
        methods: {
            authenticate() {
                this.$store.dispatch('authenticate/signUp', {email: this.email, password: this.password})
            }
        },
        watch: {
            user(value) {
                if (value !==null && value!== undefined) {
                    this.$router.push('/CRUD')
                }
            }
        },
        computed: {
            user() {
                return this.$store.getters['authenticate/user']
            },
            error() {
                return this.$store.getters['authenticate/error']
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                required,
                minLen: minLength(6)
            },
            confirmPassword: {
                // sameAs: sameAs('password')
                sameAs: sameAs(vm => {
                    return vm.password
                })
            },
            // terms: {
            //     required: requiredUnless( vm => {
            //         return vm.animal == 'orca'
            //     })
            // }
        },
        components: {
            NavbarComp
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_variables.scss';
    @import '~styles/_mixins.scss';
    // #authContainer {

    // }
    form {
        display: flex;
        flex-direction: column;
        width: 450px;
        margin: 50px auto;
        .inputField {
            display: flex;
            justify-content: space-between;
            line-height: 22px;
            font-family: 'Zilla Slab', serif;
            margin: 8px 0;
            label {
                font-size:19px;
                margin: 5px 0;
            }
            input {
                border: 2px solid black;
                padding: 0 10px 0 10px;
                font-size:18px;
                width: 250px;
                font-family: 'Zilla Slab', serif;
            }
        }
        #error {
            margin: 0;
            font-size: 12px;
            color: red;
        }
        // .invalidInput input {
        //     border: 1px solid red;
        //     background-color: #ffc9aa;
        // }
        // .invalidInput label {
        //     color: red;
        // }
        #submitButton {
            text-align: center;
            button {
            @include CRUDbutton
            margin-top: 16px;
            // display: flex;
            // justify-content: space-around;
            }
        }
    }

</style>
