// Promise.all polyfill

const p1 = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("Heyo");
    }, 1000)
})

const p2 = new Promise((res, rej)=>{
    res("Hiiii");
})

const p3 = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("H!!!!!");
    }, 2000)
})

function myPromiseAll(promises){
    const result = [];
    return new Promise((res, rej)=>{
        for(let i = 0; i < promises.length; i++){
            promises[i].then((val)=>{
                result[i] = val;
                if(result.length === promises.length) res(result);
            }).catch((err)=> rej(err))
        }
    })
}


myPromiseAll([p1,p2,p3]).then((res)=>console.log(res)).catch((err)=>console.log(err));


// EventEmitter

class Emitter{
    constructor(){
        this.events={}
    }
    
    on(event, callBackFn){
        if(!this.events[event]){
            this.events[event] = [];
        }
        this.events[event].push(callBackFn);
    }
    
    emit(event, ...args){
        if(this.events[event]){
            this.events[event].forEach(fn => fn(...args));
        }
    }
    
    off(event, callBackFn){
        this.events[event].filter((fn)=> fn !== callBackFn)
    }
}


// LRU Cache


class LRUCache{
    constructor(capacity){
        this.cache = new Map;
        this.capacity = capacity;
    }
    
    get(key){
        if (!this.cache.has(key))
            return -1;
        
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        
        return value;
    }
    
    set(key, value){
        if(this.cache.has(key)){
            this.cache.delete(key);
        }
        else if(this.cache.size === this.capacity){
            let oldest = this.cache.keys().next().value;
            this.cache.delete(oldest);
        }
        this.cache.set(key, value);
    }
}


// Retry API with Promises and delay

function apiFun(){
    return new Promise((res, rej)=>{
    let ran = Math.floor(Math.random()*10);
    console.log("Retrying...", ran);
    setTimeout(()=>{
        if(ran > 6) res("Pass");
        else rej("Pappu");
    }, 2000)
})
}

function delayTime (delay = 1000) {
    console.log("Delay")
    return new Promise((res, rej)=>{
    setTimeout(()=>{
        res();
    }, delay)
})
} 

function retryPromise(api, retry = 3){
    return api().then().catch(async (err)=>{
        if(retry > 0) {
            await delayTime();
            return retryPromise(api, retry-1);
        }
    })
}

retryPromise(apiFun).then(console.log).catch(console.log);
