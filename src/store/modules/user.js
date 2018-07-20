import {login, logout, getUserInfo} from '@/service/login';
import {getToken, setToken, removeToken} from '@/utils/auth';

const user = {
    state: {
        user: '',
        status: '',
        code: '',
        token: getToken(),
        name: '',
        avatar: '',
        introduction: '',
        roles: [],
        setting: {
            articlePlatform: []
        }
    },

    mutations: {
        SET_CODE: (state, code) => {
            state.code = code;
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_INTRODUCTION: (state, introduction) => {
            state.introduction = introduction;
        },
        SET_SETTING: (state, setting) => {
            state.setting = setting;
        },
        SET_STATUS: (state, status) => {
            state.status = status;
        },
        SET_NAME: (state, name) => {
            state.name = name;
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        }
    },

    actions: {
        // 用户名登录
        LoginByUsername({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                login(userInfo)
                    .then((response) => {
                        const data = response;
                        commit('SET_TOKEN', data.token);
                        setToken(data.token);
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },

        // 获取用户信息,设置权限名称¬
        GetUserInfo({commit, state}) {
            return new Promise((resolve, reject) => {
                getUserInfo(state.token)
                    .then((response) => {
                        const data = response;
                        if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
                            commit('SET_ROLES', data.roles);
                        } else {
                            reject('getInfo: roles must be a non-null array !');
                        }

                        commit('SET_NAME', data.name);
                        commit('SET_AVATAR', data.avatar);
                        commit('SET_INTRODUCTION', data.introduction);
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },

        // 登出
        LogOut({commit, state}) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('SET_TOKEN', '');
                    commit('SET_ROLES', []);
                    removeToken();
                    resolve();
                }).catch((error) => {
                    reject(error);
                });
            });
        }
    }
};

export default user;
