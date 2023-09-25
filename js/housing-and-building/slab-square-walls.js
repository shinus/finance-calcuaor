var length = document.getElementById("length_input_id");
var length_dd = document.getElementById("length_dd_Id");
var width = document.getElementById("width_input_id");
var width_dd = document.getElementById("width_dd_id");
var height = document.getElementById("height_input_id");
var height_dd = document.getElementById("height_dd_Id");
var quantity = document.getElementById("quantity_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "length", values: length },
    { name: "length_dd", values: length_dd },
    { name: "width", values: width },
    { name: "width_dd", values: width_dd },
    { name: "height", values: height },
    { name: "height_dd", values: height_dd },
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

var heUnit = [
    {
        name: " centimeters",
        value: 1
    },
    {
        name: "meters",
        value: 100
    },
    {
        name: "yards",
        value: 91.44
    },
    {
        name: "inches",
        value: 2.54
    },
    {
        name: "feet",
        value: 30.48
    },
];

function init() {
    createDropDown(lwUnit, length_dd)
    createDropDown(lwUnit, width_dd)
    createDropDown(heUnit, height_dd)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function getExact() {
    var len = Number(length.value)
    var len_dd = Number(getSelectedValue(length_dd))
    var wid = Number(width.value)
    var wid_dd = Number(getSelectedValue(width_dd))
    var hei = Number(height.value)
    var hei_dd = Number(getSelectedValue(height_dd))
    var quan = Number(quantity.value)
    var result,result2,result3,result4,result5 = 0;

    var a = (len * len_dd) * (wid * wid_dd);
    var b = (hei * hei_dd) / 100;
    var ab = (a * b) * quan
    result = ab * 35.315;
    result2 = ab * 2130;
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