$(document).ready(() => {
  // Navigation
  // If a link has a dropdown, add sub menu toggle.
  $('nav ul li a:not(:only-child)').click(function (e) {
    $(this).siblings('.nav-dropdown').toggle();
    // Close one dropdown when selecting another
    $('.nav-dropdown').not($(this).siblings()).hide();
    e.stopPropagation();
  });
  // Clicking away from dropdown will remove the dropdown class
  $('html').click(() => {
    $('.nav-dropdown').hide();
  });
  // Toggle open and close nav styles on click
  $('#nav-toggle').click(() => {
    $('nav ul').slideToggle();
  });
  // Hamburger to X toggle
  $('#nav-toggle').on('click', function () {
    this.classList.toggle('active');
  });

  // Get the signupModal

  // Get the button that opens the modal
  // Get signupModal
  const signUpModal = document.getElementById('signupModal');
  // Get the signinModal
  const signInModal = document.getElementById('signinModal');
  // Get the catererSigninModal
  const catererSigninModal = document.getElementById('catererSigninModal');

  // Get Meal Modal


  // Get the <span> element that closes the modal

  // Get the button that opens the modal
  const signInBtn = document.getElementById('signinBtn');
  const signUpBtn = document.getElementById('signupBtn');
  const catererSigninBtn = document.getElementById('catererSigninBtn');

  if (signUpBtn != null || signInBtn != null || catererSigninBtn) {
    const signUpSpan = document.getElementById('signupSpan');
    const signInSpan = document.getElementById('signinSpan');
    const catererSignInSpan = document.getElementById('catererSigninSpan');

    // Get the <span> element that closes the modal

    const span = document.getElementsByClassName('close')[0];

    // When the user clicks the button, open the modal
    signUpBtn.onclick = function () {
      signUpModal.style.display = 'block';
    };

    // When the user clicks the button, open the modal
    signInBtn.onclick = function () {
      signInModal.style.display = 'block';
    };

    // When the user clicks the button, open the modal
    catererSigninBtn.onclick = function () {
      catererSigninModal.style.display = 'block';
    };
    if (signUpSpan != null || signInSpan != null || catererSignInSpan != null) {
      // When the user clicks on <span> (x), close the modal
      signUpSpan.onclick = function () {
        signUpModal.style.display = 'none';
      };
      signInSpan.onclick = function () {
        signInModal.style.display = 'none';
      };
      catererSigninSpan.onclick = function () {
        catererSigninModal.style.display = 'none';
      };
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == signUpModal || event.target == signInModal || event.target == catererSigninModal) {
        signUpModal.style.display = 'none';
        signInModal.style.display = 'none';
        catererSigninModal.style.display = 'none';
      }
    };
  }
}); // end DOM ready

function order() { // Get the signinModal
  const signInModal = document.getElementById('signinModal');
  signInModal.style.display = 'block';
}

function newMeal() {
  newMealModal;
  var newMealModal = document.getElementById('newMealModal');
  newMealModal.style.display = 'block';
}

