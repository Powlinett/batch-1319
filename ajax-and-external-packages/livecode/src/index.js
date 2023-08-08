console.log("Connected")

// AFFICHER LES VOITURES
// Bonne URL 
// fetchet parser
// iterer sur le tableau donné
// inserer une fois les clé obtenu dans l'html

const garageName = 'garage-de-dédé';
const url = `https://wagon-garage-api.herokuapp.com/${garageName}/cars`;

const list = document.querySelector(".cars-list");

// Fonction qui affiche une voiture dans le DOM
const displayCar = (car) => {
  const brand = car.brand;
  const model = car.model;
  const owner = car.owner;
  const plate = car.plate;

  const carCard = `
    <div class="car">
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/${brand} ${model}" />
      </div>
      <div class="car-info">
        <h4>${brand} ${model}</h4>
        <p><strong>Owner:</strong> ${owner}</p>
        <p><strong>Plate:</strong> ${plate}</p>
      </div>
    </div>`;
  list.insertAdjacentHTML("beforeend", carCard);
};


// CREER UNE VOITURE

// recuperer le formulaire et ecouter le formulaire 
// lire les valeurs des input 
// fetch avec une méthode post vérifier l'URL
// insérer dans l'html 

// Fonction qui extrait les values des inputs du form
const extractCarData = () => {
  const brandValue = document.querySelector('input[name="brand"]').value
  const modelValue = document.querySelector('input[name="model"]').value
  const ownerValue = document.querySelector('input[name="owner"]').value
  const plateValue = document.querySelector('input[name="plate"]').value

  const carData = {
    brand: brandValue,
    model: modelValue,
    owner: ownerValue,
    plate: plateValue
  }

  return carData;
};

// Fonction qui permet de créer une voiture dans l'API
const createCar = (carData) => {
  fetch(url, {
    method: 'POST',
    headers: {
    'Content-Type':"application/json"
    },
    body: JSON.stringify(carData)
  })
    .then(response => response.json())
    .then((data) => {
        displayCar(data);
    });
};

// Au chargement de la page, je récupère toutes les voitures du garage
fetch(url)
  .then(response => response.json())
  .then((data) => {
      data.forEach(displayCar);
      // equivalent to === data.forEach((car) => displayCar(car));
  });


// Au submit du form, je crée une voiture dans mon garage
const form = document.querySelector(".car-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const carData = extractCarData();
  createCar(carData);
});


