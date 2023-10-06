var axis1 = document.getElementById("axis1_input_id");
var axis2 = document.getElementById("axis2_input_id");
var axis3 = document.getElementById("axis3_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "axis1", values: axis1 },
    { name: "axis2", values: axis2 },
    { name: "axis3", values: axis3 },
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
    var ax1 = Number(axis1.value)
    var ax2 = Number(axis2.value)
    var ax3 = Number(axis3.value)
    var result = 0;

    result = 4 * Math.PI * Math.pow((Math.pow(ax1 * ax2, 1.6) + Math.pow(ax1 * ax3, 1.6) + Math.pow(ax2 * ax3, 1.6)) / 3, 1 / 1.6);

    return result;
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var result = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>ellipsoid Surface Area:  " + result.toFixed(5) + " meters2 </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);