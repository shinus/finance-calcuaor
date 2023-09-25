var diameter = document.getElementById("diameter_input_id");
var diameter_dd = document.getElementById("diameter_dd_Id");
var depth = document.getElementById("depth_input_id");
var depth_dd = document.getElementById("depth_dd_Id");
var quantity = document.getElementById("quantity_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "diameter", values: diameter },
    { name: "diameter_dd", values: diameter_dd },
    { name: "depth", values: depth },
    { name: "depth_dd", values: depth_dd },
    { name: "quantity", values: quantity },
];

var lwUnit = [
    {
        name: "meters",
        value: 1
    },
    {
        name: "centimeters",
        value: 100
    },
    {
        name: "feet",
        value: 1.094
    },
    {
        name: "inches",
        value: 39.37
    },
    {
        name: "yards",
        value: 3.281
    },
];

function init() {
    createDropDown(lwUnit, diameter_dd)
    createDropDown(lwUnit, depth_dd)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function getExact() {
    var dia = Number(diameter.value)
    var dia_dd = Number(getSelectedValue(diameter_dd))
    var dep = Number(depth.value)
    var dep_dd = Number(getSelectedValue(depth_dd))
    var quan = Number(quantity.value)
    var result,result2,result3,result4,result5 = 0;

    var a =( Math.PI * (2 * (dia * dia_dd) ** 2) * (dep * dep_dd)); 
    var b = a ;
    result = b * 35.315;
    result2 = b * 2130;
    result3 =  result2 * 2.20462;
    result4 = result3 / 60;
    result5 = result3 / 80;

    return [result,result2,result3,result4,result5];
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var [result, result2, result3, result4, result5] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b> Total Volume:  " + result.toFixed(2) +  " Cubic feet </b>";
    div2.innerHTML = "<b> If using pre-mixed concrete with density of 2130kg/m3 or 133 lbs/ft3*: </b>"
    div3.innerHTML = "<b>Total weight needed " + result3.toFixed(2)  +"lbs or " + result2.toFixed(2) + " kg< /b>"
    div4.innerHTML = "<b>Using 60-lb bags " + result4.toFixed(2) + " bags</b>"
    div5.innerHTML = "<b>Using 80-lb bags " + result5.toFixed(2) + " bags</b>"

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);