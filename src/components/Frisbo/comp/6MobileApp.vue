<template lang="html">
    <div id="mobileAppOutter">
        <div id="mobileApp">
            <div id="text">
                <h2>Aplicația Frisbo</h2>
                <p>Ai acces la stadiul comenzilor tale, văzând în timp real evoluția lor prin pașii
                    de procesare și livrare. Primești date agregate și rapoarte privind performanța
                     magazinului online, comenzi, retururi și stocuri. Facturile pot fi downloadate
                     direct din aplicație, pentru a fi importate în sistemul tău de contabilitate.
                 </p>
            </div>

            <div id="mobileIcons">
                <img src="~assets/frisbo/Apple.png" alt="">
                <img src="~assets/frisbo/Google.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_frisboVariables.scss';

    #mobileAppOutter {
        background: $green;
        margin-top: 80px;
        margin-bottom: 30px;

    }
    #mobileApp {
        display: flex;
        align-items: center;
    }
    #text {
        z-index: 2;
        color: white;
        max-width: 50%;
        text-align: left;
        font-family: Open Sans,sans-serif;
        margin: 0 15px;
        h2 {
            font-size: 30px;
            margin-top: 40px;
        }
        p {
            font-size: 14px;
            margin: 15px 0 40px;
        }
    }
    #mobileIcons {
        max-width: 50%;
        width: 50%;
        z-index: 2;
        img {
            margin: 15px;
        }
    }

    @media screen and (max-width: 991px) {
        #mobileApp {
            flex-direction: column;
        }
        #text {
            max-width: 100%;
            text-align: center;
            p {
                font-size: 13px;
            }
        }
        #mobileIcons {
            width: 90%;
            max-width: 90%;
        }
    }

    @media screen and (min-width: 1200px) {
        #mobileApp {
            max-width: 1140px;
            margin: auto;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        #mobileApp {
            max-width: 940px;
            margin: auto;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        #mobileApp {
            max-width: 720px;
            margin: auto;
        }
    }
    @media screen and (min-width: 544px) and (max-width: 767px) {
        #mobileApp {
            max-width: 576px;
            margin: auto;
        }
    }
</style>
