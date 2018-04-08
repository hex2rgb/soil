/**
 * 对日期进行格式化，
 * @param date 要格式化的日期
 * @param format 进行格式化的模式字符串
 *     支持的模式字母有：
 *     y:年,
 *     M:年中的月份(1-12),
 *     d:月份中的天(1-31),
 *     h:小时(0-23),
 *     m:分(0-59),
 *     s:秒(0-59),
 *     S:毫秒(0-999),
 *     q:季度(1-4)
 * @return String
 */
export function dateFormatHandler(date, format) {
    const _date = new Date(date - 0);
    const map = {
        M: _date.getMonth() + 1, // 月份
        d: _date.getDate(), // 日
        h: _date.getHours(), // 小时
        m: _date.getMinutes(), // 分
        s: _date.getSeconds(), // 秒
        q: Math.floor((_date.getMonth() + 3) / 3), // 季度
        S: _date.getMilliseconds() // 毫秒
    };
    const _format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
        let v = map[t];
        if (v !== undefined) {
            if (all.length > 1) {
                v = `0${v}`;
                v = v.substr(v.length - 2);
            }
            return v;
        } else if (t === 'y') {
            return (_date.getFullYear().toString()).substr(4 - all.length);
        }
        return all;
    });
    return _format;
}

/**
 * 货币格式化
 * @param number {string} 被格式化数字
 * @param places {string} 精度
 * @param symbol {string} 货币符号
 * @param thousand {string} 千位符号
 * @param decimal {string} 小数点
 * @returns {string}
 */
export function moneyFormatHandler(number, places, symbol, thousand) {
    number = number || 0;
    places = (!isNaN(Math.abs(places))) ? places : 2;
    symbol = symbol !== undefined ? symbol : '$';
    thousand = thousand || ',';
    const decimal = '.';
    const negative = number < 0 ? '-' : '';
    const i = (parseInt(number = Math.abs(+number || 0).toFixed(places), 10)).toString();
    let j = i.length;
    j = j > 3 ? (j % 3) : 0;
    /* eslint-disable max-len */
    return symbol + negative + (j ? i.substr(0, j) + thousand : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousand}`) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : '');
}
