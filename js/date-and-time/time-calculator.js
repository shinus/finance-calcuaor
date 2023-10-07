var day1 = document.getElementById("day1_input_Id");
var hour1 = document.getElementById("hour1_input_Id");
var minute1 = document.getElementById("minute1_input_id");
var second1 = document.getElementById("second1_input_id");
var sum = document.getElementById("sum_dd_Id");
var day2 = document.getElementById("day2_input_id");
var hour2 = document.getElementById("hour2_input_id");
var minute2 = document.getElementById("minute2_input_id");
var second2 = document.getElementById("second2_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

const queryParams = [
    { name: "day1", values: day1 },
    { name: "hour1", values: hour1 },
    { name: "minute1", values: minute1 },
    { name: "second1", values: second1 },
    { name: "sum", values: sum },
    { name: "day2", values: day2 },
    { name: "hour2", values: hour2 },
    { name: "minute2", values: minute2 },
    { name: "second2", values: second2 },
];

const fiUnit = [
    {
        name: "Add+",
        value: 0
    },
    {
        name: "Subtract-",
        value: 1
    }
];

function init() {
    createDropDown(fiUnit, sum);
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

function getExact() {
    var da1 = Number(day1.value);
    var ho1 = Number(hour1.value);
    var mi1 = Number(minute1.value);
    var se1 = Number(second1.value);
    var su = Number(sum.value);
    var da2 = Number(day2.value); 
    var ho2 = Number(hour2.value); 
    var mi2 = Number(minute2.value); 
    var se2 = Number(second2.value); 
    var result = "";

    // Convert everything to seconds
    var totalSeconds1 = da1 * 24 * 60 * 60 + ho1 * 60 * 60 + mi1 * 60 + se1;
    var totalSeconds2 = da2 * 24 * 60 * 60 + ho2 * 60 * 60 + mi2 * 60 + se2;

    if (su === 0) { // Add
        var totalSeconds = totalSeconds1 + totalSeconds2;
        result = "Total time: " + formatTime(totalSeconds);
    } else { // Subtract
        var totalSeconds = totalSeconds1 - totalSeconds2;
        if (totalSeconds < 0) {
            result = "Time difference is negative.";
        } else {
            result = "Time difference: " + formatTime(totalSeconds);
        }
    }

    return result;
}

function formatTime(totalSeconds) {
    var days = Math.floor(totalSeconds / (24 * 60 * 60));
    totalSeconds %= (24 * 60 * 60);
    var hours = Math.floor(totalSeconds / (60 * 60));
    totalSeconds %= (60 * 60);
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    return `${days} days\n ${hours} hours\n ${minutes} minutes\n ${seconds} seconds`;
}


function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var result = getExact();
    output.innerHTML = "";

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    // var formattedDate1 = result.toLocaleDateString("en-US", {
    //     month: "short",
    //     day: "numeric",
    //     year: "numeric"
    // });

    div1.innerHTML = "<b>" + result + "  </b>";

    output.appendChild(div1);
    output.appendChild(div2);
}

calcBtn.addEventListener("click", showResult);

init();