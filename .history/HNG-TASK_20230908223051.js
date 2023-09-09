// const now = new Date();

// const year = now.getUTCFullYear();
// const month = now.getUTCMonth() + 1;
// const day = now.getUTCDate();
// const hours = now.getUTCHours();
// const minutes = now.getUTCMinutes();
// const seconds = now.getUTCSeconds();
// const milliseconds = now.getUTCMilliseconds();

// console.log(`${year}-${month}-${day} 
//             ${hours}:${minutes}:${seconds}.${milliseconds}`);

// const date = new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();


const now = new Date();
const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
const hours = now.getHours();
const minutes = now.getMinutes();
console.log(`Today is day ${day} and the time is ${hours}:${minutes}.`);