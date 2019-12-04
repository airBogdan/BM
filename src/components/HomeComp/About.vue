<template lang="html">
    <section class="mainAbout" id="mainAbout">
        <h2>About</h2>
        <div class="underline"></div>

        <section class="shapes">
                    <Hexagon hexIcon="hexIcon1">
                        <p slot="paragraph">Fast</p>
                        <span slot="span">Fast load times and lag free interaction</span>
                    </Hexagon>

                    <Hexagon hexIcon="hexIcon2">
                        <p slot="paragraph">Responsive</p>
                        <span slot="span">Easy to use across all devices, adapted for each one</span>
                    </Hexagon>

                    <Hexagon hexIcon="hexIcon3">
                        <p slot="paragraph">Intuitive</p>
                        <span slot="span">A simple website is an intuitive one</span>
                    </Hexagon>

                    <Hexagon hexIcon="hexIcon4">
                        <p slot="paragraph">Dynamic</p>
                        <span slot="span">Websites come to life</span>
                    </Hexagon>
            </section>

        <section class='selfInfo'>
            <selfImage></selfImage>

            <Info></Info>
        </section>
    </section>

</template>

<script>
    import Hexagon from './About/Hexagon.vue'
    import selfImage from './About/HexagonBig.vue'
    import Info from './About/Info.vue'

    export default {
        components: {
            Hexagon,
            selfImage,
            Info

        },
        data() {
            return {
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_variables.scss';
    @import '~styles/_mixins.scss';

    #mainAbout {
        font-size: 20pt;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items:center;
        margin-bottom: 80px;
        h2 {
            display: flex;
            justify-content: center;
            margin: 70px 0 10px 0;
            position: relative;
            font-size: 40pt;
        }
        .underline {
            display: inline-block;
            height: 5px;
            width: 80px;
            background: black;
            margin-bottom: 80px;
        }
        .shapes {
            align-items: flex-start;
            display: flex;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }
        .selfInfo {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-self: stretch;
        }
    }

    @include mediaQuery(250px, 450px) {
        #mainAbout {
            .shapes {
                margin-bottom: 0;
            }
        }
    }
    @include mediaQuery(450px, 630px) {
        #mainAbout {
            .shapes {
                flex-direction: row;
                flex-wrap: wrap;
            }
        }
    }
    @include mediaQuery(630px, 820px) {
        #mainAbout {
            margin-bottom: 110px;
            .shapes {
                flex-direction: row;
                flex-wrap: wrap;
                margin-bottom: 60px;
            }
            .selfInfo {
                // display: flex;
                // flex-direction: column;
                // justify-content: center;
                // align-items: center;
                // align-self: center;
            }
        }
    }
    @include mediaQuery(820px, 1024px) {
        #mainAbout {
            max-width: 900px;
            margin: auto;
            margin-top: 60px;
            margin-bottom: 120px;
            .underline {
                margin-bottom: 100px;
            }
            .shapes {
                flex-direction: row;
                align-items: flex-start;
                margin-bottom: 60px;
            }
            .selfInfo {
                flex-direction: row;
                align-items: flex-start;
                // justify-content: center;
            }
        }
    }
    @include mediaQuery(1024px) {
        #mainAbout {
            max-width: 1340px;
            margin: 60px auto 130px auto;
            .underline {
                margin-bottom: 100px;
            }
            .shapes {
                width: 90%;
                flex-direction: row;
                margin-bottom: 70px;
                align-items: flex-start;
            }
            .selfInfo {
                flex-direction: row;
                align-items: flex-start;
                // margin-bottom: 70px;
                .info p {
                    width: 80%;
                }
            }
        }
    }
</style>
