var outer = document.getElementById("outer_input_id");
var inner = document.getElementById("inner_input_id");
var height = document.getElementById("height_input_id");
var quantity = document.getElementById("quantity_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "outer", values: outer },
    { name: "inner", values: inner },
    { name: "height", values: height },
    { name: "quantity", values: quantity },
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
    var hei = Number(height.value)
    var quan = Number(quantity.value)
    var result,result2,result3,result4,result5 = 0;

    var b = Math.pow(out, 2) - Math.pow(inn, 2)
    var ab = Math.PI * (b) * (hei / 100);
    result = ab ;
    result2 = ab * 2130;
    result3 =  result2 * 2.20462;
    result4 = result3 / 60;
    result5 = result3 / 80;

    return [result,result2,result3,result4,result5];
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

    div1.innerHTML = "<b> Total Volume:  " + result.toFixed(2) +  " Cubic feet </b>";
    div2.innerHTML = "<b> If using pre-mixed concrete with density of 2130kg/m3 or 133 lbs/ft3*: </b>"
    div3.innerHTML = "<b>Total weight needed " + result3.toFixed(2)  +"lbs or " + result2.toFixed(2) + " kg< /b>"
    div4.innerHTML = "<b>Using 60-lb bags " + result4.toFixed(2) + " bags</b>"
    div5.innerHTML = "<b>Using 80-lb bags " + result5.toFixed(2) + " bags</b>"

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);