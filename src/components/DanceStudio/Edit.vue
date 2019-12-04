<template lang="html">
    <div class="editContainer">
        <div class="header">
            <h2>Edit Schedule</h2>
            <div>
                <span id="back">
                    <router-link to="/classes" tag="a"><i class="fas fa-undo-alt"> </i>Back to schedules</router-link>
                </span>
                 <el-button type="success" round>New Schedule</el-button>
            </div>
        </div>

        <div class="scheduleTitle">
            <h3>Schedule title</h3>
            <input type="text" name="" value="" placeholder="Enter a title here">
        </div>

        <div class="scheduleStyle">
            <h3>Schedule style</h3>
            <div class="cardAndDescription">
                <div class="card">
                    <div class="checkCircle">
                        <i class="fas fa-check"></i>
                    </div>
                </div>
                <div class="description">
                    <p>Currently your schedule is set to display as a <span>plain list</span></p>
                    <p><span class="purple" @click="changeStyle=!changeStyle">Change style</span> &nbsp; or &nbsp; <span>Customize appearance</span></p>
                </div>
            </div>
        </div>

        <change-schedule-style v-if="changeStyle" @closeChangeStyle="changeStyle=$event"></change-schedule-style>

        <div class="daysAndEvents">
            <h3>Days & events to display in the schedule</h3>
            <p>Currently your schedule is set to display <span>all future events.</span> <span class="change" @click="changeTime=!changeTime">Change</span></p>
        </div>


        <change-days-events v-if="changeTime" @closeChangeTimes="changeTime=$event"></change-days-events>

        <div class="selectEvents">
            <h3 class="title">Select events displayed in the schedule by</h3>

            <p>
                <span class="split">
                    <span>Event types:</span>
                    <el-dropdown @command="typeFn">
                        <span class="el-dropdown-link">
                            {{type}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(typ, index) in typeArray" :command="typ" :key="index">{{typ}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>

                <span class="split">
                    <span>Days of the week:</span>
                    <el-dropdown @command="daysFn">
                        <span class="el-dropdown-link">
                            {{days}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(day, index) in daysArray" :command="day" :key="index">{{day}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>
            </p>

            <p>
                <span class="split">
                    <span>Locations:</span>
                    <el-dropdown @command="locationsFn">
                        <span class="el-dropdown-link">
                            {{locations}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(loc, index) in locationsArray" :command="loc" :key="index">{{loc}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>

                <span class="split">
                    <span>Time of the day:</span>
                    <el-dropdown @command="todFn">
                        <span class="el-dropdown-link">
                            {{timeOfDay}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(tod, index) in timeOfDayArray" :command="tod" :key="index">{{tod}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>
            </p>

            <p>
                <span class="split">
                    <span>Instructors:</span>
                    <el-dropdown @command="instructorsFn">
                        <span class="el-dropdown-link">
                            {{instructors}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(inst, index) in instructorsArray" :command="inst" :key="index">{{inst}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>
            </p>

        </div>

        <div class="allowVisitors">
            <h3>Allow visitors to use the following filters in the schedule</h3>
            <div class="underTitle">Currently the schedule has <span>all filters disabled</span></div>

            <p>
                <span class="split">
                    <span>Event types:</span>
                    <el-dropdown @command="typeFn2">
                        <span class="el-dropdown-link">
                            {{type2}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(typ, index) in typeArray" :command="typ" :key="index">{{typ}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>

                <span class="split">
                    <span>Days of the week:</span>
                    <el-dropdown @command="daysFn2">
                        <span class="el-dropdown-link">
                            {{days2}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(day, index) in daysArray" :command="day" :key="index">{{day}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>
            </p>

            <p>
                <span class="split">
                    <span>Locations:</span>
                    <el-dropdown @command="locationsFn2">
                        <span class="el-dropdown-link">
                            {{locations2}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(loc, index) in locationsArray" :command="loc" :key="index">{{loc}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>

                <span class="split">
                    <span>Time of the day:</span>
                    <el-dropdown @command="todFn2">
                        <span class="el-dropdown-link">
                            {{timeOfDay2}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(tod, index) in timeOfDayArray" :command="tod" :key="index">{{tod}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>
            </p>

            <p>
                <span class="split">
                    <span>Instructors:</span>
                    <el-dropdown @command="instructorsFn2">
                        <span class="el-dropdown-link">
                            {{instructors2}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(inst, index) in instructorsArray" :command="inst" :key="index">{{inst}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>
            </p>
        </div>

        <div class="allowVisitorsToView">
            <h3>Allow visitors to view the description for each event</h3>
            <div class="view">
                <div class="">
                    <span></span>
                    <p>In a modal window</p>

                </div>
                <div class="">
                    <span></span>
                    <p>In a separate page</p>
                </div>
                <div class="">
                    <span></span>
                    <p>No</p>
                </div>
            </div>
        </div>

        <div class="modalWindowCustomization">
            <h3>Modal window customization</h3>
            <p class="subtitle">The dates displayed in the modal window will look like this: <span>23 March 2018</span> <span class="change">Change date format</span> </p>

            <p>
                <span class="split">
                    <span> Show event types: </span>
                    <span>
                            <el-switch v-model="switch1" active-color="#543FF5">
                            </el-switch>

                    </span>
                    <span class="yesNo">{{switch1 == true ? "Yes" : "No"}}</span>
                </span>

                <span class="split">
                    <span> Show ending time: </span>
                    <span>
                        <el-switch v-model="switch2" active-color="#543FF5">
                        </el-switch>
                    </span>
                    <span class="yesNo">{{switch2 == true ? "Yes" : "No"}}</span>
                </span>
            </p>

            <p>
                <span class="split">
                    <span> Show locations: </span>
                    <span>
                        </el-switch>
                        <el-switch v-model="switch3" active-color="#543FF5">
                        </el-switch>
                    </span>
                    <span class="yesNo">{{switch3 == true ? "Yes" : "No"}}</span>
                </span>


                <span class="split">
                    <span> Time of the day: </span>
                    <span>
                        <el-switch v-model="switch4" active-color="#543FF5">
                        </el-switch>
                    </span>
                    <span class="yesNo">{{switch4 == true ? "Yes" : "No"}}</span>
                </span>
            </p>

            <p>
                <span class="split">
                    <span> Show instructors: </span>
                    <el-dropdown @command="typeFn2">
                        <span class="el-dropdown-link">
                            {{type2}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(typ, index) in typeArray" :command="typ" :key="index">{{typ}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>
            </p>
        </div>

        <router-link to="/" tag="a" style="color: red; text-decoration: none;">Home</router-link>
    </div>
</template>

<script>
    import ChangeScheduleStyle from './ChangeScheduleStyle.vue'
    import ChangeDaysEvents from './ChangeDaysEvents.vue'
    export default {
        data() {
            return {
                type: 'All',
                type2: 'All',
                days: 'Custom',
                days2: 'Custom',
                locations: 'Disabled',
                locations2: 'Disabled',
                timeOfDay: 'All',
                timeOfDay2: 'All',
                instructors: 'All',
                instructors2: 'All',
                typeArray: ['All', 'A', 'B'],
                daysArray: ['Custom', 'C', 'D'],
                locationsArray: ['Disabled', 'E', 'F'],
                timeOfDayArray: ['All', 'G', 'H'],
                instructorsArray: ['All', 'I', 'J'],
                switch1: true,
                switch2: true,
                switch3: true,
                switch4: true,
                changeStyle: false,
                changeTime: false
            }
        },
        methods: {
            typeFn(e) {
                this.type = e
            },
            typeFn2(e) {
                this.type2 = e
            },
            daysFn(e) {
                this.days = e
            },
            daysFn2(e) {
                this.days2 = e
            },
            locationsFn(e) {
                this.locations = e
            },
            locationsFn2(e) {
                this.locations2 = e
            },
            todFn(e) {
                this.timeOfDay = e
            },
            todFn2(e) {
                this.timeOfDay2 = e
            },
            instructorsFn(e) {
                this.instructors = e
            },
            instructorsFn2(e) {
                this.instructors2 = e
            }
        },
        computed: {},
        components: {
            changeScheduleStyle: ChangeScheduleStyle,
            changeDaysEvents: ChangeDaysEvents
        }
    }
</script>

<style lang="scss" scoped>

@import "./../../scss/_variables.scss";
@import "./../../scss/_mixins.scss";

.editContainer {
    // height: 300vh;
    width: 100%;
    max-width: 820px;
    margin: auto;
    padding-top: 50px;
  }
    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
        h2 {
            font-size: 34px;
        }
        #back {
            color: $impExp;
            margin-right: 25px;
            cursor: pointer;
            i {
                color: $impExp;
                margin-right: 10px;
            }
            a {
                color: $greyFont;
                text-decoration: none;
                &:focus {
                    color: $greyFont;
                }
            }
        }
    }
    .scheduleTitle {
        margin: 115px 0 0 0;
        font-weight: 600;
        input {
            width: 100%;
            height: 44px;
            box-sizing: border-box;
            margin: 10px 0 0 0;
            padding-left: 20px;
            &::placeholder {
                color: #a5a5a5;
                font-size: 16px;
            }
        }
        h3 {
            font-size: 18px;
        }
    }
    .scheduleStyle {
        margin: 75px 0 0 0;
        font-weight: 600;
        h3 {
            font-size: 18px;
        }
        .cardAndDescription {
            display: flex;
            margin-top: 15px;
            .card {
                width: 280px;
                height: 175px;
                background: white;
                position: relative;
                border: 1px solid $border;
                .checkCircle {
                    height: 25px;
                    width: 25px;
                    border-radius: 50%;
                    background: $purple;
                    position: absolute;
                    top: -9px;
                    right: -9px;
                    i {
                        position: absolute;
                        color: white;
                        font-size: 10px;
                        top: 9px;
                        right: 8px;

                    }
                }
            }
            .description {
                margin: 0 0 0 50px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                font-weight: 400;
                font-size: 16px;
                color: $greyFont;
                span {
                    font-weight: 600;
                    color: black;
                }
                .purple {
                    color: $purple;
                    cursor: pointer;
                }
                p:last-child {
                    margin-top: 15px;
                }
            }
        }
    }


    .daysAndEvents {
        margin: 60px 0 0 0;
        h3 {
            font-weight: 600;
            font-size: 18px;
        }
        p:last-child {
            margin: 15px 0 0 0;
            color: $greyFont;
            font-weight: 400;
            font-size: 16px;
        }
        span {
            font-weight: 600;
            color: black;
        }
        .change {
            font-weight: 600;
            color: $purple;
            margin: 0 0 0 10px;
            cursor: pointer;
        }
    }



    .selectEvents {
        h3 {
            font-weight: 600;
            margin: 74px 0 15px 0;
            font-size: 18px;
            border: none;
            color: black;
        }
        p {
            color: $greyFont;
            padding: 8px 0;
            border-bottom: 1px solid $border;
            display: flex;
            .split {
                width: 30%;
                display: flex;
                justify-content: space-between;
            }
            .split:first-child {
                margin-right: 180px;
            }
        }
        p:last-child {
            border: none;
        }
        .el-dropdown-link {
            color: black;
            font-weight: 600;
        }
    }
    .allowVisitors {
        h3 {
            font-weight: 600;
            margin: 74px 0 12px 0;
            font-size: 18px;
            border: none;
            color: black;
        }
        .underTitle {
            color: $greyFont;
            margin-bottom: 21px;
            span {
                color: black;
                font-weight: 600;
            }
        }
        p {
            color: $greyFont;
            padding: 8px 0;
            border-bottom: 1px solid $border;
            display: flex;
            .split {
                width: 30%;
                display: flex;
                justify-content: space-between;
            }
            .split:first-child {
                margin-right: 180px;
            }
        }
        p:last-child {
            border: none;
        }
        .el-dropdown-link {
            color: black;
            font-weight: 600;
        }
    }
    .allowVisitorsToView {
        margin-top: 118px;
        h3 {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 16px;
        }
        .view {
            display: flex;
            span {
                display: inline-block;
                height: 160px;
                width: 235px;
                border: 1px solid $border;
                background: white;
            }
            div {
                margin-right:28px;
            }
            p {
                text-align: center;
                color: $greyFont;
                margin-top: 15px;
            }
        }
    }
    .modalWindowCustomization {
        margin-bottom: 80px;
        h3 {
            font-size: 18px;
            font-weight: 600;
            margin: 77px 0 16px 0;
        }
        .subtitle {
            color: black;
            margin-bottom: 35px;
            display: inline-block;
            span {
                font-weight: 600;
            }
            .change {
                margin-left: 15px;
                color: $purple;
                font-weight: 400;
            }
        }
        p {
            color: $greyFont;
            padding: 8px 0;
            border-bottom: 1px solid $border;
            display: flex;
            .split {
                width: 32%;
                display: flex;
                justify-content: space-between;
                position: relative;
            }
            .split:first-child {
                margin-right: 160px;
            }
            .yesNo {
                position: absolute;
                right: -40px;
                bottom: 0;
                font-weight: 600;
                color: black;
            }
            .el-dropdown-link {
                color: black;
                font-weight: 600;
            }
        }
    }
</style>
