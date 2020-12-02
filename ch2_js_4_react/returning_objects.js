/*
When returning an object wrap the object you are returning in parentheses
if you do not do this you will have a nice bug
*/
const person = (firstName, lastName) => ({
    first: firstName,
    last: lastName
});

console.log(person('Audience', 'Kayela'));
