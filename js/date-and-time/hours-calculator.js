var start = document.getElementById("start_input_Id");
var end = document.getElementById("end_input_Id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

const queryParams = [
    { name: "start", values: start },
    { name: "end", values: end },

];

function init() {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

function getExact() {
    var startTime = start.value;
    var endTime = end.value;

    // Parse the entered times into Date objects
    var startDate = new Date("2023-10-07 " + startTime);
    var endDate = new Date("2023-10-07 " + endTime);

    // Calculate the time difference in milliseconds
    var timeDifference = endDate - startDate;

    // Convert the time difference to hours, minutes, and seconds
    var millisecondsInHour = 60 * 60 * 1000;
    var millisecondsInMinute = 60 * 1000;

    var hours = Math.floor(timeDifference / millisecondsInHour);
    var remainingMilliseconds = timeDifference % millisecondsInHour;
    var minutes = Math.floor(remainingMilliseconds / millisecondsInMinute);

    return [hours, minutes];
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var [hours, minutes] = getExact();
    output.innerHTML = "";

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    div1.innerHTML = "<b>Time Difference: " + hours + " hours, " + minutes + " minutes </b>";

    output.appendChild(div1);
    output.appendChild(div2);
}

calcBtn.addEventListener("click", showResult);

init();