var price = document.getElementById("price_input_id");
var tip = document.getElementById("tip_input_id");
var people = document.getElementById("people_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "price", values: price },
    { name: "tip", values: tip },
    { name: "people", values: people },
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
    var ti = Number(tip.value)
    var peo = Number(people.value)
    var result, result2, result3, result4 = 0;

    result = pri * (ti / 100);
    result2 = (pri + result);
    result3 = (result / peo);
    result4 = (result2 / peo);

    return [result, result2, result3, result4];
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var [result, result2, result3, result4] = getExact();
    var pep = Number(people.value)

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";

    if (pep == 1) {
        div1.innerHTML = "<b> Tip:  $" + result.toFixed(2) + "   </b>";
        div2.innerHTML = "<b> Total Amount  $" + result2.toFixed(2) + "   </b>";
    } else if(pep >= 2) {
        div1.innerHTML = "<b> Tip:  $" + result.toFixed(2) + "   </b>";
        div2.innerHTML = "<b> Total Amount  $" + result2.toFixed(2) + "   </b>";
        div3.innerHTML = "<b> Tip Per person $" + result3.toFixed(2) + "   </b>";
        div4.innerHTML = "<b> Total Per person $" + result4.toFixed(2) + "   </b>";
    }

    div1.innerHTML = "<b> Tip:  $" + result.toFixed(2) + "   </b>";
    div2.innerHTML = "<b> Total Amount  $" + result2.toFixed(2) + "   </b>";
    div3.innerHTML = "<b> Tip Per person $" + result3.toFixed(2) + "   </b>";
    div4.innerHTML = "<b> Total Per person $" + result4.toFixed(2) + "   </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);