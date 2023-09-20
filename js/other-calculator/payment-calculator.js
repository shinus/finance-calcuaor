var amount = document.getElementById("amount_input_id");
var term = document.getElementById("term_input_id");
var rate = document.getElementById("rate_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "amount", values: amount },
    { name: "term", values: term },
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
    var amo = Number(amount.value)
    var ter = Number(term.value)
    var rat = Number(rate.value)
    var result, result2, result3 = 0;

    monthlyInterestRate = (rat / 100) / 12;

    result = (amo *  monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, (-ter * 12)));
    result2 = (ter * 12) * result;
    result3 = (result * (ter * 12)) - amo

    return [result, result2, result3];
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
      }
    var [result, result2, result3] = getExact();
    var ter = Number(term.value)
    var a = ter * 12

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>Monthly Payment:  $  " + " " + result.toFixed(2) + " </b>";
    div2.innerHTML = "<b>Total of " +  a + " Payments  $  " + " " + result2.toFixed(2) + " </b>";
    div3.innerHTML = "<b>Total Interest  $  " + " " + result3.toFixed(2) + " </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);