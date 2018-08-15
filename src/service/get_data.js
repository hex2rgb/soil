import {$post, $get} from '@/utils/request';
import api from './_api';

const {apiTableList, apiSubmitLogin, apiDel, apiModOrAdd} = api;

/**
 * 登录
 * @param data
 */
export function login(data) {
    return $post(apiSubmitLogin, data);
}

/**
 * 请求列表
 * @param params
 */
export function fetchList(params) {
    return $post(apiTableList, params);
}

/**
 * 添加 & 修改
 * @param data
 */
export function modOrAdd(data) {
    return $post(apiModOrAdd, data);
}

/**
 * 删除
 * @param data
 */
export function del(data) {
    return $post(apiDel, data);
}

