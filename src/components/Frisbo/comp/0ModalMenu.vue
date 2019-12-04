<template lang="html">
    <transition name="slideMenu">
        <section v-if="menuIsOpen" id="modalMenu">

            <div id="closeModal" @click="closeModal" class=".close">
                <img src="https://www.frisbo.ro/wp-content/themes/frisbo-showcase/dist/images/menu--mobile--close.png" alt="">
            </div>

            <ul id="links">
                <li>
                    <router-link :to="{name: 'FrisboHome'}" tag="a" @click.native="closeModal">Acasă</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'FrisboHowDoesItWork'}" tag="a" @click.native="closeModal">Cum funcționează</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'FrisboPrices'}" tag="a" @click.native="closeModal">Prețuri</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'FrisboBenefits'}" tag="a" @click.native="closeModal">Beneficii</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'FrisboBecomeAFulfiller'}" tag="a" @click.native="closeModal">Devino fulfiller</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'FrisboContact'}" tag="a" @click.native="closeModal">Contact</router-link>
                </li>
            </ul>

            <div id="languageButtons">
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
            </div>

            <div id="socialIcons">
                <a href="https://www.facebook.com/Frisbo-174850309383880" id="fb" target="_blank">
                </a>
                <a href="https://www.linkedin.com/company/frisbo" id="in" target="_blank">
                </a>
            </div>

            <div id="portfolio">
                <router-link :to="{ name: 'Home'}" tag="a">Back to portfolio</router-link>
            </div>

        </section>

    </transition>
</template>

<script>
    export default {
        data() {
            return {
                width: document.documentElement.clientWidth
            }
        },
        methods: {
            closeModal() {
                this.$store.commit("frisbo/closeMenu")
                // if (this.width<=991) {
                //     document.querySelector('body').style.overflowY=""
                // }
            },
            romanianLanguage() {
                this.$store.commit('frisbo/selectRomanian')
            },
            englishLanguage() {
                this.$store.commit('frisbo/selectEnglish')
            },
        },
        computed: {
            menuIsOpen() {
                return this.$store.getters['frisbo/menuOpened']
            },
            romanianSelected() {
                return this.$store.getters['frisbo/activeLanguage']
            },
        },
        updated() {
            if (this.width<=991 && !this.menuIsOpen) {
                document.querySelector('body').style.overflowY=""
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_frisboVariables.scss';
    @import '~styles/_variables.scss';

    #modalMenu {
        height: 100%;
        background: white;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 5;
        padding: 40px 80px 0 90px;
        box-sizing: border-box;
        #closeModal {
            position: relative;
        }
        img {
            width: 30px;
            right: -50px;
            top: -17px;
            position: absolute;
            opacity: 0.2;
            cursor: pointer;
            &:hover {
                opacity: 0.5;
            }
        }
        ul {
            margin-top: 86px;
            list-style-type: none;
        }
        li {
            text-align: left;
            margin-top: 18px;
            font-size: 16px;
            box-sizing: border-box;
            a {
                color: $grey;
                text-decoration: none;
                padding: 3px 0;
                &:hover {
                    border-bottom: 1px solid #9f9f9f;
                }
                &:focus, &:active, &:visited {
                    outline: none!important;
                    text-decoration: none!important;
                }
            }
            .router-link-exact-active {
                color: $green;
                font-weight: 600;
                &:hover {
                    border-bottom: 1px solid $green;
                }
            }
        }
        #socialIcons {
            margin-top: 86px;
            text-align: left;
            a {
                height: 23px;
                width: 23px;
                display: block;
                margin-right: 15px;
                display: inline-block;
            }
        }
        #fb {
            background-image: url("~assets/frisbo/social/facebook_grey.png");
            background-size: 18px 18px;
            background-repeat: no-repeat;
            &:hover {
                background-image: url("~assets/frisbo/social/facebook_green.png");

            }
        }
        #in {
            background-image: url("~assets/frisbo/social/linkedin.png");
            background-size: 18px 18px;
            background-repeat: no-repeat;
            &:hover {
                background-image: url("~assets/frisbo/social/linkedin green.png");

            }
        }
    }
    .activeLanguage {
        color: $green!important;
        // border-bottom: 1px solid $green;
        font-weight: bold;
        &:hover {
            border-bottom: 2px solid $green!important;
        }
    }
    #portfolio {
        margin-top: 100px;
        & a {
        text-decoration: none;
        color: $home-color;
        font-size: 17px;
        font-weight: 700;
        }
    }
    @media screen and (min-width: 992px) {
        #languageButtons {
            display: none!important;
        }
        .slideMenu-enter-active {
            animation: slide-in 0.25s ease-out forwards;
        }
        .slideMenu-leave-active {
            animation: slide-out 0.25s ease-out forwards;
        }
        @keyframes slide-in {
            from {
                transform: translateX(315.8px)
            }
            to {
                transform: translateX(0)
            }
        }
        @keyframes slide-out {
            from {
                transform: translateX(0)
            }
            to {
                transform: translateX(315.8px)
            }
        }
    }
    @media screen and (max-width: 991px) {
        #modalMenu {
            width: 100%;
            height: 140vh;
            li {
                text-align: center;
                font-size: 22px;
            }

        }
        #socialIcons {
            display: none;
        }
        #languageButtons {
            margin-top: 40px;
            a {
                color:$grey;
                text-decoration: none;
                &:focus {
                    color: $grey;
                }
                &:hover {
                    border-bottom: 2px solid $grey;
                }
            }
        }
        .language {
            font-size: 22px;
            padding: 0 21px;
            display: inline-block;
        }

        .slideMenu-enter {
            opacity: 0;
        }
        .slideMenu-enter-active {
            animation: slide-in 0.25s ease-out forwards;
            transition: opacity 0.25s;
        }
        .slideMenu-leave-active {
            animation: slide-out 0.25s ease-out forwards;
            transition: opacity 0.25s;
            opacity: 0;
        }

        @keyframes slide-in {
            from {
                transform: translateY(-100px)
            }
            to {
                transform: translateY(0)
            }
        }
        @keyframes slide-out {
            from {
                transform: translateY(0)
            }
            to {
                transform: translateY(-100px)
            }
        }
    }

    //closeModal (X) position
    @media screen and (min-width: 1200px) {
        #modalMenu {
            img {
                width: 20px;
                right: 0px;
                top: 10px;
            }
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        #modalMenu {
            img {
                width: 20px;
                right: -30px;
                top: -5px;
            }
        }
    }
    @media screen and (min-width: 970px) and (max-width: 991px) {
        #modalMenu {
            img {
                right: -35px;
                top: -23px;
            }
        }
    }
</style>
