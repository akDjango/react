var topic = 'javascript';

if (topic) {
    var topic = 'react';
    console.log('block', topic); // the block value for the topic variable is react
}

console.log('global', topic); // The global value for the topic variable has been reset to react too

var topic2 = 'javascript';

if (topic2) {
    let topic2 = 'react';
    console.log('block', topic2); // value of topic2 reset inside block
}

console.log('global', topic2); // not reset ouside of block