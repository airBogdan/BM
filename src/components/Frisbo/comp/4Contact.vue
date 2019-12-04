<template lang="html">
    <div id="contactOutter">
        <div id="contact">
            <div id="greenBar"></div>

            <div id="contactInner">
                <div id="formDiv">
                    <form @submit.prevent="formSubmit">
                        <label for="name">Nume</label>
                        <input type="text" id="name" v-model="name">
                        <p class="errorMessage" v-if="$v.name.$invalid && $v.name.$dirty">Introduceti un nume cu cel putin 3 caractere</p>
                        <!-- <p>{{$v.name}}</p> -->

                        <label for="email">E-mail</label>
                        <input type="email" id="email" v-model="email">
                        <p class="errorMessage" v-if="$v.email.$invalid && $v.email.$dirty">Introduceti o adresa de email valida</p>
                        <!-- <p>{{$v.email}}</p> -->

                        <label for="phone">Telefon</label>
                        <input type="tel" id="phone" v-model="phone">
                        <p class="errorMessage" v-if="$v.phone.$invalid && $v.phone.$dirty">Introduceti minimum 5 cifre</p>
                        <!-- <p>{{$v.phone}}</p> -->

                        <label for="details">Detalii</label>
                        <textarea name="name" rows="10" cols="80" id="details" v-model="message"></textarea>
                        <p class="errorMessage" v-if="$v.message.$invalid && $v.message.$dirty">Introduceti minimum 5 caractere</p>
                        <!-- <p>{{$v.message}}</p> -->

                        <p>Următoarele date sunt preluate cu scopul de a putea lua legătura cu tine.
                            <span @click="listIsShown=!listIsShown"> <strong>Vezi datele</strong></span>
                        </p>

                        <ul v-show="listIsShown">
                            <li>Nume</li>
                            <li>Email</li>
                            <li>Telefon</li>
                        </ul>

                        <div id="checkboxDiv">
                            <input type="checkbox" id="checkbox" v-model='checkbox' @change="$v.checkbox.$touch()">
                            <label for="checkbox">Sunt de acord</label>
                        </div>
                        <p class="errorMessage" v-if="$v.checkbox.$dirty && !$v.checkbox.$model">Ca sa puteti continua, trebuie sa fiti de acord cu..</p>
                        <!-- <p>{{$v.checkbox}} </p> -->

                        <vue-recaptcha sitekey="6LcdSKUUAAAAAL76Zd0Bb0DZiw3JYCQWU7hUJqdX" @verify="captcha($event)"></vue-recaptcha>
                        <p class="errorMessage" v-if="showCaptcha">Bifati casuta de deasupra</p>
                        <!-- <div class="g-recaptcha" id="g-recaptcha" data-sitekey="6LcdSKUUAAAAAL76Zd0Bb0DZiw3JYCQWU7hUJqdX"></div> -->
                        <!-- </div> -->
                        <!-- <p>{{$v.captchaVar}}</p> -->

                        <button type="submit" name="button" :class="{disabledButton: $v.$invalid}">Trimite</button>
                    </form>
                </div>
                <div id="text">
                    <h2>Contact</h2>
                    <p>
                    Completează adresa ta de email şi te vom contacta pentru a primi o ofertă dedicată.
                    <br><br>
                    <strong>Email: frisbo@frisbo.ro</strong>
                    <br><br>
                    <strong>Număr de contact: 0377.100.905</strong>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { required, email, numeric, minLength } from 'vuelidate/lib/validators'
    import VueRecaptcha from 'vue-recaptcha';

    export default {
        data() {
            return {
                listIsShown: false,
                name: '',
                email: '',
                phone: '',
                message: '',
                checkbox: '',
                captchaVar: '',
                showCaptcha: false,
                width: document.documentElement.clientWidth,
            }
        },
        methods: {
            captcha(response) {
                this.captchaVar = response
            },
            formSubmit() {
                this.$v.$touch()
                if (this.captchaVar=="") this.showCaptcha = true
            }
        },
        validations: {
            email: {
                req: required,
                mail: email
            },
            name: {
                req: required,
                minLen: minLength(3)

            },
            phone: {
                req: required,
                num: numeric,
                minLen: minLength(6)
            },
            message: {
                req: required,
                minLen: minLength(5)
            },
            checkbox: {
                req: required
            },
            captchaVar: {
                req: required
            }
        },
        components: {
            VueRecaptcha
        },
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_frisboVariables.scss';

    #contactOutter {
        position: relative;
        margin-top: 120px;
    }
    #contact {
        padding: 0 15px;
    }
    #contactInner {
        // width: 100%;
        display: flex;
        // align-items: center;
    }
    #greenBar {
        position: absolute;
        right: 0px;
        background: $green;
        height: 350px;
        width: 65%;
        z-index: 1;
        margin-top: 134px;
    }
    #text {
        width: 40%;
        z-index: 2;
        color: white;
        text-align: left;
        margin-top: 134px;
        p {
            margin-top: 15px;
            font-size:  13px;
        }
        h2 {
            font-size: 30px;
            font-weight: 700;
            margin-top: 60px;
        }
    }
    #formDiv {
        z-index: 2;
        margin: 0 auto 0 auto;
        form {
            z-index: 2;
            background: white;
            padding: 20px 40px 20px;
            max-width: 325px;
            border-radius: 10px;
            box-shadow: 8px 20px 56px -2px rgba(0,0,0,.3);
            p {
                font-size: 14px;
                color: $grey;
                text-align: left;
                margin: 10px 0 0;
            }
            ul {
                padding-left: 40px;
                margin-bottom: 30px;
            }
            li {
                text-align: left;
                font-size: 14px;
                color: $grey;
            }
        }
        label {
            display: block;
            text-align: left;
            margin-top: 40px;
            font-size: 13px;
            font-weight: 700;
            color: $grey;
            &:first-child {
                margin-top: 70px;
            }
        }
        input[type="text"], textarea, input[type="tel"], input[type="email"] {
            margin-top: 15px!important;
            width: 100%;
            line-height: 1.5;
            padding: 6px;
            border-radius: 6px;
            border: 1px solid $grey;
            outline: none;
            resize: vertical;
            color: $grey;
            box-sizing: border-box;
        }
        p {
            margin: 10px 0 25px 0;
            span {
                cursor: pointer;
            }
        }
        #checkboxDiv {
            text-align: left;
            margin-bottom: 15px;
            margin-top: 30px;
            font-size: 13px;
            color:$grey;
            font-weight: 700;
            input {
                margin-right: 25px;
            }
            label {
                display: inline-block;
                margin: 0;
            }
        }
        button {
            margin-top: 30px;
            outline: none;
            border: none;
            background: $green;
            color: white;
            padding: 12px 22px;
            border-radius: 18px;
            font-size: 17px;
            font-family: Open Sans,sans-serif;
            cursor: pointer;
            &:hover {
                background: rgb(40, 186, 100);
            }
        }
        .disabledButton {
            // cursor: not-allowed;
        }
        .errorMessage {
            margin-bottom: 10px;
            color: red;
        }
    }
    // iframe[Atributes style] {
        // width: 200px!important;
    // }

    @media screen and (min-width: 1200px) {
        #formDiv {
            width: 60%;
        }
        #text {
            p {
                font-size: 14px;
            }
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        #formDiv {
            width: 50%;
        }
    }
    @media screen and (max-width: 991px) {
        #contactInner {
            flex-direction: column-reverse;
        }
        #greenBar {
            width: 100%;
            margin-top: 0px;
        }
        #text {
            width: 100%;
            text-align: center;
            margin-top: 40px;
            margin-bottom: 40px;
        }
        #formDiv {
            width: 100%;
            form {
                margin: auto;
            }
        }
    }
    @media screen and (max-width: 390px) {
        #formDiv {
            form {
                padding: 20px 10px 20px;
            }
        }
    }

    @media screen and (min-width: 1200px) {
        #contact {
            max-width: 1140px;
            margin: auto;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        #contact {
            max-width: 940px;
            margin: auto;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        #contact {
            max-width: 720px;
            margin: auto;
        }
    }
    @media screen and (min-width: 544px) and (max-width: 767px) {
        #contact {
            max-width: 576px;
            margin: auto;
        }
    }

</style>
