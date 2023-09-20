var cost = document.getElementById("cost_input_id");
var revenue = document.getElementById("revenue_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "cost", values: cost },
    { name: "revenue", values: revenue },
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
    var co = Number(cost.value)
    var re = Number(revenue.value)
    var result,result2, result3 = 0;

    result = re - co;
    result2 = (result / re) * 100;
    result3 = ((re - co) / co) * 100;

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

    output.innerHTML = "";

    div1.innerHTML = "<b>Margin:  " + result2.toFixed(2) + " % </b>";
    div2.innerHTML = "<b>Profit: $ " + " " + result.toFixed(2) + " </b>";
    div3.innerHTML = "<b>Markup: " + " " + result3.toFixed(2) + " % </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);