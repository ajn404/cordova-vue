export default class Utils {
    name: String;
    constructor(options: any) {
        this.name = options.name
    }

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