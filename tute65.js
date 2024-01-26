const fs=require('fs');
fs.readFile('dele.txt','utf-8',(err,text)=>{
    console.log(text);
});
console.log('hello');