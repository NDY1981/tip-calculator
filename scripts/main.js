let checkTotal = document.getElementById("checkTotal");
let tipPercentage = document.getElementById("tipPercentage");
let tipPercentageOutput = document.getElementById("tipPercentageOutput");
let total = document.getElementById("total");
let tip = document.getElementById("tip");
let totalWithTip = document.getElementById("totalWithTip");


tipPercentage.oninput = function() {
    tipPercentageOutput.textContent = tipPercentage.value + "%";
    tip.textContent = (checkTotal.value * (tipPercentage.value / 100)).toFixed(2);
    totalWithTip.textContent = (parseFloat(total.textContent) + parseFloat(tip.textContent)).toFixed(2);
}

checkTotal.oninput = function() {
    total.textContent = (parseFloat(checkTotal.value)).toFixed(2);
    tip.textContent = (checkTotal.value * (tipPercentage.value / 100)).toFixed(2);
    totalWithTip.textContent = (parseFloat(total.textContent) + parseFloat(tip.textContent)).toFixed(2);
}
