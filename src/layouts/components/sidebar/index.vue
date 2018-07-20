<template>
    <div class="aside">
        <div class="logo">
            logo
        </div>
        <el-row>
            <el-col>
                <!--:collapse-transition="false" 导致递归报错,原因尚不清楚-->
                <el-menu
                    mode="vertical"
                    :show-timeout="200"
                    :collapse-transition="true"
                    :collapse="isActive"
                    :default-active="$route.path"
                    :router="true">
                    <template v-for="item in permission_routers" v-if="!item.hidden">
                        <el-menu-item v-if="hasOneShowingChildren(item.children)"
                                      :key="item.children[0].path"
                                      :index="item.path+'/'+item.children[0].path">
                            <i :class="item.children[0].meta.icon"></i>
                            <span class="menu_title" slot="title">{{item.children[0].meta.title}}</span>
                        </el-menu-item>
                        <el-submenu v-else :index="item.path" :key="item.name">
                            <template slot="title">
                                <i :class="item.meta.icon"></i>
                                <span class="menu_title" slot="title">{{item.meta.title}}</span>
                            </template>
                            <el-menu-item v-for="child in item.children"
                                          :key="child.name"
                                          :index="item.path+'/'+child.path">
                                <span class="menu_title" slot="title">{{child.meta.title}}</span>
                            </el-menu-item>
                        </el-submenu>
                    </template>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'sidebar',
        props: {
            isActive: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hasOneShowingChildren(children) {
                const showingChildren = children.filter((item) => {
                    return !item.hidden;
                });
                if (showingChildren.length === 1) {
                    return true;
                }
                return false;
            }
        },
        computed: {
            ...mapGetters([
                'permission_routers'
            ])
        }
    };
</script>
<style lang="scss" scoped>
    .aside {
        .logo {
            background-color: #fff;
            width: 100%;
            height: 30px;
            font-size: 16px;
            line-height: 30px;
            text-align: center;
        }
        .el-menu {
            border-right: 0 none;
        }
    }

    .iconfont {
        display: inline-block;
        margin-right: 5px;
    }
</style>
