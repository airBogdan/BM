<template lang="html">
    <div class="changeScheduleStyle">
        <div class="buttonsTop">
            <a href="#" @click="closeCard">Cancel</a>
            <el-button size="mini">Save</el-button>
        </div>
        <el-tabs type="card">
            <el-tab-pane label="General">
                <p>
                    <span class="left">
                        <span>Show schedule title</span>
                        <el-switch v-model="changeSwitch1" active-color="#543FF5">
                        </el-switch>
                    </span>
                    <span class="right">Checking this field will show your title above the schedule</span>
                </p>

                <p>
                    <span class="left">
                        <span>Show events ending time</span>
                        <el-switch v-model="changeSwitch2" active-color="#543FF5">
                        </el-switch>
                    </span>
                    <span class="right">Checking this field will show the events' ending times</span>
                </p>

                <p>
                    <span class="left">
                        <span>Show events duration</span>
                        <el-switch v-model="changeSwitch3" active-color="#543FF5">
                        </el-switch>
                    </span>
                    <span class="right">Checking this field will show the events' durations</span>
                </p>

                <p>
                    <span class="left">
                        <span>Show events excerpt</span>
                        <el-switch v-model="changeSwitch4" active-color="#543FF5">
                        </el-switch>
                    </span>
                    <span class="right">Checking this field will show the events excerpts</span>
                </p>

                <p>
                    <span class="left">
                        <span>Show time in 12h format</span>
                        <el-switch v-model="changeSwitch5" active-color="#543FF5">
                        </el-switch>
                    </span>
                    <span class="right">Checking this field will show the time in 12h format ( 11:30pm )</span>
                </p>

                <p>
                    <span class="left">
                        <span>Show events reversed</span>
                        <el-switch v-model="changeSwitch6" active-color="#543FF5">
                        </el-switch>
                    </span>
                    <span class="right">Checking this field will reverse the chronological order of events</span>
                </p>

                <p>
                    <span class="left">
                        <span>Show events types</span>
                        <el-switch v-model="changeSwitch7" active-color="#543FF5">
                        </el-switch>
                    </span>
                    <span class="right">Checking this field will show the event type for each event</span>
                </p>

                <p>
                    <span class="left">
                        <span>Show locations</span>
                        <el-switch v-model="changeSwitch8" active-color="#543FF5">
                        </el-switch>
                    </span>
                    <span class="right">Checking this field will show the locatio for each event</span>
                </p>

                <p>
                    <span class="left">
                        <span>Show instructors</span>
                        <el-switch v-model="changeSwitch9" active-color="#543FF5">
                        </el-switch>
                    </span>
                    <span class="right">Checking this field will show the instructors for each event</span>
                </p>

                <p>
                    <span class="dateFormat">Date format</span>
                    <el-dropdown class="right" @command="dateFormatFn">
                        <span class="el-dropdown-link">
                                {{dateFormat}} <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu class="width" slot="dropdown">
                            <el-dropdown-item v-for="(date, index) in dateFormatArray" :key="index" :command="date">{{date}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </p>
            </el-tab-pane>

            <el-tab-pane label="Carousel Options">Nothing to show (yet)</el-tab-pane>
            <el-tab-pane label="Labels">Nothing to show (yet)</el-tab-pane>
            <el-tab-pane label="Colors">Nothing to show (yet)</el-tab-pane>
        </el-tabs>
        <div class="buttonsBottom">
            <a href="#" @click="closeCard">Cancel</a>
            <el-button size="mini">Save</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                changeSwitch1: true,
                changeSwitch2: true,
                changeSwitch3: true,
                changeSwitch4: true,
                changeSwitch5: true,
                changeSwitch6: true,
                changeSwitch7: true,
                changeSwitch8: true,
                changeSwitch9: true,
                dateFormatList: false,
                dateFormatArray: [
                    'Default style format (25 Jan 2018)',
                    'American style format (Jan 25 2018)',
                    'Reverse format (2018 Jan 25)'
                ],
                dateFormat: 'Default style format (25 Jan 2018)'
            }
        },
        methods: {
            dateFormatFn(event) {
                this.dateFormat = event
            },
            closeCard() {
                this.$emit( 'closeChangeStyle', false )
            }
        }
        // props: ['changeStyle']
    }
</script>

<style lang="scss" scoped>
@import "./../../scss/_variables.scss";
@import "./../../scss/_mixins.scss";

.changeScheduleStyle {
    margin: 70px 0 120px 0;
    position: relative;
    .buttonsTop {
        position: absolute;
        right: 0px;
        top: 0px;
        z-index: 2;
        line-height: 45px;
        a {
            font-size: 14px;
            text-decoration: none;
            margin-right: 15px;
            cursor: pointer;
        }
        .el-button {
            background: $purple;
            color: white;
            padding: 7px 26px;
        }
    }
    .buttonsBottom {
        position: absolute;
        right: 0;
        margin-top: 10px;
        a {
            font-size: 14px;
            text-decoration: none;
            margin-right: 15px;
            cursor: pointer;
        }
        .el-button {
            background: $purple;
            color: white;
            padding: 7px 26px;
            cursor: pointer;
        }
    }
    .el-tabs--card>.el-tabs__header {
        border: none;
        margin: 0;
    }
    .el-tabs__item {
        font-weight: 600;
        border: none;
        color: $purple;
        height: 45px;
        min-width: 120px;
        text-align: center;
    }
    .el-tabs__nav {
        border: none;
        outline: none;
    }
    .is-active {
        background: white;
        color: black;
    }
    .el-tabs__content {
        background: white;
        padding-top: 15px;
    }
    p {
        display: flex;
        margin: 40px 0 0 50px;
        line-height: 40px;
        .left {
            justify-content: space-between;
            align-items: center;
            display: flex;
            width: 40%;
        }
        .right {
            margin-left: 23px;
            color: $greyFont;
                width: 60%;
        }
    }
    p:last-child {
        margin: 24px 146px 83px 50px;
        display: flex;
        position: relative;
        .right {
            margin: 0;
        }
        .dateFormat {
            width: 40%;
        }
    }
    .el-dropdown {
        border: 1px solid $border;
        box-sizing: border-box;
        padding: 0 0 0 24px;
        .el-dropdown-link {
            display: flex!important;
            justify-content: space-between;
            align-items: center;
            i {
                margin-right: 23px;
            }
        }
    }
}

</style>
