const today = new Date();

console.log(today);

const birthDate = new Date(1993, 10, 02);
console.log(birthDate);

const difference = (today > birthDate);
console.log(difference);

const day = (birthDate.getDate());
console.log(day);

const month = (birthDate.getMonth() + 1)

console.log(month);

const year = (birthDate.getFullYear());

console.log(year);