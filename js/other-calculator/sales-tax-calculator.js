var price = document.getElementById("price_input_id");
var rate = document.getElementById("rate_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "price", values: price },
    { name: "rate", values: rate },
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
    var result = 0;

    percentageAmount = (pri * rat) / 100;

    result = pri + percentageAmount;

    return [result, percentageAmount];
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
      }
    var [result, percentageAmount] = getExact();
    var ra = Number(rate.value)

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>Sale Tax: $ " + ra   + " or " + percentageAmount.toFixed(2) + " </b>";
    div2.innerHTML = "<b>After Tax Price: $  " + " " + result.toFixed(2) + " </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);