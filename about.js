var modalCali = document.getElementById('simpleModalCali');
var modalBtnCali = document.getElementById('for_calligraphy');

modalBtnCali.addEventListener('click', openModalCali);

function openModalCali(){
  modalCali.style.display = 'block';
  console.log(123);
}

window.addEventListener('click', outsideClickCali);

function outsideClickCali(e){
  if(e.target == modalCali){
    modalCali.style.display = 'none';
  }
  
}





var modalYoga = document.getElementById('simpleModalYoga');
var modalBtnYoga = document.getElementById('for_yoga');

modalBtnYoga.addEventListener('click', openModalYoga);

function openModalYoga(){
  modalYoga.style.display = 'block';
  console.log(123);
}

window.addEventListener('click', outsideClickYoga);

function outsideClickYoga(e){
  if(e.target == modalYoga){
    modalYoga.style.display = 'none';
  }
  
}





var modalCello = document.getElementById('simpleModalCello');
var modalBtnCello = document.getElementById('for_cello');

modalBtnCello.addEventListener('click', openModalCello);

function openModalCello(){
  modalCello.style.display = 'block';
  console.log(123);
}

window.addEventListener('click', outsideClickCello);

function outsideClickCello(e){
  if(e.target == modalCello){
    modalCello.style.display = 'none';
  }
  
}





var modalTravel = document.getElementById('simpleModalTravel');
var modalBtnTravel = document.getElementById('for_travel');

modalBtnTravel.addEventListener('click', openModalTravel);

function openModalTravel(){
  modalTravel.style.display = 'block';
  console.log(123);
}

window.addEventListener('click', outsideClickTravel);

function outsideClickTravel(e){
  if(e.target == modalTravel){
    modalTravel.style.display = 'none';
  }
  
}





var modalDance = document.getElementById('simpleModalDance');
var modalBtnDance = document.getElementById('for_dance');

modalBtnDance.addEventListener('click', openModalDance);

function openModalDance(){
  modalDance.style.display = 'block';
  console.log(123);
}

window.addEventListener('click', outsideClickDance);

function outsideClickDance(e){
  if(e.target == modalDance){
    modalDance.style.display = 'none';
  }
  
}