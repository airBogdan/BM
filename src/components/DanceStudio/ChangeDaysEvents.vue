<template lang="html">
    <div class="changeEventsTimes">
        <div class="buttonsTop">
            <a href="#" @click="closeCard">Cancel</a>
            <el-button size="mini">Save</el-button>
        </div>

        <p>
            <span>Start schedule with</span>
            <el-dropdown class="right" @command="startScheduleFn">
                <span class="el-dropdown-link">
                    {{startScheduleWith}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu class="width" slot="dropdown">
                    <el-dropdown-item v-for="(start, index) in startScheduleArray" :key="index" :command="start">{{start}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </p>

        <p>
            <span>End schedule on</span>
            <el-dropdown class="right" @command="endScheduleFn">
                <span class="el-dropdown-link">
                    {{endScheduleOn}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu class="width" slot="dropdown">
                    <el-dropdown-item v-for="(end, index) in endScheduleArray" :key="index" :command="end">{{end}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </p>

        <p class='howManyDaysToShow'>
            <span></span>
            <span class="right flex"> <span>How many days to show? &nbsp; </span><span style="font-weight: 600">{{slider}}</span> </span>
        </p>

        <div class="slider">
            <span></span>
            <div class="block">
                <el-slider v-model="slider" :step="1" :max="7">
                </el-slider>
            </div>
        </div>

        <p>
            <span></span>
            <span class="right" id="daysWeeks">
                <a href="#">1 day</a>
                <a href="#">3 days</a>
                <a href="#">1 week</a>
                <a href="#">2 weeks</a>
                <a href="#">3 weeks</a>
                <a href="#">4 weeks</a>
            </span>
        </p>

        <p>
            <span></span>
            <span class="right">
                <template>
                    <el-checkbox v-model="checked">Check this box to display a button which allows visitors to load <span id="bold">7 more days</span> to the calendar </el-checkbox>
                </template>
            </span>
        </p>

        <p>
            <span></span>
            <span class="right">Show more button label</span>
        </p>

        <p>
            <span></span>
            <span class="right">
                <input type="text" placeholder="Enter a label here">
            </span>
        </p>

        <p id="lastP">
            <span>Limit events by number</span>
            <el-dropdown class="right" @command="limitEventsFn">
                    <span class="el-dropdown-link">
                        {{limitEvents}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu class="width" slot="dropdown">
                        <el-dropdown-item v-for="(limit, index) in limitEventsArray" :key="index" :command="limit">{{limit}}</el-dropdown-item>
                    </el-dropdown-menu>
            </el-dropdown>
        </p>

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
                startScheduleArray: ['Always with the current date', 'Not always with the current date', '3rd option'],
                startScheduleWith: 'Always with the current date',
                endScheduleArray: ['After a fixed number of days in the future', 'After a fixed number of days in the past', 'After a fixed number of days in the present'],
                endScheduleOn: 'After a fixed number of days in the future',
                limitEventsArray: ['No limit', 'Limit', 'Ltd'],
                limitEvents: 'No Limit',
                slider: 7,
                checked: false
            }
        },
        methods: {
            closeCard() {
                this.$emit('closeChangeTimes', false)
            },
            startScheduleFn(event) {
                this.startScheduleWith = event
            },
            endScheduleFn(event) {
                this.endScheduleOn = event
            },
            limitEventsFn(event) {
                this.limitEvents = event
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "./../../scss/_variables.scss";
@import "./../../scss/_mixins.scss";
.changeEventsTimes {
    margin: 49px 0 120px 0;
    position: relative;
    background: white;
    color: $greyFont;
    .buttonsTop {
        position: absolute;
        right: 0px;
        top: -37px;
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
    .buttonsBottom {
        position: absolute;
        right: 0;
        bottom: -41px;
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
    p {
        display: flex;
        justify-content: space-between;
        margin: 0 146px 0 50px;
        line-height: 40px;
        .right { //right side of the card
            display: inline-block;
            width: 60%;
            font-size: 14px;
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
    p:nth-child(2) {
        padding-top: 70px;
    }
    p:nth-child(3) {
        padding-top: 54px;
    }
    .howManyDaysToShow {
        padding-top: 25px;
        .flex {
            display: flex;
            justify-content: space-between;
        }
    }
    .slider {
        display: flex;
        justify-content: space-between;
        margin: 0 146px 0 50px;
        padding-top: 28.5px;
        .block {
            display: inline-block;
            width: 60%;
        }
        .el-slider {
            display: inline-block;
            width: 100%;
        }
        .el-slider__runway {
            display: inline-block;
            // width: 50%;
        }
        .el-slider__bar {
            background-color: $purple;
        }
        .el-slider__button {
            border: 2px solid $purple;
            background-color: $purple;
        }
    }
    #daysWeeks {
            a {
                margin: 0 auto;
                color: #543FF5;
            }
            margin-top: 27px;
            display: flex;
            justify-content : space-between;
        }

    .el-checkbox {
            display: flex;
            align-items: center;
            margin: 43px 0 36px 0;
            color: $greyFont;
            #bold {
                color: black;
                font-weight: 600;
            }
        }
    .el-checkbox__label {
        white-space: normal;
    }
    .is-checked > .el-checkbox__inner {
            background-color: $purple;
            border-color: $purple;
        }
    .el-checkbox__inner:hover, .is-focus .el-checkbox__inner {
        border-color: $purple;
        outline:none;
    }
    .is-checked > .el-checkbox__label {
            color: $purple;
        }

    input {
            padding: 0 0 0 20px;
            width: 100%;
            height: 44px;
            box-sizing: border-box;
            outline: none;
            &::placeholder {
                color: #a5a5a5;
                font-size: 14px;
            }
            &:focus {
                border: 1.2px solid $purple;
            }
        }
    #lastP {
        padding-top: 32px;
        padding-bottom: 95px;
    }
}
</style>
