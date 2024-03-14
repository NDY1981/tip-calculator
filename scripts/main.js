/* Scripting for the Tip Calculator: */


/* Grab element references: */
const TipCalculator = document.querySelector("#TipCalculator");
const CheckTotalInput = document.querySelector("#CheckTotalInput");
const TipPercentageInput = document.querySelector("#TipPercentageInput");
const CheckTotalOutput = document.querySelector("#CheckTotalOutput");
const TipTotalOutput = document.querySelector("#TipTotalOutput");
const TotalWithTipOutput = document.querySelector("#TotalWithTipOutput");
const Calculate = document.querySelector("#Calculate");
const Reset = document.querySelector("#Reset");


/* Build custom functions: */

function USDFormat(value) {
	value = value.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
	return value;
}

function CalculateAll() {
	if (TipCalculator.reportValidity()) {
		let TipPercentage = TipPercentageInput.value;
		TipPercentage = Number(TipPercentage);
		TipPercentageInput.value = TipPercentage.toFixed(0);
		TipPercentage = TipPercentage / 100;
		TipPercentage = TipPercentage.toFixed(2);
		TipPercentage = Number(TipPercentage);

		let CheckTotal = CheckTotalInput.value;
		CheckTotal = Number(CheckTotal);
		CheckTotalInput.value = CheckTotal.toFixed(2);

		let Tip = TipPercentage * CheckTotal;
		Tip = Tip.toFixed(2);
		Tip = Number(Tip);

		let TotalWithTip = CheckTotal + Tip;
		TotalWithTip = TotalWithTip.toFixed(2);
		TotalWithTip = Number(TotalWithTip);

		CheckTotalOutput.textContent = `${USDFormat(CheckTotal)}`;
		TipTotalOutput.textContent = `${USDFormat(Tip)}`;
		TotalWithTipOutput.textContent = `${USDFormat(TotalWithTip)}`;
	} else {
		ResetAll();
	}
}

function ResetAll() {
	CheckTotalOutput.textContent = "";
	TipTotalOutput.textContent = "";
	TotalWithTipOutput.textContent = "";
}


/* Add the event listeners: */
Calculate.addEventListener("click", CalculateAll);

Reset.addEventListener("click", ResetAll);
