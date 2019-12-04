<template lang="html">
    <div id="priceCalculatorOutter">
        <div id="priceCalculator">
            <div id="greenBar"></div>

            <div id="text">
                <h2>Calculează prețul</h2>
                <p>Îți punem la dispoziție un sistem de pricing scalabil, adaptat dimensiunii afacerii tale. Costurile de e-fulfillment includ un preț fix și o serie de costuri variabile în funcție de numărul de comenzi procesate sau de cantitatea de produse depozitate de către noi. Calculul este valabil pentru comenzi de până în 3kg.</p>
            </div>
            <div id="calc">
                <div id="insideCalc">
                    <h5>Trage cursoarele stânga-dreapta</h5>
                    <h5>Depozitare</h5>

                    <div class="box">
                        <div class="innerBox">
                            {{computedSku}}
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progressInner">
                        </div>
                    </div>
                    <input type="range" min="0" max="100" step="0.1" v-model="sku" @input="skuFn">
                    <p>SKU / lună</p>

                    <div class="box">
                        <div class="innerBox">
                            {{computedM3}}
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progressInner">
                        </div>
                    </div>
                    <input type="range" min="0" max="100" step="0.1" v-model="m3" @input="m3Fn">
                    <p>m3 / lună</p>

                    <h5>Procesare Comenzi</h5>

                    <div class="box">
                        <div class="innerBox">
                            {{computedOrders}}
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progressInner">
                        </div>
                    </div>
                    <input type="range" min="0" max="100" step="0.1" v-model="orders" @input="ordersFn">
                    <p>Comenzi / lună</p>

                    <div class="box">
                        <div class="innerBox">
                            {{computedItems}}
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progressInner">
                        </div>
                    </div>
                    <input type="range" min="0" max="100" step="0.1" v-model="items" @input="piecesFn">
                    <p>Bucăti / comandă</p>

                    <div class="box">
                        <div class="innerBox">
                            {{computedReturns}}
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progressInner">
                        </div>
                    </div>
                    <input type="range" min="0" max="100" step="0.1" v-model="returns" @input="returnsFn">
                    <p>Retururi / lună</p>

                    <h5>Total</h5>
                    <h5 id="totalCost">{{totalCost}} €  / lună</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sku: 49.3,
                m3: 10,
                orders: 46.4,
                items: 40,
                returns: 29,

            }
        },
        computed: {
            computedSku() {
                if (this.sku==0) return 0
                else return Math.round(Math.exp((Math.log(3000)/100) * this.sku))
            },
            computedM3() {
                if (this.m3==0) return 0
                else return Math.round(Math.exp((Math.log(300)/100) * this.m3))
            },
            computedOrders() {
                if (this.orders==0) return 0
                else return Math.round(Math.exp((Math.log(30000)/100) * this.orders))
            },
            computedItems() {
                if (this.items==0) return 0
                else return Math.round(Math.exp((Math.log(50)/100) * this.items))
            },
            computedReturns() {
                if (this.returns==0) return 0
                else return Math.round(Math.exp((Math.log(3000)/100) * this.returns))
            },
            totalCost() {
                // return parseFloat(150.00).toFixed(2)
                if ((this.sku*2.5 + this.m3*0.9 + this.orders*1 + this.items*1.1 + this.returns*1.2)<=150) return parseFloat(150.00).toFixed(2)
                else return parseFloat(this.sku*2.5 + this.m3*0.9 + this.orders*1 + this.items*1.1 + this.returns*1.2).toFixed(2)
            }
        },
        methods: {
            skuFn() {
                var innerBox = document.querySelectorAll('.innerBox')
                var progress = document.querySelectorAll('.progressInner')
                innerBox[0].style.left = progress[0].style.width = this.sku +"%"

                var box = document.querySelectorAll('.box')
                var innerBoxWidth = innerBox[0].offsetWidth
                var widthDisplacement = (innerBoxWidth-23)/2
                box[0].style.width = "calc(100% - " + Number(innerBoxWidth - widthDisplacement) + "px)"

            },
            m3Fn() {
                var innerBox = document.querySelectorAll('.innerBox')
                var progress = document.querySelectorAll('.progressInner')
                innerBox[1].style.left = progress[1].style.width = this.m3 +"%"

                var box = document.querySelectorAll('.box')
                var innerBoxWidth = innerBox[1].offsetWidth
                var widthDisplacement = (innerBoxWidth-23)/2
                box[1].style.width = "calc(100% - " + Number(innerBoxWidth - widthDisplacement) + "px)"
            },
            ordersFn() {
                var innerBox = document.querySelectorAll('.innerBox')
                var progress = document.querySelectorAll('.progressInner')
                innerBox[2].style.left = progress[2].style.width = this.orders +"%"

                var box = document.querySelectorAll('.box')
                var innerBoxWidth = innerBox[2].offsetWidth
                var widthDisplacement = (innerBoxWidth-23)/2
                box[2].style.width = "calc(100% - " + Number(innerBoxWidth - widthDisplacement) + "px)"
            },
            piecesFn() {
                var innerBox = document.querySelectorAll('.innerBox')
                var progress = document.querySelectorAll('.progressInner')
                innerBox[3].style.left = progress[3].style.width = this.items +"%"

                var box = document.querySelectorAll('.box')
                var innerBoxWidth = innerBox[3].offsetWidth
                var widthDisplacement = (innerBoxWidth-23)/2
                box[3].style.width = "calc(100% - " + Number(innerBoxWidth - widthDisplacement) + "px)"
            },
            returnsFn() {
                var innerBox = document.querySelectorAll('.innerBox')
                var progress = document.querySelectorAll('.progressInner')
                innerBox[4].style.left = progress[4].style.width = this.returns +"%"

                var box = document.querySelectorAll('.box')
                var innerBoxWidth = innerBox[4].offsetWidth
                var widthDisplacement = (innerBoxWidth-23)/2
                box[4].style.width = "calc(100% - " + Number(innerBoxWidth - widthDisplacement) + "px)"
            },
        },
        mounted() {
            var innerBox = document.querySelectorAll('.innerBox')
            var progress = document.querySelectorAll('.progressInner')
            var box = document.querySelectorAll('.box')

            for (let i=0; i<innerBox.length; i++) {
                let innerBoxWidth = innerBox[i].offsetWidth
                let widthDisplacement = (innerBoxWidth-23)/2
                box[i].style.width = "calc(100% - " + Number(innerBoxWidth - widthDisplacement) + "px)"
            }

            innerBox[0].style.left = progress[0].style.width = this.sku +"%"
            innerBox[1].style.left = progress[1].style.width = this.m3 +"%"
            innerBox[2].style.left = progress[2].style.width = this.orders +"%"
            innerBox[3].style.left = progress[3].style.width = this.items +"%"
            innerBox[4].style.left = progress[4].style.width = this.returns +"%"
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_frisboVariables.scss';

    #priceCalculatorOutter {
        position: relative;
        margin-bottom: 150px;
    }
    #priceCalculator {
        // width: 100%;
        margin: 150px auto 150px auto;
        display: flex;
        align-items: center;
        padding: 0 15px;
        box-sizing: border-box;
    }
    #greenBar {
        position: absolute;
        // top: 0;
        left: 0px;
        background: $green;
        height: 350px;
        width: 65%;
        z-index: 1;
    }
    #text {
        width: 40%;
        z-index: 2;
        color: white;
        text-align: left;
        h2 {
            font-size: 30px;
            font-weight: 700;
        }
        p {
            font-size: 13px;
            margin-top: 15px;
        }
    }
    #calc {
        // width: 60%;
        z-index: 2;
        #insideCalc {
            // position: relative;
            z-index: 2;
            background: white;
            max-width: 330px;
            margin: 0 15px 0 auto;
            padding: 20px 40px;
            border-radius: 10px;
            box-shadow: 8px 20px 56px -2px rgba(0,0,0,.3);
        }
        p {
            text-align: left;
            font-size: 15px;
            margin: -5px 0 5px 0;
        }
        h5 {
            font-weight: 700;
            color: #78787c;
            &:first-child {
                margin-bottom: 20px;
                font-weight: bold;
                color: #9f9f9f;
                font-size: 13px;
            }
            &:nth-child(2) {
                color: #78787c;
                font-size: 15px;
            }
            &:nth-child(11) {
                margin-top: 40px;
            }
        }
        h5#totalCost {
            color: $green;
            font-size: 21px;
            font-weight: 800;
            margin-bottom: 40px;
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
        }
        .box {
            position: relative;
            // display: flex;
            height: 15px;
            // width: calc(100% - 38px);
            width: 100%;
        }
        .innerBox {
            // box-sizing: border-box;
            z-index: 5;
            background: rgba(0,0,0,0.3);
            color: white;
            min-width: 6px;
            padding: 1px 5px;
            height: 100%;
            position: absolute;
            left: 0;
            top: 6px;
            border-radius: 3px;
            font-size: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .progress {
            height: 6px;
            width: 100%;
            position: relative;
        }
        .progressInner {
            height: 100%;
            // width: 50%;
            background: $green;
            position: absolute;
            top: 23px;
            z-index: 5;
        }
    }

    @media screen and (min-width: 1200px) {
        #calc {
            width: 60%;
        }
        #text {
            p {
                font-size: 14px;
            }
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        #calc {
            width: 50%;
        }
    }
    @media screen and (max-width: 991px) {
        #priceCalculator {
            flex-direction: column;
        }
        #greenBar {
            width: 100%;
        }
        #text {
            width: 100%;
            text-align: center;
            margin-top: 40px;
            margin-bottom: 40px;
        }
        #calc {
            width: 100%;
            #insideCalc {
                margin: auto;
            }
        }
    }


    input[type=range] {
        -webkit-appearance: none;
        width: 100%;
        width: 100%;
        -webkit-appearance: none;
        position: relative;
        overflow: hidden;
        height: 40px;
        border-radius: 0; /* iOS */
        z-index: 1;
    }
    input[type=range]:focus {
      outline: none;
    }
    input[type=range]::-webkit-slider-runnable-track {
      width: 100%;
      height: 6px;
      background: rgb(202, 204, 221);
      border-radius: 20px;
    }
    input[type=range]::-webkit-slider-thumb {
      border: 1.4px solid rgb(226, 226, 226);
      height: 21px;
      width: 21px;
      border-radius: 15px;
      -webkit-appearance: none;
      margin-top: -7.5px;
      z-index: 7;
      position: relative;
      background: url("~assets/frisbo/sliderGrey.png");
      background-position: 50% 50%;
      background-size: cover;
      &:hover {
          background: url("~assets/frisbo/sliderGreen.png");
          background-position: 50% 50%;
          background-size: cover;
      }
    }

    input[type=range]::-moz-range-track {
        width: 100%;
        height: 6px;
        background: rgb(202, 204, 221);
        border-radius: 20px;
    }
    ::-moz-range-thumb {
      border: 1.4px solid rgb(226, 226, 226);
      height: 21px;
      width: 21px;
      border-radius: 15px;
      -webkit-appearance: none;
      margin-top: -7.5px;
      position: relative;
      z-index: 7;
      background: url("~assets/frisbo/sliderGrey.png");
      background-position: 50% 50%;
      background-size: cover;
      &:hover {
          background: url("~assets/frisbo/sliderGreen.png");
          background-position: 50% 50%;
          background-size: cover;
      }
    }
    // ::-moz-range-progress {
    //     background-color: $green;
    //     height: 6px;
    // }
    ::-ms-fill-lower {
        background: dodgerblue;
    }
    ::-ms-thumb {
        background: #fff;
        border: 2px solid #999;
        height: 40px;
        width: 20px;
        box-sizing: border-box;
    }
    ::-ms-ticks-after {
        display: none;
    }
    ::-ms-ticks-before {
        display: none;
    }
    ::-ms-track {
        background: #ddd;
        color: transparent;
        height: 40px;
        border: none;
    }
    ::-ms-tooltip {
        display: none;
    }

    @media screen and (min-width: 1200px) {
        #priceCalculator {
            max-width: 1140px;
            margin: auto;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        #priceCalculator {
            max-width: 940px;
            margin: auto;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        #priceCalculator {
            max-width: 720px;
            margin: auto;
        }
    }
    @media screen and (min-width: 544px) and (max-width: 767px) {
        #priceCalculator {
            max-width: 576px;
            margin: auto;
        }
    }

</style>
