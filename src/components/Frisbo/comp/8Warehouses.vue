<template lang="html">
    <div id="warehouses">
        <div class='warehouseTitle'>
            <h1 id="warehouseParallax">DEPOZITE</h1>
        </div>

        <h4>Depozite</h4>

        <!-- <div id="mapnPins"> -->
        <div id="mapContainer">
            <img :src="map" alt="" id="map">
            <div id="pins">
            <p id="clujText">Depozit Cluj</p>
            <img src="~assets/frisbo/map/Map pin.png" alt="" class="pin" id="clujPin">

            <p id="bratislavaText">Depozit Bratislava</p>
            <img src="~assets/frisbo/map/Map pin.png" alt="" class="pin" id="bratislavaPin">

            <p id="chisinauText">Depozit Chișinău</p>
            <img src="~assets/frisbo/map/Map pin.png" alt="" class="pin" id="chisinauPin">

            <p id="brasovText">Depozit Brașov</p>
            <img src="~assets/frisbo/map/Map pin.png" alt="" class="pin" id="brasovPin">

            <p id="bodText">Depozit Bod</p>
            <img src="~assets/frisbo/map/Map pin.png" alt="" class="pin" id="bodPin">

            <p id="bufteaText">Depozit Buftea</p>
            <img src="~assets/frisbo/map/Map pin.png" alt="" class="pin" id="bufteaPin">

            <p id="otopeniText">Depozit Otopeni</p>
            <img src="~assets/frisbo/map/Map pin.png" alt="" class="pin" id="otopeniPin">

            <p id="vamaBucurestiText">Depozit Vama București</p>
            <img src="~assets/frisbo/map/Map pin.png" alt="" class="pin" id="vamaBucurestiPin">

            <p id="mogosoaiaText">Depozit Mogoșoaia</p>
            <img src="~assets/frisbo/map/Map pin.png" alt="" class="pin" id="mogosoaiaPin">

            <p id="giurgiuText">Depozit Giurgiu</p>
            <img src="~assets/frisbo/map/Map pin.png" alt="" class="pin" id="giurgiuPin">
        </div>
        </div>
        <!-- </div> -->


    </div>
</template>

<script>
    import ScrollMagic from 'scrollmagic'
    export default {
        data() {
            return {
                width: document.documentElement.clientWidth,
                controller: new ScrollMagic.Controller(),
                width: document.documentElement.clientWidth,
            }
        },
        methods: {
            windowResize() {
                this.width = document.documentElement.clientWidth
            }
        },
        mounted() {
            window.addEventListener('resize', this.windowResize)

            if (this.width>=1200) {
                let scene3 = new ScrollMagic.Scene({
                    triggerElement: ".warehouseTitle",
                    duration: 500,
                    triggerHook: 0.5355
                })
                .setTween(TweenMax.from('#warehouseParallax', 0.01, {top: '120px'}))
                .addTo(this.controller)

                let scene4 = new ScrollMagic.Scene({
                    triggerElement: ".warehouseTitle",
                    duration: 500,
                    triggerHook: 0.5355
                })
                .setTween(TweenMax.from('#mapContainer', 0.01, {top: '-120px'}))
                .addTo(this.controller)

            }
        },
        destroyed() {
            window.removeEventListener('resize', this.windowResize)
        },
        computed: {
            map() {
                if (this.width>=1200) return require("./../../../assets/frisbo/map/Map.png")
                else return "https://www.frisbo.ro/wp-content/uploads/2019/03/mobile-warehouse-ro.png"
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_frisboVariables.scss';

    #warehouses {
        position: relative;
    }
    #mapContainer {
        position: relative;
    }
    #pins {
        display: none;
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
        #map {
            width: 800px;
            margin: 40px auto 0;
        }
        #pins {
            display: block;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        #map {
            width: 60%;
            margin: 15px auto 0;
        }
    }
    @media screen and (max-width: 991px) {
        #map {
            width: 100%;
            margin: 15px auto 0;
        }
        #mapContainer {
            padding: 0 15px;
        }
    }

    .pin {
        height: 21px;
        position: absolute;
    }
    p {
        position: absolute;
        font-size: 15px;
        font-weight: 800;
        max-width: 170px;
        opacity: 0.8;
    }
    #clujPin {
        top: 190px;
        right: 700px;
    }
    #clujText {
        top: 192px;
        right: 725px;
    }

    #bratislavaPin {
        top: 85px;
        right: 975px;
    }
    #bratislavaText {
        top: 87px;
        right: 830px;
    }

    #chisinauPin {
        top: 145px;
        right: 232px;
    }
    #chisinauText {
        top: 147px;
        right: 97px;
    }

    #brasovPin {
        top: 332px;
        right: 527px;
    }
    #brasovText {
        top: 333px;
        right: 550px;
    }

    #bodPin {
        top: 332px;
        right: 494px;
    }
    #bodText {
        top: 333px;
        right: 397px;
    }

    #bufteaPin {
        top: 444px;
        right: 471px;
    }
    #bufteaText {
        top: 443px;
        right: 497px;
    }

    #otopeniPin {
        top: 447px;
        right: 454px;
    }
    #otopeniText {
        top: 448px;
        right: 325px;
    }

    #vamaBucurestiPin {
        top: 472px;
        right: 450px;
    }
    #vamaBucurestiText {
        top: 475px;
        right: 304px;
    }

    #mogosoaiaPin {
        top: 465px;
        right: 477px;
    }
    #mogosoaiaText {
        top: 466px;
        right: 500px;
    }

    #giurgiuPin {
        top: 520px;
        right: 480px;
    }
    #giurgiuText {
        top: 520px;
        right: 502px;
    }

    @media screen and (min-width: 1200px) {
        #warehouses {
            max-width: 1140px;
            margin: auto;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        #warehouses {
            max-width: 940px;
            margin: auto;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        #warehouses {
            max-width: 720px;
            margin: auto;
        }
    }
    @media screen and (min-width: 544px) and (max-width: 767px) {
        #warehouses {
            max-width: 576px;
            margin: auto;
        }
    }
</style>
