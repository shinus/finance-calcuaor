var length = document.getElementById("length_input_id");
var diameter = document.getElementById("diameter_input_id");
var meterial = document.getElementById("meterial_dd_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "length", values: length },
    { name: "diameter", values: diameter },
    { name: "meterial", values: meterial },
];

var meUnit = [
    {
        name: "Silver",
        value: 63000000
    },
    {
        name: "Copper",
        value: 59600000
    },
    {
        name: "Annealed Copper",
        value: 58000000
    },
    {
        name: "Gold",
        value: 45200000
    },
    {
        name: "Aluminium",
        value: 37800000
    },
];

function init() {
    createDropDown(meUnit, meterial)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function getExact() {
    var len = Number(length.value)
    var dia = Number(diameter.value)
    var met = Number(getSelectedValue(meterial))
    var result,result2 = 0;
    var un = dia / 100;

    var a = Math.pow(Math.PI * un, 2) / 4;
    var r = (1 / met) * ((len / Math.pow(Math.PI * un, 2)) / 4)
    result = volt / curr;
    result2 = volt * curr;

    return [result,result2];
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
    var div5 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b> Resistance (R) =  " + result.toFixed(0) +  " ohm (Ω) </b>";
    div2.innerHTML = "<b> Power (P)  = " + result2.toFixed(0) + " watt (W) </b>"

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);