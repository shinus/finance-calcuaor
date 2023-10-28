var consumption = document.getElementById("consumption_input_id");
var investment = document.getElementById("investment_input_id");
var government = document.getElementById("government_input_id");
var expor = document.getElementById("exports_input_id");
var imports = document.getElementById("imports_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "consumption", values: consumption },
    { name: "investment", values: investment },
    { name: "government", values: government },
    { name: "exports", values: expor },
    { name: "imports", values: imports },
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
    var cons = Number(consumption.value)
    var inv = Number(investment.value)
    var gove = Number(government.value)
    var expo = Number(expor.value)
    var impo = Number(imports.value)
    var result = 0;

        result = (cons + inv + gove + expo) - impo;

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

        div1.innerHTML = "<b> GDP :  " + result.toFixed(0) + " " + "  </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);