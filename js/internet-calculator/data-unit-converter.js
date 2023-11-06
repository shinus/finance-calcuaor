var data = document.getElementById("data_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "data", values: data },
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
    var da = Number(data.value)
    var result, result2, result3, result4, result5, result6, result7, result8, result9 = 0;

    result =  da * 8000000;
    result2 = da * 8000;
    result3 = da * 8;
    result4 = da / 125;
    result5 = da / 125000;
    result6 = da * 1000000;
    result7 = da * 1000;
    result8 = da / 1000;
    result9 = da / 1000000;

    return [result, result2,result3, result4, result5, result6, result7, result8, result9];
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var [result, result2, result3, result4, result5, result6, result7, result8, result9] = getExact();
    var md = Number(data.value)

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

    div1.innerHTML = "<b> " + md +  "MB is equivalent to any of the following:  </b>";
    div2.innerHTML = "<b> " + result +  "  bits (b)  </b>";
    div3.innerHTML = "<b> " + result2 +  "  kilobits (kb)  </b>";
    div4.innerHTML = "<b> " + result3 +  "  megabits (mb)  </b>";
    div5.innerHTML = "<b> " + result4 +  "  gigabits (gb)  </b>";
    div6.innerHTML = "<b> " + result5 +  "  terabits (tb)  </b>";
    div7.innerHTML = "<b> " + result6 +  "  Bytes (B)  </b>";
    div8.innerHTML = "<b> " + result7 +  "  KiloBytes (KB)  </b>";
    div9.innerHTML = "<b> " + result8 +  "  GigaBytes (GB)  </b>";
    div10.innerHTML = "<b> " + result9 +  "  TeraBytes (TB)  </b>";

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