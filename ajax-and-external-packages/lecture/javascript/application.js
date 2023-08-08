import Swal from 'sweetalert2'

// PSEUDO CODE

// sélectionner le form
// eventlistener sur le submit
// récupérer les valeurs des inputs
// fetch reqres API


// CODE

const url = "https://reqres.in/api/register";

const form = document.querySelector('#form');

// Listen form submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // get inputs values
  const email = form.querySelector('#email').value;
  const password = form.querySelector('#password').value;

  // Send email/password to reqres API
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email, password: password }),
  })
  .then((response) => {
    // Use Swal (sweetalert2) to display notifications
    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Well done!',
        text: 'Successfully registered',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error occured',
        text: 'Verify email or password',
      });
    }
  });
});
