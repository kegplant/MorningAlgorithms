moment=require('./momentPractice/node_modules/moment');
// console.log(moment(moment().format('YYYY-MM'), "YYYY-MM").daysInMonth())
const startOfMonth = moment().startOf('month')//.format('YYYY-MM-DD hh:mm');
console.log(moment());
console.log(moment().toDate());
console.log(startOfMonth);
