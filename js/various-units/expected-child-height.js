var mother = document.getElementById("mother_input_id");
var father = document.getElementById("father_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "mother", values: mother },
    { name: "father", values: father }
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
    var mot = Number(mother.value)
    var fat = Number(father.value)
    var result, result2 = 0;

        result = ((fat + mot) / 2)  + 6;
        result2 = ((fat + mot) / 2)  - 6;

    return [result, result2];
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

    output.innerHTML = "";

        div1.innerHTML = "<b>Male child's future height:   " + result.toFixed(0) + " " + " centimeters. </b>";
        div2.innerHTML = "<b>Female child's future height:   " + result2.toFixed(0) + " " + " centimeters. </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);