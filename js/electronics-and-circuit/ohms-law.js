var voltage = document.getElementById("voltage_input_id");
var current = document.getElementById("current_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "voltage", values: voltage },
    { name: "current", values: current },
];

function init() {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function getExact() {
    var volt = Number(voltage.value)
    var curr = Number(current.value)
    var result,result2 = 0;

    result = volt / curr;
    result2 = volt * curr;

    return [result,result2];
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var [result, result2] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b> Resistance (R) =  " + result.toFixed(0) +  " ohm (Ω) </b>";
    div2.innerHTML = "<b> Power (P)  = " + result2.toFixed(0) + " watt (W) </b>"

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);