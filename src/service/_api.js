const _env = function () {
    const url = location.href;
    if (process.env.NODE_ENV != 'production') {
        // 本地环境
        if (url.indexOf('localhost') > -1) {
            // 假数据
            return 'mock';
        } else if (url.indexOf('127.0.0.1') > -1) {
            // 代理线上数据
            return 'proxy';
        }
    } else {
        // 生产
        return 'production';
    }
};

const rootPath = (function (url) {
    switch (_env()) {
        case 'proxy':
            return '/api';
        case 'production':
            return '';
        case 'mock':
            return 1;
        default:
            return '请检查环境配置';
    }
}());

const devApi = {

    // 字典-----start
    apiTableList: '/mock/table_list.json',

    // 登录
    apiSubmitLogin: '/mock/common.json',

    // 删除
    apiDel: '/mock/common.json'
};

const proApi = {

    // 列表
    apiTableList: `${rootPath}/list`,

    // 登录
    apiSubmitLogin: `${rootPath}/login`,

    // 删除
    apiDel: `${rootPath}/del`,

    // 添加修改
    apiModOrAdd: `${rootPath}/modOrAdd`

};
export default (function () {
    switch (_env()) {
        case 'proxy':
        case 'production':
            return proApi;
        case 'mock':
            return devApi;
        default:
            return '请检查环境配置';
    }
}());

