'use strict';

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  let li = document.createElement('li');
  if (inputBox.value === '') {
    alert('You must write something!');
  } else {
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}

function enterFunction() {
  let li = document.createElement('li');
  li.innerHTML = upperCase(inputBox.value);

  listContainer.appendChild(li);
  let span = document.createElement('span');
  span.innerHTML = '\u00d7';
  li.appendChild(span);

  inputBox.value = '';
  saveData();
}

function upperCase(e) {
  return e[0].toUpperCase() + e.slice(1).toLowerCase();
}

inputBox.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && inputBox.value !== '') {
    enterFunction();
  }
});

listContainer.addEventListener('click', function (e) {
  let target = e.target.tagName;
  if (target === 'LI') {
    // console.log('Uspješno', this.tagName);
    e.target.classList.toggle('checked');
    saveData();
  } else if (target === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
});
// save to local storage

function saveData() {
  localStorage.setItem('dataToDo', listContainer.innerHTML);
}

function displayList() {
  listContainer.innerHTML = localStorage.getItem('dataToDo');
}
displayList();
