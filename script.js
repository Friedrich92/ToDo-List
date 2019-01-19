const myList = document.querySelector('.myList');
const button = document.querySelector('.button');
let todoList;

class CreateElements{

	constructor (text){
		this.text = document.querySelector('.input');
	}

	createLi(){
		let newLi = document.createElement('li');		
		let textNodeInput = document.createTextNode(this.text.value);
		newLi.appendChild(textNodeInput);
		myList.appendChild(newLi);	

		let newSpan = document.createElement('span');
		let textNodeSpan = document.createTextNode('\u2573');
		newSpan.appendChild(textNodeSpan);
		newSpan.className = 'span_close';
		myList.appendChild(newSpan);
	}

	setLocalStorage(){
		todoList = myList.innerHTML;
		JSON.stringify(todoList);
		localStorage.setItem('todo', todoList);
	}
}

const li = new CreateElements();
li.createLi();

button.addEventListener('click', () => {
	let inputValue = document.querySelector('.input').value;
	if (inputValue.length > 0){
		li.createLi();
		li.setLocalStorage();
	} else {
		alert('Вы ничего не ввели');
	}
});

myList.addEventListener('click', (event) => {
	event.preventDefault();
	let target = event.target;
	if (target.tagName === 'LI'){
		target.classList.toggle('checked');
		li.setLocalStorage();
	} else if (target.className === 'span_close'){
		 target.previousElementSibling.remove();
		 target.remove();
		 li.setLocalStorage();
	}

});

myList.innerHTML = localStorage.getItem('todo');
















