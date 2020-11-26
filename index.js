let ToDoList=[]
function AddTask() {
  let inputValue = document.getElementById("text-input").value;
  inputValue = inputValue.trim();
  if (inputValue.length >= 1) {
    ToDoList.push({title: inputValue, id: Date.now(), done:false})
  }
  read()
  inputClear()
}

function read(){
  clear();
  ToDoList.map((item)=>{
    addTodoBox(item.title,item.id,item.done)
  })
}

function clear(){
  let container = document.getElementById('todo-box-container')
  container.innerHTML=""
}

function inputClear(){
  let container = document.getElementById('text-input')
  container.value=""
}

// console.log(ToDoList)
function addTodoBox(title, id, done) {
  let container = document.getElementById("todo-box-container");
  container.innerHTML += `
  <div class="todo-box-container pb-2">
     <div
       class=" border border-dark todo-box d-flex justify-content-between align-items-center px-2"
     >
     <input type="checkbox" onclick="toggleDone(${id})" ${done ? 'checked':''}>
       <span onclick="toggleDone(${id})" class="${done && "done-task"}"> ${title} </span>
       <i onclick="deleteTask(${id})" class="material-icons">delete</i>
     </div>
   </div>`;
}

function done(id){
  let task = ToDoList.find((i)=> i.id===id)
  task.done = true
  read()
}

function toggleDone(id){
  let task = ToDoList.find((i)=> i.id===id)
  task.done = !task.done
  read()
}

function deleteTask(id){
  ToDoList = ToDoList.filter((i)=>i.id !== id)
  read()
}