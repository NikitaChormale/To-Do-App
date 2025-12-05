let todolist = [];

const Add = () => {
  const inputElement = document.getElementById("input-todo");
  const value = inputElement.value.trim();

  // ---- Prevent adding empty values ----
  if (value === "") {
    alert("Please enter a task before adding.");
    return;
  }

  todolist.push(value);
  inputElement.value = "";

  localStorage.setItem("todolist", JSON.stringify(todolist));
  renderToDoList();
};

const renderToDoList = () => {
  const toDOLocalStorage = JSON.parse(localStorage.getItem("todolist") || "[]");
  todolist = toDOLocalStorage;

  const listcontainer = document.getElementById("list-container");
  listcontainer.innerHTML = "";

  for (const todoitem of todolist) {
    listcontainer.innerHTML += `
      <div class="todo-item" onclick="deleteToDo('${todoitem}')">
        ${todoitem}
        <img src="cross.jpg" class="delete-icon" />
      </div>
    `;
  }
};

renderToDoList();

const deleteToDo = (task) => {
  const index = todolist.indexOf(task);

  if (index > -1) {
    todolist.splice(index, 1);
    localStorage.setItem("todolist", JSON.stringify(todolist));
    renderToDoList();
  }
};
