// Advanced Debounce (Leading + Trailing)

function debounce (fn, delay = 300, immediate = false){
    let timerID;

    return function(...args){
        const context = this;

        const isImmediate = immediate && !timerID;

        clearTimeout(timerID);

        timerID = setTimeout(()=>{
            timerID = null;

            if(!immediate){
                fn.apply(context, args);
            }
        }, delay);

        if(isImmediate){
            fn.apply(context, args);
        }
    }
}


