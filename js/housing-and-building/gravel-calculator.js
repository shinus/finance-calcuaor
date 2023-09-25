var area = document.getElementById("area_input_id");
var depth = document.getElementById("depth_input_id");
var density = document.getElementById("density_dd_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "area", values: area },
    { name: "depth", values: depth },
    { name: "density", values: density },
];

var lwUnit = [
    {
        name: "Gravel (0.2-2 or 0.5-5cm)",
        value: 104.9
    },
    {
        name: "Gravel with sand",
        value: 119.85
    },
    {
        name: "dry sand",
        value: 93.6
    },
    {
        name: "Wet sand",
        value: 118.6
    },

];

function init() {
    createDropDown(lwUnit, density)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function getExact() {
    var are = Number(area.value)
    var den = Number(getSelectedValue(density))
    var dep = Number(depth.value)
    var result,result2 = 0;

    var a =dep / 30.48; 
    result = are * a;
    result2 = result * den;

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

    div1.innerHTML = "<b> The Volume:  " + result.toFixed(2) +  " Cubic feet </b>";
    div2.innerHTML = "<b> The weight is approximately " + result2.toFixed(0) + "lbs </b>"

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);