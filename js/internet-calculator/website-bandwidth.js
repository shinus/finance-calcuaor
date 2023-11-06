var views = document.getElementById("views_input_id");
var size = document.getElementById("size_input_id");
var factor = document.getElementById("factor_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "views", values: views },
    { name: "size", values: size },
    { name: "factor", values: factor },
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
    var vi = Number(views.value)
    var si = Number(size.value)
    var fa = Number(factor.value)
    var result, result2, result3, result4 = 0;

    result =  (vi * si * 8) / (30 * 1024);
    result2 = (vi * si) / (30 * 1024);
    result3 = fa * result;
    result4 = fa * result2;

    return [result, result2,result3, result4];
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
    var div6 = document.createElement("div");
    var div7 = document.createElement("div");
    var div8 = document.createElement("div");
    var div9 = document.createElement("div");
    var div10 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>Actual bandwidth needed is " + result.toFixed(6) +  " Mbit/s or " + result2.toFixed(3) + " GB per  month  </b>";
    div2.innerHTML = "<b>With redundancy factor of 2, the bandwidth needed is " + result3.toFixed(6) +  " Mbits /s or " + result4.toFixed(3) + " GB per month   </b>";
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
    output.append(div7);
    output.append(div8);
    output.append(div9);
    output.append(div10);
}

calcBtn.addEventListener("click", showResult);