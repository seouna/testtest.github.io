const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
//const toDoInput = toDoForm.getElementById("input");

const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY ="todos";

let toDos =[]; // todo 저장하기위한 // 전에잇는값이 저장되어야하기때문에 let


function saveToDos(){

  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
 
} //스토리지에 입력한 값 배열로 저장 
// JSON.parse 는 문자열("[1,2,3,4]"을 [각각의 배열([1,2,3,4]로 만들어줌] js의객체로 변환 객체로변환하게되면 각속성에 접근이 가능해진다.
// JSON.stringifty 는 입력된값을 (문자의상태로 )배열안에 그냥 집어넣는) // js객체를 json문자열로 변환 접근은 불가// 데이터를 외부에 전송하기 용이 


function deleteToDo(event){
  const li = event.target.parentElement; //클릭한 X의 target 의 부모를 li라고..
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); //li의 id는 string이엿다.
  saveToDos(); //변경된걸스토리지에 다시 저장

}


function paintToDo(newTodo){

  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click",deleteToDo);
  li.appendChild(span); //li안에 span을만들어줌
  li.appendChild(button); //li안에 button을 만들어줌
  span.innerText = newTodo.text; //span안에 newTodo 적어줌

  toDoList.appendChild(li); //todolist 에 li를 추가함 (li안에는 span button이들어가있음)


}

function handleToDoSumbit(e){

  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value ="";
  //console.log(newTodo, toDoInput.value);
  const newTodoObj = { 
    text : newTodo , 
    id : Date.now(),
  };

  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();

}



toDoForm.addEventListener("submit",handleToDoSumbit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //이전에 있던 값들을 모두 저장하기위해
  parsedToDos.forEach(paintToDo);
   //item을(배열에들어가있는) 제공해줌.. //forEach 함수는 paintToDo를 parsedToDos 배열의 요소마다 실행시킴.

}


//필터 . 같으면 삭제되게 ( !==  이게 false 이면 삭제( false란말은 같단소리 !== 다른지를 물어보고있기때문에))