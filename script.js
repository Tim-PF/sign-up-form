const form = document.querySelector('.form-example-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let password1 = document.querySelector('#user-pw').value;
    console.log(password1)
    let password2 = document.querySelector('#user-pw-confirmation').value;
    let errorMessages = document.querySelectorAll('.password-error-message')

    if (password1 !== password2) {
        // Iterate over error message elements and set the error message
        errorMessages.forEach((errorMessage) => {
            errorMessage.textContent = '*Passwords do not match';
        });
    } else {
        // Clear any previous error messages
        errorMessages.forEach((errorMessage) => {
            errorMessage.textContent = '';
        });
        // Proceed with form submission
        this.submit();
    }
      
    
    
});