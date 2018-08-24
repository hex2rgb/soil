<template>
    <div class="pagination" v-if="tableData&&tableData.length!=0">
        <el-pagination background
                       @current-change="pageChange"
                       :page-size="pageSize"
                       :current-page="currentPage"
                       layout="prev, pager, next"
                       :total="total">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: 's-pagination',
        props: {
            // 检测类型
            params: Object,
            // 检测类型 + 其他验证
            pageChange: {
                type: Function,
                required: true
            }
        },
        computed: {
            total() {
                return this.params ? this.params.total : 0;
            },
            currentPage() {
                return this.params.currentPage || 1;
            },
            tableData() {
                return this.params ? this.params.list : [];
            },
            pageSize() {
                return 20;
            }
        }
    };
</script>
