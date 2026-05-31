// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const apiPromise = () => {
    return new Promise((res, rej)=>{
    const status = Math.floor(Math.random() * 10);
    setTimeout(()=>{
        if(status > 5){
            res("All Good");
        }
        else{
            rej("Try Later...")
        }
    }, 1000)
});
}


const fetchWithRetry = (apiFn, retries) => {
    apiFn().then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            if(retries > 0) {
                console.log("retrying...")
                fetchWithRetry(apiFn, retries-1);
            }
            else console.log(err);
        })
}

fetchWithRetry(apiPromise, 3);

