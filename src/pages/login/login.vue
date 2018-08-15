<template>
    <div class="login_box">
        <div class="login">
            <el-form :model="form" :rules="rules" ref="form" label-width="5rem">
                <el-form-item label="用户名" prop="usrname">
                    <el-input v-model="form.usrname"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                    <el-input v-model="form.pwd"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('form')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                form: {
                    usrname: '123',
                    pwd: '123'
                },
                rules: {
                    usrname: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    pwd: [{required: true, message: '请输入密码', trigger: 'blur'}]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch('LoginByUsername', this.form)
                            .then(() => {
                                this.$router.push({path: '/home'});
                            })
                            .catch(() => {
                            });
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    };
</script>

<style lang="scss" scoped>
    .login_box {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.1) url("~@/assets/images/bg_login.png") center no-repeat;
        background-size: cover;
    }

    .login {
        width: 300px;
        height: 200px;
        background-color: #fff;
        padding: 18px 20px 0;
        position: absolute;
        right: 111px;
        top: 50%;
        margin-top: -100px;
        & /deep/ .el-form-item.is-required .el-form-item__label:before {
            display: none;
        }
    }

</style>
