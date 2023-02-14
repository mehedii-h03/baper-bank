document.getElementById("btn-withdraw").addEventListener("click", function(){
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = "";

    if(newWithdrawAmount < 0){
        alert("please enter a valid number")
        return;
    }
    
    if(isNaN(newWithdrawAmount )){
        alert("Please enter valid a number");
        return;
    }

    const balanceField = document.getElementById("balance-amount");
    const previousBalanceString = balanceField.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    if(newWithdrawAmount > previousBalance){
        alert("Insufficient Balance");
        return;
    }

    balanceField.innerText = previousBalance - newWithdrawAmount;
    
    const withdrawTotalElement = document.getElementById("withdraw-amount");
    const previousWithdrawElementString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawElementString);
    withdrawTotalElement.innerText = previousWithdrawAmount + newWithdrawAmount;
    

})