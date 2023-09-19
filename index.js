const fetchData=()=>{
    const promise = new Promise((res,rej)=>{
        
        setTimeout(()=>{
            res('Done!')
        },1500)
    });
    return promise;
}



setTimeout(()=>{
    console.log('Timers is done');
    fetchData().then(text=>{
        console.log(text)
        return fetchData()
    }).then(text2=>console.log(text2))
},2000)
console.log('Hello')
console.log('HI')