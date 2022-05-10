const todoBtn = document.querySelector('.button-add');
const content = document.querySelector(".content");
const todoForm = document.querySelector('.form-todo')
addEventListener('submit', showMessage);




function showMessage(event){
    event.preventDefault();
    
    let todo = document.querySelector('.input-box').value;
    
    let li = document.createElement('div');
    li.classList.add('todo-list');

    let text = document.createElement('span');
    text.innerHTML = todo
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
            li.remove();
        })
        
    li.appendChild(icons);

    content.append(li);
    todoForm.reset();
    localStorage.setItem('list', content)
    console.log(content)
    console.log(localStorage.getItem('list'))
}

function addTodo() {

}

function deleteTodo() {
    
    
}

