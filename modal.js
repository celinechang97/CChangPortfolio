var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');

modalBtn.addEventListener('click', openModal);

function openModal(){
	modal.style.display = 'block';
}

window.addEventListener('click', outsideClick);

function outsideClick(e){
	if(e.target == modal){
		modal.style.display = 'none';
	}
	
}