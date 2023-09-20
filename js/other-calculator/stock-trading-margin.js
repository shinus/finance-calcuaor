var stock = document.getElementById("stock_input_id");
var shares = document.getElementById("shares_input_id");
var margin = document.getElementById("margin_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "stock", values: stock },
    { name: "shares", values: shares },
    { name: "margin", values: margin },
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
    var sto = Number(stock.value)
    var sha = Number(shares.value)
    var mar = Number(margin.value)
    var result = 0;

    result = (sto * (mar / 100)) * sha;

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

    output.innerHTML = "";

    div1.innerHTML = "<b>Amount required: $  " + " " + result.toFixed(2) + " </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);