export function show() {}

export function debounce(fn:Function, wait=600):any {
    let timer:any = null;
    return function(this:object, ...args:any) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    }
}