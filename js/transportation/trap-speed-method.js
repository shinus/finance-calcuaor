var weight = document.getElementById("weight_input_id");
var quarter = document.getElementById("quarter_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "weight", values: weight },
    { name: "quarter", values: quarter },
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
    var wei = Number(weight.value)
    var qua = Number(quarter.value)
    var result,result2 = 0;

    result =  wei * Math.pow(qua / 234, 3);
    result2 = result * 745.7;

    return [result, result2];
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

    div1.innerHTML = "<b>Estimated engine power:  " + result.toFixed(0) + " horsepower  (" + result2.toFixed(0) + " watts) </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);