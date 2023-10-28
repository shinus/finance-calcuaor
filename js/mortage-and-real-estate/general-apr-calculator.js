var amount = document.getElementById("amount_input_id");
var term = document.getElementById("term_input_id");
var interest = document.getElementById("interest_input_id");
var compound = document.getElementById("compound_dd_id");
var payback = document.getElementById("payback_dd_id");
var loaned = document.getElementById("loaned_input_id");
var upfront = document.getElementById("upfront_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "amount", values: amount },
    { name: "term", values: term },
    { name: "interest", values: interest },
    { name: "compound", values: compound },
    { name: "payback", values: payback },
    { name: "loaned", values: loaned },
    { name: "upfront", values: upfront },
];

var inUnit = [
    {
        name: "Monthly",
        value: 0
    },
    {
        name: "Semi-monthly",
        value: 1
    },
    {
        name: "Bi-weekly",
        value: 2
    },
    {
        name: "Weekly",
        value: 3
    },
    {
        name: "Daily",
        value: 4
    },
];

var paUnit = [
    {
        name: "Every month",
        value: 0
    },
    {
        name: "Every quarter",
        value: 1
    },
    {
        name: "Every 6 months",
        value: 2
    },
    {
        name: "Every Year",
        value: 3
    },
    {
        name: "Every day",
        value: 4
    },
    {
        name: "Every Week",
        value: 5
    }
]

function init() {
    createDropDown(inUnit, compound)
    createDropDown(paUnit, payback)
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