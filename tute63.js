const fs=require('fs');
let Text=fs.readFileSync('dele.txt','utf-8');
Text=Text.replace('txt','dele txt');
console.log(`The Content of 'dele' text file is `);
console.log(Text);
console.log('Now dele.txt file is modified as rohan.txt file');
fs.writeFileSync('rohan.txt',Text);