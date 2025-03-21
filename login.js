const togglePassword = document.querySelector('.toggle-password');


const passwordInput = document.querySelector('#password');


togglePassword.addEventListener('click', () => {
    
    const inputType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', inputType);
    
    togglePassword.textContent = inputType === 'password' ? '👁️' : '🙈';
});



