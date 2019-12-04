<template lang="html">
    <nav>
        <router-link to="/frisbo" id="logo" tag="a">
            <img :src="logo" alt="frisbo-logo">
        </router-link>

        <div id="menuButtons">
            <div class="language">
                <router-link
                to="/frisbo" tag="a"
                :class="{activeLanguage: !romanianSelected}"
                @click.native="englishLanguage">
                EN </router-link>
            </div>
            <div class="language">
                <router-link
                to="/frisbo" tag="a"
                :class="{activeLanguage: romanianSelected}"
                @click.native="romanianLanguage">
                RO </router-link>
            </div>

            <div id="burgerMenu" @click="openMenu">
                <div id="burgerBar"></div>
                <div id="burgerBar"></div>
                <div id="burgerBar"></div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                width: document.documentElement.clientWidth
            }
        },
        methods: {
            romanianLanguage() {
                this.$store.commit('frisbo/selectRomanian')
            },
            englishLanguage() {
                this.$store.commit('frisbo/selectEnglish')
            },
            openMenu() {
                this.$store.commit('frisbo/openMenu')
                if (this.width<=991) {
                    document.querySelector('body').style.overflowY="hidden"
                }
            },
            windowResize() {
                this.width = document.documentElement.clientWidth
            }
        },
        mounted() {
            window.addEventListener('resize', this.windowResize)
        },
        destroyed() {
            window.removeEventListener('resize', this.windowResize)
        },
        computed: {
            romanianSelected() {
                return this.$store.getters['frisbo/activeLanguage']
            },
            menuIsOpen() {
                return this.$store.getters['frisbo/menuOpened']
            },
            logo() {
                if (this.width>=970) return require("./../../../assets/frisbo/frisbo-logo.png")
                else return require("./../../../assets/frisbo/Frisbo logo - white.png")
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_frisboVariables.scss';

    nav {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;

    }
    img {
        width: 80px;
        height: 30px;
    }

    #logo, #menuButtons {
        padding: 20px 16px 8px;
    }
    #menuButtons {
        display: flex;
        .language {
            display: none;
        }
        a {
            color: white;
            margin: 0 7px;
            text-decoration: none;
            &:hover {
                padding-bottom: 7px;
                border-bottom: 1px solid white;
            }
        }
    }
    #burgerMenu {
        margin-left: 18px;
        cursor: pointer;
        padding: 8px 20px;

    }
    #burgerMenu div {
        width: 22px;
        height: 3px;
        background-color: white;
        &:nth-child(2) {
            margin: 3px 0;
        }
    }
    .activeLanguage {
        font-weight: bold;
        // color: $green!important;
        &:hover {
            border-bottom: none!important;
        }
    }

    // .bodyOverflow {
    //     overflow-y: hidden!important;
    // }

    @media screen and (min-width: 1200px) {
        #logo, #menuButtons {
            padding: 30px 60px;
        }
        #menuButtons {
            .language {
                display: block;
                padding: 17.5px 0;
            }
        }
        #burgerMenu {
            padding-top: 22px;
        }
        img {
            height: 45px;
            width: 115px;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        #logo, #menuButtons {
            padding: 15px 30px;
        }
        #menuButtons {
            .language {
                display: block;
                padding: 17.5px 0;
            }
        }
        #burgerMenu {
            padding-top: 22px;
        }
        img {
            height: 45px;
            width: 115px;
        }
    }
    @media screen and (min-width: 970px) and (max-width: 991px) {
        #logo, #menuButtons {
            padding: 15px 30px;
        }
        img {
            height: 45px;
            width: 115px;
        }
    }

</style>
