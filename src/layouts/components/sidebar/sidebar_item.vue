<template>
    <div>
        <template v-for="item in routes" v-if="!item.hidden">
            <el-menu-item v-if="hasOneShowingChildren(item.children)"
                          :key="item.children[0].path"
                          :index="item.path+'/'+item.children[0].path">
                <i :class="item.children[0].meta.icon"></i>
                <span slot="title">{{item.children[0].meta.title}}</span>
            </el-menu-item>
            <el-submenu v-else :index="item.path" :key="item.name">
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{item.meta.title}}</span>
                </template>
                <el-menu-item v-for="child in item.children"
                              :key="child.name"
                              :index="item.path+'/'+child.path">
                    <span slot="title">{{child.meta.title}}</span>
                </el-menu-item>
            </el-submenu>
        </template>
    </div>
</template>
<script>
    export default {
        name: 'SidebarItem',
        props: {
            routes: {
                type: Array
            },
            isNest: {
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
        }
    };
</script>
