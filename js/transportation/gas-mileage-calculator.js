var current = document.getElementById("current_input_id");
var previous = document.getElementById("previous_input_id");
var added = document.getElementById("added_input_id");
var price = document.getElementById("price_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "current", values: current },
    { name: "previous", values: previous },
    { name: "added", values: added },
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
    var curr = Number(current.value)
    var pre = Number(previous.value)
    var add = Number(added.value)
    var pri = Number(price.value)
    var result,result2, result3, result4, result5 = 0;

    result =  curr - pre;
    result2 = (100 * add) / result;
    result3 = 235.2145 / result2;
    result4 = add * pri;
    result5 = result / result4;

    return [result, result2, result3, result4, result5];
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var [result, result2, result3, result4, result5] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>Gas mileage:  " + result2.toFixed(2) + " L/100 km (" + result3.toFixed(2) + " mpg) </b>";
    div2.innerHTML = "<b> Distance traveled since last time is " + result.toFixed(0) + " Kilometers </b>";
    div3.innerHTML = "<b> Your fill expense this time is $" + result4.toFixed(2) + " </b>"; 
    div4.innerHTML = "<b> Your unit cost is " + result5.toFixed(2) + "kilometers per $";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);