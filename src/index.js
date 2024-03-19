import './style.css';

const toDo = []

class data{ //this is just used for the data how to dynamically create?
 constructor(title,desc,dueDate,priority){
   this.title = title;
   this.desc = desc;
   this.dueDate = dueDate;
   this.priority = priority;
 }
}

let todo1 = new data("code","code react","1-20-2024","high");

const container = document.querySelector(".container");

//add this to a function that appends these items
function createTodo(obj){ //later on add functionality to add id per each todo created
 let check = document.createElement("button");
 let toDoContainer = document.createElement("div");
 let todoTitle = document.createElement("div"); 
 let todoDesc = document.createElement("div");
 let todoDate = document.createElement("div");
 
 todoTitle.textContent = obj.title;
 todoDesc.textContent = obj.desc;
 todoDate.textContent = obj.dueDate;

 check.setAttribute("id","checker");
 toDoContainer.setAttribute("id","todoContainer");

 todoTitle.setAttribute("class","todoItems");
 todoDesc.setAttribute("class","todoItems");
 todoDate.setAttribute("class","todoItems");


 toDoContainer.appendChild(check);

 toDoContainer.appendChild(todoTitle);
 toDoContainer.appendChild(todoDesc);
 toDoContainer.appendChild(todoDate);

 container.appendChild(toDoContainer);

 checkClicked(check,toDoContainer);
}

function checkClicked(btn, container){
 btn.addEventListener('click',()=>{
  container.style.textDecoration = 'line-through';
 });
}

createTodo(todo1);