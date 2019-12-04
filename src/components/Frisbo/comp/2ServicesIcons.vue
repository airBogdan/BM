<template lang="html">
    <div id="servicesIcons">
        <div class='servicesTitle' id="servicesTitle1">
            <h1 id="iconsParallax1">Procesare Comandă</h1>
        </div>
        <h4>Procesare Comandă</h4>
        <div class="icons" id="icons1">
            <div class="icon">
                <img src="~assets/frisbo/services icons/Preluare comenzi și retururi - retina.png" alt="">
                <p>Preluare comenzi și retururi</p>
            </div>

            <div class="icon">
                <img src="~assets/frisbo/services icons/Eliberare facturi și AWB-uri - retina.png" alt="">
                <p>Eliberare facturi și AWB-uri în numele clientului</p>
            </div>

            <div class="icon">
                <img src="~assets/frisbo/services icons/Pick and Pack - retina.png" alt="">
                <p>Pick and pack</p>
            </div>

            <div class="icon">
                <img src="~assets/frisbo/services icons/Predarea coletelor curierului - retina.png" alt="">
                <p>Predarea coletelor curierului agreat cu clientul</p>
            </div>
        </div>

        <div class='servicesTitle' id="servicesTitle2">
            <h1 id="iconsParallax2">Depozitare</h1>
        </div>
        <h4>Depozitare</h4>
        <div class="icons" id="icons2">
            <div class="icon">
                <img src="~assets/frisbo/services icons/Recepție marfă - retina.png" alt="">
                <p>Recepție marfă</p>
            </div>

            <div class="icon">
                <img src="~assets/frisbo/services icons/Preluare marfă - retina.png" alt="">
                <p>Preluare marfă</p>
            </div>

            <div class="icon">
                <img src="~assets/frisbo/services icons/Depozitare - retina.png" alt="">
                <p>Depozitare</p>
            </div>

            <div class="icon">
                <img src="~assets/frisbo/services icons/Inventar - retina.png" alt="">
                <p>Inventar</p>
            </div>
        </div>
    </div>
</template>

<script>
    import ScrollMagic from 'scrollmagic'

    export default {
        data() {
            return {
                 controller: new ScrollMagic.Controller(),
                 width: document.documentElement.clientWidth,
            }
        },
        mounted() {
            if (this.width>=1200) {
                let scene1 = new ScrollMagic.Scene({
                    triggerElement: "#servicesTitle1",
                    duration: 150,
                    triggerHook: 0.43
                })
                .setTween(TweenMax.from('#iconsParallax1', 0.01, {top: '47px'}))
                .addTo(this.controller)

                let scene2 = new ScrollMagic.Scene({
                    triggerElement: "#servicesTitle1",
                    duration: 150,
                    triggerHook: 0.43
                })
                .setTween(TweenMax.to('#icons1', 0.01, {top: '0'}))
                .addTo(this.controller)

                let scene3 = new ScrollMagic.Scene({
                    triggerElement: "#servicesTitle2",
                    duration: 265,
                    triggerHook: 0.5
                })
                .setTween(TweenMax.from('#iconsParallax2', 0.01, {top: '100px'}))
                .addTo(this.controller)

                let scene4 = new ScrollMagic.Scene({
                    triggerElement: "#servicesTitle2",
                    duration: 265,
                    triggerHook: 0.5
                })
                .setTween(TweenMax.to('#icons2', 0.01, {top: '0'}))
                .addTo(this.controller)
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_frisboVariables.scss';

    #servicesIcons {
        // margin-top: 80px;
    }
    .icons {
        display: flex;
        position: relative;
        flex-wrap: wrap;
        .icon {
            // max-width: 25%;
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: 25%;
            margin: 40px auto 0;
        }
        img {
            max-width: 120px;
        }
        p {
            max-width: 250px;
            margin: 15px auto 0;
            font-size: 15px;
            font-weight: 700;
            color: $grey;
            line-height: 1.2;
        }
    }
    h4 {
        font-weight: 700;
        font-size: 30px;
        text-align: center;
        margin-top: 80px;
        color: $grey;
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
    #iconsParallax2 {
        text-align: right;

    }

    @media screen and (min-width: 1200px) {
        h1 {
            display: block;
        }
        h4 {
            display: none;
        }
        #icons1 {
            top: -47px;
        }
        #icons2 {
            top: -100px;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {

    }
    @media screen and (min-width: 768px) and (max-width: 991px) {

    }
    @media screen and (min-width: 544px) and (max-width: 991px) {
        .icons {
            .icon {
                flex-basis: 50%;
                // flex-grow: 0;
                // flex-shrink: 0;
            }
        }
    }
    @media screen and (min-width: 970px) and (max-width: 991px) {

    }
    @media screen and (max-width: 543px) {
        .icons {
            .icon {
                flex-basis: 100%;
            }
        }
    }

    @media screen and (min-width: 1200px) {
        #servicesIcons {
            max-width: 1140px;
            margin: auto;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        #servicesIcons {
            max-width: 940px;
            margin: auto;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        #servicesIcons {
            max-width: 720px;
            margin: auto;
        }
    }
    @media screen and (min-width: 544px) and (max-width: 767px) {
        #servicesIcons {
            max-width: 576px;
            margin: auto;
        }
    }
</style>
