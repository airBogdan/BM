<template lang="html">
    <div class="suggestionsContainer">
        <div class="titleAndForm">
            <div class="title">
                <h2>Suggestions page</h2>
                <div class="underline"></div>
                <p>
                    This section is for anyone who wants to leave any comments or suggestions, anonymously or not.
                </p>
                <p>
                    These messages are public and can be deleted or modified only by me. If you want to leave me a private message,
                    do so in the contact form in the main page. Thank you!
                </p>
            </div>
            <form @submit.prevent="submitForm">
                <input type="text" placeholder="Name / organization (optional)" v-model='name'>
                <textarea rows="10" cols="80" placeholder="Message" v-model="message" required="true"></textarea>
                <button>Submit</button>
            </form>
        </div>

        <div class="comments">
            <div id="commentCard" v-for="post in messagesList" :key="post.id">
                <p id="postName"><span style="font-weight: 600">{{post.name}}</span> said:</p>
                <p id="postMessage">{{post.message}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: null,
                message: null
            }
        },
        methods: {
            submitForm() {
                var obj = {
                    name: this.name ? this.name : "Anonymus",
                    message: this.message
                }
                this.$store.dispatch('postSuggestion', obj)
                this.name = null
                this.message = null
            }
        },
        computed: {
            messagesList() {
                return this.$store.getters.suggestionsGetter
            }
        },
        mounted() {
            if (this.$store.getters.suggestionsGetter == '') {
                this.$store.dispatch('getSuggestions')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_variables.scss';
    @import '~styles/_mixins.scss';

    .suggestionsContainer {
        max-width: 1440px;
        min-height: 100vh;
        margin: auto;
        display: flex;
        flex-direction: column;
    }
    .title {
        padding: 60px 0 0 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2 {
            margin: 0;
        }
        .underline {
            display: inline-block;
            height: 5px;
            width: 140px;
            background: black;
            margin: 10px 0 25px 0;
        }
        p {
            text-align: center;
            width: 90%;
            max-width: 460px;
            line-height: 23px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 92%;
        max-width: 450px;
        margin: 40px auto 0 auto;
        input {
            height: 35px;
        }
        input, textarea {
            box-sizing: border-box;
            padding-left: 15px;
            margin: 2px 0 2px 0;
            width: 100%;
            border-radius: 4px;
            border: none;
            border: 1px solid $blue;
            color: black;
            font-weight: 600;
            font-size: 15px;
            line-height: 20px;
            // background: #1E242C;
            &::placeholder {
                font-weight: 400;
                font-family: -apple-system,system-ui,BlinkMacSystemFont,“Segoe UI”,Roboto,“Helvetica Neue”,Arial,sans-serif;
                font-family: “Segoe UI”,Roboto,“Helvetica Neue”,Arial,sans-serif;
                font-size: 105%;
                // color: #bfc4c8;
                color: rgb(98, 96, 96);
            }
        }
        textarea {
            padding-top: 10px;
            box-shadow: none;
        }
        button {
            width: 100%;
            margin: 10px 0 0 0;
            padding: 8px 0px;
            outline: none;
            border: none;
            border-radius: 5px;
            background-color: $blue;
            color: white;
            cursor: pointer;
            font-size: 17px;
            &:hover {
                background-color: lighten($blue, 15);
            }
            &:focus {
                background-color: $home-color;
            }
        }
        // width: 70%;
    }

    .comments {
        width: 90%;
        border-top: 1px solid $blue;
        margin: 35px auto 0 auto;
        padding: 30px 0 0 0;
        #commentCard {
            margin: 0 auto 30px auto;

            max-width: 450px;
            min-height: 100px;
            border: 1px solid $blue;
            border-radius: 10px;
            #postName {
                text-align: center;
            }
            #postMessage {
                text-align: center;
            }
        }
    }

    @include mediaQuery(450px, 630px) {
        .title {
            p {
                width: 85%;
            }
        }
        form, .comments {
            width: 90%;
        }
        form {
            margin: 40px auto 0 auto;
        }

    }
    @include mediaQuery(630px, 820px) {

    }
    @include mediaQuery(820px, 1024px) {

    }
    @include mediaQuery(1024px) {
        .suggestionsContainer {
            flex-direction: row;
        }
        .titleAndForm {
            width: 45%;
        }
        .title {
            h2 {
                font-size: 170%;
            }
            .underline {
                width: 160px;
                margin: 10px 0 40px 0;
            }
            p {
                font-size: 110%;
                letter-spacing: 0.3px;
            }
        }
        .comments {
            width: 55%;
            max-width: 550px;
            border-top: none;
            border-left: 1px solid $blue;
            margin: 40px 0 40px 0px;
            padding: 20px 0 0 0px;
            #commentCard {
                    max-width: 400px;
                    width: 90%;
            }
            ul {
                margin: 0;
            }
        }
    }
</style>
