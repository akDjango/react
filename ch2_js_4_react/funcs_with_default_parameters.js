const logActivity = function(firstname = 'Audience', activity= 'programming'){
console.log(`${firstname} loves ${activity}`);
}

const defaultPerson = {
    name:{first:'Audience',last:'Kayela'},
        favActivity : 'Programing'
};
const logActivity2 = function(person = defaultPerson){
    console.log(`${person.favActivity.name.first} loves ${person.favActivity}`);
}