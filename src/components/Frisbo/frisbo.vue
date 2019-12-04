<template>
    <div id="app" @click='hideMenu($event)'>

        <!-- <app-navigation> </app-navigation> -->

        <modal-menu> </modal-menu>

        <div :class="{darkOverlay: menuIsOpen}"></div>

        <first-view></first-view>

        <benefits-icons></benefits-icons>

        <price-calculator></price-calculator>

        <contact-form></contact-form>

        <platform-integrations></platform-integrations>

        <mobile-app></mobile-app>

        <our-clients></our-clients>

        <our-warehouses></our-warehouses>

        <site-footer></site-footer>

        <transition name="fadeScrollTop">
            <div @click="scrollToTop" id="goTop" v-if="showGoTopButton">
                <div id="goTopChevron" >
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
    // @ is an alias to /src
    import FirstView from './comp/1FirstView.vue'
    import BenefitsIcons from './comp/2ServicesIcons.vue'
    import PriceCalculator from './comp/3PriceCalculator.vue'
    import ContactForm from './comp/4Contact.vue'
    import PlatformIntegrations from './comp/5Integrations.vue'
    import MobileApp from './comp/6MobileApp.vue'
    import OurClients from './comp/7Clients.vue'
    import OurWarehouses from './comp/8Warehouses.vue'
    import SiteFooter from './comp/9Footer.vue'

    import AppNavigation from './comp/Navigation.vue'
    import ModalMenu from './comp/0ModalMenu.vue'

    export default {
        name: 'home',
        data() {
            return {
                modalIsOpen: true,
                scrollTopDistance: 0,
                offsety: 0
            }
        },
        methods: {
            scrollToTop() {
                document.querySelector('#logo').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

            },
            hideMenu(event) {
                if (event.target.id!='modalMenu' && event.target.id!='burgerMenu' && event.target.id!='burgerBar') {
                    this.$store.commit("frisbo/closeMenu")
                }
            },
            topScrollDistance() {
                this.scrollTopDistance = document.documentElement.scrollTop
                this.offsety = window.pageYOffset

            }
        },
        computed: {
          showGoTopButton() {
              if (this.scrollTopDistance>=400 || this.offsety>=400) return true
              else return false
          },
          menuIsOpen() {
              return this.$store.getters['frisbo/menuOpened']
          }
        },
        created() {
            document.addEventListener('scroll', this.topScrollDistance)
        },
        destroyed() {
            document.addEventListener('scroll', this.scrollDistance)
        },
        components: {
            AppNavigation,
            ModalMenu,
            FirstView,
            BenefitsIcons,
            PriceCalculator,
            ContactForm,
            PlatformIntegrations,
            MobileApp,
            OurClients,
            OurWarehouses,
            SiteFooter
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_frisboVariables.scss';

    #home {
        overflow-x:hidden;
        overflow-y:auto;
    }
    #goTop {
        position: fixed;
        bottom: 20px;
        right: 30px;
        transform: none;
        z-index: 99;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background: $green;
        box-shadow: 8px 20px 56px -2px rgba(0,0,0,.3);
    }

    #goTopChevron {
        background: url('./../../assets/frisbo/chevron top.png') no-repeat;
        background-size: 20px;
        background-position: 50% 50%;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }


    @media screen and (min-width: 1024px) {
        #goTop {
            height: 60px;
            width: 60px;
        }
        #goTopChevron {
            width: 60px;
            height: 60px;
        }
    }
    @media screen and (max-width: 767px) {
        #goTop {
            bottom: 100px;
        }
    }

    .fadeScrollTop-enter {
        opacity: 0;
    }
    .fadeScrollTop-enter-active {
        transition: opacity 0.17s;
    }
    .fadeScrollTop-leave {
    }
    .fadeScrollTop-leave-active {
        transition: opacity 0.35s;
        opacity: 0;
    }

    #app {
      font-family: Open Sans,sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      overflow-x: hidden;
      overflow-y: auto;
    }

    #nav {
      padding: 30px;
      a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }


    .darkOverlay {
        position: fixed;
        // height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0px;
        background: black!important;
        opacity: 0.3;
        z-index: 4;
    }

</style>
