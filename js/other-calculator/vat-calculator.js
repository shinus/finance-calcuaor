var vat = document.getElementById("vat_input_id");
var price = document.getElementById("price_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "vat", values: vat },
    { name: "price", values: price },
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
    var va = Number(vat.value)
    var pri = Number(price.value)
    var result, result2 = 0;

    percentageAmount = (pri * va) / 100;

    result = pri + percentageAmount;
    result2 = percentageAmount;

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

    output.innerHTML = "";

    div1.innerHTML = "<b>Gross price:  " + " " + result.toFixed(0) + " </b>";
    div2.innerHTML = "<b>Tax amount:	  " + " " + result2.toFixed(0) + " </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);