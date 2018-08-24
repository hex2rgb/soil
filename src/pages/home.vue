<template>
    <div>
        <el-input v-model="input"></el-input>
        <el-button @click="getList">搜索</el-button>
        <div class="toolbar">
            <el-button type="primary" @click="dialog.dialogFormVisible=true">添加</el-button>
        </div>
        <el-table :data="tableData.list">
            <el-table-column
                align="center"
                v-for="(item,key) in tableData.title"
                :key="key"
                :prop="item.prop"
                :formatter="item.prop=='date' ? dateFormat : (item.prop=='name'? moneyFormat:null)"
                :label="item.label">
            </el-table-column>
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <el-button @click="view(scope.row)" type="text">
                        编辑
                    </el-button>
                    <el-button @click="doDel(scope.row)" type="text">
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <spagenation :params="tableData.data" :pageChange="getList"></spagenation>
        <el-dialog title="popup"
                   @close="close('form')"
                   :visible.sync="dialog.dialogFormVisible">
            <el-form :model="dialog.form" :rules="dialog.rules" ref="form">
                <el-form-item label="日期" :label-width="dialog.formLabelWidth" prop="date">
                    <el-input v-model="dialog.form.date" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="姓名" :label-width="dialog.formLabelWidth" prop="name">
                    <el-input v-model="dialog.form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="dialog.formLabelWidth" prop="address">
                    <el-input v-model="dialog.form.address" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialog.dialogFormVisible=false">取 消</el-button>
                <el-button type="primary" @click="doSubmit('form')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import spagenation from 'comp/common/pagination';
    import {del, fetchList, modOrAdd} from '@/service/get_data';
    import {dateFormatHandler, moneyFormatHandler} from '@/filter';

    let originData = '';
    export default {
        name: 'page1',
        computed: {
            currentPage() {
                return this.tableData.currentPage;
            }
        },
        components: {spagenation},
        data: function () {
            return {
                input: '',
                tableData: {
                    title: [
                        {label: '日期', prop: 'date'},
                        {label: '姓名', prop: 'name'},
                        {label: '地址', prop: 'address'}],
                    list: [],
                    data: {}
                },
                dialog: {
                    formLabelWidth: '4em',
                    dialogFormVisible: false,
                    form: {
                        id: '',
                        date: '',
                        name: '',
                        address: ''
                    },
                    rules: {
                        date: [{required: true, message: '选择日期', trigger: 'blur'}],
                        name: [{required: true, message: '输入姓名', trigger: 'blur'}],
                        address: [{required: true, message: '输入地址', trigger: 'blur'}]
                    }
                }
            };
        },
        methods: {
            dateFormat(date) {
                return dateFormatHandler(date.date, 'yyyy-MM-dd hh:mm:ss');
            },
            moneyFormat(number) {
                return moneyFormatHandler(number.name, '$');
            },
            // 获取列表
            getList(currentPage) {
                const params = this.$utils.copy({input: this.input});
                params.currentPage = (typeof currentPage === 'number') ? (currentPage || 1) : 1;
                return fetchList(params)
                    .then((res) => {
                        this.tableData.list = res.list;
                        this.tableData.data = res;
                        return res;
                    });
            },
            // 窗口被关闭时,清空表单校验以及数据
            close(formName) {
                this.$refs[formName].resetFields();
                (originData) && (this.dialog.form = JSON.parse(originData));
            },
            // 查看数据
            view(data) {
                originData = JSON.stringify(this.dialog.form);
                this.dialog.dialogFormVisible = true;
                this.dialog.form.id = data.id;
                this.dialog.form.date = data.date;
                this.dialog.form.name = data.name;
                this.dialog.form.address = data.address;
            },
            // 删除
            doDel(params) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    del({id: params.id}).then(() => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    });
                    this.getList();
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            // 表单提交
            doSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        modOrAdd(this.dialog.form)
                            .then(() => {
                                this.$message({
                                    type: 'success',
                                    message: '操作成功!'
                                });
                                this.getList();
                                this.dialog.dialogFormVisible = false;
                            });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        },
        mounted() {
        }
    };
</script>
<style lang="scss" scoped>
    .pagenation {
        margin-top: 10px;
        text-align: center;
        .inner {
            display: inline-block;
        }
    }

    .toolbar {
        margin: 8px 0 16px 0;
    }

</style>
