<template>
    <div class="container">
        <main class="main">
            <div class="calendarAndEventDisplay">
                <div class="calendar">
                    <header class="calendarHeader" >
                        <span class='prevNext' @click="prev"> <span class="prevNextArrows">&#10094;</span> PREV</span>
                        <h2>
                            <span>{{months[month]}}</span>
                            <span>{{year}}</span>
                        </h2>
                        <span class='prevNext' @click="next">NEXT <span class="prevNextArrows">&#10095;</span> </span>
                    </header>

                    <div class="table">
                        <!-- conditiile sunt impartite pt prima saptamana, ultima, si ce ramane; altfel, daca aveam ev pe data 1, imi punea blueDot si pe 1 de pe ult sapt sau daca faceam click pe 1 din ultima sapt il selecta pe 1 din interiorul lunii-->
                        <!-- conditiile de day<= sau day>= sunt pt zilele de pe ultima/prima sapt ca sa le pun anumite clase sau sa nu le pun anumite clase -->
                        <div class="row" v-for="week in createCalendarDays">
                            <span class="days" v-for="day in week"
                                @click = "week==createCalendarDays[0] ? ((day<=7 && filteredEventDates.indexOf(day)>-1) ? cd=clickedDay=day : {}) :
                                            week==createCalendarDays[createCalendarDays.length-1] ? ((day>=22 && filteredEventDates.indexOf(day)>-1) ? cd=clickedDay=day : {}) :
                                            filteredEventDates.indexOf(day)>-1 ? cd=clickedDay=day : {};
                                        eventDisplayMonth=month"
                                :class="{blueDot: week==createCalendarDays[0] ? ((filteredEventDates.indexOf(day)>-1 && day<=7) ? true : false) :
                                                    week==createCalendarDays[createCalendarDays.length-1] ?  ((filteredEventDates.indexOf(day)>-1 && day>=22) ? true : false) :
                                                    ((filteredEventDates.indexOf(day)>-1) ? true : false),
                                        daysOffMonth: week==createCalendarDays[0] ? (day>10 ? true : false) :
                                                        week==createCalendarDays[createCalendarDays.length-1] ? (day< 10 ? true : false) :
                                                        false,
                                        selectedDay: week==createCalendarDays[0] ? ((day<=7 && filteredEventDates.indexOf(day)>-1) ? day == cd && (filteredEventDates.indexOf(day)>-1) : false) :
                                                        week==createCalendarDays[createCalendarDays.length-1] ? ((day>=22 && filteredEventDates.indexOf(day)>-1) ? day == cd && (filteredEventDates.indexOf(day)>-1) : false) :
                                                        day==cd && (filteredEventDates.indexOf(day)>-1)}">
                                {{day}}
                            </span>
                        </div>
                    </div>
                </div>

                <aside class="eventDisplay">
                    <h4> {{months[eventDisplayMonth]}} {{clickedDay}}</h4>
                    <hr>
                    <section>
                        <div v-if="hasEventMessage==false" class="nothingToShow">
                            <p>Nothing to show</p>
                        </div>
                        <div v-else class="eventList" v-for='(e, i) in clickedDayEvents'>
                            <img :src=e.image width=50px height=70px align="middle"/>
                            <div class="eventDetails">
                                <p class="eventTime"> <span id="time">{{e.time}}</span>  <span id="eventDuration">{{e.duration}}</span> </p>
                                <p class="eventName"> {{e.name}} </p>
                                <p class="eventLocation">Location: {{e.location}} </p>
                                <p class="eventType">Type: {{e.type}}</p>
                                <p class="eventStory"> Story: {{e.story}} </p>
                                <p class='eventDirector'> Director: {{e.director}}</p>
                                <p class="eventDuration">Running time: {{e.runningTime}} </p>
                            </div>
                        </div>
                    </section>
                </aside>
            </div>

            <aside class="filters">
                <div class="">
                    <h4>What kind of play?</h4>
                    <app-type-filter v-for="(eventType, index) in sortedTypeFilter" :key="index" :eventType="eventType.type" @addType="addType($event)"></app-type-filter>
                </div>

                <div class="">
                    <h4>Where?</h4>
                    <app-location-filter v-for="(eventLocation, index) in sortedLocationFilters" :key="index" :eventLocation="eventLocation.location" @addLocation="addLocation($event)"></app-location-filter>
                </div>

                <!-- <div class="">
                    <h4>When?</h4>
                    <app-period-filter v-for="(tod, index) in timeOfDay" :key="index" :tod="tod" @addPeriod="addPeriod($event)"></app-period-filter>
                </div> -->

                <!-- <div class="ulLi">
                    <ul>
                        <li>-----------------------------</li>
                        <li> aranjate ev dupa ore</li>
                        <li>filtrul when</li>
                    </ul>
                </div> -->

                <!-- <div class="">
                    <p>{{todArray}}</p>
                </div> -->
                <!-- <div class="">
                    <router-link to="/" tag="button" active-class="active">Home </router-link>
                </div> -->
            </aside>
        </main>

        <router-link class="backHome" tag="a" to="/">Back to Home</router-link>
    </div>
