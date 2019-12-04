<template lang="html">
    <div id="clients">
        <div class='clientsTitle'>
            <h1 id="clientsParallax">CLIENȚI</h1>
        </div>

        <h4>Clienți</h4>

        <div id="clientsSlider" class="clientsSlider">
            <slick ref="slick" :options="slickOptions">
                <span> <img src="~assets/frisbo/clients/Benaza.png" alt=""> </span>
                <span> <img src="~assets/frisbo/clients/Carpa Nera.png" alt=""> </span>
                <span> <img src="~assets/frisbo/clients/Komoder.png" alt=""> </span>
                <span> <img src="~assets/frisbo/clients/Natural paint.png" alt=""> </span>
                <span> <img src="~assets/frisbo/clients/Okian.png" alt=""> </span>
                <span> <img src="~assets/frisbo/clients/pentru acasa.png" alt=""> </span>
                <span> <img src="~assets/frisbo/clients/Sport Addict.png" alt=""> </span>
                <span> <img src="~assets/frisbo/clients/Starcom.png" alt=""> </span>
                <span> <img src="~assets/frisbo/clients/trilulilu.png" alt=""> </span>
                <span> <img src="~assets/frisbo/clients/Tucai.png" alt=""> </span>
                <span> <img src="~assets/frisbo/clients/Univers.png" alt=""> </span>
                <span> <img src="~assets/frisbo/clients/Ursula Dragon.png" alt=""> </span>
            </slick>

            <a id="clientsPrev" class="control clientsPrev" @click="prev"></a>
            <a id="clientsNext" class="control clientsNext" @click="next"></a>
        </div>
    </div>
</template>

<script>
    import Slick from 'vue-slick';
    import ScrollMagic from 'scrollmagic'
    // import 'slick-carousel/slick/slick.css'
    // import 'slick-carousel/slick/slick-theme.css'



    export default {
        data() {
           return {
               slickOptions: {
                   infinite: true,
                   slidesToShow: 6,
                   arrows: false,
                   swipeToSlide: true,
               },
                controller: new ScrollMagic.Controller(),
                width: document.documentElement.clientWidth,
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
            if (this.width>=1200) {
                let scene3 = new ScrollMagic.Scene({
                    triggerElement: ".clientsTitle",
                    duration: 300,
                    triggerHook: 0.5355
                })
                .setTween(TweenMax.from('#clientsParallax', 0.01, {top: '80px'}))
                .addTo(this.controller)

                let scene4 = new ScrollMagic.Scene({
                    triggerElement: ".clientsTitle",
                    duration: 300,
                    triggerHook: 0.5355
                })
                .setTween(TweenMax.from('#clientsSlider', 0.01, {top: '-80px'}))
                .addTo(this.controller)
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_frisboVariables.scss';

    #clients {
        margin-bottom: 120px;
    }
    .clientsSlider {
        position: relative;
        margin: 40px auto 0;
        max-width: 89%;
    }
    img {
        max-width: 100%;
    }
    .control {
        position: absolute;
        top: 50%;
        width: 40px;
        height: 40px;
        margin-top: -20px;
        z-index: 2;
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
        text-align: right;
        position: relative;
        transition: all 0.07s;
        z-index: 0;
        font-size: 110px;
        font-weight: 800;
        line-height: 1;
        color: #ececec;
        margin-top: 50px;
    }
    h4 {
        font-size: 30px;
        color: $grey;
        margin-top: 80px;
    }

    @media screen and (min-width: 1200px) {
        h1 {
            display: block;
        }
        h4 {
            display: none;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
    }
    @media screen and (max-width: 991px) {
    }

    @media screen and (min-width: 544px) and (max-width: 767px) {
        img {
            height: auto;
            width: 100%;
        }
    }
    @media screen and (max-width: 544px) {
        .clientsSlider {
            max-width: 80%;
        }
        img {
            // max-width: 100%;
        }
    }

    @media screen and (min-width: 1200px) {
        #clients {
            max-width: 1140px;
            margin: auto;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        #clients {
            max-width: 940px;
            margin: auto;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        #clients {
            max-width: 720px;
            margin: auto;
        }
    }
    @media screen and (min-width: 544px) and (max-width: 767px) {
        #clients {
            max-width: 576px;
            margin: auto;
        }
    }
</style>
