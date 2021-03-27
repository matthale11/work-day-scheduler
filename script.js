// Use the ID for currentDay and moment to display the day of the week, month, and day of the month
var currentHour = moment().format("HH");
var nineAm = 9;
var tenAm = 10;
var elevenAm = 11;
var noon = 12;
var onePm = 13;
var twoPm = 14;
var threePm = 15;
var fourPm = 16;
var fivePm =17;

// Create variables for save buttons
var nineAmSave = $("#9am-save");
var tenAmSave = $("#10am-save");
var elevenAmSave = $("#11am-save");
var noonSave = $("#noon-save");
var onePmSave = $("#1pm-save");
var twoPmSave = $("#2pm-save");
var threePmSave = $("#3pm-save");
var fourPmSave = $("#4pm-save");
var fivePmSave = $("#5pm-save");

// Displays the current day, month, and day of the month in header
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// For each hour, change the class from the CSS stylesheet to past, present, or future
// 9 AM
if(currentHour > nineAm) {
    $("#9am").addClass("past");
} else if (currentHour == nineAm) {
    $("#9am").addClass("present");
} else {
    $("#9am").addClass("future");
}
// 10 AM
if(currentHour > tenAm) {
    $("#10am").addClass("past");
} else if (currentHour == tenAm) {
    $("#10am").addClass("present");
} else {
    $("#10am").addClass("future");
}
// 11 AM
if(currentHour > elevenAm) {
    $("#11am").addClass("past");
} else if (currentHour == elevenAm) {
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
if(currentHour > onePm) {
    $("#1pm").addClass("past");
} else if (currentHour == onePm) {
    $("#1pm").addClass("present");
} else {
    $("#1pm").addClass("future");
}
// 2 PM
if(currentHour > twoPm) {
    $("#2pm").addClass("past");
} else if (currentHour == twoPm) {
    $("#2pm").addClass("present");
} else {
    $("#2pm").addClass("future");
}
// 3 PM
if(currentHour > threePm) {
    $("#3pm").addClass("past");
} else if (currentHour == threePm) {
    $("#3pm").addClass("present");
} else {
    $("#3pm").addClass("future");
}
// 4 PM
if(currentHour > fourPm) {
    $("#4pm").addClass("past");
} else if (currentHour == fourPm) {
    $("#4pm").addClass("present");
} else {
    $("#4pm").addClass("future");
}
// 5 PM
if(currentHour > fivePm) {
    $("#5pm").addClass("past");
} else if (currentHour == fivePm) {
    $("#5pm").addClass("present");
} else {
    $("#5pm").addClass("future");
}

// Add function to render existing appointments from local storage
// function renderAppointments () {
//     var nineAmText = localStorage.getItem("9am");
//     if (!nineAmText) {
//         return;
//     }

// }

// Add event listeners: When clicking the save button, we save the cell contents to local storage
nineAmSave.click(function(event) {
    event.preventDefault();
    var nineAmText = $("#9am-text").val();
    localStorage.setItem("9am", nineAmText);
});
tenAmSave.click(function(event) {
    event.preventDefault();
    var tenAmText = $("#10am-text").val();
    localStorage.setItem("10am", tenAmText);
});
elevenAmSave.click(function(event) {
    event.preventDefault();
    var elevenAmText = $("#11am-text").val();
    localStorage.setItem("11am", elevenAmText);
});
noonSave.click(function(event) {
    event.preventDefault();
    var noonText = $("#noon-text").val();
    localStorage.setItem("noon", noonText);
});
onePmSave.click(function(event) {
    event.preventDefault();
    var onePmText = $("#1pm-text").val();
    localStorage.setItem("1pm", onePmText);
});
twoPmSave.click(function(event) {
    event.preventDefault();
    var twoPmText = $("#2pm-text").val();
    localStorage.setItem("2pm", twoPmText);
});
threePmSave.click(function(event) {
    event.preventDefault();
    var threePmText = $("#3pm-text").val();
    localStorage.setItem("3pm", threePmText);
});
fourPmSave.click(function(event) {
    event.preventDefault();
    var fourPmText = $("#4pm-text").val();
    localStorage.setItem("4pm", fourPmText);
});
fivePmSave.click(function(event) {
    event.preventDefault();
    var fivePmText = $("#5pm-text").val();
    localStorage.setItem("5pm", fivePmText);
});