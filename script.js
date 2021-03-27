// Use the ID for currentDay and moment to display the day of the week, month, and day of the month
var currentHour = moment().format("HH");
console.log(currentHour);

$("#currentDay").text(moment().format("dddd, MMMM Do"));

// 