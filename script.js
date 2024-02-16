function addTodo() {
  var todoInput = document.getElementById("todoInput");
  var todoList = document.getElementById("todoList");

  if (todoInput.value !== "") {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(todoInput.value));
    todoList.appendChild(li);
    todoInput.value = "";
  } else {
    alert("Please enter a to-do");
  }
}
