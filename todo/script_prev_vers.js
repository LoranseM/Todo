const todoBtn = document.querySelector('.button-add');
const content = document.querySelector(".content");
const todoForm = document.querySelector('.form-todo')
const todo = document.querySelector('.input-box');
addEventListener('submit', showMessage);


    let itemArray;
    if (localStorage.getItem('list')){
        itemArray = JSON.parse(localStorage.getItem('list')) 
    } else {
        itemArray = [];
    }

    localStorage.setItem('list', JSON.stringify(itemArray));
    const data = JSON.parse(localStorage.getItem('list'));
    data.forEach(item => {
        createDiv(item)
    });


function createDiv(inputValue) {
    let li = document.createElement('div');
        li.classList.add('todo-list');

        let text = document.createElement('span');
        text.innerHTML = inputValue;
        text.className = 'text';
        li.appendChild(text);
        
    //fa-solid fa-check
        let deleteTodo = document.createElement('div');
        deleteTodo.className = 'icon-delete';
        deleteTodo.innerHTML = '<div class="fa-solid fa-trash"></div>';

        let completeTodo = document.createElement('div');
        completeTodo.className = 'icon-check';
        completeTodo.innerHTML = '<div class="fa-solid fa-check"></div>';

        let icons = document.createElement('div');
        icons.className = 'icons';

        icons.appendChild(completeTodo);
        completeTodo.addEventListener('click', function() {
                text.classList.toggle('completed');
                        
                li.classList.toggle('completed-background')
            })
            

        icons.appendChild(deleteTodo);
        deleteTodo.addEventListener('click', function() {
                localStorage.removeItem('list', itemArray);
                li.remove();
            })
            
        li.appendChild(icons);

        content.append(li);
}


function showMessage(event){
    event.preventDefault();
    itemArray.push(todo.value);
    localStorage.setItem('list', JSON.stringify(itemArray));
    
    createDiv(todo.value);
    todoForm.reset();
}

function addTodo() {

}

function deleteTodo() {
    
    
}

