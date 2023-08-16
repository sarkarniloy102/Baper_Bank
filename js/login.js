// add click event handler with the submit button
document.getElementById('submit_btn').addEventListener('click', function () {
    // to get email from emailfield
    const email_field = document.getElementById('input_email');
    const email = email_field.value;
    // to get password from passwordfield
    const pass_field = document.getElementById('input_pass');
    const password = pass_field.value;

    // DANGER: DO NOT VERIFY email password on the client side
    // I am doing this now just to learn
    if (email === 'sarkarniloy102@gmail.com' && password === 'Niloy102')
        window.location.href = 'bank.html';
    else
        alert("Didn't match username & password.Try again");
})