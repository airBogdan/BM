<template lang="html">
    <main @keyup.esc="modalIsOpen=false">

        <div class="ShowHideFilters" :class="{modalBackgroundBlurr: modalIsOpen}">
            <a href="#" @click="showHideFiltersFn"> <span style="color: #16a085;">{{showHideToggle}}</span> filters</a>
        </div>

        <div class="filters" v-if="filtersOpened" :class="{modalBackgroundBlurr: modalIsOpen}" key='x'>

            <div class="filter" style="flex-grow: 1">
                <p class="filterTitle">Event Type</p>
                <filter-event-type v-for="(eventType, index) in eventTypes" :key="index" :eventType="eventType"></filter-event-type>
            </div>

            <div class="filter" style="flex-grow: 1">
                <p class="filterTitle">Location</p>
                <filter-location v-for="(location, index) in filterLocationFilter" :key="index" :location="location"></filter-location>
            </div>

            <div class="filter" style="flex-grow: 1">
                <p class="filterTitle">Organizer</p>
                <filter-organizer v-for="(organizer, index) in filterOrganizerFilter" :key="index" :organizer="organizer"></filter-organizer>
            </div>

            <div class="filter" style="flex-grow: 1">
                <p class="filterTitle ">Day</p>
                <filter-day v-for="day in weekDay" :key="day.index" :day="day"></filter-day>
            </div>

            <div class="filter" style="flex-grow: 1">
                <p class="filterTitle">Time of day</p>
                <filter-tod v-for="todf in tod" :key="tod.index" :todf="todf"></filter-tod>
            </div>

        </div>

        <ul :class="{modalBackgroundBlurr: modalIsOpen}">
            <calendar-single-event v-for='(singleEvent, index) in filterEvents' :key='index' :singleEvent='singleEvent' :index='index' @eventDetails="modalIsOpen=$event"></calendar-single-event>
        </ul>

        <router-link class="backHome" tag="a" to="/">Back to Home</router-link>

        <div v-if="modalIsOpen" class="modal" @click='hideModal($event)'>
            <div class="modalContent">
                <div id="closeModal" @click="modalIsOpen=false">
                    <i class="fas fa-times"></i>
                </div>
                <div class="modalLeft">
                    <h2>{{$store.state.cal2Modal.eventName}}</h2>
                    <br>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ornare eros.
                        Ut pharetra ornare lorem, sit amet bibendum quam imperdiet ut. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nullam non ornare eros. Ut pharetra ornare lorem,
                        sit amet bibendum quam imperdiet ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam non ornare eros.
                    </p>
                </div>
                <div class="modalRight">
                    <img :src='$store.state.cal2Modal.image' />
                    <div class="belowImg">
                        <div id="belowImg1">
                            <p>
                                <!-- <span></span> -->
                                <span>
                                    {{$store.state.cal2Modal.eventDay}}
                                    {{$store.state.cal2Modal.eventMonth}}
                                    @
                                    {{$store.state.cal2Modal.timeStart}}
                                </span>
                            </p>
                            <p>
                                <!-- <span></span> -->
                                <span>
                                    {{$store.state.cal2Modal.timeInterval}}
                                </span>
                            </p>
                        </div>
                        <div id="belowImg2">
                            <button type="button" name="button">Add</button>
                            <button id="mobileCloseModal" type="button" name="button" @click="modalIsOpen=false">Close info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<script>
    import Event from './event.vue'
    import DayFilter from './Filters/DayFilter.vue'
    import TodFilter from './Filters/TimeOfDayFilter.vue'
    import OrganizerFilter from './Filters/OrganizerFilter.vue'
    import LocationFilter from './Filters/LocationFilter.vue'
    import EventTypeFilter from './Filters/EventTypeFilter.vue'
    import _ from 'lodash'

    export default {
        data() {
            return{
                filtersOpened: false,
                modalIsOpen: false,
                showHideToggle: "Show",
                weekDay: [
                    {indexD: 1 , day: 'Monday'},
                    {indexD: 2 , day: 'Tuesday'},
                    {indexD: 3 , day: 'Wednesday'},
                    {indexD: 4 , day: 'Thursday'},
                    {indexD: 5 , day: 'Friday'},
                    {indexD: 6 , day: 'Saturday'},
                    {indexD: 0 , day: 'Sunday'}
                ],
                tod: [
                    {indexT: 0, tod: 'Morning', hours: '00-11'},
                    {indexT: 1, tod: 'Afternoon', hours: '12-16'},
                    {indexT: 2, tod: 'Evening', hours: '17-23'}
                ],
                eventTypes: ["Ceremony", "Exhibition", "Music", "Sports"]
            }
        },
        components: {
            calendarSingleEvent: Event,
            filterDay: DayFilter,
            filterTod: TodFilter,
            filterOrganizer: OrganizerFilter,
            filterLocation: LocationFilter,
            filterEventType: EventTypeFilter,
        },
        methods: {
            // functionalitatea de afisare sau nu a filtrelor si de interschimbare a Show Hide
            showHideFiltersFn() {
                this.filtersOpened=!this.filtersOpened
                if (this.filtersOpened == false) {
                    this.showHideToggle = "Show"
                }
                else {
                    this.showHideToggle="Hide"
                }
            },
            hideModal(event) {
                if(event.target.className=="modal") {
                    this.modalIsOpen=false
                }
            }
        },
        computed: {
            // filters the events when pressing one and it is used to iterate through the remaining events
            filterEvents() {
                var vm = this
                //cu if-urile abordez fiecare situatie in care a fost adaugat doar filtru de zi, doar de moment al zilei sau ambele
                return vm.$store.state.cal2Content
                    .filter(element => {
                        if (vm.$store.state.cal2AddedDays.length > 0) {
                            return vm.$store.state.cal2AddedDays.indexOf(new Date(element["event date"]).getDay()) >= 0
                        }
                        else {
                            return true
                        }
                    })
                    .filter(element => {
                        if (vm.$store.state.cal2AddedOrganizer.length > 0) {
                            return vm.$store.state.cal2AddedOrganizer.indexOf(element.organizer)>=0
                        }
                        else {
                            return true
                        }
                    })
                    .filter(element => {
                        if (vm.$store.state.cal2AddedTod.length > 0) {
                            for (let i in vm.$store.state.cal2AddedTod) {
                                        if (element["time interval"].substring(0,2) >= vm.$store.state.cal2AddedTod[i].substring(0,2)
                                            && element["time interval"].substring(0,2) <= vm.$store.state.cal2AddedTod[i].substring(3,5)) {
                                                return true
                                        } else {
                                            continue;
                                        }
                                    }
                        }
                        else {
                            return true
                        }
                    })
                    .filter(element => {
                        if (vm.$store.state.cal2AddedLocation.length > 0) {
                            return vm.$store.state.cal2AddedLocation.indexOf(element.location)>=0
                        }
                        else {
                            return true
                        }
                    })
            },
            filterOrganizerFilter() {
                var sortedUnique = []
                var vm = this
                const sorted = _.sortBy(vm.$store.state.cal2Content, ['organizer'])
                return _.filter(sorted, element => {
                    if (sortedUnique.indexOf(element.organizer)<0) {
                        sortedUnique.push(element.organizer)
                        return true
                    }
                })
            },
            filterLocationFilter() {
                var sortedUnique = []
                var vm = this
                const sorted = _.sortBy(vm.$store.state.cal2Content, ['location'])
                return _.filter(sorted, element => {
                    if (sortedUnique.indexOf(element.location)<0) {
                        sortedUnique.push(element.location)
                        return true
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../scss/_variables.scss";
    @import "./../../scss/_mixins.scss";
    main {
        font-family: "Arimo", sans-serif;
        margin: 70px auto;
    }
    .backHome {
        text-decoration: none;
        display: block;
        text-align: center;
        background: black;
        height: 40px;
        line-height: 40px;
        color: white;
        border-radius:13px;
        font-size: 130%;
        margin-top: 30px;
        &:hover {
            font-weight: bold;
            font-size: 125%;
            background: lighten(black, 22);
        }
    }
    .ShowHideFilters {
        text-align: end;
        margin-bottom: 15px;
        a {
            text-decoration: none;
            color: black;
            font-weight: 600;
        }
    }
    .filters {
        display: flex;
        flex-flow:wrap;
        // border-top: 1px solid #f2f2f2;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .filter {
            border-top: 1px solid  $cal2border;
    }
    .filterTitle {
        color: rgb(22, 160, 133);
        padding-left: 45px;
        font-weight: bold;
        font-size: 90%;
        margin-bottom: 10px;
    }
    ul {
        padding: 0;
        li:hover {
            background: #f8f8f8;
        }
    }

    .modal {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255, 0.72)
    }
    .modalContent {
        color: rgba(0, 0, 0, 0.7);
        display: flex;
        margin: 6% auto;
        background-color: white;
        box-shadow: 0px 0px 33px 4px rgba(0, 0, 0, .125);
        position: relative;
        .modalLeft {
            // flex: 2;
        }
        .modalRight {
            width: 300px;
            display: flex;
            flex-direction: column;
            img {
                width: 300px;
                height: auto;
                // height: 400px;
                flex: 1;
            }
            .belowImg {
                flex: 1;
                height: 300px;
                background-color: rgb(247, 247, 247);
                button {
                    background: #16a085;
                    outline: none;
                    border: none;
                    color: white;
                    border-radius: 3px;
                    height: 30px;
                    padding: 0 10px;
                    cursor: pointer;
                }
            }
            #mobileCloseModal {
                display: none;
            }
        }
        #closeModal {
            position: absolute;
            top: -35px;
            right: 0;
            font-size: 24px;
            color: rgba(0,0,0,0.6);
            cursor: pointer;
            &:hover {
                color: rgba(0,0,0,0.27);
            }
        }
    }

    @include mediaQuery(1150px) {
        main {
            box-shadow: 18px 18px 60px 15px rgba(52, 73, 94, 0.25);
            padding: 15px;
            border-radius: 13px;
            width: 80%;
        }
        .filters {
            font-size: 96%;
        }
        .ShowHideFilters {
            font-size: 97%;
        }
        .modalContent {
            width: 900px;
            .modalLeft {
                padding: 50px;
            }
            #belowImg1, #belowImg2 {
                padding: 50px 30px;
            }
            #belowImg1 p:first-child {
                margin-top: 0;
            }
        }
    }
    @include mediaQuery(1024px, 1150px) {
        main {
            box-shadow: 18px 18px 60px 15px rgba(52, 73, 94, 0.25);
            padding: 15px;
            border-radius: 13px;
            width: 90%;
        }
        .filters {
            font-size: 94%;
        }
        .ShowHideFilters {
            font-size: 97%;
        }
        .modalContent {
            width: 800px;
            .modalLeft {
                padding: 50px;
            }
            #belowImg1, #belowImg2 {
                padding: 50px 30px;
            }
            #belowImg1 p:first-child {
                margin-top: 0;
            }
        }
    }
    @include mediaQuery(900px, 1024px) {
        main {
            box-shadow: 18px 18px 60px 15px rgba(52, 73, 94, 0.25);
            padding: 15px;
            border-radius: 13px;
            width: 90%;
            // margin: auto;
        }
        .filters {
            font-size: 91%;
        }
        .ShowHideFilters {
            font-size: 97%;
        }
        .modalContent {
            width: 95%;
            flex-direction: column;
            .modalLeft {
                padding: 50px;
            }
            .modalRight {
                width: 100%;
                .belowImg {
                    height: 100%;
                }
                #belowImg1, #belowImg2 {
                    padding: 50px 50px 20px;
                }
                #belowImg1 p:first-child {
                    margin-top: 0;
                }
                img {
                    display: none;
                }
            }
        }
    }
    @include mediaQuery(768px, 900px) {
        main {
            box-shadow: 18px 18px 60px 15px rgba(52, 73, 94, 0.25);
            padding: 15px;
            border-radius: 13px;
            width: 95%;
            // margin: auto;
        }
        .filters {
            font-size: 95%;
        }
        .ShowHideFilters {
            font-size: 97%;
        }
        .modalContent {
            width: 97%;
            flex-direction: column;
            .modalLeft {
                padding: 50px;
            }
            .modalRight {
                width: 100%;
                .belowImg {
                    height: 100%;
                }
                #belowImg1, #belowImg2 {
                    padding: 50px 50px 20px;
                }
                #belowImg1 p:first-child {
                    margin-top: 0;
                }
                img {
                    display: none;
                }
            }
        }
    }
    @include mediaQuery(200px, 768px) {
        main {
            width: 85%;

            // margin: auto;
        }
        ul {
            // position: relative;
        }
        .ShowHideFilters {
            font-size: 100%;
        }
        .filters {
            padding-top: 0;
            padding-bottom: 0px;
            font-size: 100%;
        }
        .filter {
            padding-top: 30px;
            padding-bottom: 30px;
            .filterTitle {
                margin-top: 0;
            }
        }
        .modal {
            // position: sticky;
            // position: absolute;
            // top: 5vh;
            // top: 100px;
        }
        .modalContent {
            margin: 1% auto;
            width: 97%;
            flex-direction: column;
            .modalLeft {
                padding: 10px 15px;
                br {
                    display: none;
                }
            }
            .modalRight {
                width: 100%;
                .belowImg {
                    height: 100%;
                }
                #belowImg1, #belowImg2 {
                    padding: 16px 50px 10px;
                }
                #belowImg1 p:first-child {
                    margin: 0;
                }
                #belowImg1 p:last-child {
                    margin: 8px 0 0 0;
                }
                img {
                    display: none;
                }
                #belowImg2 {
                    display: flex;
                    justify-content: space-between;
                }
                #mobileCloseModal {
                    display: inline-block;
                    // align-self: flex-end;
                    // margin-left: max;
                    background-color: red;
                    color: black;
                    // cursor: pointer;
                }
            }
        }
    }

    // .slide-enter {
    //     opacity:0;
    // }
    // .slide-enter-active {
    //     transition: all 1s ease-out;
    // }
    // .slide-leave-active{
    //     transition: all 1s ease-out;
    //     opacity: 0;
    //     position: absolute;
    //     /* right:0; */
    //     /* left:0; */
    // }
    // .slide-move {
    //     transition: transform 1s;
    // }
    .modalBackgroundBlurr {
        -webkit-filter: blur(8px);
        -ms-filter: blur(8px);
        -moz-filter: blur(8px);
        -o-filter: blur(8px);
        filter: blur(8px);
    }


    .ti-close {
        color: black;
        font-size: 150%;
        cursor: pointer;
        position: absolute;
        margin-top: -40px;
        right: 0;
        text-decoration: none;
    }
    .ti-close:hover {
        color: rgba(0, 0, 0, 0.30);
    }
</style>
