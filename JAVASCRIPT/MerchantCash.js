// --------------------------------------MERCHANT PAGE FORM VALIDATION LOGIC-------------------------------------------

let currentStep = 1;
const fundsRequested = document.getElementById("fundsRequested");
const totalMonthlyRevenue = document.getElementById("totalMonthlyRevenue");
const monthlyProcessingVolume = document.getElementById("monthlyProcessingVolume");
const fullName = document.getElementById("fullName");
const companyName = document.getElementById("companyName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const state = document.getElementById("state");


fundsRequested.addEventListener('change', fund);
totalMonthlyRevenue.addEventListener('change',function () {checkSelectValidity(totalMonthlyRevenue)} );
monthlyProcessingVolume.addEventListener('change',function(){checkSelectValidity(monthlyProcessingVolume)});
fullName.addEventListener('change', function(){checkname(fullName)});
companyName.addEventListener('change',function(){ checkname(companyName)});
email.addEventListener('change', checkmail);
phoneNumber.addEventListener('change', checknumber);
state.addEventListener('change', function(){checkSelectValidity(state)});
function fund(){
  let regex = /[0-9]/;
  let result = regex.test(fundsRequested.value);
  if(fundsRequested.value=== ''){
    setError(fundsRequested.nextElementSibling, 'Invalid Fund');
    setInvalidClass(fundsRequested);
    return false;
  }else if(result && fundsRequested.value!=0){
    clearError(fundsRequested.nextElementSibling);
    setValidClass(fundsRequested);
    return true
  }
  else{
    setError(fundsRequested.nextElementSibling, 'Invalid Fund');
    setInvalidClass(fundsRequested);
    return false
  }
}


function checkSelectValidity(selectOption) {
  const selectedOption = selectOption.value;
  if (selectedOption === '') {
    setError(selectOption.nextElementSibling, 'Please select an option');
    setInvalidClass(selectOption);
    return false
  } else {
    clearError(selectOption.nextElementSibling);
    setValidClass(selectOption);
    return true
  }
}


function checkname(element){
  var regex = /^[a-zA-Z ]{2,30}$/;
  let result = regex.test(element.value);
  if(result && element.value!=''){
    clearError(element.nextElementSibling);
    setValidClass(element);
    return true
  }
  else{
    setError(element.nextElementSibling, 'Invalid Name');
    setInvalidClass(element);
    return false
  }
}
function checkmail(){
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let result = regex.test(email.value)
  if(result && email.value!=''){
    clearError(email.nextElementSibling);
    setValidClass(email);
    return true
  }
  else{
    setError(email.nextElementSibling, 'Invalid Email');
    setInvalidClass(email);
    return false
  }
}
function checknumber(){
  let regex = /^\d{10}$/;
  let result = regex.test(phoneNumber.value)
  if(result && phoneNumber.value!=''){
    clearError(phoneNumber.nextElementSibling);
    setValidClass(phoneNumber);
    return true
  }
  else{
    setError(phoneNumber.nextElementSibling, 'Invalid phoneNumber');
    setInvalidClass(phoneNumber);
    return false
  }
}

function showStep(stepNumber) {
  document.getElementById(`part${stepNumber}`).classList.remove('d-none');
  // document.getElementById("successMessage").style.display = "none";
}

function hideStep(stepNumber) {
  document.getElementById(`part${stepNumber}`).classList.add('d-none');
}

function nextStep() {
  const form = document.getElementById("form");
  let isValid = true;
  if (currentStep === 1) {
    isValid = validateStep1();
  } else if (currentStep === 2) {
    isValid = validateStep2();
  }

  if (isValid) {
    // form.classList.remove("was-validated");
    hideStep(currentStep);
    currentStep++;

    if (currentStep === 3) {
      // Show success message after completing all steps
      document.getElementById("successMessage").classList.remove('d-none');
      document.querySelector('button[onclick="nextStep()"]').classList.add("d-none"); // Hide the "NEXT" button
    } else {
      showStep(currentStep);
    }
  } else {
    // form.classList.add("was-validated");
  }
}

function validateStep1() {
  // Validation logic for Step 1 form fields
  let val1 =fund();
  let val2 =checkSelectValidity(totalMonthlyRevenue);
  let val3 =checkSelectValidity(monthlyProcessingVolume);
  
  if (val1 && val2 && val3) {  
    return true;
  }
  return false;
}

function validateStep2() {
  
  // Validation logic for Step 2 form fields
  let name1 = checkname(fullName);
  let cname = checkname(companyName);
  let mail = checkmail();
  let num = checknumber();
  let sta = checkSelectValidity(state)
  if (name1&&cname&& mail && num && sta) {
    return true;
  }

  return false;
}

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
