var units = document.getElementById("units_input_id");
var type = document.getElementById("type_dd_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "units", values: units },
    { name: "type", values: type }
];

var tyUnit = [
    {
        name: "Pound (lb)",
        value: 0
    },
    {
        name: "ton",
        value: 1
    },
    {
        name: "miligram",
        value: 2
    },
    {
        name: "gram",
        value: 3
    },
    {
        name: "ounce",
        value: 4
    },
    {
        name: "carat",
        value: 5
    },
];

function init() {
    createDropDown(tyUnit, type)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function getExact() {
    var uni = Number(units.value)
    var ty = Number(getSelectedValue(type))
    var result = 0;

    if(ty == 0) {
        result = uni / 2.205;
    } else if(ty == 1) {
        result = uni * 907.2;
    } else if(ty == 2) {
        result = uni / 1e+6;
    } else if(ty == 3) {
        result = uni / 1000;
    } else if(ty == 4) {
        result = uni / 35.274;
    } else if(ty == 5) {
        result = uni / 5000;
    }

    return result;
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var result = getExact();
    var uni = Number(units.value)
    var ty = Number(getSelectedValue(type))

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";

    if(ty == 0) {
        div1.innerHTML = "<b> " + uni + " " + " pound " + " = " + result + " kilogram</b>";
    } else if(ty == 1) {
        div1.innerHTML = "<b> " + uni + " " + " ton " + " = " + result + " kilogram</b>";
    } else if(ty == 2) {
        div1.innerHTML = "<b> " + uni + " " + " miligram " + " = " + result + " kilogram</b>";
    } else if(ty == 3) {
        div1.innerHTML = "<b> " + uni + " " + " gram " + " = " + result + " kilogram</b>";
    } else if(ty == 4) {
        div1.innerHTML = "<b> " + uni + " " + " ounce " + " = " + result + " kilogram</b>";
    } else if(ty == 5) {
        div1.innerHTML = "<b> " + uni + " " + " carat " + " = " + result + " kilogram</b>";
    }

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);