
// required message for email and password
const checkInput = (event) => {

    const existingError = event.target.parentNode.querySelector('.text-danger');
    

    if (event.target.value.trim() === '' && !existingError) {
        event.target.insertAdjacentHTML('afterend', '<span class="text-danger">Required</span>');
    }

    if (event.target.value.trim() !== '' && existingError) {
        existingError.remove();
    }
};


document.getElementById('email')
.addEventListener('blur', checkInput);

document.getElementById('password')
    .addEventListener('blur', checkInput);

    document.getElementById('email2')
.addEventListener('blur', checkInput);

document.getElementById('password2')
    .addEventListener('blur', checkInput);



// validation and match of password
    document.addEventListener('DOMContentLoaded', () => {
        const passwordInput = document.getElementById('password2');
        const repeatPasswordInput = document.getElementById('repeat_password');
    
        const validatePasswords = () => {
            const existingError = repeatPasswordInput.parentNode.querySelector('.text-danger');
            if (existingError) {
                existingError.remove();
            }
   
            if (repeatPasswordInput.value.trim() !== passwordInput.value.trim()) {
                repeatPasswordInput.insertAdjacentHTML('afterend', '<span class="text-danger">Passwords do not match</span>');
            }
        };
    
        repeatPasswordInput.addEventListener('input', validatePasswords);
        repeatPasswordInput.addEventListener('blur', validatePasswords);
    });
    