</template>

<script>
    import Events from './../../Events.json'
    import TypeFilter from './Filters/TypeFilter.vue'
    import LocationFilter from './Filters/LocationFilter.vue'
    import PeriodFilter from './Filters/PeriodFilter.vue'
    import _ from 'lodash'
    export default {
        data() {
            return {
                eventDisplayMonth: new Date().getMonth(), //luna de deasupra evennimentelor
                events: Events,
                clickedDay: new Date().getDate(),
                cd: undefined,
                // cD1: undefined, //astea 3 folosite in var2 de creare a calendarului
                // cD2: undefined,
                // cD3: undefined,
                month: new Date().getMonth(),
                year: new Date().getFullYear(),
                typesArray: [], //adaug filtrele de "what kind of play" dupa care filtrez evenimentele
                locationsArray: [],
                todArray: [],
                timeOfDay: ['morning', 'afternoon', 'evening'],
                weekDays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            }
        },
        methods: {
            prev() {
                this.month -= 1
                this.cd = undefined
                if (this.month==-1) {
                    this.year -= 1
                    this.month=11
                }
            },
            next() {
                this.month +=1
                this.cd = undefined
                if (this.month == 12) {
                    this.year += 1
                    this.month = 0
                }
            },
            addType(evType) { //din copil, atunci cand apesi pe un filtru "what kind of event" il adauga in lista
                if (this.typesArray.indexOf(evType) > -1) {
                    this.typesArray.splice(this.typesArray.indexOf(evType) ,1)
                } else {
                    this.typesArray.push(evType)
                }
            },
            addLocation(evLoc) {
                if (this.locationsArray.indexOf(evLoc)>-1) {
                    this.locationsArray.splice(this.locationsArray.indexOf(evLoc), 1)
                } else {
                    this.locationsArray.push(evLoc)
                }
            },
            addPeriod(evTod) {
                if (this.todArray.indexOf(evTod)>-1) {
                    this.todArray.splice(this.todArray.indexOf(evTod), 1)
                } else {
                    this.todArray.push(evTod)
                }
            }
        },
        computed: {
            firstDayOfTheMonth() { //firstDayOfTheMonth e compusa din an curent, luna curenta, si 1 inseammna prima zi, si scad 1 pt ca getDay() incepe cu duminica=0 si eu incep cu luni
                if ((new Date(this.year, this.month, 1).getDay()-1) == -1 ) {
                    return 6
                }
                else {
                    return (new Date(this.year, this.month, 1).getDay()-1)
                }
            },
            nrOfDaysCrtMonth() {
                return new Date( this.year , this.month+1, 0).getDate()
            },
            nrOfDaysPrevMonth() {
                return new Date( this.year , this.month, 0).getDate()
            },
            nrOfWeeks() {  //// nr de saptamani in luna; daca da cu virgula (al 2lea e cu virgula), deci e mai mare decat nrWeeks (fara virgula), mai adaug o sapt, daca sunt egale, ramane asa
                let nrWeeks = Math.floor((this.nrOfDaysCrtMonth + this.firstDayOfTheMonth)/7)
                let nrWeeksDecimal = (this.nrOfDaysCrtMonth + this.firstDayOfTheMonth)/7
                if (nrWeeks < nrWeeksDecimal) {
                    return nrWeeks += 1
                }
                else {
                    return nrWeeks
                }
            },

            sortedTypeFilter() { // filtrele/checkbox aranjate alfabetic; la fel e si sortedLocationFilters; folosit in html cand afisez filtrele
                var sortedUnique = []
                var vm = this
                const sorted = _.sortBy(this.events, 'type')
                return _.filter(sorted, element => {
                    if (sortedUnique.indexOf(element.type)<0) {
                        sortedUnique.push(element.type)
                        return true
                    }
                })
            },
            sortedLocationFilters() {
                var sortedUnique = []
                var vm = this
                const sorted = _.sortBy(this.events, 'location')
                return _.filter(sorted, element => {
                    if (sortedUnique.indexOf(element.location)<0) {
                        sortedUnique.push(element.location)
                        return true
                    }
                })
            },

            filteredEvents() { // cand apas pe un filtru, filtreaza lista de evenimente; il folosesc in urmatoarele doua computed
                return this.events
                    .filter(evTyp => {
                        if (this.typesArray.length==0) {
                            return true
                        }
                        else if (this.typesArray.indexOf(evTyp.type) > -1) {
                            return true
                        }
                    })
                    .filter(evLoc => {
                        if (this.locationsArray.length==0) {
                            return true
                        }
                        else if (this.locationsArray.indexOf(evLoc.location)>-1) {
                            return true
                        }
                    })
                    // .filter(evTod => {
                    //     if (this.todArray.length==0) {
                    //         return true
                    //     } else {
                    //
                    //     }
                    // })
            },
            filteredEventDates() { //doar datele evenimentelor filtrate mai sus in filteredEvents
                var newArr=[]
                this.filteredEvents.forEach(elem => {
                    elem.dates.forEach(date => {
                        if (newArr.indexOf(date)==-1) {
                            newArr.push(date)
                        }
                    })
                })
                return newArr
            },
            clickedDayEvents() { //cand fac click pe o zi cu eveniment, sa mi arate doar ev din ziua respectiva din lista cu ev filtrate filteredEvents
                return this.filteredEvents
                    .filter(element => {
                        if (Array.from(element.dates).indexOf(Number(this.clickedDay)) > -1) {
                            return element
                        }
                    })
            },
            hasEventMessage() { //daca nu sunt evenimente sa mi afiseze mesaj "nothing to show"
                if (this.clickedDayEvents.length==0) {
                    return false
                }
                else if (this.clickedDayEvents.length>0) {
                    return true
                }
            },

            createCalendarDays() { //creeaza zilele ce urmeaza a fi afisate pt fiecare luna, sub forma de array of arrays, fiec subarray fiind o sapt
                var calendarDays = []
                var week = [] //fiecare saptamana
                var startDay = 1

                if (this.firstDayOfTheMonth != 0) {
                    var startDay = this.nrOfDaysPrevMonth - this.firstDayOfTheMonth + 1
                    for (startDay; startDay<=this.nrOfDaysPrevMonth; startDay++) {
                        week.push(startDay)
                        if (week.length==this.firstDayOfTheMonth) { // firstDayOfTheMonth = cate zile din luna anterioara trebuiesc adaugate
                            for (var k=1; k<=(7-this.firstDayOfTheMonth); k++) { //completez prima saptamana dupa ce au fost adaugate zilele lunii trecute
                                week.push(k)
                            }
                        }
                    }

                    calendarDays.push(week)
                    week=[]
                    startDay=k
                }

                for (let w=startDay; w<=this.nrOfDaysCrtMonth; w++) { // de la ce zi sa inceapa a doua saptamana si numaratoarea
                    week.push(w)
                    if (calendarDays.length==(this.nrOfWeeks-1)) { //cand ajunge in ultima saptamana si mai trebuiesc adaugate ziile din luna urmatoarea
                        if (w==this.nrOfDaysCrtMonth) {
                            let len = week.length
                            for (let lw=1; lw<=(7-len); lw++) {
                                week.push(lw)
                            }
                        }
                    }
                    if (week.length==7) {
                        calendarDays.push(week)
                        week=[]
                    }
                }
                return calendarDays
            },
            firstWeek() { //momentan nefolosit asta si urmaotarele 2; prima sapt din cal; il folosesc in a 2a varianta de afisare a calendarului, la fel ca si urrmatoarele 2
                return this.createCalendarDays[0]
            },
            lastWeek() { //ultima sapt din cal
                return this.createCalendarDays[this.createCalendarDays.length-1]
            },
            middleWeeks() { //restul sapt in afara de prima si ultima
                let newArr=[]
                for (let i=1; i<this.createCalendarDays.length-1; i++) {
                    newArr.push(this.createCalendarDays[i])
                }
                return newArr
            },

        },
        components: {
            appTypeFilter: TypeFilter,
            appLocationFilter: LocationFilter,
            appPeriodFilter: PeriodFilter
        }
    }
