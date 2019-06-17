// 此处全局配置过滤器
// 初始化金钱有关内容
exports.initMoney = (value) => {
        if (value) {
            value = Number(value);
            return '￥ ' + value.toFixed(2);
        } else {
            return '￥ 0.00'
        }
    }
//初始化将new Data 转化为 对应时间格式
exports.initData = (value) => {
        if (!value) {
            return ''
        } else {
            var data = new Date(value);
            var year = data.getFullYear();
            var mon =
                data.getMonth() + 1 > 10 ?
                data.getMonth() + 1 :
                "0" + (data.getMonth() + 1);
            var day = data.getDate() >= 10 ? data.getDate() : "0" + data.getDate();
            var hou = data.getHours() >= 10 ? data.getHours() : "0" + data.getHours();
            var min =
                data.getMinutes() >= 10 ? data.getMinutes() : "0" + data.getMinutes();
            var sec =
                data.getSeconds() >= 10 ? data.getSeconds() : "0" + data.getSeconds();
            return year + "-" + mon + "-" + day + " " + hou + ":" + min + ":" + sec;
        }
    }
    // 四舍五入 保留N位小数 默认保留2位小数
exports.toFixed = (value, num = 2) => {
        if (value) {
            value = Number(value);
            return value.toFixed(num)
        } else {
            return 0
        }
    }
    // 不四舍五入 保留N位小数 默认保留2位小数
exports.aboutPoint = (value, num = 2) => {
    if (value) {
        var result = parseFloat(num);
        // 解析参数
        if (isNaN(result)) {
            // 格式判断
            return '参数错误';
        }
        result = Math.round(value * (num * 10)) / (num * 10);
        var s_x = result.toString();
        var pos_decimal = s_x.indexOf('.'); //判断小数点位置  为后面补充0做准备
        if (pos_decimal < 0) {
            pos_decimal = s_x.length;
            s_x += '.';
        }
        while (s_x.length <= pos_decimal + num) {
            s_x += '0';
        }
        return s_x;
    } else {
        return 0
    }
}