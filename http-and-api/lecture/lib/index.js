// TODO - Fetch an activity with the Bored API - Let's psuedocode!
const url = 'https://www.boredapi.com/api/activity/'

const button = document.querySelector(".btn-warning");

const updateButtonText = (data) => {
  button.innerText = data.activity;
  button.setAttribute("disabled", "");
};

const getActivity = () => {
  fetch(url)
    .then(response => response.json())
    .then(updateButtonText);
};

button.addEventListener("click", getActivity);
