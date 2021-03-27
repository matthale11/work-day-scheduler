// Use the ID for currentDay and moment to display the day of the week, month, and day of the month
var currentHour = moment().format("HH");
console.log(currentHour);
var nineAM = 9;
var tenAM = 10;
var elevenAM = 11;
var noon = 12;
var onePM = 13;
var twoPM = 14;
var threePM = 15;
var fourPM = 16;
var fivePM =17;
console.log(onePM);

// Displays the current day, month, and day of the month in header
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// For each hour, change the class from the CSS stylesheet to past, present, or future
// 9 AM
if(currentHour > nineAM) {
    $("#9am").addClass("past");
} else if (currentHour == nineAM) {
    $("#9am").addClass("present");
} else {
    $("#9am").addClass("future");
}
// 10 AM
if(currentHour > tenAM) {
    $("#10am").addClass("past");
} else if (currentHour == tenAM) {
    $("#10am").addClass("present");
} else {
    $("#10am").addClass("future");
}
// 11 AM
if(currentHour > elevenAM) {
    $("#11am").addClass("past");
} else if (currentHour == elevenAM) {
    $("#11am").addClass("present");
} else {
    $("#11am").addClass("future");
}
// NOON
if(currentHour > noon) {
    $("#noon").addClass("past");
} else if (currentHour == noon) {
    $("#noon").addClass("present");
} else {
    $("#noon").addClass("future");
}
// 1 PM
if(currentHour > onePM) {
    $("#1pm").addClass("past");
} else if (currentHour == onePM) {
    $("#1pm").addClass("present");
} else {
    $("#1pm").addClass("future");
}
// 2 PM
if(currentHour > twoPM) {
    $("#2pm").addClass("past");
} else if (currentHour == twoPM) {
    $("#2pm").addClass("present");
} else {
    $("#2pm").addClass("future");
}
// 3 PM
if(currentHour > threePM) {
    $("#3pm").addClass("past");
} else if (currentHour == threePM) {
    $("#3pm").addClass("present");
} else {
    $("#3pm").addClass("future");
}
// 4 PM
if(currentHour > fourPM) {
    $("#4pm").addClass("past");
} else if (currentHour == fourPM) {
    $("#4pm").addClass("present");
} else {
    $("#4pm").addClass("future");
}
// 5 PM
if(currentHour > fivePM) {
    $("#5pm").addClass("past");
} else if (currentHour == fivePM) {
    $("#5pm").addClass("present");
} else {
    $("#5pm").addClass("future");
}