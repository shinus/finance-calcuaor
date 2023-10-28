var amount = document.getElementById("amount_input_id");
var term = document.getElementById("term_input_id");
var interest = document.getElementById("interest_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "amount", values: amount },
    { name: "term", values: term },
    { name: "interest", values: interest },
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
    var amt = Number(amount.value)
    var te = Number(term.value)
    var inte = Number(interest.value)
    var result,result2,result3 = 0;

    var r = inte / (12 * 100);
    var n = te * 12;
    result = amt * r * Math.pow(1 + r, n) / Math.pow(1 + r, n) - 1;
    result2 = (result * te ) * amt;
    result3 =  result * te;

    return [result,result2,result3];
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
    var div5 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b> Monthly Pay:  $ " + result.toFixed(2) +  "  </b>";
    div2.innerHTML = "<b> Total of " +  r + " monthly payments " + result.toFixed(2) + " </b>"
    div3.innerHTML = "<b>Total weight needed " + result3.toFixed(2)  +" kg< /b>"

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);