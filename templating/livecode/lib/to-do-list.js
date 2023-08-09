const url = "https://dummyjson.com/todos";

const template = document.querySelector("#todoCardTemplate");
const container = document.querySelector("#todosContainer");

const displayTodo = (todo) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector(".to-do-title").textContent = todo.todo;
  clone.querySelector(".form-check-input").checked = todo.completed;
  container.appendChild(clone);
};

const createTodo = (event) => {
  const input = document.querySelector("#input").value;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      todo: input,
      completed: false,
      userId: 1,
    })
  };

  fetch(`${url}/add`, options)
    .then(response => response.json())
    .then(displayTodo);
};

// TODO 1: Dynamically generate a list of to-dos based on `todos` array, and display them
//faire un fetch
//interer sur les todos
//pour chaque todos on recup les key
// on insert dans le dom via le template
fetch(url) 
  .then(response => response.json())
  .then((data) => {
    // garder les 5 premières todos uniquement
    const todos = data.todos.slice(0, 5);

    todos.forEach(displayTodo);
  });


// TODO 2: Create a new todo item (and display it)
//ecouter le click
//recuperer de la data = valeur de l'input
//faire un fetch avec method post
//body avec stringify 
//display la data

const button = document.getElementById("addButton");

button.addEventListener('click', createTodo);
