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

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
console.log(currentDate); // "17-6-2022"