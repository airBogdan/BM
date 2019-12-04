<template lang="html">
    <section id="mainWork">
        <h2>Projects</h2>
        <div class="underline"></div>
        <div class="projects">
            <div class="leftCards">
                <router-link class="calendar1" tag="a" to="/EventCalendar1" id="calendar1">
                </router-link>

                <router-link tag="a" class="classes" to="/classes">
                </router-link>

                <router-link tag="a" id="authentication" :to="{name: 'CRUD'}">
                    CRUD type app wtith sign-up / login
                    <!-- <span>CRUD = create read update delete</span> -->
                </router-link>
            </div>

            <router-link class="calendar2" tag="a" to="/EventCalendar2">
            </router-link>

            <router-link class="frisbo" tag="a" to="/frisbo">
            </router-link>

            <a class="inactive">
                <p>Coming soon</p>
            </a>
        </div>
    </section>
</template>

<script>

    export default {
        methods: {
            scrollFn() {
                var scrollPosY = window.pageYOffset
                var calendar1 = document.getElementById('calendar1')
                var calendar1Pos = calendar1.getBoundingClientRect().top
                // var work = document.getElementById('work')
                // var workPos = work.getBoundingClientRect().top
                var windowHeight = document.documentElement.clientHeight
                var elementPositionBottom = calendar1Pos-(windowHeight*0.75)
                // if (elementPositionBottom<0) {
                //     calendar1.classList.remove('calendar1')
                // }
                // else {
                //     calendar1.classList.remove('addedClass')
                // }
            }
        },
        created() {
            document.addEventListener('scroll', this.scrollFn)
        },
        destroyed () {
            document.removeEventListener('scroll', this.scrollFn);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_variables.scss';
    @import '~styles/_mixins.scss';

    #mainWork {
        background: $workBack;
        display: flex;
        flex-direction: column;
        align-items:center;
        font-size: 20pt;
        padding-top: 60px;
        padding-bottom: 60px;
        h2 {
            margin: 10px 0 10px 0;
            display: flex;
            justify-content: center;
            font-size: 40pt;
        }
        .underline {
            display: inline-block;
            height: 5px;
            width: 115px;
            background: black;
            margin-bottom: 100px;
        }
        .projects {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            .leftCards {
                display: flex;
                flex-direction: column;
            }
            .calendar1 {
                background: url('~assets/calendar1.jpg') 50% 50% no-repeat;
                box-shadow: 1px 2px 12px black;
                background-size: cover;
                height: 224px;
                width: 500px;
                box-sizing: border-box;
            }
            .classes {
                background: url('~assets/fitness.png') ;
                background-size: contain;
                box-shadow: 1px 2px 12px black;
                background-size: cover;
                height: 520px;
                width: 400px;
                box-sizing: border-box;
            }
            .frisbo {
                background: black ;
                background-size: contain;
                box-shadow: 1px 2px 12px black;
                background-size: cover;
                height: 520px;
                width: 400px;
                box-sizing: border-box;
            }
            #authentication {
                height: 100px;
                width: 500px;
                border: 3px solid black;
                background-color: white;
                text-decoration: none;
                color: black;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .calendar2 {
                background: url('~assets/calendar2.jpg') 50% 50% no-repeat;
                box-shadow: 1px 2px 12px black;
                background-size: cover;
                height: 650px;
                width: 354px;
            }

            .inactive {
                display: flex;
                align-items: center;
                justify-content: center;
                background: lighten($home-color, 15);
                opacity: 0.4;
                cursor: not-allowed;
                height: 100px;
                box-shadow: 1px 2px 22px black;
            }
        }
    }

    @include mediaQuery(200px, 500px) {
        #mainWork {
            .projects {
                justify-content: center;
                a {
                    margin: 0 auto 50px auto;
                }
                .leftCards {
                    width: 100%;
                }
                .calendar1 {
                    background: url('~assets/calendar1.jpg') 20% 50% no-repeat;
                    box-shadow: 1px 2px 17px black;
                    background-size: cover;
                    height: 200px;
                    // height: 156px;
                    width: 99%;
                    // width: 350px;
                    box-sizing: border-box;
                }
                .classes {
                    height: 200px;
                    width: 99%;
                }
                #authentication {
                    width: 99%;
                }
                .calendar2 {
                    background: url('~assets/calendar2.jpg') 35% 50% no-repeat;
                    box-shadow: 1px 2px 17px black;
                    background-size: cover;
                    // height: 650px;
                    // width: 354px;
                    height: 551px;
                    width: 300px;
                }
                .inactive {
                    height: 120px;
                    width: 300px;
                }
            }
        }
    }
    @include mediaQuery(500px, 630px) {
        #mainWork {
            .projects {
                flex-direction: column;
            }
            a {
                height: 120px;
                width: 350px;
                margin: 0 auto 50px auto;
            }
        }
    }
    @include mediaQuery(630px, 768px) {
        #mainWork {
            .projects {
                flex-direction: column;
            }
            a {
                width: 350px;
                height: 120px;
                margin: 0 auto 50px auto;
            }
        }
    }
    @include mediaQuery(768px, 1024px) {
        #mainWork {
            .projects {
                max-width: 900px;
                flex-direction: column;
                margin: auto;
            }
            a {
                width: 42%;
                height: 120px;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 50px;
            }

            .calendar1:hover, .calendar2:hover, .classes:hover, #authentication:hover {
                transform: scale(1.1);
                transition-duration: 0.3s;
            }
        }
    }
    @include mediaQuery(1024px) {
        #mainWork {
            .projects {
                width: 900px;
                margin: auto;
            }
            a {
                width: 45%;
                height: 115px;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 50px;
            }
            .calendar1:hover, .calendar2:hover, .classes:hover, #authentication:hover{
                transform: scale(1.1);
                transition-duration: 0.3s;
            }
        }
    }
</style>
