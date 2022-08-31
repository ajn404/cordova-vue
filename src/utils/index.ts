export default class Utils {
    name: String;
    constructor(options: any) {
        this.name = options.name
    }

    // static throttle() {
    //     let _ = this;

    //     let context, args, result;
    //     let timeout = null;
    //     let previous = 0;
    //     if (!options) options = {};
    //     let later = function () {
    //         previous = options.leading === false ? 0 : _.now();
    //         timeout = null;
    //         result = func.apply(context, args);
    //         if (!timeout) context = args = null;
    //     };
    //     return function () {
    //         let now = _.now();
    //         if (!previous && options.leading === false) previous = now;
    //         // 计算剩余时间
    //         let remaining = wait - (now - previous);
    //         context = this;
    //         args = arguments;
    //         // 当到达wait指定的时间间隔，则调用func函数
    //         // 精彩之处：按理来说remaining <= 0已经足够证明已经到达wait的时间间隔，但这里还考虑到假如客户端修改了系统时间则马上执行func函数。
    //         if (remaining <= 0 || remaining > wait) {
    //             // 由于setTimeout存在最小时间精度问题，因此会存在到达wait的时间间隔，但之前设置的setTimeout操作还没被执行，因此为保险起见，这里先清理setTimeout操作
    //             if (timeout) {
    //                 clearTimeout(timeout);
    //                 timeout = null;
    //             }
    //             previous = now;
    //             result = func.apply(context, args);
    //             if (!timeout) context = args = null;
    //         } else if (!timeout && options.trailing !== false) {
    //             // options.trailing=true时，延时执行func函数
    //             timeout = setTimeout(later, remaining);
    //         }
    //         return result;
    //     }
    // }

    static simpleThrottle(func: Function, delay: number | undefined) {
        let timeOut: string | number | NodeJS.Timeout | undefined;
        return function (this: any) {
            let that = this;
            clearTimeout(timeOut);
            timeOut = setTimeout(() => {
                func.apply(that, arguments)
            }, delay)
        }
    }


}