// add event handlers on deposite button
document.getElementById('deposit_btn').addEventListener('click', function () {
    // get value of input_deposit field
    const i_deposit = document.getElementById('input_deposit');
    const deposit_value = i_deposit.value;

    // get innertext of total_deposit
    const T_deposit = document.getElementById('total_deposit');
    const TD_value = T_deposit.innerText;
});