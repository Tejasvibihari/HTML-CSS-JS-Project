const btnEle = document.getElementById("calculateBtn");

const billEle = document.getElementById("bill");
const tipEle = document.getElementById("tip");
const totalEle = document.getElementById("total");

btnEle.addEventListener('click', () => {
    const billValue = parseFloat(billEle.value);
    const tipValue = parseFloat(tipEle.value);

    const decimalTip = tipValue / 100;
    const percentageValue = decimalTip * billValue;


    const totalAmount = billValue + percentageValue;

    totalEle.innerHTML = totalAmount;



});
