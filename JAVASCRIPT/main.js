

$(document).ready(function () {
  $(".dropdown").on("show.bs.dropdown", function () {
    $(this).find(".dropdown-menu").first().stop(true, true).slideDown(200);
  });

  $(".dropdown").on("hide.bs.dropdown", function () {
    $(this).find(".dropdown-menu").first().stop(true, true).slideUp(200);
  });
});













document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = new bootstrap.Carousel(document.getElementById('carousel'), 
    {
      interval: 3000, 
      wrap: true // Set to false if you want the carousel to stop at the last slide
    });
  });

//Typing animation for the sliders text
var i = 0;
var txt = 'A Leader in the Credit Card Processing Industry ';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName("typed").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
//Typing animation for the sliders text


/* View more and view less button functionality for cards display*/
function toggleCards() {
  var extraCards = document.getElementsByClassName('extra');
  var viewMoreButton = document.getElementById('view-more');
  
  for (var i = 0; i < extraCards.length; i++) {
      extraCards[i].classList.toggle('d-none');
  }
  
  if (viewMoreButton.innerText === 'View More') {
      viewMoreButton.innerText = 'View Less ';
  } else {
      viewMoreButton.innerText = 'View More ';
  }
}
/* View more and view less button functionality for cards display ENDED*/



/* Faqs Section functionality started */ 
function toggleAnswer(questionId) {
  var answer = document.getElementById('answer' + questionId);
  var arrow = document.querySelector('.question:nth-child(' + questionId + ') .arrow');
  
  if (answer.style.display === 'none') {
      answer.style.display = 'block';
      arrow.style.transform = 'rotate(-135deg)';
  } else {
      answer.style.display = 'none';
      arrow.style.transform = 'rotate(-45deg)';
  }
}

/* Faqs Section functionality Ended */ 




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


form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
    checkFullNameValidity()
    checkFullName1Validity()
    checkEmailValidity()
    checkPhoneValidity()
    checkPhone1Validity()
    checkSelectValidity()
    checkSelect1Validity()
    checkSelect2Validity()
    checkSelect3Validity()



    //Checking Full Name validation
    fullName.addEventListener('blur', checkFullNameValidity);
    function checkFullNameValidity() {
      const fullNameValue = fullName.value.trim();
    
      if (fullNameValue === '') {
        setError(fullNameError, 'Full name is required');
        setInvalidClass(fullName);
      } else if (/\d/.test(fullNameValue)) {
        setError(fullNameError, 'Full name should not contain numbers');
        setInvalidClass(fullName);
      } else {
        clearError(fullNameError);
        setValidClass(fullName);
      }
    }
    //Checking Company Name validation
    fullName1.addEventListener('blur', checkFullName1Validity);
    function checkFullName1Validity() {
      const fullNameValue = fullName1.value.trim();
    
      if (fullNameValue === '') {
        setError(fullNameError1, 'Company name is required');
        setInvalidClass(fullName1);
      } else if (/\d/.test(fullNameValue)) {
        setError(fullNameError1, 'Full name should not contain numbers');
        setInvalidClass(fullName1);
      } else {
        clearError(fullNameError1);
        setValidClass(fullName1);
      }
    }
    

    //Checking Email Validation
    email.addEventListener('blur', checkEmailValidity);
    function checkEmailValidity() {
      const emailValue = email.value.trim();
    
      if (emailValue === '') {
        setError(emailError, 'Email is required');
        setInvalidClass(email);
      } else if (!isValidEmail(emailValue)) {
        setError(emailError, 'Please enter a valid email address');
        setInvalidClass(email);
      } else {
        clearError(emailError);
        setValidClass(email);
      }
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }



   //Checking Mobile Number Validation of both Primary and Secondary Number

   //Primary Phone Number
    phone.addEventListener('blur', checkPhoneValidity);
    function checkPhoneValidity() {
      const phoneValue = phone.value.trim();
    
      if (phoneValue === '') {
        setError(phoneError, 'Primary Phone Number is required');
        setInvalidClass(phone);
      } else if (!isValidPhone(phoneValue)) {
        setError(phoneError, 'Please enter a valid 10-digit Mobile number');
        setInvalidClass(phone);
      } else {
        clearError(phoneError);
        setValidClass(phone);
      }
    }

    function isValidPhone(phone) {
      return /^\d{10}$/.test(phone);
    }



    //Secondary Phone Number
    phone1.addEventListener('blur', checkPhone1Validity);
    function checkPhone1Validity() {
      const phoneValue = phone1.value.trim();
    
      if (phoneValue === '') {
        setError(phoneError1, 'Secondary Phone Number is required');
        setInvalidClass(phone1);
      } else if (!isValidPhone(phoneValue)) {
        setError(phoneError1, 'Please enter a valid 10-digit Mobile number');
        setInvalidClass(phone1);
      } else {
        clearError(phoneError1);
        setValidClass(phone1);
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
      } else {
        clearError(selectError);
        setValidClass(selectOption);
      }
    }
    //Checking Select Option Validation Credit cards Yes / No
    selectOption1.addEventListener('change', checkSelect1Validity);
    function checkSelect1Validity() {
      const selectedOption = selectOption1.value;
    
      if (selectedOption === '') {
        setError(selectError1, 'Please select an option');
        setInvalidClass(selectOption1);
      } else {
        clearError(selectError1);
        setValidClass(selectOption1);
      }
    }
    //Checking Select Option Validation Of Credit Card Sales option
    selectOption2.addEventListener('change', checkSelect2Validity);
    function checkSelect2Validity() {
      const selectedOption = selectOption2.value;
    
      if (selectedOption === '') {
        setError(selectError2, 'Please select an option');
        setInvalidClass(selectOption2);
      } else {
        clearError(selectError2);
        setValidClass(selectOption2);
      }
    }
    //Checking Select Option Validation Of Time in Business Option
    selectOption3.addEventListener('change', checkSelect3Validity);
    function checkSelect3Validity() {
      const selectedOption = selectOption3.value;
    
      if (selectedOption === '') {
        setError(selectError3, 'Please select an option');
        setInvalidClass(selectOption3);
      } else {
        clearError(selectError3);
        setValidClass(selectOption3);
      }
    }
    
    //Error And Success Functions to set Invalid and Valid classes  
    function setError(element, message) {
      element.textContent = message;
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
}



var isFormCompleted = false;

  // Function to show the next part of the form
  function showNextPart() {
    $('#part1').hide();
    $('#part2').show();
    // Hide the "NEXT" button for the first part and show the "NEXT" button for the second part
    $('.next-button-part1').hide();
    $('.next-button-part2').show();
  }

  // Function to show the success message and hide the form
  function showSuccessMessage() {
    $('#part2').hide();
    $('#successMessage').show();
    // Hide both "NEXT" buttons and mark the form as completed
    $('.next-button-part1, .next-button-part2').hide();
    isFormCompleted = true;
  }

  // Click event handler for the "NEXT" button for the first part
  $('.applynowsubmit').on('click', '.next-button-part1', function (e) {
    e.preventDefault();
    // If the first part is visible, show the second part
    showNextPart();
  });

  // Click event handler for the "NEXT" button for the second part
  $('.applynowsubmit').on('click', '.next-button-part2', function (e) {
    e.preventDefault();
    // If the second part is visible, show the success message
    showSuccessMessage();
  });

  // Add a check when the page loads to hide the "NEXT" buttons if the form is already completed
  $(document).ready(function() {
    if (isFormCompleted) {
      $('.next-button-part1, .next-button-part2').hide();
    }
  });

