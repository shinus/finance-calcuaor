var amount = document.getElementById("amount_input_id");
var term = document.getElementById("term_input_id");
var interest = document.getElementById("interest_input_id");
var compound = document.getElementById("compound_dd_Id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "amount", values: amount },
    { name: "term", values: term },
    { name: "interest", values: interest },
    { name: "compound", values: compound },
];

var maUnit = [
    {
        name: "Annually (APY)",
        value: 1
    },
    {
        name: "Semi-anually",
        value: 2
    },
    {
        name: "Quarterly",
        value: 4
    },
    {
        name: "Monthly (APR)",
        value: 12
    },
    {
        name: "Semi-monthly",
        value: 24
    },
    {
        name: "Biweekly",
        value: 26
    },
    {
        name: "weekly",
        value: 52
    },
    {
        name: "Daily",
        value: 365
    },
];

function init() {
    createDropDown(maUnit, compound)
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
    var inter = Number(interest.value)
    var com = Number(getSelectedValue(compound))
    var result, result2 = 0;
    var r = (inter / 100) / com;
    var n = ter * com;

    result = amo * Math.pow(1 + r, n);
    result2 = result - amo;

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

    div1.innerHTML = "<b>Amount Due at Loan Maturity $ " + " " + result.toFixed(2) + " </b>";
    div2.innerHTML = "<b>Total Interest $  " + " " + result2.toFixed(2) + " </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);