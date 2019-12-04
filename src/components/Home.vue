<template lang="html">
    <div class="homeContainer">
        <Poster></Poster>

        <Navigation></Navigation>

        <About></About>

        <Work></Work>

        <Contact></Contact>

        <Footer></Footer>

    </div>
</template>

<script>
    import axios from 'axios';
    import Poster from './HomeComp/Poster.vue'
    import Navigation from './HomeComp/Nav.vue'
    import About from './HomeComp/About.vue'
    import Work from './HomeComp/Work.vue'
    import Contact from './HomeComp/Contact.vue'
    import Footer from './HomeComp/Footer.vue'

    import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
    import {TweenMax, TweenLite, TimelineMax, Linear, Back, Sine } from 'gsap';
    import ScrollMagic from 'scrollmagic'

    export default {
        data() {
            return {
                controller: new ScrollMagic.Controller()
            }
        },
        components: {
            Poster, Navigation, About, Work, Contact, Footer
        },
        mounted() {
            if (this.$store.getters.messagesGetter == '') {
                this.$store.dispatch('getSuggestions')
            }

            var pinPoster  = new ScrollMagic.Scene({
                triggerElement: '#mainAbout',
                triggerHook: 1
                // duration: '100%'
            })
            .setPin('#mainPoster')
            .addTo(this.controller)

            var pinAbout = new ScrollMagic.Scene({
                triggerElement: '#mainWork',
                triggerHook: 1
                // duration: '100%'
            })
            .setPin('#mainAbout')
            .addTo(this.controller)

            var pinWork = new ScrollMagic.Scene({
                triggerElement: '#mainContact',
                triggerHook: 1
                // duration: '100%'
            })
            .setPin('#mainWork')
            .addTo(this.controller)
        }
    }
</script>

<style lang="scss" scoped>
    .homeContainer {
        font-family: 'Raleway', sans-serif;
        // max-width: 1440px;
        // margin: 0 auto;
    }
    #mainPoster {
        position: relative;
        z-index: 1;
    }
    #mainAbout {
        background: white;
        position: relative;
        z-index: 2;
    }
    #mainWork {
        position: relative;
        z-index: 3;
    }
    #mainContact {
        z-index: 4;
        position: relative;
    }
</style>
