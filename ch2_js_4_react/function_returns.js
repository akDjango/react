const createCompliment = function(firstname, message) {
    return `${firstname}: ${message}`;
}; 
/* when your function returns a value you close the code block with the semicolon 
const createCompliment = function (firstname, message) {
    return `${firstname}: ${message}`;
}; <- DO NOT FORGET THAT LAST SEMICOLON */

createCompliment('Audience', 'You are doing great');

console.log(createCompliment('Audience', 'You are doing great'));