
function updateTime() {
    let currentTime = new Date();
    let currentTimeMillis = currentTime.getTime();
    
 
    console.log("Current time in milliseconds: " + currentTimeMillis);
    document.getElementsByClassName("time").innerHTML = currentTimeMillis.toString(); 
 }
 
 setInterval(updateTime, 1000); // Run updateTime() every second


// let currentTime = new Date();
// let currentTimeMillis = currentTime.getTime();
// let currentUTCTime = currentTime.toUTCString();

// console.log("Current time in milliseconds: " + currentTimeMillis);
// console.log("Current time in UTC: " + currentUTCTime);


// //  setInterval(updateTime, 1000); // Run updateTime() every second


// var dateObj = new Date()
// var weekday = dateObj.toLocaleString("default", { weekday: "long" })
// // weekday = "Saturday"

