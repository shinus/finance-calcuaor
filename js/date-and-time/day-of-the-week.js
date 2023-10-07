var ddda = document.getElementById("date_input_Id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

const queryParams = [
    { name: "date", values: ddda },
];

function init() {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

function getExact(dateString) {
    var date = new Date(dateString);
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = date.getDay();
    return weekdays[dayOfWeek];
}


function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var inputDate = ddda.value;
    var date = new Date(inputDate);

    var weekdays = getExact(inputDate);
    output.innerHTML = "";

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var formattedDate = new Date(inputDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    var dayOfYear = Math.ceil((date - new Date(date.getFullYear(), 0, 1)) / (24 * 60 * 60 * 1000)) + 1;
    var daysLeftInYear = 365 - dayOfYear + 1;

    var dayOfWeek = date.getDay();
    var totalDaysInWeek = 7;
    var daysLeftInWeek = totalDaysInWeek - dayOfWeek;
    
    var totalWeekdaysInYear = 0;
    var daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    for (var month = 0; month < 12; month++) {
        for (var day = 1; day <= daysInMonth; day++) {
            var tempDate = new Date(date.getFullYear(), month, day);
            if (tempDate.getDay() >= 1 && tempDate.getDay() <= 5) {
                totalWeekdaysInYear++;
            }
        }
    }
    
    var weekdaysLeftInYear = totalWeekdaysInYear - (dayOfYear - 1);

    div1.innerHTML = "<b> " + formattedDate + " is a " + weekdays + ". It is the #" + dayOfYear + " day out of a total of 365 days in 2023. There are " + daysLeftInYear + " days left in 2023.  </b>";

    output.appendChild(div1);
    output.appendChild(div2);
}

calcBtn.addEventListener("click", showResult);

init();