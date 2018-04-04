<template>
    <el-row class="tac">
        <el-col>
            <el-menu
                :unique-opened="true"
                :default-active="activeMenuIndex"
                class="el-menu-vertical-demo"
                :router="true"
                @open="handleOpen"
                @close="handleClose">
                <el-submenu v-for="(item,key) in menu" :key="key" :index="item.router">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{item.groupTitle}}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item
                            v-for="(children,key) in item.children"
                            :key="key"
                            :index="children.router"
                            :disabled="children.disabled">
                            {{children.title}}
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'sidebar',
        data: function () {
            return {
                menu: [
                    {
                        groupTitle: '导航1',
                        router: '/router11',
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
                ]
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
