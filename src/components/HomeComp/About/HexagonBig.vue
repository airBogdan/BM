<template lang="html">
    <div id="me">

        <div class="selfie ">
            <div class="hexagon hexagon1-big"><div class="hexagon-in"><div class="hexagon-in2 hexBig">
                <div class="hexBigIcon"></div>
            </div></div></div>
        </div>
        <section class="description">
            <p>I'm a frontend developer using Vue.js to build SPA's  (single page applications).
                <span style="position: relative" id="questionMark"  @click="showSpaInfo=!showSpaInfo" @mouseenter="showSpaInfo=true" @mouseleave="showSpaInfo=false">(?) 
                        <p v-if="showSpaInfo" id="spaInfo">A single-page application works inside a browser and does not require page reloading during use; works like a desktop app</p>
                </span>

            </p>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showSpaInfo: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_variables.scss';
    @import '~styles/_mixins.scss';

    #me {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
    }
    .selfie {
        width: 70%;
        display: flex;
        margin-bottom: 10px;
        justify-content: center;
    }

    section {
        display: flex;
        justify-content: center;
        // margin-top: 40px;
    }
    .description {
        line-height: 26px;
        #questionMark {
            font-size: 66%;
            &:hover {
                color: $blue;
                cursor: pointer;
            }
            #spaInfo {
                font-weight: 400;
                border-radius: 10px;
                font-size: 14.5px;
                width: 300px;
                right: 0;
                position: absolute;
                background-color: rgb(93, 93, 93);
                // background-color: black;
                color: white;
                margin-top: 10px;
                // opacity: 1;
            }
        }
    }
    p {
        margin-top: 40px;
        width: 70%;
        text-align: center;
        padding: 10px 0 15px 0;
        font-size: 75%;
    }

    .hexagon {
        overflow: hidden;
        visibility: hidden;
        -webkit-transform: rotate(120deg);
           -moz-transform: rotate(120deg);
            -ms-transform: rotate(120deg);
             -o-transform: rotate(120deg);
                transform: rotate(120deg);
    }
    .hexagon1-big {

        min-width: 320px;
        min-height: 160px;
        margin: 0;
    }
    .hexagon-in {
        overflow: hidden;
        width: 100%;
        height: 100%;
        -webkit-transform: rotate(-60deg);
           -moz-transform: rotate(-60deg);
            -ms-transform: rotate(-60deg);
             -o-transform: rotate(-60deg);
                transform: rotate(-60deg);
    }
    .hexagon-in2 {
        width: 100%;
        height: 100%;
        visibility: visible;
        -webkit-transform: rotate(-60deg);
           -moz-transform: rotate(-60deg);
            -ms-transform: rotate(-60deg);
             -o-transform: rotate(-60deg);
                transform: rotate(-60deg);
    }
    .hexBig {
        background: url('~assets/me.jpg') 50% 50% no-repeat;
        background-size: 60%;
    }

    @include mediaQuery(250px, 450px) {
        #me {
            margin: 15px;
        }
        p {
            width: 90%;
            margin-top: 20px;
        }
    }
    @include mediaQuery(450px, 630px) {
        #me {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
        }
        .selfie {
            // align-items: center;
            justify-content: center;
            // margin: 0;
        }
        p {
            // width: 90%;
            // margin-top: 20px;
        }
        .hexagon1-big {
            min-width: 440px;
            min-height: 220px;
        }
    }
    @include mediaQuery(630px, 820px) {
        #me {
            margin-bottom: 20px;
        }
        .selfie {
            margin: auto;
        }
        .hexagon1-big {
            min-width: 500px;
            min-height: 250px;
        }
    }
    @include mediaQuery(820px, 1024px) {
        .selfie {
            margin: 0;
        }
        .hexagon1-big {
            min-width: 430px;
            min-height: 215px;
        }
        .description {
            p {
                // width: 75%;
            }
            #questionMark {
                #spaInfo {
                    right: -30px;
                }
            }
        }
    }
    @include mediaQuery(1024px) {
        .hexagon1-big {
            min-width: 500px;
            min-height: 250px;
        }
        .description {
            p {
                width: 75%;
            }
            #questionMark {
                #spaInfo {
                    // right: -60px;
                }
            }
        }
    }

    // question mark position

    @include mediaQuery(300px, 380px) {
        .description {
            #questionMark {
                #spaInfo {
                    font-size: 14px;
                    width: 290px;
                    right: -40px;
                }
            }
        }
    }
    @include mediaQuery(380px, 430px) {
        .description {
            #questionMark {
                #spaInfo {
                    right: -100px;
                }
            }
        }
    }

    @include mediaQuery(501px, 514px) {
        .description {
            #questionMark {
                #spaInfo {
                    right: -60px;
                }
            }
        }
    }
</style>
