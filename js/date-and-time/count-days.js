var start = document.getElementById("start_input_Id");
var sum = document.getElementById("sum_dd_Id");
var days = document.getElementById("days_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

const queryParams = [
    { name: "start", values: start },
    { name: "sum", values: sum },
    { name: "days", values: days }
];

const fiUnit = [
    {
        name: "+",
        value: 0
    },
    {
        name: "-",
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
    var sta = new Date(start.value);
    var su = getSelectedValue(sum);
    var da = parseInt(days.value); // Ensure days is parsed as an integer.
    var result = "";

    if (su == 0) {
        sta.setDate(sta.getDate() + da);
    } else if (su == 1) {
        sta.setDate(sta.getDate() - da);
    }

    // Format the date as "Month Day, Year, DayOfWeek"
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    result = sta.toLocaleDateString('en-US', options);
    return result;
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
    

    div1.innerHTML = "<b>" + result + "  </b>";

    output.appendChild(div1);
    output.appendChild(div2);
}

calcBtn.addEventListener("click", showResult);

init();