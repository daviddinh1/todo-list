import './style.css';

class items{
 constructor(title,description,dueDate,priority){
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
 }
}

let example = new items("code","code react","1-20-2020","high");

//later on figure out on how to store the todos

function outputTodos(items){ //does not createTodos but outputs it to our html file
 const inboxContainer = document.querySelector(".inbox-container");
 const todoContainer = document.createElement("div");
 const checkerBtn = document.createElement("button");

 todoContainer.setAttribute("class","todoContainer");

 let todoTitle = items.title;
 let todoDescription = items.description;
 let todoDueDate = items.dueDate;

 //creates div for each item for css styling
 const todoItem1 = document.createElement("div");
 todoItem1.textContent = todoTitle;
 const todoItem2 = document.createElement("div");
 todoItem2.textContent = todoDescription;
 const todoItem3 = document.createElement("div");
 todoItem3.textContent = todoDueDate;

 
 todoContainer.appendChild(checkerBtn);
 todoContainer.appendChild(todoItem1);
 todoContainer.appendChild(todoItem2);
 todoContainer.appendChild(todoItem3);

 inboxContainer.appendChild(todoContainer);
 todoChecker(checkerBtn,todoItem1);
}

function createTodos(){ //uses dialog we made to create todos
 const showCreateTodo = document.querySelector("#showCreateTodo");
 const dialogTodo = document.querySelector("#createTodo");
 const createBtn = document.querySelector("#createBtn");

 showCreateTodo.addEventListener("click",()=>{
  dialogTodo.showModal();
 });

 let valueTitle = dialogTodo.querySelector("#title").value;
 let valueDesc = dialogTodo.querySelector("#description").value;
 let valueDuedate = dialogTodo.querySelector("#dueDate").value;
 let valuePrio = dialogTodo.querySelector("#priority").value;

 createBtn.addEventListener("click", (event) => {
   event.preventDefault(); // We don't want to submit this fake form
  let valueTitle = dialogTodo.querySelector("#title").value;
  let valueDesc = dialogTodo.querySelector("#description").value;
  let valueDuedate = dialogTodo.querySelector("#dueDate").value;
  let valuePrio = dialogTodo.querySelector("#priority").value;
  let newTodo = new items(valueTitle,valueDesc,valueDuedate,valuePrio);
  outputTodos(newTodo);
 });
}

function todoChecker(checkerBtn,todoItem1){
 checkerBtn.addEventListener("click",()=>{
  todoItem1.style.textDecoration = "line-through";
  console.log("its working");
 });
 checkerBtn.addEventListener("click",()=>{
  todoContainer.style.textDecoration = "";
 });
}





outputTodos(example);
createTodos();