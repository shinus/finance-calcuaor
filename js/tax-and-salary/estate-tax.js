var residence = document.getElementById("residence_input_id");
var stocks = document.getElementById("stocks_input_id");
var savings = document.getElementById("savings_input_id");
var vehicle = document.getElementById("vehicle_input_id");
var retirement = document.getElementById("retirement_input_id");
var insurance = document.getElementById("insurance_input_id");
var other = document.getElementById("other_input_id");
var debts = document.getElementById("debts_input_id");
var funeral = document.getElementById("funeral_input_id");
var charity = document.getElementById("charity_input_id");
var estate = document.getElementById("estate_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "residence", values: residence },
    { name: "stocks", values: stocks },
    { name: "savings", values: savings },
    { name: "vehicle", values: vehicle },
    { name: "retirement", values: retirement },
    { name: "insurance", values: insurance },
    { name: "other", values: other },
    { name: "debts", values: debts },
    { name: "funeral", values: funeral },
    { name: "charity", values: charity },
    { name: "estate", values: estate },
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
    var res = Number(residence.value)
    var sto = Number(stocks.value)
    var sav = Number(savings.value)
    var veh = Number(vehicle.value)
    var ret = Number(retirement.value)
    var ins = Number(insurance.value)
    var oth = Number(other.value)
    var deb = Number(debts.value)
    var fun = Number(funeral.value)
    var cha = Number(charity.value)
    var est = Number(estate.value)
    var result = 0;

    result = (res + sto + sav + veh + ret + ins + oth) - (deb + fun + cha + est);

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

    div1.innerHTML = "<b>Net taxable estate is  $    " + " " + result.toFixed(0) + " </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);