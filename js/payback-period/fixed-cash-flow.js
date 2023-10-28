var investment = document.getElementById("investment_input_id");
var cash = document.getElementById("cash_input_id");
var sum = document.getElementById("sum_dd_Id");
var interest = document.getElementById("interest_input_id");
var years = document.getElementById("years_input_id");
var discount = document.getElementById("discount_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "investment", values: investment },
    { name: "cash", values: cash },
    { name: "sum", values: sum },
    { name: "interest", values: interest },
    { name: "years", values: years },
    { name: "discount", values: discount },
];

var raUnit = [
    {
        name: "Increase",
        value: 1
    },
    {
        name: "Decrease",
        value: 2
    }
]

function init() {
    createDropDown(raUnit, sum)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function getExact() {
    var rad = Number(radius.value)
    var rad_dd = Number(getSelectedValue(radius_dd))
    var result = 0;

    result = 4 * Math.PI * Math.pow((rad * rad_dd), 2);

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
    var div5 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>Surface Area:  " + result.toFixed(5) + " meters2 </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);