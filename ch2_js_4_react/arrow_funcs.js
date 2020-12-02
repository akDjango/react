const lordify = function(firstname){
    console.log(`${firstname} of Cantebury `);
}

/*
Arrow functions allow us to define functions without using the function keyword
If your function takes one argument you can remove the parentheses
You often do not need to use the return keyword
as below */

const lordify2 = firstname => `${firstname} of Cantebury`;

/*
If your function takes more than one argument use parentheses
 */

const lordify3 = (firstname, land) => `${firstname} of ${land}`;

/*
If your function returns multiple lines you need to use the curly braces
*/

const lordify4 = (firstname, land) => {
    if(!firstname){
        throw new Error ('You need a name to lordify');
    }
    if(!land){
        throw new Error('A lord must have a land');
    }
    return`${firstname} of ${land}`;
};