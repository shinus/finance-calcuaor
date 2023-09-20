var exchange = document.getElementById("exchange_input_id");
var margin = document.getElementById("margin_dd_Id");
var units = document.getElementById("units_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "exchange", values: exchange },
    { name: "margin", values: margin },
    { name: "units", values: units },
];

var maUnit = [
    {
        name: "1:1",
        value: 1
    },
    {
        name: "5:1",
        value: 5
    },
    {
        name: "10:1",
        value: 10
    },
    {
        name: "20:1",
        value: 20
    },
    {
        name: "25:1",
        value: 25
    },
    {
        name: "30:1",
        value: 30
    },
    {
        name: "40:1",
        value: 40
    },
    {
        name: "50:1",
        value: 50
    },
];

function init() {
    createDropDown(maUnit, margin)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function getExact() {
    var exc = Number(exchange.value)
    var mar = Number(getSelectedValue(margin))
    var uni = Number(units.value)
    var result = 0;

    result = (exc / mar) * uni;

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

    div1.innerHTML = "<b>Amount required:  " + " " + result.toFixed(2) + " </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);