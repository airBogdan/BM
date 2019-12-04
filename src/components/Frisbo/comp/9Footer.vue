<template lang="html">
    <div id="footer">
        <div id="links">
            <router-link :to="{ name: ''}" tag="a">Cum funcționează</router-link>
            <router-link :to="{ name: ''}" tag="a">În presă</router-link>
            <router-link :to="{ name: ''}" tag="a">Contact</router-link>
            <router-link :to="{ name: ''}" tag="a">Termeni și condiții</router-link>
            <router-link :to="{ name: ''}" tag="a">Politică de confidențialitate</router-link>
            <router-link :to="{ name: ''}" tag="a">Cookie Policy</router-link>
        </div>
        <div id="socialLogoCopyright">
            <span id="copyright">© 2019 Frisbo. Toate drepturile rezervate. </span>

            <div id="socialIcons">
                <a href="https://www.facebook.com/Frisbo-174850309383880" id="fb" target="_blank">
                </a>
                <a href="https://www.linkedin.com/company/frisbo" id="in" target="_blank">
                </a>
            </div>

            <router-link :to="{ name: 'home'}" tag="a" id="footerLogo">
                <img src="~assets/frisbo/frisbo-logo.png" height="45px" width="120px" alt="frisbo-logo">
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_frisboVariables.scss';

    #footer {
        margin-top: 80px;
        padding: 0 15px;
        box-sizing: border-box;
    }
    #links, #socialLogoCopyright {
        display: flex;
        justify-content: space-between;
        color: $grey;
    }

    #links {
        padding: 60px 0 15px 0;
        border-top: 1px solid #d7d2d2;
        a {
            text-decoration: none;
            color: $grey;
            outline: none;
            font-size: 15px;
            &:hover {
                color: $green;
            }
        }
    }

    #socialLogoCopyright {
        padding: 50px 0 40px 0;
        #copyright {
            font-size: 13px;
        }
        #socialIcons {
            display: flex;
        }
        a {
            height: 23px;
            width: 23px;
            display: block;
            margin: 0 15px;
        }
        #fb {
            background-image: url("~assets/frisbo/social/facebook_grey.png");
            background-size: 23px 23px;
            &:hover {
                background-image: url("~assets/frisbo/social/facebook_green.png");

            }
        }
        #in {
            background-image: url("~assets/frisbo/social/linkedin.png");
            background-size: 23px 23px;
            &:hover {
                background-image: url("~assets/frisbo/social/linkedin green.png");

            }
        }
        #footerLogo {
            width: 120px;
        }
    }

    @media screen and (max-width: 991px) {
        #links {
            flex-wrap: wrap;
            a {
                flex-basis: 49%;
                margin-top: 15px;
            }
        }
        #socialLogoCopyright {
            flex-direction: column-reverse;
            align-items: center;
            padding: 0;
            #footerLogo {
                display: none;
            }
            #socialIcons {
                margin-top: 40px;
            }
            #copyright {
                margin: 40px 0;
            }
        }
    }

    @media screen and (min-width: 1200px) {
        #footer {
            max-width: 1140px;
            margin: auto;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        #footer {
            max-width: 940px;
            margin: auto;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        #footer {
            max-width: 720px;
            margin: auto;
        }
    }
    @media screen and (min-width: 544px) and (max-width: 767px) {
        #footer {
            max-width: 576px;
            margin: auto;
        }
    }
</style>
