import { setProjectStorage } from './index';
import { createToDoList } from './inboxTab';

function createToDoTab(title) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const form = document.createElement('form');
    const textInput = document.createElement('input');
    const submitInput = document.createElement('input');
    const container = document.querySelector('#container');
    div.classList.add('tab', 'project');
    form.classList.add('toDoForm');
    h2.classList.add('h2');
    h2.textContent = title;
    textInput.classList.add('input');
    textInput.required = true;
    submitInput.classList.add('submitBtn', 'btn', 'btn-success');
    submitInput.type = 'submit';
    submitInput.value = 'Enter';
    form.append(textInput, submitInput);
    div.append(h2, form);
    container.appendChild(div);
    form.addEventListener('submit', submit);
}

function submit(e) {
    e.preventDefault();
    e.target.parentElement.appendChild(createToDoList(e.target[0].value));
    e.target.reset();
    setProjectStorage();
}

export { createToDoTab };
