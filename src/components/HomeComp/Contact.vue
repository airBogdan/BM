<template lang="html">
    <section id="mainContact">
        <div id="triangle-down"></div>
        <h2>Contact</h2>
        <div class="underline"></div>
        <div class="contactMe">
            <p>Have a question or a proposition?</p>
            <p>Contact me.</p>
        </div>
        <form action="https://formspree.io/mihaileanu.bogdan@yahoo.com" method="POST">
            <input type="text" class="formInput" v-model="name" placeholder="Name" required name="name">
            <input type="email" class="formInput" v-model="email" placeholder="Email" required name="_replyto">
            <textarea class="formInput" v-model="message" placeholder="Message" rows="8" required name="message"></textarea>
            <input type="submit" name="Submit" value="Send">
        </form>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                message: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/_variables.scss';
    @import '~styles/_mixins.scss';

    #mainContact {
        overflow: hidden;
        color: white;
        background: lighten(#252934, 5);
        // background: white;
        font-size: 20pt;
        padding-bottom: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        #triangle-down {
            border-left: 50vw solid transparent;
            border-right: 50vw solid transparent;
            border-top: 50px solid $workBack;
        }
        h2 {
            display: flex;
            justify-content: center;
            margin: 80px 0 10px 0;
            position: relative;
            font-size: 40pt;
        }
        .underline {
            display: inline-block;
            height: 5px;
            width: 105px;
            background: white;
            margin-bottom: 60px;
        }
        p {
            // color:  #FFED4A;
            color: $home-color;
            padding: 0 25px 0 25px;
            margin: 10px 0;
            display: flex;
            justify-content: center;
            font-size: 13pt;
        }
        form {
            display: block;
            width: 85%;
            margin: 20px auto;
        }
        input {
            height: 40px;
        }
        .formInput {
            display: block;
            width: 100%;
            box-sizing: border-box;
            margin: 2px auto 2px auto;
            background: #1E242C;
            border: none;
            color: white;
            outline: none;
            font-size: 60%;
            padding: 0 0 0 15px;
            &::placeholder {
                color: #7e8d99;
                font-size: 100%;
                // text-indent: 15px;
            }
        }
        input[type="submit"] {
            margin: 20px 0 0 0;
            padding: 0 30px;
            background: black;
            // color:  #FFED4A;
            color: $home-color;
            // color: white;
            // border: 2px solid #FFED4A;
            border: 2px solid $home-color;
            outline: none;
            font-size: 65%;
            float: right;
            cursor: pointer;
            &:hover {
                background: #FFED4A;
                border: none;
                color:black;
            }
        }
    }

    @include mediaQuery(768px, 1024px) {
        #mainContact {
            padding-bottom: 76px;
            #triangle-down {
                border-top: 80px solid $workBack;
            }
            .underline {
                margin-bottom: 40px;
            }
            form {
                width: 65%;
            }
        }
    }
    @include mediaQuery(1024px) {
        #mainContact {
            padding-bottom: 76px;
            #triangle-down {
                // border-left: 50vw solid transparent;
                // border-right: 50vw solid transparent;
                border-top: 100px solid $workBack;
            }
            .underline {
                margin-bottom: 40px;
            }
            form {
                width: 600px;
            }
        }
    }
</style>
