// Init element target
const form = document.querySelector('form');
const email = document.querySelector('input[type="email"]');

// Add form event
form.addEventListener('submit', function(e) {
  // Condition
  if (email.value === '') {
    showAlert('Please type your email.', 'error');
  } else {
    showAlert('Success!', 'success');
  }
  
  e.preventDefault();
})

function showAlert(message, className) {
   // Create Element
   const div = document.createElement('div');
   // Add class
   div.className = className;
   // Create txt node
   const innerTxt = document.createTextNode(message);
   // Append txt node
   div.appendChild(innerTxt);
   // Select contact div
   const contactDiv = document.querySelector('.contact-card');
   // Insert alert before form
   contactDiv.insertBefore(div, form);
   // remove alert after 3 seconds 
   setTimeout(function() {
     contactDiv.insertBefore(div, form).remove();
   }, 3000)
}
