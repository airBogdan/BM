<template lang="html">
    <div class="appContainer">
        <!-- <app-calendar></app-calendar> -->
        <router-view name="nav"></router-view>
        <router-view name="navigation"></router-view>
        <router-view></router-view>
    </div>
</template>

<script>
    import "@babel/polyfill";

    export default {
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss">
.appContainer {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,“Segoe UI”,Roboto,“Helvetica Neue”,Arial,sans-serif;
    font-family: “Segoe UI”,Roboto,“Helvetica Neue”,Arial,sans-serif;

}
@import "~styles/_variables.scss";
@import "~styles/_mixins.scss";

.el-dropdown-menu.width {
    width: 374.39px;
}
.el-dropdown-menu {
    .el-dropdown-menu__item:hover {
        background: $purple;
        color: white;
    }
}
.appContainer {
}
body, h1, h2, h3, h4, h5, h6, p, ul, li, input, textarea {
    margin: 0;
    padding: 0;
}
//
// html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
//     margin: 0;
//     padding: 0;
//     border: 0;
//     font-size: 100%;
//     font: inherit;
//     vertical-align: baseline;
// }
// /* HTML5 display-role reset for older browsers */
// article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
//     display: block; }
// body {
//     line-height: 1; }
// ol, ul {
//     list-style: none; }
// blockquote, q {
//     quotes: none; }
// blockquote {
//     &:before, &:after {
// content: '';
// content: none; } }
// q {
//     &:before, &:after {
// content: '';
// content: none; } }
// table {
//     border-collapse: collapse;
//     border-spacing: 0;
// }
// button {
// background-color: transparent;
// outline: none;
// border: 0;
// cursor: pointer; }

</style>
