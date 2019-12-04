<template lang="html">
    <nav role="navigation">
        <div class="burgerMenu" @click="show=!show">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <ul class="dropdown" v-if="show">
            <li><a href="#home" @click="show=!show" v-smooth-scroll="{duration: 1700}">Home</a></li>
            <li><a href="#about" @click="show=!show" v-smooth-scroll="{duration: 1700}">About</a></li>
            <li><a href="#work" @click="show=!show" v-smooth-scroll="{duration: 1700}">Work</a></li>
            <li><a href="#contact" @click="show=!show" v-smooth-scroll="{duration: 1700}">Contact</a></li>
            <li><router-link id="suggestions" to="/suggestions" tag="a">Suggestions</router-link></li>
        </ul>
        <div class="menuDesktop">
            <div class="leftNavigation">
                <router-link id="suggestions" to="/suggestions" tag="a">Suggestions</router-link>
            </div>
            <div class="rightNavigation">
                <a href="#home" @click="show=!show" v-smooth-scroll="{duration: 1700}">Home</a>
                <a href="#about" @click="show=!show" v-smooth-scroll="{duration: 1700}">About</a>
                <a href="#work" @click="show=!show" v-smooth-scroll="{duration: 1700}">Work</a>
                <a href="#contact" @click="show=!show" v-smooth-scroll="{duration: 1700}">Contact</a>

            </div>
        </div>
    </nav>

</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_variables.scss';
    @import '~styles/_mixins.scss';

nav {
    height: 53px;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 2;
    background: black;
    border-bottom: 3px solid $home-color;
    padding: 3px 0 3px 0;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    .menuDesktop {
        display: flex;
        justify-content: space-between;
    }
    a {
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        &:hover {
            color: $home-color;
        }
    }
    .burgerMenu {
        padding: 7px 20px 7px 0;
        cursor: pointer;
        .line {
            width: 38px;
            height: 5px;
            background-color: white;
            margin: 6px 0;
            transition: 0.4s;
        }
    }
    #suggestions {

    }
    ul {
        display: block;
        width: 100%;
        background-color: #333;
        z-index: 1;
        list-style-type: none;
        position: absolute;
        top: 61px;
        margin:0;
        padding: 10px 0;
        li {
            cursor: pointer;
            padding: 10px 0 12px 0;
            margin: 0 20px;
            &:last-child {
                border-top: 1px solid white;
            }
        }
        li:hover > a {
            color: $home-color;
        }
        a {
            outline: none;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 110%;
            margin: 0;
            color: white;
            width: 100%;
            display: flex;
            justify-content: flex-end;
        }
    }
}

    @include mediaQuery(250px, 630px) {
        nav {
            .menuDesktop {
                display: none;
            }

        }
    }
    @include mediaQuery(630px, 768px) {
        .burgerMenu, ul.dropdown {
            display: none;
        }
        nav {
           justify-content: center;
           align-items: center;
            .menuDesktop {
                max-width: 768px;
                width: 100%;
                min-width: 630px;
                .leftNavigation {
                    padding-left: 15px;
                }
                .rightNavigation {
                    padding-right: 15px;
                }
            }
            a {
                font-size: 112%;
                padding: 0 10px 0 10px;
            }
        }
    }
    @include mediaQuery(768px, 1024px) {
        .burgerMenu, ul.dropdown {
            display: none;
        }
        nav {
            justify-content: center;
            align-items: center;
            .menuDesktop {
                max-width: 1024px;
                width: 90%;
                min-width: 768px;
                .leftNavigation {
                    padding-left: 45px;
                }
                .rightNavigation {
                    padding-right: 45px;
                }
            }
            a {
                font-size: 118%;
                padding: 0 16px 0 16px;
            }
        }
    }
    @include mediaQuery(1024px) {
        .burgerMenu, ul.dropdown {
            display: none
        }
        nav {
            justify-content: center;
            align-items: center;
            flex-direction: row;
            .menuDesktop {
                max-width: 1300px;
                width: 1300px;
                min-width: 1024px;
                .leftNavigation {
                    padding-left: 70px;
                }
                .rightNavigation {
                    padding-right: 70px;
                }
            }
            a {
                font-size: 123%;
                padding: 0 25px 0 25px;
            }
        }
    }

</style>
