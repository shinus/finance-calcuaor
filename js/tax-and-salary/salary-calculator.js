var salary = document.getElementById("salary_input_id");
var per = document.getElementById("per_dd_Id");
// var week = document.getElementById("week_input_id");
// var days = document.getElementById("days_input_id");
// var year = document.getElementById("year_input_id");
// var vacation = document.getElementById("vacation_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "salary", values: salary },
    { name: "per", values: per },
    // { name: "week", values: week },
    // { name: "days", values: days },
    // { name: "year", values: year },
    // { name: "vacation", values: vacation },
];

var peUnit = [
    {
        name: "Hour",
        value: 0
    },
    {
        name: "Day",
        value: 1
    },
    {
        name: "Week",
        value: 2
    },
    {
        name: "Bi-week",
        value: 3
    },
    {
        name: "Semi-month",
        value: 4
    },
    {
        name: "Month",
        value: 5
    },
    {
        name: "Quarter",
        value: 6
    },
    {
        name: "year",
        value: 7
    },
];

function init() {
    createDropDown(peUnit, per)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function getExact() {
    var sal = Number(salary.value)
    var pe = Number(getSelectedValue(per))
    // var we = Number(week.value)
    // var da = Number(days.value)
    // var ye = Number(year.value)
    // var va = Number(vacation.value)
    var result,result2, result3, result4, result5, result6, result7, result8 = 0;

    if(pe == 0) {
        result = sal - (sal * (9.6 / 100));
        result2 = (sal * 8) - ((sal * 8) * (9.6 / 100));
        result3 = (sal * 40) - ((sal * 40) * (9.6 / 100));
        result4 = (sal * 80) - ((sal * 80) * (9.6 / 100));
        result5 = (sal * 86.66) - ((sal * 86.66) * (9.6 / 100));
        result6 = (sal * 173.33) - ((sal * 173.33) * (9.6 / 100));
        result7 = (sal * 520) - ((sal * 520) * (9.6 / 100));
        result8 = (sal * 2080) - ((sal * 2080) * (9.6 / 100));
    }else if(pe == 1) {
        result = (sal / 8) - ((sal / 8) * (9.6 / 100));
        result2 = sal - (sal * (9.6 / 100));
        result3 = (sal * 5) - ((sal * 5) * (9.6 / 100));
        result4 = (sal * 10) - ((sal * 10) * (9.6 / 100));
        result5 = (sal * 10.84) - ((sal * 10.84) * (9.6 / 100));
        result6 = (sal * 21.67) - ((sal * 21.67) * (9.6 / 100));
        result7 = (sal * 65) - ((sal * 65) * (9.6 / 100));
        result8 = (sal * 260) - ((sal * 260) * (9.6 / 100));
    } else if(pe == 2) {
        result = (sal / 36.15) - ((sal / 36.15) * (9.6 / 100));
        result2 = (sal / 4.52) - ((sal / 4.52) * (9.6 / 100));
        result3 = sal 
        result4 = (sal * 2.21) - ((sal * 2.21) * (9.6 / 100));
        result5 = (sal * 2.39) - ((sal * 2.39) * (9.6 / 100));
        result6 = (sal * 4.79) - ((sal * 4.79) * (9.6 / 100));
        result7 = (sal * 14.38) - ((sal * 14.38) * (9.6 / 100));
        result8 = (sal * 57.53) - ((sal * 57.53) * (9.6 / 100));
    } else if(pe == 3) {
        result = (sal / 72.30) - ((sal / 72.30) * (9.6 / 100));
        result2 = (sal / 9.03) - ((sal / 9.03) * (9.6 / 100));
        result3 = (sal / 1.80) - ((sal / 1.80) * (9.6 / 100));
        result4 = sal;
        result5 = (sal * 1.19) - ((sal * 1.19) * (9.6 / 100));
        result6 = (sal * 2.39) - ((sal * 2.39) * (9.6 / 100));
        result7 = (sal * 7.19) - ((sal * 7.19) * (9.6 / 100));
        result8 = (sal * 28.76) - ((sal * 28.76) * (9.6 / 100));
    } else if(pe == 4) {
        result = (sal / 78.31) - ((sal / 78.31) * (9.6 / 100));
        result2 = (sal / 9.79) - ((sal / 9.79) * (9.6 / 100));
        result3 = (sal / 1.95) - ((sal / 1.95) * (9.6 / 100));
        result4 = (sal / 0.97) - ((sal / 0.97) * (9.6 / 100));
        result5 = sal;
        result6 = (sal * 2.21) - ((sal * 2.21) * (9.6 / 100));
        result7 = (sal * 6.63) - ((sal * 6.63) * (9.6 / 100));
        result8 = (sal * 26.55) - ((sal * 26.55) * (9.6 / 100));
    } else if(pe == 5) {
        result = (sal / 156.62) - ((sal / 156.62) * (9.6 / 100));
        result2 = (sal / 19.58) - ((sal / 19.58) * (9.6 / 100));
        result3 = (sal / 3.91) - ((sal / 3.91) * (9.6 / 100));
        result4 = (sal / 1.95) - ((sal / 1.95) * (9.6 / 100));
        result5 = (sal / 1.80) - ((sal / 1.80) * (9.6 / 100));
        result6 = sal; 
        result7 = (sal * 3.31) - ((sal * 3.31) * (9.6 / 100));
        result8 = (sal * 13.27) - ((sal * 13.27) * (9.6 / 100));
    } else if(pe == 6) {
        result = (sal / 471.01) - ((sal / 471.01) * (9.6 / 100));
        result2 = (sal / 58.77) - ((sal / 58.77) * (9.6 / 100));
        result3 = (sal / 11.81) - ((sal / 11.81) * (9.6 / 100));
        result4 = (sal / 5.85) - ((sal / 5.85) * (9.6 / 100));
        result5 = (sal / 5.41) - ((sal / 5.41) * (9.6 / 100));
        result6 = (sal / 2.70) - ((sal / 2.70) * (9.6 / 100));
        result7 = sal;
        result8 = (sal * 4.42) - ((sal * 4.42) * (9.6 / 100));
    } else if(pe == 7) {
        result = (sal / 1857.14) - ((sal / 1857.14) * (9.6 / 100));
        result2 = (sal / 234.65) - ((sal / 234.65) * (9.6 / 100));
        result3 = (sal / 46.42) - ((sal / 46.42) * (9.6 / 100));
        result4 = (sal / 23.21) - ((sal / 23.21) * (9.6 / 100));
        result5 = (sal / 21.66) - ((sal / 21.66) * (9.6 / 100));
        result6 = (sal / 10.83) - ((sal / 10.83) * (9.6 / 100));
        result7 = (sal / 3.61) - ((sal / 3.61) * (9.6 / 100));
        result8 = sal;
    }


    return [result, result2, result3, result4, result5, result6, result7, result8];
}

function getExact2() {
    var sal = Number(salary.value)
    var pe = Number(getSelectedValue(per))
    // var we = Number(week.value)
    // var da = Number(days.value)
    // var ye = Number(year.value)
    // var va = Number(vacation.value)
    var unadjust,unadjust2, unadjust3, unadjust4, unadjust5, unadjust6, unadjust7, unadjust8 = 0;

    if(pe == 0) {
        unadjust = sal;
        unadjust2 = (sal * 8);
        unadjust3 = (sal * 40);
        unadjust4 = (sal * 80);
        unadjust5 = (sal * 86.66);
        unadjust6 = (sal * 173.33);
        unadjust7 = (sal * 520);
        unadjust8 = (sal * 2080);
    }else if(pe == 1) {
        unadjust = (sal / 8);
        unadjust2 = sal;
        unadjust3 = (sal * 5);
        unadjust4 = (sal * 10);
        unadjust5 = (sal * 10.84);
        unadjust6 = (sal * 21.67);
        unadjust7 = (sal * 65);
        unadjust8 = (sal * 260);
    } else if(pe == 2) {
        unadjust = (sal / 36.15);
        unadjust2 = (sal / 4.52);
        unadjust3 = sal 
        unadjust4 = (sal * 2.21);
        unadjust5 = (sal * 2.39);
        unadjust6 = (sal * 4.79);
        unadjust7 = (sal * 14.38);
        unadjust8 = (sal * 57.53);
    } else if(pe == 3) {
        unadjust = (sal / 72.30);
        unadjust2 = (sal / 9.03);
        unadjust3 = (sal / 1.80);
        unadjust4 = sal;
        unadjust5 = (sal * 1.19);
        unadjust6 = (sal * 2.39);
        unadjust7 = (sal * 7.19);
        unadjust8 = (sal * 28.76);
    } else if(pe == 4) {
        unadjust = (sal / 78.31);
        unadjust2 = (sal / 9.79);
        unadjust3 = (sal / 1.95);
        unadjust4 = (sal / 0.97);
        unadjust5 = sal;
        unadjust6 = (sal * 2.21);
        unadjust7 = (sal * 6.63);
        unadjust8 = (sal * 26.55);
    } else if(pe == 5) {
        unadjust = (sal / 156.62);
        unadjust2 = (sal / 19.58);
        unadjust3 = (sal / 3.91);
        unadjust4 = (sal / 1.95);
        unadjust5 = (sal / 1.80);
        unadjust6 = sal; 
        unadjust7 = (sal * 3.31);
        unadjust8 = (sal * 13.27);
    } else if(pe == 6) {
        unadjust = (sal / 471.01);
        unadjust2 = (sal / 58.77);
        unadjust3 = (sal / 11.81);
        unadjust4 = (sal / 5.85);
        unadjust5 = (sal / 5.41);
        unadjust6 = (sal / 2.70);
        unadjust7 = sal;
        unadjust8 = (sal * 4.42);
    } else if(pe == 7) {
        unadjust = (sal / 1857.14);
        unadjust2 = (sal / 234.65);
        unadjust3 = (sal / 46.42);
        unadjust4 = (sal / 23.21);
        unadjust5 = (sal / 21.66);
        unadjust6 = (sal / 10.83);
        unadjust7 = (sal / 3.61);
        unadjust8 = sal;
    }


    return [unadjust, unadjust2, unadjust3, unadjust4, unadjust5, unadjust6, unadjust7, unadjust8];
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
      }
    var [result, result2, result3, result4, result5, result6, result7, result8] = getExact();
    var [unadjust, unadjust2, unadjust3, unadjust4, unadjust5, unadjust6, unadjust7, unadjust8] = getExact2();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");
    var div7 = document.createElement("div");
    var div8 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>Hourly    " + " \t\t\t\t\t " + unadjust.toFixed(2) + " \t\t\t\t\t " +  result.toFixed(2) + " </b>";
    div2.innerHTML = "<b>Daily    " + " \t\t\t\t\t "  + unadjust2.toFixed(2) + " \t\t\t\t\t " + result2.toFixed(2) + " </b>";
    div3.innerHTML = "<b>Weekly    " + " \t\t\t\t\t "  + unadjust3.toFixed(0) + " \t\t\t\t\t " + result3.toFixed(0) + " </b>";
    div4.innerHTML = "<b>Bi-weekly    " + " \t\t\t\t\t "  + unadjust4.toFixed(0) + " \t\t\t\t\t " + result4.toFixed(0) + " </b>";
    div5.innerHTML = "<b>Semi-monthly    " + " \t\t\t\t\t "  + unadjust5.toFixed(0) + " \t\t\t\t\t " + result5.toFixed(0) + " </b>";
    div6.innerHTML = "<b>Monthly   " + " \t\t\t\t\t "  + unadjust6.toFixed(0) + " \t\t\t\t\t " + result6.toFixed(0) + " </b>";
    div7.innerHTML = "<b>Quarterly    " + " \t\t\t\t\t "  + unadjust7.toFixed(0) + " \t\t\t\t\t " + result7.toFixed(0) + " </b>";
    div8.innerHTML = "<b>Annaual    " + " \t\t\t\t\t "  + unadjust8.toFixed(0) + " \t\t\t\t\t " + result8.toFixed(0) + " </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
    output.append(div7);
    output.append(div8);
}

calcBtn.addEventListener("click", showResult);