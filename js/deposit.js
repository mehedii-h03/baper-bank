document.getElementById("btn-deposit").addEventListener("click", function(){
    const depositField = document.getElementById("diposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositInt = parseFloat(newDepositAmountString);
    depositField.value= "";

    if(newDepositInt < 0){
        alert("please enter a valid number")
        return;
    }

    if(isNaN(newDepositInt) && newDepositInt > 0){
        alert("Please enter a valid number");
        return;
    }

    const depositTotalElement = document.getElementById("deposit-amount");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositInt = parseFloat(previousDepositTotalString);
    depositTotalElement.innerText = newDepositInt + previousDepositInt;

    const balanceField = document.getElementById("balance-amount");
    const previousBalanceString = balanceField.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    balanceField.innerText = previousBalance + newDepositInt;
})


const output = document.getElementById("balance")
output.innerText = 1250;
console.log(output)
