var area = document.getElementById("area_input_id");
var area_dd = document.getElementById("area_dd_Id");
var depth = document.getElementById("depth_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "area", values: area },
    { name: "area_dd", values: area_dd },
    { name: "depth", values: depth },
];

var lwUnit = [
    {
        name: "Square meters",
        value: 1
    },
    {
        name: "Square feet",
        value: 10.764
    },
    {
        name: "Square yards",
        value: 1.196
    },
    {
        name: "acres",
        value: 4047
    }
];

function init() {
    createDropDown(lwUnit, area_dd)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function getExact() {
    var ar = Number(area.value)
    var ar_dd = Number(getSelectedValue(area_dd))
    var dep = Number(depth.value)
    var result = 0;

    result = ((ar / ar_dd) * dep) * 10;

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

    div1.innerHTML = "<b>The amount of mulch needed is  " + result.toFixed(2) +  " Liters </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);