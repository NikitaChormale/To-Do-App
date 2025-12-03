let todolist=[];

       
       const  Add = () => {
            const inputElenment=document.getElementById("input-todo");
            todolist.push(inputElenment.value);
            inputElenment.value= "";
            localStorage.setItem("todolist",JSON.stringify(todolist));

            randortodolist();

        };
        const randortodolist= () => {
            const toDOLocalStorage = JSON.parse(
                localStorage.getItem("todolist") || "[]"
            );

            todolist = toDOLocalStorage;
            

           const listcontainer=document.getElementById(`list-container`);
           listcontainer.innerHTML="";

           for(const todoitem of todolist)
           {
            listcontainer.innerHTML += `<div class="todo-item" onclick="deleteToDo('${todoitem}')" >
                ${todoitem }
                <img src = " cross.jpg" class = delete-icon />
                </div>

                `}


        };
        randortodolist();
        const deleteToDo = (task) => {

            const indesOfItem = todolist.indexOf(task);
             
            if (indesOfItem > -1){
                todolist.splice(indesOfItem, 1);

                localStorage.setItem("todolist" , JSON.stringify(todolist));
                
                 randortodolist();
            }
        }
        
        