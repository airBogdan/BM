<template lang="html">
    <nav>
        <div id="insideNav">
            <router-link :to="{ name: 'Home'}">Home</router-link>
            <div id="sign">
                <slot></slot>
                <!-- <slot name="logout"></slot> -->
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/_variables.scss';
@import '~styles/_mixins.scss';

nav {
    background-color: black;
    height: 40px;
    line-height: 40px;
    #insideNav {
        width: 96%;
        max-width: 900px;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        a {
            text-decoration: none;
            color: white;
            font-size: 22px;
            &:hover {
                color: $home-color;
            }
        }
        #sign a {
            padding: 0 8px;
            line-height: 40px;
            &:last-child {
                border-left: 2px solid white;
            }
        }
    }
}
</style>
