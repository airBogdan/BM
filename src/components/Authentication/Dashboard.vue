<template lang="html">
    <div class="authContainer">

        <!-- there are a list of items with linknames and titles -->
        <NavbarComp>
            <router-link v-if="!user.uid" v-for="item in navbarItems" :key="item.name" :to="{ name: item.linkName}" >{{item.name}}</router-link>
            <button v-if="user.uid" id="logout" @click='logout'>Logout</button>
        </NavbarComp>
        <h2>Dashboard</h2>

        <div id="information">
            <p>* the images and articles are not mine, they are all taken from <a href="https://techcrunch.com">Techcrunch</a> </p>
        </div>

        <div id="newPostButtons">
            <router-link tag="button" :to="{ name: 'NewPost', params: {} }" :disabled="!user.emailVerified">New Post</router-link>
            <div v-if="!user.emailVerified">(You need to create and verify your email in order to create a new post)</div>
            <!-- email verified is initially false & user.uid doesnt exist until sign up sign in -->
            <button v-if="!user.emailVerified && user.uid" @click="resendVerificationEmail">Resend email</button>
        </div>
        <div id="posts" v-loading="loading">
            <!-- :class computation so that each 5th and 6th post get black class -->
            <PostPreview
                v-for="(post, index) in postList"
                :post="post"
                :key="post.id"
                :class="{black: (index+2)%6==0 || (index+1)%6==0 ? true : false}">
            </PostPreview>
            <button type="button" id="loadMore" @click="loadMore" v-if="showLoadMoreButton">Load more</button>
        </div>
    </div>
</template>

<script>
    import NavbarComp from './../Navbar.vue'
    import PostPreview from './subcomponents/PostPreview.vue'
    import firebase from 'firebase/app'

    export default {
        data() {
            return {
                navbarItems: [
                    {name: 'Sign up', linkName: 'SignUp'},
                    {name: 'Sign in', linkName: 'SignIn'}
                ],
                //initial nr of posts
                nrOfPosts: 8,
                //used for
                finishedCreatedLoadPosts: true
            }
        },
        methods: {
            loadMore() {
                this.nrOfPosts+=8
                // if (this.nrOfPosts>=this.postList.length) {
                //     this.showLoadMoreButton = false
                // }
            },
            logout() {
                this.$store.dispatch('authenticate/logout')
                    .then(() => {
                        // this.$router.push('/crud')
                        alert('Succesfuly signed out')
                    })
            },
            choosePic() {
                this.$refs.fileInput.click()
            },
            pickedFile(event) {
                const files = event.target.files
                let filename = files[0].name
                if (filename.lastIndexOf('.')<=0) {
                    return alert('Please add a valid file')
                }
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    this.imageUrl = fileReader.result
                })
                fileReader.readAsDataURL(files[0])
                this.image = files[0]
            },
            firebaseUpload() {
                this.$store.dispatch('authenticate/firebaseUpload', this.image)
            },
            resendVerificationEmail() {
              firebase.auth().currentUser.sendEmailVerification({  url: 'http://localhost:8080/CRUD'})
            }
        },
        computed: {
            user() {
                var user
              if ( this.$store.getters['authenticate/user']==null) {
                return user= {emailVerified: false}
              }
                return this.$store.getters['authenticate/user']
            },
            //i need this for comparing nr of loaded posts with full list length
            //so i know to show or not the 'load more' button
            fullPostList() {
                return this.$store.getters['authenticate/postList']
            },
            postList() {
                return this.$store.getters['authenticate/postList'].slice(0, this.nrOfPosts)
            },
            loading() {
                return this.$store.getters['authenticate/loading']
            },
            showLoadMoreButton() {
                if (this.nrOfPosts<this.fullPostList.length && this.finishedCreatedLoadPosts) {
                    return true
                } else {
                    return false
                }
            }
        },
        components: {
            NavbarComp,
            PostPreview
        },
        created() {
            if (this.postList.length == 0) {
                this.finishedCreatedLoadPosts = false
                this.$store.dispatch('authenticate/startLoading')
                this.$store.dispatch('authenticate/loadPosts')
                .then(() => {
                    this.finishedCreatedLoadPosts = true
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_variables.scss';
    @import '~styles/_mixins.scss';

    .authContainer {
            overflow-x: hidden;
    }

    #logout {
        @include CRUDlogout
    }
    #information, #posts,  #newPostButtons {
        width: 96%;
        max-width: 900px;
        margin: 50px auto;
    }
    #information a {
        text-decoration: none;
        color: red;
    }
    h2 {
        text-align: center;
    }
    #newPostButtons {
        button {
            @include CRUDbutton
        }
        div {
            font-size: 12px;
            margin: 10px 0;
        }
    }
    #posts {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 900px;
    }
    #loadMore {
        @include CRUDbutton
        margin: auto;
        // display: block;
    }

    @include mediaQuery(1024px) {

    }
</style>
