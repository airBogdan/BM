<template lang="html">
    <!-- if event has no image => it has been canceled => make it more opaque -->
    <li :class="{canceledEventOpaque : singleEvent.image=='' ? true : false}">

            <div class="image">
                <img v-if="singleEvent.image=='' ? false : true" :src='singleEvent.image' />
                <!-- if the event has no image => dont dislay placeholder for image, hide it -->
            </div>

            <div class="eventDate" :class="{deletedText: singleEvent.image=='' ? true : false}">
                <!-- text is deleted (line strikethrough) if event is canceled (has no image) -->
                <p class="eventDay"> {{eventDayDate}} </p>
                <p class="eventMonth"> {{eventMonth}} </p>
            </div>

            <div class="eventBody" :class="{deletedText: singleEvent.image=='' ? true : false}">
                <!-- event title -->
                <h5> {{singleEvent["event name"]}} </h5>

                <div class="eventDetails">
                    <!-- the span contains the bullet point -->
                    <p> <span>&nbsp; &#x2022; </span>&nbsp;{{singleEvent["time interval"]}} </p>
                    <p> <span>&nbsp; &#x2022; </span>&nbsp;{{singleEvent["duration"]}} </p>
                    <p> <span> &nbsp; &#x2022;</span> &nbsp;Location: {{singleEvent["location"]}} </p>
                    <p> <span> &nbsp; &#x2022; </span> &nbsp;Organizer: {{singleEvent["organizer"]}} </p>
                </div>
            </div>

            <div class="buttons">
                <button type="button" id="details" @click="eventDetails"
                    v-if="singleEvent.image=='' ? false : true">
                    Details
                </button>
                <button type="button" name="button" id="add"
                    v-if="singleEvent.image=='' ? false : true">
                    Add
                </button>
            </div>
    </li>
</template>

