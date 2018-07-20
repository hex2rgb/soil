import http from '@/utils/request';
import api from './_api';

const {apiTableList, apiSubmitLogin, apiDel, apiModOrAdd} = api;

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
 * 请求列表
 * @param params
 */
export function fetchList(params) {
    return http({
        url: apiTableList,
        method: 'get',
        params: params
    });
}

/**
 * 添加 & 修改
 * @param data
 */
export function modOrAdd(data) {
    return http({
        url: apiModOrAdd,
        method: 'post',
        data
    });
}

/**
 * 删除
 * @param data
 */
export function del(data) {
    return http({
        url: apiDel,
        method: 'post',
        data
    });
}

