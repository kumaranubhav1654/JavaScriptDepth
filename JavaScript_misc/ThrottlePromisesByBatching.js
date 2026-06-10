const p1 = () => {
  return new Promise((res, rej)=>{
    console.log("Executed 1");
    res("All Good 1");
})  
}

const p2 = () =>{
    return new Promise((res, rej)=>{
    console.log("Executed 2");
    rej("All NOT Good 2");
})
}

const p3 = () =>{
    return new Promise((res, rej)=>{
    console.log("Executed 3");
    setTimeout(()=>{
        res("All Good after 2sec");
    }, 2000)
})
}

const p4 = ()=>{
    return new Promise((res, rej)=>{
    console.log("Executed 4");
    setTimeout(()=>{
        rej("All NOT Good after 3sec");
    }, 3000)
})

}

const p5 = () => {
    return new Promise((res, rej)=>{
    console.log("Executed 5");
    res("All Good again");
})
}

const tasks = [p1, p2, p3, p4, p5];


const throttleBatching = async (tasks, limit) => {
    const results = [];
    let indx = 0;
    
    async function worker (){
        while(indx < tasks.length){
            const curr = indx++;
            try{
                results[curr] = await tasks[curr]();
            }catch(err){
                results[curr] = err
            }
        }
    }
    
    const workers = Array(limit).fill(0).map(worker);
    
    await Promise.allSettled(workers);
    
    return results;
}

const res = await throttleBatching(tasks, 2);

console.log(res);