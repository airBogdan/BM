<template lang="html">
    <div id="firstView">

        <div id="homepage">
            <div id="text">
                <h1> Servicii de <br> <span>E-fulfillment</span></h1>
                <p>Lasă în grija noastră depozitarea, procesarea, facturarea, împachetarea și livrarea comenzilor magazinului tău online.</p>
            </div>

            <div id="laptopVideo">
                <img :src="laptop">
                <iframe width="532" height="275" src="https://www.youtube.com/embed/mIOggtVIxa0?autoplay=1&mute=1"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                width: document.documentElement.clientWidth
            }
        },
        methods: {
            hideMenu(e) {
                if (e.target.className=="darkOverlay") this.$store.commit('frisbo/closeMenu')
            },
            romanianLanguage() {
                this.$store.commit('frisbo/selectRomanian')
            },
            englishLanguage() {
                this.$store.commit('frisbo/selectEnglish')
            },
            openMenu() {
                this.$store.commit('frisbo/openMenu')
            },
            windowResize() {
                this.width = document.documentElement.clientWidth
            }
        },
        computed: {
            romanianSelected() {
                return this.$store.getters['frisbo/activeLanguage']
            },
            menuIsOpen() {
                return this.$store.getters['frisbo/menuOpened']
            },
            laptop() {
                if (this.width>=1200) return require("./../../../assets/frisbo/Mackbook-Air-Mock-Up.png")
                else return require("./../../../assets/frisbo/front-page--mockup.png")
            }
        },
        mounted() {
            window.addEventListener('resize', this.windowResize)
        },
        destroyed() {
            window.removeEventListener('resize', this.windowResize)
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_frisboVariables.scss';

    #firstView {
        background: linear-gradient(270deg,$green 0,$green 51%,$green 0,#fff 0,#fff);
    }
    #homepage {
        padding: 120px 15px 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 300px;
        box-sizing: border-box;
        // -webkit-box-sizing: border-box;
    }
    #text {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h1, p {
            margin-top: 17px;
            text-align: left;
        }
        h1 {
            font-size: 55px;
            line-height: 1.1;
            color: $grey;
            span {
                white-space: nowrap;
            }
        }
        p {
            font-size: 13px;
            color: black;
        }
    }
    #laptopVideo {
        position: relative;
        max-width: 100%;
        img {
            width: 100%;
            height: 100%;
        }
        iframe {
            display: none;
            position: absolute;
            top: 10.1%;
            left: 14.2%;
        }
    }

    @media screen and (min-width: 1200px) {
        #homepage {
            flex-direction: row;
        }
        #text {
            max-width: 33.3333333%;
            p {
                font-size: 15px;
            }
        }
        #laptopVideo {
            max-width: 66.6666667%;
            iframe {
                display: block;
            }
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        #homepage {
            flex-direction: row;
        }
        #text {
            max-width: 44%;
        }
        #laptopVideo {
            max-width: 56%;
        }
    }
    @media screen and (min-width: 970px) and (max-width: 991px) {

    }
    @media screen and (max-width: 969px) {
        #firstView {
            background: linear-gradient(#34dd79,#34dd79 65%,#34dd79 0,#fff 0,#fff);
        }
        #text {
            h1, p {
                text-align: center;
                color: white;
            }
            h1 {
                font-size: 30px;
            }

        }
    }

    @media screen and (min-width: 1200px) {
        #homepage {
            max-width: 1140px;
            margin: auto;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        #homepage {
            max-width: 940px;
            margin: auto;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        #homepage {
            max-width: 720px;
            margin: auto;
        }
    }
    @media screen and (min-width: 544px) and (max-width: 767px) {
        #homepage {
            max-width: 576px;
            margin: auto;
        }
    }
</style>
