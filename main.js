'use strict'

let todoBtn = document.querySelector('#todoBtn');
let inputField = document.querySelector('#todoQuest');
let todoList = document.querySelector('#todoList');
let i = 0;



todoBtn.onclick = function(ev) {
    ev.preventDefault();
    

    if (inputField.value != '') {
            inputField.classList.remove('main-container__todo-quest_wrong');
            inputField.removeAttribute('placeholder', 'Field is empty...');
            inputField.setAttribute('placeholder', 'For example, buy weed...');

        let todoItem = document.createElement('li');
            todoItem.id = 'li_' + i;
            todoItem.classList.add('main-container__todo-item');

        let check = document.createElement('input');
            check.type = 'checkbox';
            check.id = 'cb_' + i;
            check.classList.add('main-container__check');

        let cl = document.createElement('label');
            cl.setAttribute('for', 'cb_' + i);
            cl.innerHTML = inputField.value;

        let recicle = document.createElement('span');
            recicle.classList.add('main-container__recicle');
            recicle.onclick = function() {
                this.parentElement.remove();
            };

        todoItem.appendChild(check);
        todoItem.appendChild(cl);
        todoItem.appendChild(recicle);
        todoList.appendChild(todoItem);

        i++;
    } else {
        inputField.classList.add('main-container__todo-quest_wrong');
        inputField.setAttribute('placeholder', 'Field is empty...');
    }

    return inputField.value = '';
};