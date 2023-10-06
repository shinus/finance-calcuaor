var radius = document.getElementById("radius_input_id");
var radius_dd = document.getElementById("radius_dd_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "radius", values: radius },
    { name: "radius_dd", values: radius_dd },
];

var raUnit = [
    {
        name: "meters",
        value: 1
    },
    {
        name: "kilometers",
        value: 1000
    },
    {
        name: "miles",
        value: 1609
    }
]

function init() {
    createDropDown(raUnit, radius_dd)
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