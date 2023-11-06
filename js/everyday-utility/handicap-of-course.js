var index = document.getElementById("index_input_id");
var course = document.getElementById("course_input_id");
var slope = document.getElementById("slope_input_id");
var score = document.getElementById("score_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "index", values: index },
    { name: "course", values: course },
    { name: "slope", values: slope },
    { name: "score", values: score },
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
    var inde = Number(index.value)
    var cour = Number(course.value)
    var slop = Number(slope.value)
    var scor = Number(score.value)
    var result = 0;

    result = (inde * (slop / 113)) + (cour / scor);

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

    output.innerHTML = "";

        div1.innerHTML = "<b> Your handicap for the course: " + result.toFixed(0) + "   </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);