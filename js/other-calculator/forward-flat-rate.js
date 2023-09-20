var price = document.getElementById("price_input_id");
var rate = document.getElementById("rate_input_id");
var after = document.getElementById("after_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "price", values: price },
    { name: "rate", values: rate },
    { name: "after", values: after },
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
    var pri = Number(price.value)
    var rat = Number(rate.value)
    var aft = Number(after.value)
    var result = 0;
    var aa = rat / 100

    result = pri * Math.pow(1 + aa, aft);

    return result;
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var result = getExact();
    var pri = Number(price.value)
    var rat = Number(rate.value)
    var aft = Number(after.value)

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b> $" + pri + " now equals $" + result.toFixed(2) + " after " + aft + " years in purchasing power with an average inflation rate of " + rat + "% </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);