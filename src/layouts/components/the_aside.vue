<template>
    <div class="aside">
        <div class="collapse"
             @click="collapse">
            <span v-if="isCollapse">展开</span>
            <span v-else>折叠</span>
        </div>
        <el-row class="tac">
            <el-col>
                <el-menu
                    mode="vertical"
                    :default-openeds="[$route.path]"
                    hide-timeout="300"
                    :collapse-transition="true"
                    :collapse="isCollapse"
                    :default-active="$route.path"
                    :router="true"
                    @open="handleOpen"
                    @close="handleClose">
                    <template v-for="(item,key) in menuList">
                        <el-submenu v-if="item.groupTitle" :index="item.router" :key="key">
                            <template slot="title">
                                <i :class="item.iconClass"></i>
                                <span>{{item.groupTitle}}</span>
                            </template>
                            <el-menu-item
                                v-for="(children,key) in item.children"
                                :key="key"
                                :index="children.router"
                                :disabled="children.disabled">
                                <i :class="children.iconClass"></i>
                                {{children.title}}
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item
                            v-else
                            :index="item.router"
                            :key="key"
                            :disabled="item.disabled">
                            <i :class="item.iconClass"></i>
                            <span slot="title">{{item.title}}</span>
                        </el-menu-item>
                    </template>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'sidebar',
        data: function () {
            return {
                menuList: [
                    {
                        title: '首页',
                        router: '/home',
                        isDisable: true,
                        iconClass: 'iconfont icon-home'
                    },
                    {
                        title: '图表',
                        router: '/charts',
                        isDisable: true,
                        iconClass: 'iconfont icon-chart'
                    },
                    {
                        groupTitle: '表单',
                        router: '/form',
                        iconClass: 'iconfont icon-biaodan',
                        children: [
                            {
                                router: '/page1',
                                title: '含有校验',
                                disabled: false,
                                iconClass: 'el-icon-location'
                            },
                            {
                                router: '/page2',
                                title: '没有校验',
                                disabled: false,
                                iconClass: 'el-icon-location'
                            }
                        ]
                    },
                    {
                        groupTitle: '表格',
                        router: '/table',
                        iconClass: 'iconfont icon-biaoge'
                    },
                    {
                        groupTitle: '穿梭框',
                        router: '/transf',
                        iconClass: 'iconfont icon-chuansuokuang',
                        children: [
                            {
                                router: '/router21',
                                title: '选项21',
                                isDisable: true,
                                iconClass: 'el-icon-location'
                            },
                            {
                                router: '/router22',
                                title: '选项22',
                                isDisable: true,
                                iconClass: 'el-icon-location'
                            }
                        ]
                    }
                ]
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            collapse() {
                return this.$store.commit('collapse');
            }
        },
        computed: {
            activeMenuIndex() {
                // debugger
                return this.$route.path;
            },
            isCollapse() {
                return this.$store.state.collapse;
            }
        }
    };
</script>
<style lang="scss" scoped>
    .aside {
        .collapse {
            background-color: #fff;
            width: 100%;
            height: 30px;
            font-size: 16px;
            line-height: 30px;
            text-align: center;
            transition: width 0.3s;
        }
        .active {
            width: 64px;
            transition: width 0.3s;
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
