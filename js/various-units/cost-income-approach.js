var compensation = document.getElementById("conpensation_input_id");
var proprietors = document.getElementById("proprietors_input_id");
var rental = document.getElementById("rental_input_id");
var corporate = document.getElementById("corporate_input_id");
var interest = document.getElementById("interest_input_id");
var indirect = document.getElementById("indirect_input_id");
var depriciation = document.getElementById("depriciation_input_id");
var foreigners = document.getElementById("foreigners_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "compensation", values: compensation },
    { name: "proprietors", values: proprietors },
    { name: "rental", values: rental },
    { name: "corporate", values: corporate },
    { name: "interest", values: interest },
    { name: "indirect", values: indirect },
    { name: "depriciation", values: depriciation },
    { name: "foreigners", values: foreigners },
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
    var comp = Number(compensation.value)
    var prop = Number(proprietors.value)
    var rent = Number(rental.value)
    var corp = Number(corporate.value)
    var inte = Number(interest.value)
    var indi = Number(indirect.value)
    var depr = Number(depriciation.value)
    var fore = Number(foreigners.value)
    var result, result2 = 0;

    result = comp + prop + rent + corp + inte;
    result2 = result + indi + depr + fore;

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

    div1.innerHTML = "<b> GNP :  " + result.toFixed(0) + " " + "  </b>";
    div2.innerHTML = "<b> GDP :  " + result2.toFixed(0) + " " + "  </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);