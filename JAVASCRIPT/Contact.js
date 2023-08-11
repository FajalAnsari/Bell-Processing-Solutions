const fullName = document.getElementById('name');
const fullNameError = document.getElementById('nameError');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const phone = document.getElementById('mobile');
const phoneError = document.getElementById('mobileError');
const formc = document.getElementById('Contact-form');
console.log(fullNameError)
console.log(emailError)
console.log(phoneError);
console.log(formc);
formc.addEventListener('submit', (e) => {
    if (checkInputs()) {
      alert("Thank You! \n Our Team will get back to you within 24 hours")
    }
    else {
      e.preventDefault();
    }
  });
  
  
  
  function checkInputs() {
    var p1 = [checkFullNameValidity(), checkEmailValidity(), checkPhoneValidity()]
    for (i in p1) {
      if (p1[i] == false) {
        return false
      }
    }
    return true;
  }
  fullName.addEventListener('change', checkFullNameValidity);
function checkFullNameValidity() {
  const fullNameValue = fullName.value.trim();
  var regex = /^[a-zA-Z ]{3,30}$/;
  if (regex.test(fullNameValue)) {
    clearError(fullNameError);
    setValidClass(fullName);
    return true
  }else{
    setError(fullNameError, 'Name is required');
    setInvalidClass(fullName);
    return false
  }
}
email.addEventListener('change', checkEmailValidity);
function checkEmailValidity() {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setError(emailError, 'Email is required');
    setInvalidClass(email);
    return false
  } else if (!isValidEmail(emailValue)) {
    setError(emailError, 'Please enter a valid email address');
    setInvalidClass(email);
    return false
  } else {
    clearError(emailError);
    setValidClass(email);
    return true
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}



//Checking Mobile Number Validation of both Primary and Secondary Number

//Primary Phone Number
phone.addEventListener('change', checkPhoneValidity);
function checkPhoneValidity() {
  const phoneValue = phone.value.trim();

  if (phoneValue === '') {
    setError(phoneError, 'Primary Phone Number is required');
    setInvalidClass(phone);
    return false
  } else if (!isValidPhone(phoneValue)) {
    setError(phoneError, 'Please enter a valid 10-digit Mobile number');
    setInvalidClass(phone);
    return false
  } else {
    clearError(phoneError);
    setValidClass(phone);
    return true
  }
}

function isValidPhone(phone1) {
    return /^\d{10}$/.test(phone1);
  }

// Error And Success Functions to set Invalid and Valid classes  
function setError(element, message) {
    element.textContent = message;
    element.classList.add('text-danger')
  }
  
  function clearError(element) {
    element.textContent = '';
  }
  
  function setInvalidClass(input) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
  }
  
  function setValidClass(input) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  }