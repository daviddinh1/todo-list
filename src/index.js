import './style.css';
import {project} from "./project.js";

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
 const deleteBtn = document.createElement("button");

 checkerBtn.setAttribute("id","checkerBtn");
 todoContainer.setAttribute("class","todoContainer");
 deleteBtn.setAttribute("id","checkerBtn");

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
 todoContainer.appendChild(deleteBtn);

 inboxContainer.appendChild(todoContainer);
 todoChecker(checkerBtn,todoItem1,todoItem2,todoItem3);
 deleteTodo(deleteBtn,todoContainer);
 switchProject();

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

function todoChecker(checkerBtn,todoItem1,todoItem2,todoItem3){
 checkerBtn.addEventListener("click",()=>{
  if(todoItem1.style.textDecoration === ""){
   todoItem1.style.textDecoration = "line-through";
   todoItem2.style.textDecoration = "line-through";
   todoItem3.style.textDecoration = "line-through";
   console.log("its working");
  }
  else{
    todoItem1.style.textDecoration = "";
    todoItem2.style.textDecoration = "";
    todoItem3.style.textDecoration = "";
  }
 });
}

function deleteTodo(deleteBtn,todoContainer){
 deleteBtn.addEventListener("click",()=>{
  todoContainer.remove();
 });
}

let i = 0;

function createProject(){
 const projectsContainer = document.querySelector(".projects");
 const btnProjects = document.querySelector("#btnProjects");
 const showProjectsDialog = document.querySelector("#createProject");

 btnProjects.addEventListener("click",()=>{
  showProjectsDialog.showModal();
 })



 const createProjectBtn = showProjectsDialog.querySelector("#createProjectBtn");
 createProjectBtn.addEventListener("click",(event)=>{
  event.preventDefault(); 
  let projectTitle = showProjectsDialog.querySelector("#projectTitle").value;
  console.log(projectTitle);
  let projectDiv = document.createElement("button");
  projectDiv.textContent = projectTitle;
  projectDiv.setAttribute("class","projectDiv");
  projectsContainer.append(projectDiv);
  i++;
  project(i); //creates todo page
 });
}


function switchProject() {
  const container = document.querySelector('.container'); // Parent container where projectDivs will be added

  // Listen for click events on the container
  container.addEventListener('click', (event) => {
    // Check if the clicked element is a projectDiv
    if (event.target.classList.contains('projectDiv')) {
      const index = Array.from(container.getElementsByClassName('projectDiv')).indexOf(event.target);
      const testDivs = document.getElementsByClassName('inbox-container');
      
      // Hide all testDivs initially
      for (let div of testDivs) {
        div.style.display = 'none';
      }

      // Display only the corresponding testDiv
      if (testDivs[index]) {
        testDivs[index].style.display = 'block';
      }
      console.log(index + ' its clicking');
    }
  });
}





outputTodos(example);
createTodos();
createProject();

