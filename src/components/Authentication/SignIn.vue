<template lang="html">
    <div id="authContainer">

        <NavbarComp >
            <router-link v-for="item in navbarItems" :key="item.name" :to="{ name: item.linkName}" >{{item.name}}</router-link>
        </NavbarComp>

        <form @submit.prevent='authenticate'>
            <p id="error">error: {{error}}</p>
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


            <div id="submitButton">
                <button type="submit" :disabled="$v.$invalid">Sign in</button>
            </div>

        </form>
    </div>
</template>

<script>
    import { required, email, minLength, sameAs, requiredUnless } from 'vuelidate/lib/validators'
    import NavbarComp from './../Navbar.vue'
    import firebase from 'firebase/app'
    export default {
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: '',
                terms: '',
                navbarItems: [
                    {name: 'Dashboard', linkName: 'CRUD'},
                    {name: 'Sign up', linkName: 'SignUp'}
                    // {name: 'SignIn', linkName: 'SignIn'}
                ]
            }
        },
        methods: {
            authenticate() {
                this.$store.dispatch(
                    this.auth=='Sign up' ? 'authenticate/signUp' : 'authenticate/signIn',
                    {email: this.email, password: this.password}
                )

                // var twitterProvider = new firebase.auth.TwitterAuthProvider();
                // var googleProvider = new firebase.auth.GoogleAuthProvider()
                // var facebookProvider = new firebase.auth.FacebookAuthProvider()
                //
                // firebase.auth().signInWithPopup(twitterProvider).then(function(result) {
                //     // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                //     // You can use these server side with your app's credentials to access the Twitter API.
                //     var token = result.credential.accessToken;
                //     var secret = result.credential.secret;
                //     // The signed-in user info.
                //     var user = result.user;
                //     console.log(user)
                //     // ...
                // }).catch(function(error) {
                //     // Handle Errors here.
                //     var errorCode = error.code;
                //     var errorMessage = error.message;
                //     // The email of the user's account used.
                //     var email = error.email;
                //     // The firebase.auth.AuthCredential type that was used.
                //     var credential = error.credential;
                //     // ...
                // });

                // firebase.auth().signInWithPopup(googleProvider).then(function(result) {
                //   // This gives you a Google Access Token. You can use it to access the Google API.
                //   var token = result.credential.accessToken;
                //   // The signed-in user info.
                //   var user = result.user;
                //   // ...
                // }).catch(function(error) {
                //   // Handle Errors here.
                //   var errorCode = error.code;
                //   var errorMessage = error.message;
                //   // The email of the user's account used.
                //   var email = error.email;
                //   // The firebase.auth.AuthCredential type that was used.
                //   var credential = error.credential;
                //   // ...
                // });

                // firebase.auth().signInWithPopup(provider)
                // .then(function(result) {
                //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                //     var token = result.credential.accessToken;
                //     // The signed-in user info.
                //     var user = result.user;
                //     console.log()
                // })
                // .catch(e => console.log("error:", e))
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
                email,
                // unique: val => {
                //     return false
                // }
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
            }
        },
        components: {
            NavbarComp
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_variables.scss';
    @import '~styles/_mixins.scss';
    #authContainer {

    }
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
