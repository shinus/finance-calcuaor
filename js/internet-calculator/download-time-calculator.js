var size = document.getElementById("size_input_id");
var bandwidth = document.getElementById("bandwidth_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "size", values: size },
    { name: "bandwidth", values: bandwidth },
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
    var si = Number(size.value)
    var band = Number(bandwidth.value)
    var result = 0;

    result =  ((si * 8) / (band)) / 60;

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
    var div6 = document.createElement("div");
    var div7 = document.createElement("div");
    var div8 = document.createElement("div");
    var div9 = document.createElement("div");
    var div10 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b> Download or upload time needed is:  " + result.toFixed(2) +  " Minutes  </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
    output.append(div7);
    output.append(div8);
    output.append(div9);
    output.append(div10);
}

calcBtn.addEventListener("click", showResult);