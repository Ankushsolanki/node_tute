const os=require('os');

//'.userInfo' keyword gives info of user
console.log(os.userInfo());  

//'.uptime' keyword in os module gives the runtime of system.
console.log(`Uptime for this pc is ${os.uptime()} seconds`);

const aboutOS={
    Type:os.type(),
    Release:os.release(),
    freeMemory:os.freemem(),
    totalMemory:os.totalmem(),
    usedMemory:os.totalmem()-os.freemem()

}
console.log(aboutOS);