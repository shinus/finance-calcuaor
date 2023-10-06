var topp = document.getElementById("top_input_id");
var bottom = document.getElementById("bottom_input_id");
var height = document.getElementById("height_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "top_radius", values: topp },
    { name: "bottom_radius", values: bottom },
    { name: "height", values: height },
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
    var tooo = Number(topp.value)
    var bo = Number(bottom.value)
    var hei = Number(height.value)
    var result, result2, result3, result4 = 0;


    result =  Math.PI * (tooo * tooo);
    result2 = Math.PI * (bo * bo);
    result3 = (Math.PI * (bo + tooo)) * Math.sqrt((Math.pow(bo - tooo, 2) + Math.pow(hei, 2)))
    result4 = result + result2 + result3;

    return [result, result2, result3, result4];
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var [result, result2, result3, result4] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>Top Surface area  =   " + result.toFixed(5) + " meters3        </b>";
    div2.innerHTML = "<b>Bottom Surface area =   " + result2.toFixed(5) + " meters3        </b>";
    div3.innerHTML = "<b>Lateral Surface area =   " + result3.toFixed(5) + " meters3        </b>";
    div4.innerHTML = "<b>Total Surface area =   " + result4.toFixed(5) + " meters3        </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);