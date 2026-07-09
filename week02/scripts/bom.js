const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______'); // Fill in the blank to reference the unordered list element.
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);