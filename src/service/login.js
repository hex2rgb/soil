import {$post, $get} from '@/utils/request';
import api from './_api';

const {apiSubmitLogin} = api;

/**
 * 登录
 * @param data
 */
export function login(data) {
    return $post(apiSubmitLogin, data);
}

/**
 * 登出
 * @param data
 */
export function logout(data) {
    return $post(apiSubmitLogin, data);
}

/**
 * 获取用户信息
 * @param data
 */
export function getUserInfo(data) {
    return $post(apiSubmitLogin, data);
}

