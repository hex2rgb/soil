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

/**
 * 金钱转大写
 * @param money
 * @returns {string}
 */
export function convertCurrency(money) {
    //汉字的数字
    const cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    //基本单位
    const cnIntRadice = ['', '拾', '佰', '仟'];
    //对应整数部分扩展单位
    const cnIntUnits = ['', '万', '亿', '兆'];
    //对应小数部分单位
    const cnDecUnits = ['角', '分', '毫', '厘'];
    //整数金额时后面跟的字符
    const cnInteger = '整';
    //整型完以后的单位
    const cnIntLast = '元';
    //最大处理的数字
    const maxNum = 999999999999999.9999;
    //金额整数部分
    let integerNum;
    //金额小数部分
    let decimalNum;
    //输出的中文金额字符串
    let chineseStr;
    //分离金额后用的数组，预定义
    let parts;
    if (money == '') {
        return '';
    }
    money = parseFloat(money);
    if (money >= maxNum) {
        //超出最大处理数字
        return '';
    }
    if (money == 0) {
        chineseStr = cnNums[0] + cnIntLast + cnInteger;
        return chineseStr;
    }
    //转换为字符串
    money = money.toString();
    if (money.indexOf('.') == -1) {
        integerNum = money;
        decimalNum = '';
    } else {
        parts = money.split('.');
        integerNum = parts[0];
        decimalNum = parts[1].substr(0, 4);
    }
    //获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
        let zeroCount = 0;
        const IntLen = integerNum.length;
        for (let i = 0; i < IntLen; i++) {
            const n = integerNum.substr(i, 1);
            const p = IntLen - i - 1;
            const q = p / 4;
            const m = p % 4;
            if (n == '0') {
                zeroCount++;
            } else {
                if (zeroCount > 0) {
                    chineseStr += cnNums[0];
                }
                //归零
                zeroCount = 0;
                chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
            }
            if (m == 0 && zeroCount < 4) {
                chineseStr += cnIntUnits[q];
            }
        }
        chineseStr += cnIntLast;
    }

    //小数部分
    if (decimalNum != '') {
        const decLen = decimalNum.length;
        for (let i = 0; i < decLen; i++) {
            const n = decimalNum.substr(i, 1);
            if (n != '0') {
                chineseStr += cnNums[Number(n)] + cnDecUnits[i];
            }
        }
    }
    if (chineseStr == '') {
        chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum == '') {
        chineseStr += cnInteger;
    }
    return chineseStr;
}
