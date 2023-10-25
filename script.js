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
       
        const li = document.createElement('li');
        ul.append(li);
        li.setAttribute('class', 'list-items');
        li.innerText = input.value;
            
        let checkBtn = document.createElement('button');
        li.appendChild(checkBtn);
        checkBtn.innerText = '+'
        checkBtn.setAttribute('class', 'checkBtn');
        checkBtn.style.backgroundColor = 'green';
        checkBtn.addEventListener('click', function(){
            li.style.textDecoration = 'line-through'
            li.style.fontStyle = 'italic'
        })

        let removeBtn = document.createElement('button');
        li.appendChild(removeBtn);
        removeBtn.innerText = '-';
        removeBtn.setAttribute('class', 'removeBtn');
        removeBtn.style.backgroundColor = 'red';
        removeBtn.addEventListener('click', function(){
            li.classList.add('remove');
            li.addEventListener('transitionend', function(){
                ul.removeChild(li)
            })
        })

        input.value = '';
    }

}


console.log(listCont)