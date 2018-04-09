/**
 *
 * @param that 当前作用域this
 * @param msg 提示消息
 */
export function successMsg(that, msg) {
    that.$message({
        showClose: true,
        message: msg || '操作成功',
        type: 'success'
    });
}

/**
 *
 * @param that 当前作用域this
 * @param msg 提示消息
 */
export function errorMsg(that, msg) {
    that.$message({
        showClose: true,
        message: msg || '操作失败',
        type: 'error'
    });
}

/**
 * 混合参数
 * @returns {object}
 */
export function extend() {
    const target = arguments[0] || {};
    let i = 1;
    const length = arguments.length;
    for (; i < length; i++) {
        for (const k of arguments[i]) {
            target[k] = arguments[i][k];
        }
    }
    return target;
}
