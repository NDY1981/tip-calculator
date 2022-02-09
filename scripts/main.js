let checkTotal = document.getElementById("checkTotal");
let checkTotalOutput = document.getElementById("checkTotalOutput");
let tipPercentage = document.getElementById("tipPercentage");
let tipPercentageOutput = document.getElementById("tipPercentageOutput");
let total = document.getElementById("total");
let tip = document.getElementById("tip");
let totalWithTip = document.getElementById("totalWithTip");

checkTotalOutput.textContent = "$0.00";
tipPercentageOutput.textContent = "0%";
total.textContent = "$0.00";
tip.textContent = "$0.00";
totalWithTip.textContent = "$0.00";

checkTotal.oninput = function() {
    if (isNaN((parseFloat(checkTotal.value)).toFixed(2))) {
        checkTotalOutput.textContent = "Please enter a number!!!";
        total.textContent = "";
        tip.textContent = "";
        totalWithTip.textContent = "";
    } else if (checkTotal.value < 0) {
        checkTotalOutput.textContent = "Please enter a positive number!!!";
        total.textContent = "";
        tip.textContent = "";
        totalWithTip.textContent = "";
    } else {
        checkTotalOutput.textContent = "$" + (parseFloat(checkTotal.value)).toFixed(2);
        total.textContent = "$" + (parseFloat(checkTotal.value)).toFixed(2);
        tip.textContent = "$" + (parseFloat(checkTotal.value * (tipPercentage.value / 100))).toFixed(2);
        totalWithTip.textContent = "$" + (parseFloat(checkTotal.value) + (parseFloat(checkTotal.value * (tipPercentage.value / 100)))).toFixed(2);
    }
}
   

tipPercentage.oninput = function() {
    if (isNaN((parseFloat(checkTotal.value)).toFixed(2)) || checkTotal.value < 0) {
        tipPercentageOutput.textContent = tipPercentage.value + "%";
        tip.textContent = "";
        totalWithTip.textContent = "";
    } else {
        tipPercentageOutput.textContent = tipPercentage.value + "%";
        tip.textContent = "$" + (parseFloat(checkTotal.value * (tipPercentage.value / 100))).toFixed(2);
        totalWithTip.textContent = "$" + (parseFloat(checkTotal.value) + (parseFloat(checkTotal.value * (tipPercentage.value / 100)))).toFixed(2);
    }
}