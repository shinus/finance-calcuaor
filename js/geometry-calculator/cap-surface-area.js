var base = document.getElementById("base_input_id");
var ball = document.getElementById("ball_input_id");
var height = document.getElementById("height_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "base", values: base },
    { name: "ball", values: ball },
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
    var bas = Number(base.value)
    var bal = Number(ball.value)
    var hei = Number(height.value)
    var result, result2, result3, result4, result5, result6, result7, result8 = 0;

    result = bal - Math.sqrt(Math.pow(bal, 2) - Math.pow(bas, 2));
    result2 = Math.PI * (bas * bas);
    result3 = 2 * Math.PI * result * bal;
    result4 = result2 + result3;
    result5 =  bal + Math.sqrt(Math.pow(bal, 2) - Math.pow(bas, 2));
    result6 = Math.PI * (bas * bas);
    result7 = 2 * Math.PI * result5 * bal;
    result8 = result6 + result7;

    return [result, result2, result3, result4, result5, result6, result7, result8];
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var [result, result2, result3, result4, result5, result6, result7, result8] = getExact();

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
    var div11 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>Height = R ± √R2 - r2  </b>";
    div2.innerHTML = "<b>So, there are two results:  </b>";
    div3.innerHTML = "<b>Height = "  + result.toFixed(5) + " meters  </b>";
    div4.innerHTML = "<b>Base Surface area = "  + result2.toFixed(5) + " meters2  </b>";
    div5.innerHTML = "<b>Cap Surface area = "  + result3.toFixed(5) + " meters2  </b>";
    div6.innerHTML = "<b>Total Surface area = "  + result4.toFixed(5) + " meters2  </b>";
    div7.innerHTML = "<b> or </b>";
    div8.innerHTML = "<b> Height = " + result5.toFixed(5) + " meters </b>";
    div9.innerHTML = "<b> Base surface area = " + result6.toFixed(5) + " meters2 </b>";
    div10.innerHTML = "<b> Cap surface area = " + result7.toFixed(5) + " meters2 </b>";
    div11.innerHTML = "<b> Total surface area = " + result8.toFixed(5) + " meters2 </b>";

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
    output.append(div11);
}

calcBtn.addEventListener("click", showResult);