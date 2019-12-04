<template lang="html">
    <div class="card" @mouseover="hoverPop=true" @mouseout="hoverPop=false">
        <transition name="slide" type="animation" >

            <div class="hoverPopup" v-if="hoverPop">
                <div class="top">
                    <p>
                        <router-link to="/edit-classes" tag="a"><i class="far fa-edit fa-fw"></i>Edit</router-link>
                    </p>
                    <p><i class="far fa-share-square fa-fw"></i><span>Shortcode</span></p>
                </div>
                <div class="bottom">
                    <p id="duplicate"><i class="far fa-clone fa-fw"></i><span>Duplicate</span></p>
                    <p id="delete"><i class="far fa-minus-square fa-fw"></i><span>Delete</span></p>
                </div>
            </div>
        </transition>

        <h3>{{clas["classType"]}}</h3>
        <p id="scheduleType">{{clas["schedule type"]}}</p>
        <p id="lastEdited">Last edited by <span>{{clas["people"]}}</span> on <span>{{clas["date"]}}</span> </p>
    </div>

</template>

<script>
    import data from './../../data.json'
    export default {
        data() {
            return {
                data,
                hoverPop: false
            }
        },
        props: ['clas']
    }
</script>

<style lang="scss" scoped>
@import "./../../scss/_variables.scss";
@import "./../../scss/_mixins.scss";

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
                color: red;
                text-decoration: none;
                &:focus {
                    color: red;
                }
            }
            .top {
                // color: $purple;
            }
            p {
                margin-bottom: 15px;
                cursor: pointer;
            }
            p:last-child {
                padding: 0;
                margin-bottom: 0;
            }
            #duplicate {
                // color: $greyFont;
            }
            #delete {
                // color: #F53F46;
            }
        }
        &:hover >h3, &:hover>p, &:hover>span, &:hover > #lastEdited {
            opacity: 0.2;
        }
    }
    .slide-enter {
        opacity: 0;
    }
    .slide-enter-active {
        animation: slide-in 0.2s ease-out forwards;
        transition: opacity 0.2s;
    }
    .slide-leave {
        //
    }
    .slide-leave-active {
        animation: slide-out 0.2s ease-out forwards;
        transition: opacity 0.2s;
        opacity: 0;
    }
    @keyframes slide-in {
        from {
            transform: translateX(40%);
        }
        to {
            transform: translateX(0);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(40%);
        }
    }

</style>
