// --------------------------------------MERCHANT PAGE FORM VALIDATION LOGIC-------------------------------------------

// let form1 = document.querySelector("#form1");
// let next1 = document.querySelector("#form1-next");
// let form2 = document.querySelector("#form2");
// console.log(form1);
// console.log(form2);
// console.log(next1);
// let valid = true
// function nextcont(val){
//     if(val==='part1'){
//         valid =validateStep1();
//         console.log("1")
//         form1.classList.remove('d-block')
//         form1.classList.add('d-none')

//         form2.classList.add('d-block')
//         form2.classList.remove('d-none')

//     }
//     else{
//         valid =validateStep2();
//     }
//     if(valid){

//     }
// }
// function validateStep1(){
//     const fundsRequested = document.getElementById("fundsRequested").value;
//     const totalMonthlyRevenue = document.getElementById("totalMonthlyRevenue").value;
//     const monthlyProcessingVolume = document.getElementById("monthlyProcessingVolume").value;
  
//     if (!fundsRequested || !totalMonthlyRevenue || !monthlyProcessingVolume) {
//       return false;
//     }
  
//     return true;
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