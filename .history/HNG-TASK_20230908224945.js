// // const now = new Date();

// // const year = now.getUTCFullYear();


// const now = new Date();
// const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
// const hours = now.getHours();
// const minutes = now.getMinutes();
// console.log(`Today is day ${day} and the time is ${hours}:${minutes}.`);



    let currentTime = new Date();
    let currentTimeMillis = currentTime.getTime();
    let currentUTCTime = currentTime.toUTCString();
 
    console.log("Current time in milliseconds: " + currentTimeMillis);
    console.log("Current time in UTC: " + currentUTCTime);
 
 
//  setInterval(updateTime, 1000); // Run updateTime() every second