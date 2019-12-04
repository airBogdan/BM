<template lang="html">
    <div class="info">
        <!-- <section class="description">
            <p>I'm a frontend developer using Vue.js to build SPA's  (single page applications).
                <span style="position: relative" id="questionMark" @mouseenter="showSpaInfo=true" @mouseleave="showSpaInfo=false">(?)
                        <p v-if="showSpaInfo" id="spaInfo">A single-page application works inside a browser and does not require page reloading during use; works like a desktop app</p>
                </span>

            </p>
        </section> -->
        <section>
            <p class="mySkills"> My skills: </p>
            <div class="skills">
                <p>Vue.js <span class="outter"><span class="inner" style="width: 85%"></span></span></p>
                <p>Nuxt.js <span class="outter"><span class="inner" style="width: 50%"></span></span></p>
                <p>HTML<span class="outter"><span class="inner" style="width: 100%"></span></span></p>
                <p>(S)CSS<span class="outter"><span class="inner" style="width: 80%"></span></span> </p>
                <p>Javascript <span class="outter"><span class="inner" style="width: 70%"></span></span></p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
@import '~styles/_variables.scss';
@import '~styles/_mixins.scss';

    .info {
        z-index: -1;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .mySkills {
            font-size:85%;
            letter-spacing: 1px;
            padding: 0 0 50px 0;
        }
        .skills {
            p {
                display: flex;
                justify-content: space-between;
            }
        }
        p {
            text-align: center;
            margin: 0;
            padding: 10px 0 15px 0;
            font-size: 75%;
            &:first-child {
                // padding: 0 0 35px 0;
            }
        }
        .outter {
            display: flex;
            height: 20px;
            width: 250px;
            width: 65%;

            border: 2px solid black;
            .inner {
                display: inline-block;
                height: 20px;
                background-color: $home-color;
                color: white;
            }
        }


    }

    @include mediaQuery(200px, 450px) {
        .info {
            section {
                min-width: 285px;
                width: 85%;
            }
            .outter {
                width: 170px;
            }
            .mySkills {
                padding: 0 0 30px 0;
            }
        }
    }
    @include mediaQuery(450px, 630px) {
        .info {
            width: 75%;
            section {
                width: 400px;
            }
            .mySkills {
                padding: 0 0 30px 0;
            }
        }
    }
    @include mediaQuery(630px, 820px) {
        .info {
            width: 75%;
            section {
                width: 400px;
            }
            .mySkills {
                padding: 0 0 30px 0;
            }
        }
    }
    @include mediaQuery(820px, 1024px) {
        .info {
            .description {
                p {
                    padding: 0 10px 0 10px;
                }
            }
            .outter {
                width: 200px;
            }
            section {
                width: 350px;
            }
            .skills {
                margin-top: 0px;
            }
        }
    }
    @include mediaQuery(1024px) {
        .info {
            width: 70%;
            align-items: center;
            .outter {
                max-width: 300px;
                width: 65%;
            }
            section {
                max-width: 500px;
                width: 80%;
            }
            .skills {
                margin-top: 0px;
            }
        }
    }
</style>
