var length = document.getElementById("length_input_id");
var length_dd = document.getElementById("length_dd_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "length", values: length },
    { name: "length_dd", values: length_dd },
];

var raUnit = [
    {
        name: "meters",
        value: 1
    },
    {
        name: "Kilometers",
        value: 2
    },
    {
        name: "Inches",
        value: 3
    },
    {
        name: "Feet",
        value: 4
    },
    {
        name: "Yards",
        value: 5
    },
    {
        name: "Miles",
        value: 6
    }
]

function init() {
    createDropDown(raUnit, length_dd)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function getExact() {
    var len = Number(length.value)
    var result = 0;
   
        result =  Math.pow(len, 3)

    return result;
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var result = getExact();
    var len_dd = Number(getSelectedValue(length_dd))

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");

    output.innerHTML = "";

    if(len_dd == 1) {
        div1.innerHTML = "<b>Volume:  " + result.toFixed(5) +  " meters3        </b>";
    } else if(len_dd == 2) {
        div1.innerHTML = "<b> Total Volume:  " + result.toFixed(5) +  " kilometers3        </b>";
    } else if(len_dd == 3) {
        div1.innerHTML = "<b> Total Volume:  " + result.toFixed(5) +  " Inches3        </b>";
    } else if(len_dd == 4) {
        div1.innerHTML = "<b> Total Volume:  " + result.toFixed(5) +  " Feet3        </b>";
    } else if(len_dd == 5) {
        div1.innerHTML = "<b> Total Volume:  " + result.toFixed(5) +  " Yards3        </b>";
    } else if(len_dd == 6) {
        div1.innerHTML = "<b> Total Volume:  " + result.toFixed(5) +  " Miles3        </b>";
    }
 
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);