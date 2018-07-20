<template>
    <div class="pagination" v-if="tableData.length!=0">
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
        props: ['list', 'params'],
        data() {
            return {
                total: 0,
                pageSize: 20,
                currentPage: '',
                tableData: []
            };
        },
        methods: {
            getList(page) {
                const temp = {
                    currentPage: page || 1

                };
                const params = this.params && this.utils.extend(temp, this.params);
                this.$http.get(this.list,
                    {
                        params: params
                    })
                    .then((response) => {
                        const data = response.data;
                        this.total = data.count - 0;
                        this.currentPage = page || 1;
                        this.pageSize = data.pageSize - 0;
                        this.$store.state.tableData = data.list || [];
                        this.tableData = this.$store.state.tableData;
                        this.$emit('tableData', this.tableData);
                    });
            },

            // 翻页
            pageChange(page) {
                this.getList(page);
            }
        },
        mounted: function () {
            this.getList();
        }
    };
</script>
