const name=require('./2_name');
const sayHi=require('./3_utils');
const data=require('./4_exteranious_module')
require('./5_module2');
console.log(data);

sayHi('Hero');
sayHi(name.Lucky);
sayHi(name.Mohit);


