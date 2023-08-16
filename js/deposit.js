// add event handlers on deposite button
document.getElementById('deposit_btn').addEventListener('click', function () {

    // get value of deposit amount from input_deposit field
    const i_deposit = document.getElementById('input_deposit');
    const deposit_amount = parseFloat(i_deposit.value);
    i_deposit.value = '';
    if (isNaN(deposit_amount)) {
        alert('Invalid Amount!!Please enter a Number');
        return
    }
    // get innertext of total_deposit balance
    const T_deposit = document.getElementById('total_deposit');
    const currentDepositAmount = parseFloat(T_deposit.innerText);

    // The New deposit balance is 
    const NewDepositAmount = currentDepositAmount + deposit_amount
    T_deposit.innerText = NewDepositAmount;

    // get the value of total balance from total_balance field
    const T_balance = document.getElementById('total_balance');
    const TotalAmount = parseFloat(T_balance.innerText);

    // The Total balance is 
    const NewTotalAmount = TotalAmount + NewDepositAmount;
    T_balance.innerText = NewTotalAmount;



});