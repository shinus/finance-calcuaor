var outer = document.getElementById("outer_input_id");
var inner = document.getElementById("inner_input_id");
var length = document.getElementById("length_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "outer", values: outer },
    { name: "inner", values: inner },
    { name: "length", values: length },
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
    var out = Number(outer.value)
    var inn = Number(inner.value)
    var len = Number(length.value)
    var result = 0;

    result = Math.PI * ((Math.pow(out, 2) - Math.pow(inn, 2)) / 4) * len

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

    div1.innerHTML = "<b>Volume:  " + Math.abs(result.toFixed(5)) + " meters3        </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);