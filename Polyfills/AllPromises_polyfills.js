const p1 = new Promise((res, rej)=>{
    res("All Good");
})

const p2 = new Promise((res, rej)=>{
    rej("All NOT Good");
})

const p3 = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("All Good after 2sec");
    }, 2000)
})

const p4 = new Promise((res, rej)=>{
    setTimeout(()=>{
        rej("All NOT Good after 3sec");
    }, 3000)
})

console.log("Will test all types of promises here:")
Promise.all([p1,p2,p3,p4]).then((res)=>console.log("ALL:", res)).catch((err)=>console.log("ALL:", err));
Promise.allSettled([p1,p2,p3,p4]).then((res)=>console.log("ALL_SETTELED:", res)).catch((err)=>console.log("ALL_SETTELED:", err));
Promise.race([p1,p2,p3,p4]).then((res)=>console.log("RACE:", res)).catch((err)=>console.log("RACE:", err));
Promise.any([p1,p2,p3,p4]).then((res)=>console.log("ANY:", res)).catch((err)=>console.log("ANY:", err));


//POLYFILLS
// Promise Polyfills


Promise.MyPromiseAll = function (promises){
    const result = [];
    let count = 0;
    return new Promise((res, rej)=>{
        for(let i = 0; i < promises.length; i++){
            promises[i]
                .then((success)=>{
                    result[i] = success;
                    count++;
                    if(count === promises.length) res(result);
                })
                .catch((error)=>{
                    rej(error);
                })
        }
    })
}

Promise.MyPromiseAll([p1,p2,p3,p4]).then((res)=>console.log("ALL:", res)).catch((err)=>console.log("ALL:", err));


Promise.MyPromiseAllSettled = function (promises){
    const result = [];
    let count = 0;
    return new Promise((res, rej)=>{
        if (promises.length === 0) {
            res([]);
            return;
        }
        for(let i = 0; i < promises.length; i++){
            promises[i]
                .then((success)=>{
                    result[i] = {Status: "Resolved",value: success};
                    count++;
                    if(count === promises.length) res(result);
                })
                .catch((error)=>{
                    result[i] = {Status: "Rejected",reason: error};
                    count++;
                    if(count === promises.length) res(result);
                })
        }
    })
}

Promise.MyPromiseAllSettled([p1,p2,p3,p4]).then((res)=>console.log("ALL_Settled:", res)).catch((err)=>console.log("ALL_Settled:", err));


Promise.MyPromiseRace = function (promises){

    return new Promise((res, rej)=>{
        if (promises.length === 0) {
            res([]);
        }
        for(let i = 0; i < promises.length; i++){
            promises[i]
                .then((success)=>{
                    res(success);
                })
                .catch((error)=>{
                    rej(error);
                })
        }
    })
}

Promise.MyPromiseRace([p1,p2,p3,p4]).then((res)=>console.log("Race:", res)).catch((err)=>console.log("Race:", err));



Promise.MyPromiseAny = function (promises){

    return new Promise((res, rej)=>{
        if (promises.length === 0) {
            res([]);
            return; // After Res() The executor function continues executing.
        }
         let rejectedCount = 0;
        const errors = [];
        
        for(let i = 0; i < promises.length; i++){
            Promise.resolve(promises[i]) //Promise.resolve(promises[i]) -> For non Promise values
                .then((success)=>{
                    res(success);
                })
                .catch((error)=>{
                    errors[i] = error;
                    rejectedCount++;
                    if (rejectedCount === promises.length) {
                    rej(new AggregateError(errors, "AggregateError: All promises were rejected"))
                    }
                })
        }
    })
}

Promise.MyPromiseAny([p1,p2,p3,p4]).then((res)=>console.log("Any:", res)).catch((err)=>console.log("Any:", err));


