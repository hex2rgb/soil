import http from '@/utils/request';
import api from './_api';

const {apiSubmitLogin} = api;

/**
 * 登录
 * @param data
 */
export function login(data) {
    return http({
        url: apiSubmitLogin,
        method: 'post',
        data
    });
}

/**
 * 登出
 * @param data
 */
export function logout(data) {
    return http({
        url: apiSubmitLogin,
        method: 'post',
        data
    });
}

/**
 * 获取用户信息
 * @param data
 */
export function getUserInfo(data) {
    return http({
        url: apiSubmitLogin,
        method: 'post',
        data
    });
}

