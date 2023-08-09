
/* Faqs Section functionality started */
function showans(val){
  let ques = document.querySelector("#faqs").children;
  for(i in ques){
    try{
      if(i===val && ques[i].children[1].classList.contains("d-none")){
        ques[i].children[1].classList.remove('d-none')
        ques[i].children[1].classList.add('d-block')
        ques[i].children[0].children[1].classList.add('rotate-90')
      }
      else{
        ques[i].children[1].classList.remove('d-block');
        ques[i].children[1].classList.add('d-none');
        ques[i].children[0].children[1].classList.remove('rotate-90')
      }
    }
    catch(e){
      
    }
  }
}

/* Faqs Section functionality Ended */


//////////////////////////////APPLY NOW FORM AND CONTACT US FORM VALIDATIONS LOGIC //////////////////////////////////////////////////////

const fullName = document.getElementById('name');
const fullNameError = document.getElementById('nameError');
const fullName1 = document.getElementById('name1');
const fullNameError1 = document.getElementById('nameError1');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const phone = document.getElementById('mobile');
const phoneError = document.getElementById('mobileError');
const phone1 = document.getElementById('mobile1');
const phoneError1 = document.getElementById('mobileError1');
const selectOption = document.getElementById('selectOption');
const selectError = document.getElementById('selectError');
const selectOption1 = document.getElementById('selectOption1');
const selectError1 = document.getElementById('selectError1');
const selectOption2 = document.getElementById('selectOption2');
const selectError2 = document.getElementById('selectError2');
const selectOption3 = document.getElementById('selectOption3');
const selectError3 = document.getElementById('selectError3');
console.log(fullName)

form.addEventListener('submit', (e) => {
  if (checkInputs()) {
    alert("Form Submitted")
  }
  else {
    e.preventDefault();
  }
});



function checkInputs() {
  var p1 = [checkFullNameValidity(), checkFullName1Validity(), checkEmailValidity(), checkPhoneValidity(), checkPhone1Validity(), checkSelectValidity(), checkSelect1Validity(), checkSelect2Validity(), checkSelect3Validity()]
  for (i in p1) {
    if (p1[i] == false) {
      return false
    }
  }
  return true;
}
//Checking Full Name validation

fullName.addEventListener('change', checkFullNameValidity);
function checkFullNameValidity() {
  const fullNameValue = fullName.value.trim();
  var regex = /^[a-zA-Z ]{3,30}$/;
  if (regex.test(fullNameValue)) {
    clearError(fullNameError);
    setValidClass(fullName);
    return true
  }
}

// Checking Company Name validation
fullName1.addEventListener('change', checkFullName1Validity);
function checkFullName1Validity() {
  const fullNameValue = fullName1.value.trim();
  var regex = /^[a-zA-Z ]{3,30}$/;
  if (regex.test(fullNameValue)) {
    clearError(fullNameError1);
    setValidClass(fullName1);
    return true
  }
  else {
    setError(fullNameError1, 'Company name is required');
    setInvalidClass(fullName1);
    return false
  }

}





// Checking Email Validation
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
//Secondary Phone Number
phone1.addEventListener('change', checkPhone1Validity);
function checkPhone1Validity() {
  const phoneValue = phone1.value.trim();

  if (phoneValue === '') {
    setError(phoneError1, 'Secondary Phone Number is required');
    setInvalidClass(phone1);
    return false
  } else if (!isValidPhone(phoneValue)) {
    setError(phoneError1, 'Please enter a valid 10-digit Mobile number');
    setInvalidClass(phone1);
    return false
  } else {
    clearError(phoneError1);
    setValidClass(phone1);
    return true
  }
}

function isValidPhone(phone1) {
  return /^\d{10}$/.test(phone1);
}


//Checking Select Option Validation for STATE
selectOption.addEventListener('change', checkSelectValidity);
function checkSelectValidity() {
  const selectedOption = selectOption.value;

  if (selectedOption === '') {
    setError(selectError, 'Please select an option');
    setInvalidClass(selectOption);
    return false
  } else {
    clearError(selectError);
    setValidClass(selectOption);
    return true
  }
}
//Checking Select Option Validation Credit cards Yes / No
selectOption1.addEventListener('change', checkSelect1Validity);
function checkSelect1Validity() {
  const selectedOption = selectOption1.value;

  if (selectedOption === '') {
    setError(selectError1, 'Please select an option');
    setInvalidClass(selectOption1);
    return false
  } else {
    clearError(selectError1);
    setValidClass(selectOption1);
    return true
  }
}
//Checking Select Option Validation Of Credit Card Sales option
selectOption2.addEventListener('change', checkSelect2Validity);
function checkSelect2Validity() {
  const selectedOption = selectOption2.value;

  if (selectedOption === '') {
    setError(selectError2, 'Please select an option');
    setInvalidClass(selectOption2);
    return false
  } else {
    clearError(selectError2);
    setValidClass(selectOption2);
    return true
  }
}
//Checking Select Option Validation Of Time in Business Option
selectOption3.addEventListener('change', checkSelect3Validity);
function checkSelect3Validity() {
  const selectedOption = selectOption3.value;

  if (selectedOption === '') {
    setError(selectError3, 'Please select an option');
    setInvalidClass(selectOption3);
    return false
  } else {
    clearError(selectError3);
    setValidClass(selectOption3);
    return true
  }
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


// --------------------------------------MERCHANT PAGE FORM VALIDATION LOGIC-------------------------------------------

let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
console.log(form1+"\t"+form2);
// form1.addEventListener(onsubmit,nextfunc)
// function nextfunc(){
//   console.log("New")
// }







let currentStep=1;

function showStep(stepNumber) {
  document.getElementById(`part${stepNumber}`).style.display = "flex";
  document.getElementById("successMessage").style.display = "none";
}

function hideStep(stepNumber) {
  document.getElementById(`part${stepNumber}`).style.display = "none";
}

function nextStep() {
  const form = document.getElementById("form");
  let isValid = true;
  console.log(`part${currentStep}`)
  if (currentStep === 1) {
    isValid = validateStep1();
  } else if (currentStep === 2) {
    isValid = validateStep2();
  }

  if (isValid) {
    form.classList.remove("was-validated");
    hideStep(currentStep);
    currentStep++;

    if (currentStep === 3) {
      // Show success message after completing all steps
      document.getElementById("successMessage").style.display = "block";
      document.querySelector('button[onclick="nextStep()"]').style.display = "none"; // Hide the "NEXT" button
    } else {
      showStep(currentStep);
    }
  } else {
    form.classList.add("was-validated");
  }
}

function validateStep1() {
  // Validation logic for Step 1 form fields
  const fundsRequested = document.getElementById("fundsRequested").value;
  const totalMonthlyRevenue = document.getElementById("totalMonthlyRevenue").value;
  const monthlyProcessingVolume = document.getElementById("monthlyProcessingVolume").value;

  if (!fundsRequested || !totalMonthlyRevenue || !monthlyProcessingVolume) {
    return false;
  }

  return true;
}

function validateStep2() {
  // Validation logic for Step 2 form fields
  const fullName = document.getElementById("fullName").value;
  const companyName = document.getElementById("companyName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const state = document.getElementById("state").value;

  if (!fullName || !companyName || !email || !phoneNumber || !state) {
    return false;
  }

  return true;
}