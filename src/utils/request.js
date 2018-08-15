import axios from 'axios';
import qs from 'qs';
import {errorMsg} from '@/utils/utils';

/**
 * 错误码列表
 * @param error
 * @returns {*|string}
 */
function statusList(error) {
    const arr = {
        400: '错误请求',
        401: '未授权，请重新登录',
        403: '拒绝访问',
        404: '请求错误,未找到该资源',
        405: '请求方法未允许',
        408: '请求超时',
        500: '服务器端出错',
        501: '网络未实现',
        502: '网络错误',
        503: '服务不可用',
        504: '网络超时',
        505: 'http版本不支持该请求'
    };
    return arr[error.response.status] || `连接错误:${error.response.status}`;
}

function regExp(params) {
    return /form-data/.test(params);
}

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '' : 'http://127.0.0.1:8006/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const $http = axios.create();

// 添加请求拦截器
$http.interceptors.request.use((config) => {
    const _config = config || {};
    // loadingInstance = Loading.service();
    _config.params = _config.params || {};
    _config.params._ = Date.now();// 防止请求缓存
    if (!regExp(_config.headers['Content-Type'])) {
        _config.data = _config.data && qs.stringify(_config.data); // post处理
    }

    // 在发送请求之前做些什么
    return _config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
$http.interceptors.response.use((response) => {
    // 数据示例
    /* let obj = {
        message:'',
        status: 0,
             data: {
             list:[]
           }
     };*/
    // loadingInstance.close({background: 'rgba(0,0,0,.1)'});
    const data = response.data;
    if (response.status === 200) {
        if (data.status != 0) {
            errorMsg(data.msg);
            return Promise.reject(data.msg);
        }
    }
    // 对响应数据做点什么
    return data.data;
}, (error) => {
    if (error && error.response) {
        error.message = statusList(error);
    } else {
        error.message = '连接到服务器失败';
    }
    return Promise.reject(error);
});

/**
 * post请求
 * @param api
 * @param data
 * @returns {AxiosPromise}
 */
function $post(api, data) {
    return $http({
        url: api,
        method: 'post',
        data
    });
}

/**
 * get请求
 * @param api
 * @param params
 * @returns {AxiosPromise}
 */
function $get(api, params) {
    return $http({
        url: api,
        method: 'get',
        params: params
    });
}

export {axios, $post, $get};
