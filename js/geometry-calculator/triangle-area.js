var edge1 = document.getElementById("edge1_input_id");
var edge2 = document.getElementById("edge2_input_id");
var edge3 = document.getElementById("edge3_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "edge1", values: edge1 },
    { name: "edge2", values: edge2 },
    { name: "edge3", values: edge3 },
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
    var ed1 = Number(edge1.value)
    var ed2 = Number(edge2.value)
    var ed3 = Number(edge3.value)
    var result, a = 0;

    a = (ed1 + ed2 + ed3) / 2;

    result = Math.sqrt(a * (a - ed1) * (a - ed2) * (a - ed3));

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

    div1.innerHTML = "<b>Area:  " + result.toFixed(5) + " meters2 </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);