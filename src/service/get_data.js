import {$get, $post} from '@/utils/request';

/**
 * 请求列表
 * @param params
 */
export function fetchList(params) {
    return $get('/a/list', params);
}

/**
 * 添加 & 修改
 * @param data
 */
export function modOrAdd(data) {
    return $post('/common', data);
}

/**
 * 删除
 * @param data
 */
export function del(data) {
    return $post('/common', data);
}

