<template>
    <div class="headers clearfix">
        <p class="left breadcrumb">
            <span class="nowPosition">设置设置设置设置：</span>
        </p>
        <ul class="layui-nav top_menu right">
            <li class="layui-nav-item layui-nav-item-last">
                <router-link to="/lApp">设置设置设置设置</router-link>
            </li>
            <li class="layui-nav-item news layui-nav-item-last">
                <a href="javascript:;">
                    <i class="iconfont icon-lock1"></i>
                    <i :class="config.kh+config.ldfxs&&'active'"></i>
                    <span>设置设置设置设置</span>
                    <span class="layui-nav-more"></span>
                </a>
                <dl class="layui-nav-child layui-anim layui-anim-upbit">
                    <dd>
                        <i :class="config.ldfxs&&'active'"></i>
                        <router-link to="/remind/hairdresser">设置设置设置设置设置设置设置</router-link>
                    </dd>
                    <dd>
                        <i :class="config.kh&&'active'"></i>
                        <router-link to="/remind/customer">设置设置设置设置</router-link>
                    </dd>
                </dl>
            </li>
            <li class="layui-nav-item layui-nav-item-last lockcms" pc="">
                <a href="javascript:;">
                    <i class="iconfont icon-lock1"></i><span>设置设置设置设置</span>
                    <span class="layui-nav-more"></span>
                </a>
                <dl class="layui-nav-child layui-anim layui-anim-upbit">
                    <dd>
                        <img src="/admin/index/getcodeimg" alt=""/>
                    </dd>
                    <dd style="text-align: center;">
                        设置设置设置设置设置设置设置
                    </dd>
                </dl>
            </li>
            <li class="layui-nav-item layui-nav-item-last" pc="">
                <a href="javascript:;">
                    <i class="usrIcon">
                    </i>
                    <span>admin</span>
                    <span class="layui-nav-more"></span>
                </a>
                <dl class="layui-nav-child layui-anim layui-anim-upbit">
                    <dd @click="getInfo();popDialog.personal.dialogFormVisible = true">
                        <a href="javascript:;" data-url="page/user/userInfo.html">
                            <i class="iconfont icon-zhanghu" data-icon="icon-zhanghu"></i>
                            <span>设置设置设置设置</span></a>
                    </dd>
                    <dd @click="popDialog.password.dialogFormVisible = true">
                        <a href="javascript:;" data-url="page/user/changePwd.html">
                            <i class="iconfont icon-shezhi1" data-icon="icon-shezhi1"></i>
                            <span>设置设置设置设置</span></a>
                    </dd>
                    <dd @click="logout">
                        <a href="javascript:;">
                            <i class="iconfont icon-loginout"></i>
                            <span>设置设置</span></a>
                    </dd>
                </dl>
            </li>
        </ul>

        <!--设置设置设置设置设置设置设置设置-->
        <el-dialog
            :append-to-body="true"
            :show-close="false"
            title="设置设置设置设置设置设置"
            :visible.sync="popDialog.personal.dialogFormVisible" width=500px>
            <el-form
                size="small"
                :model="popDialog.personal.form"
                :rules="popDialog.personal.rules"
                ref="personalInfo" label-width="100px">
                <el-form-item label="设置设置设置设置" prop="uname">
                    <el-input v-model="popDialog.personal.form.uname"></el-input>
                </el-form-item>
                <el-form-item label="设置设置" prop="sex">
                    <el-radio-group v-model="popDialog.personal.form.sex">
                        <el-radio label="设置" :key="1" value="设置"></el-radio>
                        <el-radio label="设置" :key="2" value="设置"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="设置设置设置设置" prop="mobile">
                    <el-input v-model="popDialog.personal.form.mobile"></el-input>
                </el-form-item>
                <el-form-item label="设置设置" prop="email">
                    <el-input v-model="popDialog.personal.form.email"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="resetForm('personalInfo')">设置 设置</el-button>
                <el-button type="primary" @click="modPersonalInfo('personalInfo')">设置 设置</el-button>
            </div>
        </el-dialog>

        <!--设置设置设置设置设置设置-->
        <el-dialog
            :append-to-body="true"
            :show-close="false" title="设置设置设置设置"
            :visible.sync="popDialog.password.dialogFormVisible" width="500px">
            <el-form
                size="small"
                :model="popDialog.password.form"
                :rules="popDialog.password.rules"
                ref="password"
                label-width="100px">
                <el-form-item label="设置设置设置" prop="newPassword">
                    <el-input v-model="popDialog.password.form.newPassword"></el-input>
                </el-form-item>
                <el-form-item label="设置设置设置设置" prop="confirmPassword">
                    <el-input v-model="popDialog.password.form.confirmPassword"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="resetForm('password')">设置 设置</el-button>
                <el-button type="primary" @click="modPassword('password')">设置 设置</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        name: 'headers',
        scanCode: '/admin/index/getcodeimg',
        data() {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('设置设置设置设置设置设置设置'));
                } else if (value != this.popDialog.password.form.newPassword) {
                    callback(new Error('设置设置设置设置设置设置设置设置设置!'));
                } else {
                    callback();
                }
            };
            return {
                config: {
                    kh: 0,
                    ldfxs: 0
                },
                popDialog: {
                    personal: {
                        formLabelWidth: '80px',
                        dialogFormVisible: false,
                        form: {
                            // id:'',
                            uname: '',
                            sex: '设置',
                            mobile: '',
                            email: '',
                            act: 'editinfo' // editpass
                        },
                        rules: {
                            uname: [
                                {required: true, message: '设置设置设置设置设置', trigger: 'blur'}
                            ],
                            sex: [
                                {required: true, message: '设置设置设置设置设置', trigger: 'change'}
                            ],
                            mobile: [
                                {required: true, message: '设置设置设置设置设置', trigger: 'blur'}
                            ]
                        }
                    },
                    password: {
                        formLabelWidth: '80px',
                        dialogFormVisible: false,
                        form: {
                            newPassword: '',
                            confirmPassword: ''
                        },
                        rules: {
                            newPassword: [
                                {required: true, message: '设置设置设置设置设置设置', trigger: 'blur'}
                            ],
                            confirmPassword: [
                                {required: true, message: '设置设置设置设置设置设置设置', trigger: 'blur'},
                                {validator: validatePass, trigger: 'blur'}
                            ]
                        }
                    }
                }
            };
        },
        methods: {

            // 设置设置设置设置设置设置
            modPersonalInfo(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.popDialog.personal.form.act = 'editinfo';
                        this.$http.post(
                            this.api.edit,
                            this.popDialog.personal.form
                        )
                            .then((response) => {
                                this.utils.successMsg(this, response.msg);
                                this.popDialog.personal.dialogFormVisible = false;
                            });
                    } else {
                        return false;
                    }
                });
            },

            // 设置设置设置设置
            modPassword(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.popDialog.personal.form.act = 'editpass';
                        const psotData = {
                            act: 'editpass',
                            password: this.popDialog.password.form.newPassword
                        };
                        this.$http.post(this.api.edit,
                            psotData)
                            .then((response) => {
                                this.utils.successMsg(this, response.msg);
                                this.popDialog.password.dialogFormVisible = false;
                            });
                    } else {
                        return false;
                    }
                });
            },

            getInfo() {
                this.$http.get(
                    this.api.getInfo)
                    .then((response) => {
                        const data = response.data || {};
                        // debugger;
                        this.popDialog.personal.form.uname = data.uname;
                        this.popDialog.personal.form.sex = data.sex;
                        this.popDialog.personal.form.mobile = data.mobile;
                        this.popDialog.personal.form.email = data.email;
                    });
            },
            // 设置设置
            logout() {
                this.$confirm('设置设置设置设置设置？')
                    .then(() => {
                        this.$http.get(this.api.logout, {})
                            .then((response) => {
                                this.utils.successMsg(this, response.msg);
                                this.$router.push('/login');
                            });
                    });
            },

            // 设置设置设置设置
            resetForm(formName) {
                this.popDialog.personal.dialogFormVisible = false;
                this.popDialog.password.dialogFormVisible = false;
                this.$refs[formName].resetFields();
            },

            // 设置设置设置
            notice() {
                this.$http.get(this.api.notice, {})
                    .then((response) => {
                        // debugger;
                        const data = response.data;
                        this.config.kh = data.kh - 0;
                        this.config.ldfxs = data.ldfxs - 0;
                    });
            }
        },
        mounted: function () {

        }
    };
</script>
