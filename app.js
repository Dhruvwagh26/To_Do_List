const textInputField = document.querySelector("#text-input-field");
const addButton = document.querySelector("#add-button");
const todosContainer = document.querySelector(".todos-container");

addButton.addEventListener("click", () => {
  if (textInputField.value.trim().length == "") return;

  // creating div add class todo-item-container
  const todoItemContainer = document.createElement("div");
  todoItemContainer.classList.add("todo-item-container");

  todosContainer.appendChild(todoItemContainer);

  // creating p element add id = todo-text
  const todoText = document.createElement("p");
  todoText.id = "todo-text";
  todoText.innerText = textInputField.value;
  todoItemContainer.appendChild(todoText);

  // adding double click to todoText
  todoText.addEventListener("dblclick", () => {
    todoText.classList.add("line-through");
    editButton.setAttribute("disabled", "disabled");
  });

  // creating button add id= edit=button
  const editButton = document.createElement("button");
  editButton.id = "edit-button";
  // creating img add to edit button
  const editImage = document.createElement("img");
  editImage.src = "edit.svg";
  editButton.appendChild(editImage);
  todoItemContainer.appendChild(editButton);
  //  adding click event to edit-button here
  editButton.addEventListener("click", () => {
    textInputField.value = todoText.innerText;
    const parent = editButton.parentElement;
    parent.parentElement.removeChild(parent);
  });

  // creating buton and add id = deleteButton
  const deleteButton = document.createElement("button");
  deleteButton.id = "delete-button";
  // creating img add it to delete-button
  const deleteImage = document.createElement("img");
  deleteImage.src = "delete.svg";
  deleteButton.appendChild(deleteImage);
  todoItemContainer.appendChild(deleteButton);

  // adding click event for deleteButton
  deleteButton.addEventListener("click", () => {
    const parent = deleteButton.parentElement;
    parent.parentElement.removeChild(parent);
  });

  textInputField.value = "";
});
