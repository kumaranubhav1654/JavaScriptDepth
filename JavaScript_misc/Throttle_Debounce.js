// Debounce and Throttle

const heavyApi = () => {
    console.log("Executed");
}

const useDebounce = (fn, delay) =>{
let timerId = 0;
    return function (){
        console.log("Called")
        if(timerId) clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fn();
        }, delay)
    }
}

const debounceFn = useDebounce(heavyApi, 500);
debounceFn();
debounceFn();
debounceFn();

const useThrottle = (fn, timeLimit, ...args) => {
    let LastTime = 0;
    return function (...args){
        let now = Date.now();
        if(now - LastTime > timeLimit){
            fn(...args);
            count = 1;
            LastTime = now;
        }
    }
}

const throttleFn = useThrottle(heavyApi, 500);
throttleFn();
throttleFn();
throttleFn();
