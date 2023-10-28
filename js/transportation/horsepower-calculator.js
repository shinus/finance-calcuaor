var force = document.getElementById("force_input_id");
var distance = document.getElementById("distance_input_id");
var time = document.getElementById("time_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "force", values: force },
    { name: "distance", values: distance },
    { name: "time", values: time },
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
    var forc = Number(force.value)
    var dist = Number(distance.value)
    var ti = Number(time.value)
    var result = 0;

    result =  forc * (dist / ti);

    return result;
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var result = getExact();
    var a = result / 745.7;
    var b = result / 735.5;
    var c = result / 746;
    var d = result / 9810;

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>The power is   " + result.toFixed(0) + " Watts  </br> It is equivalent to: </b>";
    div2.innerHTML = "<b> " + a.toFixed(4) + " mechanical horsepowers </b>";
    div3.innerHTML = "<b> " + b.toFixed(4) + " metric horsepowers </b>";
    div4.innerHTML = "<b> " + c.toFixed(4) + " electrical horsepowers </b>";
    div5.innerHTML = "<b> " + d.toFixed(4) + "  boiler horsepowers </b>"

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);