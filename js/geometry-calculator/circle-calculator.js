var radius = document.getElementById("radius_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "radius", values: radius },
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
    var rad = Number(radius.value)
    var result, result2, result3 = 0;

    result = 2 * rad;
    result2 = 2 * Math.PI * rad;
    result3 = Math.PI * (rad * rad)

    return [result, result2, result3];
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
    var div5 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>Diameter:  " + result.toFixed(0) + " meters2 </b>";
    div2.innerHTML = "<b>Circumference:  " + result2.toFixed(5) + " meters2 </b>";
    div3.innerHTML = "<b>Area:  " + result3.toFixed(5) + " meters2 </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);