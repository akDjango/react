const ticketAgent = 'Audience';
const firstname = 'Joana';
const lastname = 'Kayela';
const qty = 5;
const price = 50;
const my_event = 'Ishan Concert';

const email = `
Hello ${firstname},

Thanks for ordering ${qty} tickets to the ${my_event}.

Order Details
${firstname} ${lastname}
${qty} x $${price} = $${qty*price} to ${my_event}

You can pick your tickets up 30 minutes before the ${my_event}
Thanks,

${ticketAgent}`;

console.log(email);