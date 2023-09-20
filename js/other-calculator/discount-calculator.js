var price = document.getElementById("price_input_id");
var type = document.getElementById("type_dd_id");
var discount = document.getElementById("discount_input_id");
var dis2 = document.getElementById("discount2_input_id");
var row3 = getElement("calculator-row-3")
var row4 = getElement("calculator-row-4")
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "price", values: price },
    { name: "type", values: type },
    { name: "discount", values: discount },
    { name: "dis2", values: dis2 },
];

var tyUnit = [
    {
        name: "Percent off",
        value: 0
    },
    {
        name: "Fixed amount off",
        value: "1"
    },
];

function init() {
    createDropDown(tyUnit, type)
    row4.style.display = 'none'
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function showVariables2() {
    var con = Number(getSelectedValue(type));

    if (con == 0) {
        row3.style.display = 'block';
        row4.style.display = 'none';
    } else if (con == 1) {
        row3.style.display = 'none';
        row4.style.display = 'block';
    }
}
type.addEventListener("change", () => {
    showVariables2();
});

function getExact() {
    var pri = Number(price.value)
    var ty = Number(getSelectedValue(type))
    var di1 = Number(discount.value)
    var di2 = Number(dis2.value)
    var result, result2 = 0;

    if(ty == 0) {
        result = (pri * di1) / 100;
        result2 = pri - result;
    } else if(ty == 1) {
        result2 = pri - di2
        result = (di2 / pri) * 100;
    }

    return [result, result2];
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
      }
    var [result, result2] = getExact();
    var ty = Number(getSelectedValue(type))

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";

    if(ty == 0) {
        div1.innerHTML = "<b>Price after discount:  $  " + " " + result2.toFixed(2) + " </b>";
        div2.innerHTML = "<b>You saved:  $    " + " " + result.toFixed(2) + " </b>";
    } else if(ty == 1) {
        div1.innerHTML = "<b>Price after discount:  $  " + " " + result2.toFixed(2) + " </b>";
        div2.innerHTML = "<b>Discount percentage:    " + " " + result.toFixed(2) + " %</b>";
    }

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);