<script>
    export default {
        data() {
            return {
                month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            }
        },
        props: ['singleEvent'],
        methods: {
            eventDetails() {
                //create an object with the selected event information and stores it for the modal
                var eventObject = {
                    image: this.singleEvent.image,
                    eventName: this.singleEvent["event name"],
                    eventDay: this.eventDayDate,
                    eventMonth: this.eventMonth,
                    timeInterval: this.singleEvent["time interval"],
                    timeStart: this.singleEvent["time interval"].split('-')[0]
                }
                    // eventObject.image = this.singleEvent.image
                    // eventObject.eventName = this.singleEvent["event name"]
                    // eventObject.eventDay = this.eventDayDate
                    // eventObject.eventMonth = this.eventMonth
                    // eventObject.timeInterval = this.singleEvent["time interval"]
                    // eventObject.timeStart = this.singleEvent["time interval"].split('-')[0]
                this.$store.commit('modal', eventObject)

                this.$emit('eventDetails', true) //emits true, so that the modal opens
            }
        },
        computed: {
            eventDayDate() {
                // 2019-01-16 = date format example
                let extractedDay = this.singleEvent["event date"].split("-")[2] //= [2019, 01, 16] [2] == 16

                if (extractedDay.slice(0,1) == 0) // if the first digit is 0
                    return extractedDay.slice(1,2) // return the second digit
                else
                    return extractedDay // else return the whole number
            },
            eventMonth() {
                //2019-01-16
                let extractedMonth = this.singleEvent["event date"].split("-")[1] //=> [2019, 01, 16][1]== 01

                if (extractedMonth.split("")[0]=="0") //if the first digit is 0
                    return this.month[extractedMonth.split("")[1]-1] // split the date 01.split('') == [0,1][1] == 1 -1 =0 => this.month[0] = january
                else
                    return this.month[extractedMonth-1] //say the month is 11 this.month[11-1] = november
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../scss/_variables.scss";
    @import "./../../scss/_mixins.scss";

    li {
        display: flex;
        min-height: 100px;
        border-bottom: 1px solid $cal2border;
        box-sizing: border-box;
        padding: 0px;
        position: relative;
        margin: auto;
        font-family: "Arimo", sans-serif;
        font-style: normal;
        font-weight: normal;
    }
    .image {
        align-self: stretch;
        margin: 0;
        padding: 0;
     }
    .image>img {
        width: 100px;
        height: 101%;
    }
    .eventDate {
        padding: 0 0 0 30px;
        color: $cal2color;
        font-size:24px;
    }
    .eventBody {
        color: $cal2font;
        h5 {
            margin: 0px;
            font-size: 1.55em;
            font-weight: normal;
        }
    }
    .eventDetails {
        span {
            color: #b0b1b2;
        }
    }
    .buttons {
        display: flex;
        margin-left: auto;
        #details, #add {
            cursor: pointer;
            padding: 6px 8px 6px 8px;
            border-radius: 3px;
            outline: none;
        }
        #details {
            background-color:#f7f7f7;
            border: 1px solid #d9dbdd;
        }
        #add {
            margin-left: 7px;
            background-color:#16a085;
            color: white;
            border: 0;
        }
    }
    .deletedText {
        text-decoration: line-through;
    }
    .canceledEventOpaque {
        opacity: 0.4;
        &:hover {
            background-color: transparent;
        }
    }

    @include mediaQuery(800px) {
        li {
            flex-wrap: nowrap;
            align-items: center;
        }
        .eventDate {
            display: flex;
            flex-direction: column;
            text-align: center;
            .eventDay {
                margin: 0;
                font-size: 120%
            }
            .eventMonth {
                margin: 0;
                font-size: 72%;
            }
        }
        .eventBody {
            margin: 15px 19px 15px 30px;
        }
        .eventDetails {
            padding-top: 10px;
            font-size: 92%;
            p {
                display: inline;
                margin: 0;
            }
        }
    }
    @include mediaQuery(1024px, 1150px) {
        li {
            // height: 115px;
            flex-wrap: nowrap;
            align-items: center;
        }
        .image {
            // height: 102%;
        }
        .image>img {
            // height: 115px;
        }
        .eventDate {
            display: flex;
            flex-direction: column;
            text-align: center;
            .eventDay {
                margin: 0;
                font-size: 120%
            }
            .eventMonth {
                margin: 0;
                font-size: 72%;
            }
        }
        .eventBody {
            margin: 15px 19px 15px 30px;
            h5 {
                font-size: 1.47em;
            }
        }
        .eventDetails {
            padding-top: 10px;
            font-size: 92%;
            p {
                display: inline;
                margin: 0;
            }
        }
    }
    @include mediaQuery(900px, 1024px) {
        li {
            // height: 115px;
            flex-wrap: nowrap;
            align-items: center;
        }
        .image {
            // height: 102%;
        }
        .image>img {
            // height: 115px;
        }
        .eventDate {
            display: flex;
            flex-direction: column;
            text-align: center;
            .eventDay {
                margin: 0;
                font-size: 120%
            }
            .eventMonth {
                margin: 0;
                font-size: 72%;
            }
        }
        .eventBody {
            margin: 15px 19px 15px 30px;
            h5 {
                font-size: 1.47em;
            }
        }
        .eventDetails {
            padding-top: 10px;
            font-size: 92%;
            p {
                display: inline;
                margin: 0;
                white-space: nowrap;
            }
        }
    }
    @include mediaQuery(768px, 900px) {
        li {
            // height: 105px;
            flex-wrap: nowrap;
            align-items: center;
        }
        .image {
            // height: 102%;
        }
        .image>img {
            // height: 105px;
        }
        .eventDate {
            padding: 0 0 0 20px;
            display: flex;
            flex-direction: column;
            text-align: center;
            .eventDay {
                margin: 0;
                font-size: 110%
            }
            .eventMonth {
                margin: 0;
                font-size: 72%;
            }
        }
        .eventBody {
            margin: 15px 19px 15px 20px;
            h5 {
                font-size: 1.35em;
            }
        }
        .eventDetails {
            padding-top: 6px;
            font-size: 93%;
            p {
                display: inline;
                margin: 0;
                white-space: nowrap;
            }
        }
    }
    @include mediaQuery(500px, 768px) {
        li {
            // min-height: 100px;
            padding: 15px 0 15px 0;
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: flex-start;
        }
        .image {
            display: none;
        }
        .eventDate {
            padding: 0;
            display: flex;
            flex-direction: column;
            text-align: center;
            .eventDay {
                margin: 0 0 5px 0;
                font-size: 95%;
            }
            .eventMonth {
                margin: 0;
                font-size: 72%;
            }
        }
        .eventBody {
            margin: 15px 0 15px 0;
            h5 {
                font-size: 1.45em;
            }
        }
        .eventDetails {
            padding-top: 6px;
            // font-size: 95%;
            p {
                display: inline;
                margin: 0;
                // white-space: nowrap;
            }
        }
        .buttons {
            margin-left: 0;
        }
    }
    @include mediaQuery(500px, 650px) {
        .eventDetails {
            p {
                white-space: nowrap;
            }
        }
    }
    @include mediaQuery(200px, 768px) {
        li {
            // min-height: 100px;
            padding: 15px 0 20px 0;
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: flex-start;
            // position: relative;
        }
        .image {
            display: none;
        }
        .eventDate {
            padding: 0;
            display: flex;
            flex-direction: column;
            text-align: center;
            .eventDay {
                margin: 0 0 5px 0;
                font-size: 95%;
            }
            .eventMonth {
                margin: 0;
                font-size: 72%;
            }
        }
        .eventBody {
            margin: 15px 0 15px 0;
            h5 {
                font-size: 1.45em;
            }
        }
        .eventDetails {
            padding-top: 10px;
            font-size: 97%;
            p {
                display: inline;
                white-space: nowrap;
            }
        }
        .buttons {
            margin-left: 0;
        }
    }



    // @media screen and (max-device-width: 425px) {
    //     .eventDetails {
    //         font-size: 110%;
    //     }
    //     .eventLO {
    //         display: block;
    //         margin:0;
    //     }
    // }
    // @media screen and (min-device-width: 425px)and (max-device-width: 768px) {
    //     .eventDetails {
    //         font-size: 94%;
    //     }
    //     .eventLO {
    //         display: inline;
    //     }
    // }
    // @media screen and (max-device-width: 768px){
    //     ul li {
    //         flex-direction: column;
    //         align-items: start;
    //     }
    //     .image {
    //         display: none;
    //     }
    //     .eventDate {
    //         margin: 20px 0 0 20px;
    //     }
    //     .eventDay {
    //         margin-bottom: 0;
    //         display: inline;
    //         font-size: 70%;
    //     }
    //     .eventMonth {
    //         margin-bottom: 0;
    //         display: inline;
    //         font-size: 70%;
    //     }
    //     .eventBody {
    //         margin: 10px 20px;
    //     }
    //     .buttons {
    //         margin: 0 0 20px 20px;
    //     }
    // }
    // @media screen and (min-device-width: 769px) {
        // ul li {
        //     flex-wrap: nowrap;
        //     align-items: center;
        // }
        //
        // .image {
        //     display: block;
        // }
        // .eventDate {
        //     display: flex;
        //     flex-direction: column;
        //     text-align: center;
        //     padding: 0 14px 0 30px;
        // }
        // .eventDay {
        //     margin-bottom: 0;
        //     font-size: 120%
        // }
        // .eventMonth {
        //     margin-bottom: 0;
        //     font-size: 72%;
        // }
        // .eventBody {
        //     margin: 16px;
        // }
        // .buttons {
        //     display: flex;
        //     margin-right: 10px;
        // }
        // .eventDetails {
        //     font-size: 94%;
        // }
        // .eventLO {
        //     display: inline;
        // }
    // }



    // .modal-content {
    //      /* text-shadow: 2px 2px 4px #000000; */
    //       box-shadow: 20px 10px 12px #888888;
    //      border: 0;
    // }
    // .modalBackground {
    //     background-color: rgba(255,255,255,0.75);
    // }
    // .btn:focus {
    //     box-shadow: none;
    // }
    //
    // .ti-close {
    //     color: black;
    //     font-size: 150%;
    //     cursor: pointer;
    //     position: absolute;
    //     margin-top: -40px;
    //     right: 0;
    //     text-decoration: none;
    // }
    // .ti-close:hover {
    //     /* color: red; */
    //     color: rgba(0, 0, 0, 0.30);
    //     /* color: rgba(22, 160, 133, 0.6); */
    //     /* color: grey; */
    // }
    // .blurr {
    //     -webkit-filter: blur(8px);
    //     -ms-filter: blur(8px);
    //     -moz-filter: blur(8px);
    //     -o-filter: blur(8px);
    //     filter: blur(8px);
    //
    // }
    //
    //
    // .btnFloat {
    //     float: right;
    // }
    // .list-group-item, .list-group-item:hover {
    //     z-index: auto;
    // }
    // .modal-body {
    //     max-width: 102%;
    // }
    // .modal-dialog {
    //     margin-top: 100px;
    //     max-width: 65vw;
    // }
    // .modal-content {
    //     border-radius: 0px;
    //     font-family: Arimo;
    //     height: 580px;
    // }
</style>
