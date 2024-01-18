document.getElementById("todo-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let todoInput = document.getElementById("todo-input");
  let todoList = document.getElementById("todo-list");

  if (todoInput.value.trim() === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.textContent = todoInput.value.trim();
  todoList.appendChild(li);

  todoInput.value = "";
});
