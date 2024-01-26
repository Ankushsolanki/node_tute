const {readFile,writeFile}=require('fs');
console.log('starting the task');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    const first=result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
        return
        }
        console.log(result)
        const second=result
        writeFile('./content/result-async.txt',`Result of first and second file is:${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
});
console.log('starting next task');
