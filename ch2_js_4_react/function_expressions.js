/*  This type of function cannot be hoisted 
    This means you cannot call or invoke it before you define it
    as you can do with a fuction declaration
*/
const logCompliment = function () {
    console.log('Still doing great..');
}

logCompliment();