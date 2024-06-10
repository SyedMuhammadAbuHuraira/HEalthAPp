const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

// Dummy user credentials
const dummyUsername = 'dummyuser';
const dummyPassword = 'dummypassword';

// Function to handle sign-in form submission
function handleSignIn(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const enteredUsername = document.querySelector('.sign-in-form input[type="text"]').value;
  const enteredPassword = document.querySelector('.sign-in-form input[type="password"]').value;

  // Check if entered credentials match dummy data
  if (enteredUsername === dummyUsername && enteredPassword === dummyPassword) {
    // Redirect to the dashboard
    window.location.href = '/dashboard'; // Update this with your actual dashboard URL
  } else {
    alert('Invalid username or password'); // Show error message
  }
}

// Add event listener to the sign-in form
const signInForm = document.querySelector('.sign-in-form');
signInForm.addEventListener('submit', handleSignIn);
