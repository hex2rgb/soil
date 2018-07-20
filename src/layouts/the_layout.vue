<template>
    <div class="container" :class="{sidebar_hide:sidebar.opened}">
        <div class="aside">
            <AsideNav :isActive="sidebar.opened"></AsideNav>
        </div>
        <div class="content">
            <div class="header">
                <hamburger class="hamburger_container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
                <breadcrumb class="breadcrumb_container"></breadcrumb>
            </div>
            <div class="view">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import AsideNav from 'lcomp/sidebar';
    import Headers from 'lcomp/the_header';
    import Hamburger from 'comp/hamburger';
    import Breadcrumb from 'comp/breadcrumb';

    export default {
        name: 'layouts',
        components: {AsideNav, Headers, Hamburger, Breadcrumb},
        methods: {
            toggleSideBar() {
                this.$store.dispatch('toggleSideBar');
            }
        },
        computed: {
            ...mapGetters([
                'sidebar'
            ]),
            isCollapse() {
                return this.$store.state.collapse;
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    $header-top: 44px;
    $aside-left: 200px;
    @mixin fold {
        transition: all 0.2s;
    }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: $header-top;
        margin-left: $aside-left;
        background-color: rgba(11, 196, 255, 1);
        @include fold;
    }

    .aside {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        width: $aside-left;
        height: 100%;
        box-sizing: border-box;
        background-color: #fff;
        overflow-x: hidden;
        overflow-y: auto;
        @include fold;
    }

    .content {
        height: 100%;
        box-sizing: border-box;
        overflow: auto;
        margin-left: $aside-left;
        @include fold;
    }

    .view {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: $header-top+8px 8px 8px 8px;
        background-color: #8093ff;
        overflow: auto;
    }

    .container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        &.sidebar_hide {
            .aside {
                width: 64px;
            }
            .content,
            .header {
                margin-left: 64px;
            }
            & /deep/ .el-submenu__icon-arrow,
            & /deep/ .menu_title {
                display: none;
            }
        }
    }
</style>
