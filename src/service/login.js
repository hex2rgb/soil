import {$get, $post} from '@/utils/request';

/**
 * 登录
 * @param data
 */
export function login(data) {
    return $post('/login', data);
}

/**
 * 登出
 * @param data
 */
export function logout(data) {
    return $post('/login', data);
}

/**
 * 获取用户信息
 * @param data
 */
export function getUserInfo(data) {
    return $post('/login', data);
}

