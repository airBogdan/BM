<template lang="html">
    <div class="listingContainer">
        <div class="header">
            <h2>My Schedules</h2>
            <div class="topLeft">
                <span id="import"><i class="fas fa-upload"></i>Import</span>
                 <el-button type="success" round>New Schedule</el-button>
            </div>
        </div>

        <div class="filtersAndSort">
            <div class="filters">
                <p>Type:</p>
                <el-dropdown @command="typeFn">
                    <span class="el-dropdown-link">
                        {{type}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(typ, index) in typeArray" :command="typ" :key="index">{{typ}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <p>Location:</p>
                <el-dropdown @command="locationFn">
                    <span class="el-dropdown-link">
                        {{location}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(loc, index) in locationArray" :command="loc" :key="index">{{loc}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <p>Instructor:</p>
                <el-dropdown @command="instructorFn">
                    <span class="el-dropdown-link">
                        {{instructor}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(instructor, index) in instructorArray" :command="instructor" :key="index">{{instructor}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

            </div>

            <div class="sort">
                <p>Order: </p>
                <el-dropdown @command="orderFn">
                    <span class="el-dropdown-link">
                        {{order}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(ord, index) in orderArray" :command="ord" :key="index">{{ord}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>

        <div class="cards">
            <card-component v-for="(clas, index) in paginatedData" :key="index" :clas="clas"></card-component>
        </div>

        <div class="footer">
            <span><i class="fas fa-download"></i>Export Schedule</span>
            <div class="block">
                <el-pagination layout="prev, pager, next"
                    :page-count='totalPages'
                    @current-change="prevClick"
                    @next-click="nextClick"
                    @prev-click="prevClick"></el-pagination>
            </div>
        </div>

        <router-link to="/" tag="a" style="color: red; text-decoration: none;">Home</router-link>
        <!-- <p>
            <router-link to="/todos" tag="a" style="color: blue; text-decoration: none;">Todos</router-link>
        </p> -->
    </div>
</template>

<script>
    import data from './../../data.json'
    import cardComponent from './Card.vue'

    export default {
        data() {
            return {
                data,
                type: 'All',
                location: 'All',
                instructor: 'All',
                order: 'All',
                typeArray: ['All', '1', '2'],
                locationArray: ['All', '1', '2'],
                instructorArray: ['All', '1', '2'],
                orderArray: ['All', '1', '2'],
                crtPage: 1
            }
        },
        components: {
            cardComponent
        },
        methods: {
            typeFn(e) {
                this.type = e
            },
            instructorFn(e) {
                this.instructor = e
            },
            locationFn(e) {
                this.location = e
            },
            orderFn(e){
                this.order = e
            },
            prevClick(e) {
                this.crtPage = e
            },
            nextClick(e) {
                this.crtPage = e
            },
            prevClick(e) {
                this.crtPage = e
            },
        },
        computed: {
            paginatedData() {
                let a = 8 * (this.crtPage-1)
                let b = 8 * this.crtPage
                let newArr = []
                for (let i=a; i<b; i++) {
                    if (this.data[i]) {
                        newArr.push(this.data[i])
                    }
                }
                return newArr
            },
            totalPages() {
                let x
                if (this.data.length % 8 == 0) {
                    x = this.data.length / 8
                }
                else {
                    x = Math.floor(this.data.length / 8) + 1
                }
                return x
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "./../../scss/_variables.scss";
@import "./../../scss/_mixins.scss";

.listingContainer {
    width: 100%;
    max-width: 820px;
    margin: auto;
    padding-top: 50px;
    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
        h2 {
            font-size: 34px;
        }
        #import {
            color: $impExp;
            margin-right: 25px;
            cursor: pointer;
            i {
                margin-right: 10px;
            }
        }
    }
    .filtersAndSort {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        p {
            font-size: 16px;
            color: $greyFont;
            display: inline;
        }
        .el-dropdown-link {
            cursor: pointer;
            i {
                color: $purple!important;
                font-weight: bold;
                font-size: 105%;
            }
        }
        .el-icon-arrow-down {
            font-size: 12px;
        }
        .el-dropdown {
            margin: 0 10px 0 5px;
            span {
                color: black;
                font-weight: bold;
            }
        }
    }
    .cards {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .card {
            box-sizing: border-box;
            width: 400px;
            height: 191px;
            margin: 12px 0;
            border: 1px solid $border;
            padding: 20px 0 20px 60px;
            background: white;
            position: relative;
            overflow: hidden;
            h3 {
                font-size: 18px;
                font-weight: bold;
                position: relative;
                &::before {
                    content: "";
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background: $purple;
                    border-radius: 50%;
                    position: absolute;
                    left: -35px;
                }
            }
            #scheduleType {
                font-size: 14px;
                margin-top: 5px;
                color: $greyFont;
            }
            #lastEdited {
                margin-top: 80px;
                font-size: 12px;
                color: $greyFont;
                opacity: 0.76;
                span {
                    color: black;
                }
            }
            .hoverPopup {
                height: 100%;
                padding: 27px 30px;
                box-sizing: border-box;
                box-shadow: -7px 1px 15px #d1d1d1;
                position: absolute;
                top: 0;
                right: 0;
                background: #fff;
                font-size: 14px;
                letter-spacing: -0.3px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                z-index: 1;
                i {
                    margin-right: 10px;
                }
                a {
                    text-decoration: none;
                    &:focus {
                        color: $purple;
                    }
                }
                .top {
                    color: $purple;
                }
                p {
                    cursor: pointer;
                    padding: 0 0 18px 0;
                }
                p:last-child {
                    padding: 0;
                }
                #duplicate {
                    color: $greyFont;
                }
                #delete {
                    color: #F53F46;
                }
            }
            &:hover >h3, &:hover>p, &:hover>span, &:hover > #lastEdited {
                opacity: 0.2;
            }
        }
    }
    .footer {
        margin-top: 30px;
        color: $impExp;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        i {
            margin-right: 10px;
        }
        .el-pagination {
            // display: none;
            background-color: $background;
            button, ul, li {
                background-color: $background!important;
            }
            .el-pager li.active, .el-pager li:hover, button:hover:enabled {
                color: $purple;
            }
        }
    }

    
}
</style>
