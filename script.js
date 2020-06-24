function renderEditor(){
 let inputE1 =  document.querySelector("#default-todo-panel .todo-editor > input");
 inputE1.onchange = (e) => {
     console.log("text,",e.target.value);
     //console.log("input change:",e);
 };
}

renderEditor();