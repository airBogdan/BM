<template lang="html">
    <header class="mainPoster" id='mainPoster'>
        <span>Hello, I am <span class="name">Bogdan Mihaileanu</span>.</span>
        <span>I'm a front end web developer.</span>
        <span style="font-size: 90%; margin-top: 15px">(this website is work in progress)</span>
        <a href="#about" v-smooth-scroll="{duration: 1700}">
            <img src="~assets/arrow_red.png" alt="" class="arrowRed">
            <img src="~assets/arrow.png" alt="" class="arrow">
        </a>
    </header>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_variables.scss';
    @import '~styles/_mixins.scss';

    #mainPoster {
        background: url('~assets/filler.jpg') no-repeat 50% 50%;
        background-size:cover;
        background-attachment: fixed;
        -webkit-background-size: cover;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        span {
            color: white;
            margin: 0;
            text-align: center;
            padding-top: 5px;
            font-size: 200%;
            line-height: 45px;
        }
        .name {
            font-size: 113%;
            color: $home-color;
        }
        a {
            text-decoration: none;
            color: white;
            height: 40px;
            width: 40px;
            padding: 5px;
            margin-top: 60px;
            position: relative;
            img {
                position: absolute;
                left: 0;
                right: 0;
                -webkit-transition: opacity 0.25s ease-in-out;
                -moz-transition: opacity 0.25s ease-in-out;
                -o-transition: opacity 0.25s ease-in-out;
                transition: opacity 0.25s ease-in-out;
            }
            .arrow {
                opacity: 0;
            }
        }
    }

    @include mediaQuery(200px, 768px) {
        #mainPoster {
            background-attachment: scroll;
        }
    }
    @include mediaQuery(1024px) {
        #mainPoster {
            a {
                .arrowRed {
                    opacity: 0;
                }
                .arrow {
                    opacity: 1;
                    transform: rotate(270deg);
                }
                &:hover {
                    .arrow {
                        opacity: 0;
                    }
                    .arrowRed {
                        opacity: 1;
                    }
                }
            }

        }
    }
</style>
