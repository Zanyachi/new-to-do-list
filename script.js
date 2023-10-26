// Variables

const ul = document.querySelector('.todo-list');
const input = document.querySelector('#text');
const addBtn = document.querySelector('#add-btn');
const listCont = document.querySelector('.list-container');

// Event Listeners

addBtn.addEventListener('click', function(){
    addBtn.preventDefault
   addFun()
});

// functions

function addFun(){
   

    if (input.value === ''){
        event.preventDefault();
    }
    else{

        // Creating and appending elements

        const todoDiv = document.createElement('div');
        const li = document.createElement('li');
        ul.append(todoDiv);
        todoDiv.classList.add('todo');
        todoDiv.append('li');
        li.setAttribute('class', 'list-items');
        todoDiv.innerText = input.value;
        let firstClick = true;

        // creating check and delete buttons
            
        let checkBtn = document.createElement('button');
        todoDiv.appendChild(checkBtn);
        checkBtn.innerText = '+'
        checkBtn.setAttribute('class', 'checkBtn');
        checkBtn.style.backgroundColor = 'yellowgreen';
        checkBtn.addEventListener('click', function(){

           if (firstClick){
            todoDiv.style.textDecoration = 'line-through';
            todoDiv.style.fontStyle = 'italic';
           }
           else{
            todoDiv.style.textDecoration = 'none';
            todoDiv.style.fontStyle = 'normal';
           }

           firstClick = !firstClick;
        })

        let removeBtn = document.createElement('button');
        todoDiv.appendChild(removeBtn);
        removeBtn.innerText = '-';
        removeBtn.setAttribute('class', 'removeBtn');
        removeBtn.style.backgroundColor = 'crimson';
        removeBtn.addEventListener('click', function(){
            todoDiv.classList.add('remove');
            todoDiv.addEventListener('transitionend', function(){
                ul.removeChild(todoDiv)
            })
        })

        input.value = '';
    }

}


console.log(listCont)