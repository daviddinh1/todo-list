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

 

 todoContainer.appendChild(todoItem1);
 todoContainer.appendChild(todoItem2);
 todoContainer.appendChild(todoItem3);

 inboxContainer.appendChild(todoContainer);
}

function createTodos(){

}

outputTodos(example);