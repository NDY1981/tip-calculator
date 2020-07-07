let checkTotal = document.getElementById("checkTotal");
let checkTotalOutput = document.getElementById("checkTotalOutput");
let tipPercentage = document.getElementById("tipPercentage");
let tipPercentageOutput = document.getElementById("tipPercentageOutput");
let total = document.getElementById("total");
let tip = document.getElementById("tip");
let totalWithTip = document.getElementById("totalWithTip");


checkTotal.oninput = function() {
    checkTotalOutput.textContent = "$" + (parseFloat(checkTotal.value)).toFixed(2);
    total.textContent = "$" + (parseFloat(checkTotal.value)).toFixed(2);
    tip.textContent = "$" + (parseFloat(checkTotal.value * (tipPercentage.value / 100))).toFixed(2);
    totalWithTip.textContent = "$" + (parseFloat(checkTotal.value) + (parseFloat(checkTotal.value * (tipPercentage.value / 100)))).toFixed(2);
}

tipPercentage.oninput = function() {
    tipPercentageOutput.textContent = tipPercentage.value + "%";
    tip.textContent = "$" + (parseFloat(checkTotal.value * (tipPercentage.value / 100))).toFixed(2);
    totalWithTip.textContent = "$" + (parseFloat(checkTotal.value) + (parseFloat(checkTotal.value * (tipPercentage.value / 100)))).toFixed(2);
}
