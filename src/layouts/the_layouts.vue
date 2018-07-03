<template>
    <div :class="{container:true,active:isCollapse}">
        <div class="header"></div>
        <div class="aside">
            <Aside></Aside>
        </div>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Aside from '@/layouts/components/the_aside';
    import Headers from '@/layouts/components/the_header';

    export default {
        name: 'layouts',
        components: {Aside, Headers},
        computed: {
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

    .header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: $header-top;
        background-color: rgba(11, 196, 255, 1);
    }

    .aside {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        width: $aside-left;
        height: 100%;
        padding-top: $header-top;
        box-sizing: border-box;
        background-color: #fff;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .content {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: $header-top+8px 8px 8px $aside-left+8px;
        background: #8093ff;
        overflow: auto;
    }
</style>
