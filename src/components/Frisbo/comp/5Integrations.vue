<template lang="html">
    <div id="integrations" ref="integration">

        <div class='integrationsTitle'>
            <h1 id="parallax">Integrări</h1>
        </div>

        <h4>Integrări</h4>

        <div id="slider">
            <slick :options="slickOptions" id='car5' ref="slick">
                <span> <img src="~assets/frisbo/integrations/emag - retina.png" alt=""> </span>
                <span> <img src="~assets/frisbo/integrations/Magento - retina.png" alt=""> </span>
                <span> <img src="~assets/frisbo/integrations/Prestashop - retina.png" alt=""> </span>
                <span> <img src="~assets/frisbo/integrations/emag - retina.png" alt=""> </span>
                <span> <img src="~assets/frisbo/integrations/Magento - retina.png" alt=""> </span>
                <span> <img src="~assets/frisbo/integrations/woo commerce - retina.png" alt=""> </span>
                <span> <img src="~assets/frisbo/integrations/Prestashop - retina.png" alt=""> </span>
            </slick>

            <a id="clientsPrev" class="control clientsPrev" @click="prev"></a>
            <a id="clientsNext" class="control clientsNext" @click="next"></a>
        </div>
    </div>
</template>

<script>
    import Slick from 'vue-slick';
    import ScrollMagic from 'scrollmagic'

    export default {
        data() {
           return {
               slickOptions: {
                   infinite: true,
                   slidesToShow: 5,
                   arrows: false,
                   swipeToSlide: true,
               },
               width: document.documentElement.clientWidth,
               controller: new ScrollMagic.Controller(),
           }
       },
        components: { Slick },
        methods: {
            next() {
                this.$refs.slick.next();
            },
            prev() {
                this.$refs.slick.prev();
            },
            windowResize() {
                this.width = document.documentElement.clientWidth
            },
        },
        created() {
            if (this.width<=1200 && this.width>=992) {
                this.slickOptions.slidesToShow = 4
            }
            else if (this.width<=991 && this.width>=544) {
                this.slickOptions.slidesToShow = 3
            }
            else if (this.width<=543) {
                this.slickOptions.slidesToShow = 2
            }
        },
        mounted() {
            window.addEventListener('resize', this.windowResize)
            if (this.width>=1200) {
                let scene1 = new ScrollMagic.Scene({
                    triggerElement: ".integrationsTitle",
                    duration: 300,
                    triggerHook: 0.5355
                })
                .setTween(TweenMax.from('#parallax', 0.01, {top: '65px'}))
                .addTo(this.controller)

                let scene2 = new ScrollMagic.Scene({
                    triggerElement: ".integrationsTitle",
                    duration: 300,
                    triggerHook: 0.5355
                })
                .setTween(TweenMax.from('#slider', 0.01, {top: '-65px'}))
                .addTo(this.controller)
            }
        },
        updated() {
            if (console.warn) console.warn = () => {
                return ''
            }
        },
        destroyed() {
            window.removeEventListener('resize', this.windowResize)
            window.removeEventListener('scroll', this.scrollFn)
        },
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_frisboVariables.scss';

    #slider {
        position: relative;
        max-width: 89%;
        margin: auto;
    }
    span {
        margin: 36px 0;
    }
    img {
        width: 100%;
        margin: auto;
        max-width: 190px;
    }
    .control {
        position: absolute;
        top: 47%;
        width: 40px;
        height: 40px;
        margin-top: -20px;
        z-index: 22;
        background-size: 22px;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
        &:active {
            transform: scale(0.8);
        }
    }
    .clientsPrev {
        background-image: url("~assets/frisbo/chevron left grey.png");
        left: -35px;
    }
    .clientsNext {
        background-image: url("~assets/frisbo/chevron right grey.png");
        right: -35px;
    }

    h1 {
        display: none;
        text-align: left;
        position: relative;
        transition: all 0.07s;
        z-index: 0;
        font-size: 110px;
        font-weight: 800;
        line-height: 1;
        color: #ececec;
        margin-top: 80px;
        text-transform: uppercase;
    }
    h4 {
        font-size: 30px;
        color: $grey;
        margin-top: 80px;
    }
    .parallaxClass {
        background: yellow;
    }

    @media screen and (min-width: 1200px) {
        h1 {
            display: block;
        }
        h4 {
            display: none;
        }
        .slick-slide {
            width: 228px!important;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        .slick-slide {
            width: 235px!important;
        }
        // #car3, #car5 {
        //     display: none;
        // }
    }
    @media screen and (max-width: 991px) {
        .slick-slide {
            width: 240px!important;
        }
        // #car4, #car5 {
        //     display: none;
        // }
    }
    @media screen and (min-width: 544px) and (max-width: 767px) {
        img {
            height: auto;
            width: 100%;
        }
    }
    @media screen and (max-width: 544px) {
        #slider {
            max-width: 80%;
        }
    }

    @media screen and (min-width: 1200px) {
        #integrations {
            max-width: 1140px;
            margin: auto;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        #integrations {
            max-width: 940px;
            margin: auto;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        #integrations {
            max-width: 720px;
            margin: auto;
        }
    }
    @media screen and (min-width: 544px) and (max-width: 767px) {
        #integrations {
            max-width: 576px;
            margin: auto;
        }
    }

</style>
