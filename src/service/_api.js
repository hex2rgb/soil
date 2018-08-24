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

const rootPath = (function () {
    switch (_env()) {
        case 'proxy':
            return '/api';
        case 'mock':
            return '/app';
        default:
            return '请检查环境配置';
    }
}());

const api = {

    // 列表
    apiTableList: `${rootPath}/list`,

    // 登录
    apiSubmitLogin: `${rootPath}/login`,

    // 删除
    apiDel: `${rootPath}/common`,

    // 添加修改
    apiModOrAdd: `${rootPath}/common`

};
export default api;

