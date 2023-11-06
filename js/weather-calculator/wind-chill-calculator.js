var speed = document.getElementById("speed_input_id");
var temperature = document.getElementById("temperature_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "speed", values: speed },
    { name: "temperature", values: temperature },
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
    var spe = Number(speed.value)
    var temp = Number(temperature.value)
    var result, result2, result3 = 0;

    result =  13.12 + 0.6215 * temp - 11.37 * Math.pow(spe,0.16) + 0.3965 * temp * Math.pow(spe,0.16);
    result2 = (result * 9/5) + 32;
    result3 = result + 273.15;

    return [result, result2,result3];
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var [result, result2, result3] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b> It will feel like  " + result.toFixed(0) + "  C (" + result2.toFixed(0) + "F or " + result3.toFixed(0) + "K).  </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);