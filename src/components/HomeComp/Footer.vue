<template lang="html">
    <footer class="bm">
        <a href="#home" v-smooth-scroll="{duration: 1700}"><div class="arrow"></div></a>
        <p>Bogdan Mihaileanu <span>&#169; 2018</span> </p>
    </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    @import '~styles/_variables.scss';
    @import '~styles/_mixins.scss';


    footer {
        width: 100%;
        font-size: 80%;
        background: #1E242C;
        height: 120px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            margin: 0;
            color: #8795A1;
        }
        span {
            color: $home-color;
        }
        a {
            cursor: pointer;
            text-decoration: none;
            width: 36px;
            height: 36px;
            position: absolute;
            top: -18px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 400%;
            color: white;
            .arrow {
                display: block;
                width: 36px;
                height: 36px;
                background: url('~assets/arrow.png') 50% 50% no-repeat;
                background-size: cover;
                transform: rotate(180deg);
            }
        }
    }

    @include mediaQuery(1024px) {
        footer {
            a {
                .arrow {
                    display: block;
                    width: 36px;
                    height: 36px;
                    background: url('~assets/arrow.png') 50% 50% no-repeat;
                    background-size: cover;
                    transform: rotate(180deg);
                    &:hover {
                        background: url('~assets/arrow_red.png') 50% 50% no-repeat;
                        background-size: cover;
                    }
                }
            }
        }
    }
</style>
