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
 *
 * @param that 当前作用域this
 * @param formname ref
 */
export function resetForm(that, formname) {
    that.$refs[formname] && that.$refs[formname].resetFields();
}

/**
 * 更新tableData列表
 * @param that 当前作用域this
 */
export function updateList(that) {
    that.$refs.childPagination.getList();
}
