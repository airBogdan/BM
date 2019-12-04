<template lang="html">
    <div id="viewPostContainer">
        <NavbarComp>
            <router-link :to="{ name: 'CRUD'}">Dasboard</router-link>
            <button v-if="user" id="logout" @click='logout'>Logout</button>
        </NavbarComp>
        <!-- <div class="loading">

        </div> -->
        <div id="content">
            <div id="title">
                <p>{{viewPost.title}}</p>
            </div>
            <div id="image">
                <img :src="viewPost.image">
            </div>
            <div id="description">
                <p>{{viewPost.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import NavbarComp from './../Navbar.vue'
    import firebase from 'firebase/app'
    export default {
        props: {
            id: String,
            post: Object,
            // uid: String
        },
        components: {
            NavbarComp
        },
        computed: {
            user() {
                return this.$store.getters['authenticate/user']
                // return true
                // else return false
          },
          viewPost() {
              if (!this.post) {
                  this.$store.dispatch('authenticate/loadPostView', this.id)
                  return this.$store.getters['authenticate/viewPost']
              } else return this.post
          }
      },
      watch: {
          user(value) {
              if (value !==null && value!== undefined) {
                  this.$store.dispatch('authenticate/loadPostView', this.id)
              }
          }
      },
        methods:{
            logout() {
                this.$store.dispatch('authenticate/logout')
                    .then(() => {
                        // this.$router.push('/crud')
                        alert('Succesfuly signed out')
                    })
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_variables.scss';
    @import '~styles/_mixins.scss';

    #viewPostContainer {
        // padding-top: 50px;

    }
    #logout {
        @include CRUDlogout
        margin-left: 50px;
        cursor: pointer;
    }
    #content {
        max-width: 800px;
        width: 90%;
        margin: auto;
    }
    img {
        max-width: 900px;
        width: 100%;
    }
    #title {
        // text-align: center;
        font-size: 34px;
        font-family: 'Karma', serif;
        margin: 40px 0 60px 0;
        font-weight: 600;
        p {
            width: 85%;
            margin: auto;
            text-align: center;
        }
    }
    #description {
        font-family: 'Halant', serif;
        font-size: 20px;
        text-indent: 40px;
        margin: 60px 0;
        // font-weight: 600;
    }
</style>
