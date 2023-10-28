var distance = document.getElementById("distance_input_id");
var efficiency = document.getElementById("efficiency_input_id");
var price = document.getElementById("price_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "distance", values: distance },
    { name: "efficiency", values: efficiency },
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
    var dist = Number(distance.value)
    var effi = Number(efficiency.value)
    var pri = Number(price.value)
    var result,result2 = 0;

    result =  (dist ) * (effi / 100);
    result2 = result * pri

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
    var div5 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>This trip will require  " + result.toFixed(2) + " liters of fuel, which amounts to a fuel cost of  $" + result2.toFixed(0) + " </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);