<template lang="html">
<div id="postContainer">
    <div id="subContainer">
        <!-- are si clasa img pt ca sa setez dim din div, si img sa am height si width100% si fit: cover -->
        <div class="img">
            <img :src="post.image" @click="openPost">
        </div>
        <section>
            <div class="">
                <h3 @click="openPost">{{post.title.slice(0, 90)}}</h3>
                <p>{{post.description.slice(0, 160) + '...'}}</p>
                <p class="linkParagraph">
                    <router-link tag="a" :to="{name: 'ViewPost', params: {id: post.id, post: post}}">READ ARTICLE</router-link>
                </p>
            </div>
        </section>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            post: Object
        },
        methods: {
            openPost() {
                // console.log(this.post);
                this.$router.push({ name: 'ViewPost', params: {id: this.post.id,  post: this.post}})
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_variables.scss';
    @import '~styles/_mixins.scss';
    h3 {
        text-align: center;
    }
    // subcontainer exists so that it has 900px width and the wrapping postcontainer can be black for the special posts
    #postContainer {
        margin: 40px 0 20px;
    }
    #subContainer {
        width: 420px;
    }
    .black {
        margin: 0 calc(-50vw + 50%) 0!important;
        flex-shrink: 0;
        width: 100vw;
        left: 50%;
        background: black;
        // margin: 0!important;
        #subContainer {
            width: 900px;
            margin: 30px auto;
            display: flex;
            section {
                height: 250px;
                margin: auto;
                div {
                    box-sizing: border-box;
                    background: black;
                    color: white;
                    margin: 0;
                    padding: 0;
                }
                h3 {
                    margin: 0;
                }
                // the 'read more' link
                .linkParagraph {
                        text-align: center;
                        margin: 0;
                    }
                a {
                    color: white;
                    border-bottom: 1px solid white;
                }
                a:hover, h3:hover {
                    transition: all 0.4s ease;
                    color: #b3b3b3;
                    border-color: #b3b3b3;
                }
            }
        }
    }
    .img {
        width:420px;
        height:250px;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        &:hover {
            cursor: pointer;
            -webkit-filter: brightness(80%);
            -webkit-transition: all 0.4s ease;
            -moz-transition: all 0.4s ease;
            -o-transition: all 0.4s ease;
            -ms-transition: all 0.4s ease;
            transition: all 0.4s ease;
        }
        // width: 420px;
        // height: 250px;
    }
    section {
        width: 350px;
        margin: auto;
        position: relative;
        div {
            padding: 25px;
            margin-top:-65px;
            background-color: white;
        }
        h3 {
            cursor: pointer;
            font-family: 'Karma', serif;
            font-weight: 400;
            margin: 0;
            font-size: 20px;
        }
        p {
            text-indent: 15px;
            font-family: 'Halant', serif;
            line-height: 21px;
            font-size: 15px;
            margin: 20px 0 30px 0;
        }
        .linkParagraph {
            text-indent: 0;
                margin: 0;
            }
        a {
            font-family: 'Zilla Slab', serif;
            text-decoration: none;
            color: black;
            font-size: 12px;
            padding-bottom: 8px;
            border-bottom: 1px solid black;
        }
        a:hover, h3:hover {
            transition: all 0.4s ease;
            color: #b3b3b3;
            border-color: #b3b3b3;
        }
    }

    @include mediaQuery(600px, 900px) {
        #postContainer {
            width: 100%;
        }
        #subContainer {
            display: flex;
            width: 100%;
        }

        section {
            div {
                max-height: 180px;
                margin: 0px 0 0 -70px;
                padding: 15px;
                background-color: white;
            }
            .linkParagraph {
                text-align: right;
            }
            p {
                margin: 20px 0 -6px 0;
            }
        }
        .black {
            // margin: 0;
            #subContainer {
                display: block;
                width: 100%;
            }
            .img {
                margin: auto;
            }
            section {
                margin: auto;
                div {
                    margin: 0;
                }
            }
        }
    }
</style>
