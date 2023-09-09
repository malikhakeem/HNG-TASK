// // const now = new Date();

// // const year = now.getUTCFullYear();


// const now = new Date();
// const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
// const hours = now.getHours();
// const minutes = now.getMinutes();
// console.log(`Today is day ${day} and the time is ${hours}:${minutes}.`);



var dateObj = new Date()
var weekday = dateObj.toLocaleString("default", { weekday: "short" })
// weekday = "Sat"

console.log(weekday)