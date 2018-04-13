<template>
    <div class="aside">
        <el-radio-group v-model="menuConf.isCollapse">
            <div :class="{collapse:true,active:menuConf.isCollapse}"
                 @click="menuConf.isCollapse=!menuConf.isCollapse">
                折叠
            </div>
        </el-radio-group>
        <el-row class="tac">
            <el-col>
                <el-menu
                    :collapse="menuConf.isCollapse"
                    :unique-opened="true"
                    :default-active="activeMenuIndex"
                    class="el-menu-vertical-demo"
                    :router="true"
                    @open="handleOpen"
                    @close="handleClose">
                    <el-submenu v-for="(item,key) in menuList" :key="key" :index="item.router">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.groupTitle}}</span>
                        </template>
                        <el-menu-item
                            v-for="(children,key) in item.children"
                            :key="key"
                            :index="children.router"
                            :disabled="children.disabled">
                            {{children.title}}
                        </el-menu-item>
                    </el-submenu>
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
                        groupTitle: '首页',
                        router: '/home',
                        children: [
                            {router: '/page1', title: '选项11', disabled: false},
                            {router: '/page2', title: '选项12', disabled: false}
                        ]
                    },
                    {
                        groupTitle: '导航2',
                        router: '/router21',
                        children: [
                            {router: '/router21', title: '选项21', isDisable: true},
                            {router: '/router22', title: '选项22', isDisable: true}
                        ]
                    }
                ],
                menuConf: {
                    isCollapse: false
                }
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        computed: {
            activeMenuIndex() {
                // debugger
                return this.$route.path;
            }
        }
    };
</script>
<style lang="scss" scoped>
    .aside {
        .collapse {
            background-color: #fff;
            width: 200px;
            height: 30px;
            font-size: 16px;
            line-height: 30px;
            text-align: center;
        }
        .active {
            width: 36px;
        }
        .el-menu {
            border-right: 0 none;
        }
    }
</style>
