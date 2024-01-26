const {readFileSync,writeFileSync}=require('fs');
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

console.log(`content of file first and second are:${first},${second}`);

// for append the value in a given file instead of overwriting we use {flag:'a'} keyword
writeFileSync('./content/result-sync.txt',`Here is the result first and second is :${first},${second}`,{flag:'a'});