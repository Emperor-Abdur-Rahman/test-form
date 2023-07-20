const form = document.getElementById('signupForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const fullNameError = document.getElementById('fullNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function (event) {
  let isValid = true;
  fullNameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';

  if (!fullNameInput.value) {
    fullNameError.textContent = 'Please enter your full name.';
    isValid = false;
  }

  if (!emailInput.value) {
    emailError.textContent = 'Please enter your email.';
    isValid = false;
  }

  if (!passwordInput.value) {
    passwordError.textContent = 'Please enter your password.';
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault(); 
  }
});