<template lang="html">
    <div class="shape">
        <div class="hexagon hexagon1"><div class="hexagon-in" ><div class="hexagon-in2 hex1">
            <div :class="hexIcon"></div>
        </div></div></div>
        <slot name="paragraph"></slot>
        <slot name="span"></slot>
    </div>
</template>

<script>
export default {
    props: ['hexIcon']
}
</script>

<style lang="scss" scoped>
    @import '~styles/_variables.scss';
    @import '~styles/_mixins.scss';

    .shape {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        width: (100%/2);
        margin-bottom: 40px;
        p {
            font-size: 90%;
            margin: 20px 0 8px 0;
        }
        span {
            width: 75%;
            text-align: center;
            font-size: 52%;
            margin-bottom: 30px;
        }
    }

    .hexagon {
        overflow: hidden;
        visibility: hidden;
        -webkit-transform: rotate(120deg);
           -moz-transform: rotate(120deg);
            -ms-transform: rotate(120deg);
             -o-transform: rotate(120deg);
                transform: rotate(120deg);
    }
    .hexagon1 {
        width: 150px;
        height: 75px;
        margin: 0;
    }
    .hexagon1-big {
        min-width: 320px;
        min-height: 160px;
        // width: 360px;
        // height: 180px;
        margin: 0;
    }
    .hexagon-in {
        overflow: hidden;
        width: 100%;
        height: 100%;
        -webkit-transform: rotate(-60deg);
           -moz-transform: rotate(-60deg);
            -ms-transform: rotate(-60deg);
             -o-transform: rotate(-60deg);
                transform: rotate(-60deg);
        }
    .hexagon-in2 {
        width: 100%;
        height: 100%;
        visibility: visible;
        -webkit-transform: rotate(-60deg);
           -moz-transform: rotate(-60deg);
            -ms-transform: rotate(-60deg);
             -o-transform: rotate(-60deg);
                transform: rotate(-60deg);
    }
    .hex1, .hex2, .hex3, .hex4 {
        background: $home-color;
    }

    .hexIcon1 {
        width: 100%;
        height: 100%;
        background: url('~assets/runer-silhouette-running-fast.svg') 50% 50% no-repeat;
        background-size: 33%;
    }
    .hexIcon2 {
        width: 100%;
        height: 100%;
        background: url('~assets/responsive-design-symbol.svg') 49% 50% no-repeat;
        background-size: 34%;
    }
    .hexIcon3 {
        width: 100%;
        height: 100%;
        background: url('~assets/idea.svg') 50% 50% no-repeat;
        background-size: 33%;
    }
    .hexIcon4 {
        width: 100%;
        height: 100%;
        background: url('~assets/cardiogram.svg') 50% 50% no-repeat;
        background-size: 35%;
    }

    @include mediaQuery(475px, 630px) {
            .hexagon1 {
                width: 190px;
                height: 95px;
            }
    }
    @include mediaQuery(630px, 768px) {
            .hexagon1 {
                width: 210px;
                height: 105px;
            }
    }
    @include mediaQuery(768px, 1024px) {
            .shape {
                width: (90%/4);
                margin: 0 auto 0 auto;
            }
            .hexagon1 {
                width: 180px;
                height: 90px;
            }
    }
    @include mediaQuery(1024px) {
            .shape {
                width: (85%/4);
                margin: 0 auto 0 auto;
            }
            .hexagon1 {
                width: 220px;
                height: 110px;
            }
    }
</style>