</script>


<style lang="scss" scoped>
@import "./../../scss/_variables.scss";
@import "./../../scss/_mixins.scss";
    .container {
        font-family: 'Arimo', sans-serif;
        padding: 60px 0 60px 0;
    }
    main { //tot continutul de pe fundal alb
        border-radius: 8px;
        box-sizing: border-box;
        margin: 0 auto 0 auto;
        display: flex;
            display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
            display: -ms-flexbox;  /* TWEENER - IE 10 */
            display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
        padding: 30px 16px 30px 24px;
        background: white;
        box-shadow: 18px 18px 60px 15px rgba(52, 73, 94,0.25);
        width: 100%;

    }
    .calendarAndEventDisplay { //calendar si event display din mijloc
        display: flex;
        width: 100%;
            display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
            display: -ms-flexbox;  /* TWEENER - IE 10 */
            display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    }

    //calendar
    .calendarHeader { //data si butoanele prv next
        height: 40px;
        margin-bottom: 20px;
        display: flex;
            display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
            display: -ms-flexbox;  /* TWEENER - IE 10 */
            display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
        align-items: center;
        justify-content: space-between;
        .prevNext {
            cursor: pointer;
            height: 100%;
            line-height: 40px;
            white-space: pre;
            font-size: 90%;
            color: $font;
            letter-spacing: 1px;
            // vertical-align: middle;
        }
        h2 {
            margin: 0;
        }
    }
    .table {
        width: 100%;
        // border-collapse: collapse;
    }
    .prevNextArrows {
        color: $blue!important;
    }
    .days {
        width: (100%/7);
        padding: 15px 0 35px 0;
        // height: 5vh;
        // height: 5vh;
        // line-height: 30px;
        // padding: 2vh 0 4vh 0;
        text-align: center;
        position:relative;
        color: $font;
        display: inline-block;
    }
    .row {
        border-top: 1px solid lightgrey;
    }
    .daysOffMonth { //zilele inainte si de dupa cele lunii curente
        opacity: 0.9;
        color: lightgrey;
    }
    .blueDot {
        cursor: pointer;
        &::after {
            content: "";
            background-color: $blue;
            display: block;
            border-radius: 50%;
            position: absolute;
            bottom: 25%;
            left: 43%;
        }
    } //end calendar
    .selectedDay { //ziua selectata
        background-color: $blue;
        color: white;
    }

    .calendar, aside.eventDisplay {
        width: 100%;
    } //calendar si caseta din mijloc

    //middle aside, event display
    aside.eventDisplay {
        .nothingToShow {
            margin: auto;
            color: lighten($font,22);
            // text-align:center;
        }
        background: lighten($background,3);
        img {
            width: 60px;
            height: 60px * 1.3;
            background-position: center;
            background-size: cover;
        }
        h4 { //data calendaristica
            margin: 20px 0 15px 0;
            text-align: center;
            color: $blue;
            font-weight: 600;
            font-size: 97%;
        }
        hr { //linia de sub data
            background: $blue;
            border: 1px solid $blue;
            width: 85%;
            margin: 0 auto 0 auto;
        }
        section { //partea cu evenimentele doar, imediat de sub linie
            display: flex;
            flex-direction: column;
                display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
                display: -ms-flexbox;  /* TWEENER - IE 10 */
                display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
        }
        .eventList { //imaginea si textul
            display: flex;
                display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
                display: -ms-flexbox;  /* TWEENER - IE 10 */
                display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
            height: 50%;
            width: 85%;
            margin: 30px auto 0 auto;
            position: relative;
            &:first-child {
                margin-top:17px;
            }
            &:nth-child(2)::before { //linia de deasupra celui de-al doilea eveniment
                content: '';
                background: $blue;
                opacity: 0.35;
                height: 0.8px;
                width: 100%;
                position: absolute;
                top: -9%;
            }
            .eventDetails { //textul din dreapta imaginii
                margin-left: 20px;
                font-size: 87.5%;
                color: $font;
            }
            p {
                margin:0;
            }
            .eventName {
                font-size: 115%;
                padding: 10px 0 4px 0;
                text-transform: capitalize;
                color: black;
            }
            .eventLocation, .eventDirector {
                padding-bottom: 20px;
            }
            .eventName, .eventLocation, .eventDirector, .eventType {
                text-transform: capitalize;
            }
            #time { //ora evenimentului
                color: $blue;
                letter-spacing: 0.3px;
            }
            #eventDuration { //durata in h a evenimentului
                margin-left: 22px;
                position: relative;
                &::before { //bulina gri de dinainte
                    content:'';
                    width: 5px;
                    height: 5px;
                    background: grey;
                    border-radius: 50%;
                    display: inline-block;
                    opacity: 0.5;
                    position: absolute;
                    top: 41%;
                    left: -14px;
                }
            }
        }
    } //end middle aside

    //filtrele
    aside.filters {
        display: flex;
            display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
            display: -ms-flexbox;  /* TWEENER - IE 10 */
            display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
        box-sizing: border-box;
        // -webkit-flex-direction: column;
        div { //fiecare grup de filtre, 3 in total
            display: flex;
                display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
                display: -ms-flexbox;  /* TWEENER - IE 10 */
                display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
                -ms-flex-direction: column;
                -webkit-flex-direction: column;
                -webkit-box-orient: vertical;
            flex-direction: column;
        }
        h4 { //titlurile de la filtre
            color: $blue;
            font-size: 90%;
            margin: 0 0 10px 0;
        }
        label { //butoanele si filtrele in sine
                // display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
                // -webkit-box-orient: vertical;
            display: inline-block;
            text-transform: capitalize;
            font-size: 87%;
            padding-bottom: 2px;
            cursor: pointer;
            &:hover {
                color: $blue;
            }
        }
        // lista de sub filtre
        .ulLi {
            font-size: 75%;
            width: 130px;
            padding-top: 10px;
            ul {
                padding: 0;
                margin: 0;
            }
        }
    }

    .backHome {
        display: block;
        width: 180px;
        margin: 20px auto 0 auto;
        line-height: 40px;
        border-radius: 9px;
        font-size: 130%;
        background: $blue;
        color: white;
        text-align: center;
        text-decoration: none;
        &:hover {
            background: lighten($blue, 10);
            // color: black;
            font-size: 125%;
            font-weight: bold;
        }
    }

    // 1)min width, 2)max width, 3)calendar & middle aside width 4)bluedot width/height
    @include mediaQuery(1024px, 1920px, 0.63vw) {
        main {
            width: 80%;
            min-width: 1024px;
            .calendarAndEventDisplay {
                width: 80%;
                .calendarHeader { //data si butoanele prv next
                    margin-bottom: 30px;
                }
            }
        }
        .calendar, aside.eventDisplay {
            width: 50%;
        }
        aside.eventDisplay {
            margin: 0 0 0 30px;
        }
        aside.filters {
            flex-direction: column;
            // -ms-flex-direction: column;
            // -webkit-flex-direction: column;
            -webkit-box-orient: vertical;
            padding: 0 0 0 25px;
            div {
                border-top: 1px solid lighten(lightgrey, 7);
                padding: 25px 0;
                &:first-child {
                    border-top: none;
                    padding-top: 0;
                }
            }
        }
    }
    @include mediaQuery(950px, 1024px, 0.65vw) {
        main {
            width: 80%;
            min-width: 950px;
            .calendarAndEventDisplay {
                width: 80%;
                .calendarHeader { //data si butoanele prv next
                    margin-bottom: 30px;
                }
            }
        }
        .calendar, aside.eventDisplay {
            width: 50%;
        }
        aside.eventDisplay {
            margin: 0 0 0 30px;
        }
        aside.filters {
            flex-direction: column;
            -webkit-box-orient: vertical;
            padding: 0 0 0 25px;
            div {
                border-top: 1px solid lighten(lightgrey, 7);
                padding: 25px 0;
                &:first-child {
                    border-top: none;
                    padding-top: 0;
                }
            }
        }
    }
    @include mediaQuery(768px, 950px, 0.78vw) {
        main {
            flex-direction: column;
        }
        .calendarAndEventDisplay {
            order: 2;
            padding-top: 25px;
            .calendar, aside.eventDisplay {
                width: 50%;
            }
            aside.eventDisplay {
                margin: 0 0 0 30px;
                hr { //linia de sub data
                    width: 95%;
                }
                .eventList { //imaginea si textul
                    width: 95%;
                }
            }
        }
        aside.filters {
            flex-direction: row;
            order: 1;
            div {
                margin: 0 7vw 0 7vw;
            }
        }
    }
    @include mediaQuery(550px, 767px, 1vw) {
        main {
            flex-direction: column;
        }
        .calendarAndEventDisplay {
            order: 2;
            padding-top: 25px;
            flex-direction: column;
            aside.eventDisplay {
                margin: 0;
            }
            .blueDot {
                &::after {
                    left: 46%;
                }
            }
        }
        aside.filters {
            flex-direction: row;
            order: 1;
            justify-content: space-around;
            // padding: 0 0 10px 0;;
        }
    }
    @include mediaQuery(425px, 550px, 1.3vw) {
        main {
            flex-direction: column;
        }
        .calendarAndEventDisplay {
            order: 2;
            padding-top: 25px;
            flex-direction: column;
            aside.eventDisplay {
                margin: 0;
            }
            .blueDot {
                &::after {
                    left: 45%;
                }
            }
        }
        aside.filters {
            flex-direction: row;
            order: 1;
            justify-content: space-around;
            // padding: 0 0 10px 0;;
        }
    }
    @include mediaQuery(300px, 425px, 1.8vw) {
        main {
            flex-direction: column;
        }
        .calendarAndEventDisplay {
            order: 2;
            padding-top: 25px;
            flex-direction: column;
            .calendarHeader {
                h2  {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            }
            aside.eventDisplay {
                margin: 0;
            }
            span#eventDuration {
                 white-space: pre;
            }
        }
        aside.filters {
            flex-direction: column;
            font-size: 105%;
            order: 1;
            margin: 0 auto 20px auto;
            label {
                padding-bottom: 3px;
            }
            h4 {
                margin: 23px 0 8px 0;
            }
            input[type=checkbox] {
                transform: scale(1.2);
            }
        }
    }
</style>
