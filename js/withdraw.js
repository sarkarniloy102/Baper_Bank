// add event listener on withdraw button
document.getElementById('withdraw_btn').addEventListener('click', function () {

    // get withdraw amount from input withdraw field
    const WithdrawField = document.getElementById('input_withdraw');
    const WithdrawAmount = parseFloat(WithdrawField.value);

    // get total withdraw balance from total balance field
    const TotalWithdrawField = document.getElementById('total_withdraw');
    const TotalWithdrawAmount = parseFloat(TotalWithdrawField.innerText);

    const NewWithdrawAmount = TotalWithdrawAmount + WithdrawAmount;


    // get total balance from total balance field
    const TotalBalanceField = document.getElementById('total_balance');
    const TotalAmount = parseFloat(TotalBalanceField.innerText);

    if (WithdrawAmount > TotalAmount)
        alert('Insufficient Balance')
    else {
        // NOw the withdraw balance is 
        TotalWithdrawField.innerText = NewWithdrawAmount;
        // Calculate the total balance 
        const NewTotalAmount = TotalAmount - WithdrawAmount;
        TotalBalanceField.innerText = NewTotalAmount;
    }
    WithdrawField.value = '';
});