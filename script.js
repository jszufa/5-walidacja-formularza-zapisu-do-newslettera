let formMain = document.getElementById('form')

formMain.addEventListener('submit', validate)

//tworzenie listy na potencjalne uwagi
let ulElement = document.createElement('ul');
form.insertBefore(ulElement, form.firstElementChild);

// Główna funkcja sprawdzająca, czy wszystkie warunki są spełnione
function validate(event) {
  //event.preventDefault();
  ulElement.innerHTML = '';

  let input1 = document.querySelector('[name=flname]');
  let input2 = document.querySelector('[name=email]');

  if (!requiredText(input1)) {
    createLiItem('Wpisz imię i nazwisko');
  }

  if (!requiredText(input2)) {
    createLiItem('Wpisz adres e-mail');
  }

  if (!requiredEmail(input2)) {
    createLiItem('Adres Email musi zawierać @');
  }

  if (!checkedAg1()) {
    createLiItem('Wyraź zgodę marketingową 1');
  }

  if (ulElement.children.length > 0) {
    event.preventDefault();
  }
  /* 
  Mój bardziej skomplikowany pomysł
  if (checkedAg1() && requiredText(input1) && requiredText(input2) && requiredEmail(input2)) {
    alert('Formularz został wysłany :)');
  } 
  else { event.preventDefault(); } */

}


// czy zostało wypełnione pole tekstowe 
function requiredText(inputx) {
  if (inputx.value.length == 0) {
    //console.log('pusto')
    return false;
  }
  return true;
}

//czy adres email zawiera znak @
function requiredEmail(inputx) {
  const specialChar = /.*@.*/;
  //console.log(specialChar.test(inputx.value));
  return specialChar.test(inputx.value);

  //łatwiejsza metoda: inputx.value.includes('@');
}

//czy został zaznaczony checkbox ze Zgodą marketingową 1
function checkedAg1() {
  if (document.getElementById("agreement1").checked) {
    return true;
  }
  return false;
}

//Dodawanie listy z rzeczami do zmiany.

function createLiItem(comment) {
  let liElement = document.createElement('li');
  let txtNode = document.createTextNode(`${comment}`);

  liElement.appendChild(txtNode);
  ulElement.appendChild(liElement);

  /*Krótsza wersja:
  let liElement = document.createElement('li');
  liElement.innerText = `${comment}`;
  ulElement.appendChild(liElement);
  */
}

/* Checkbox Wszystkie zgody po zaznaczeniu ma automatycznie zaznaczać pozostałe checkboxy (tj. Zgoda marketingowa 1 i Zgoda marketingowa 2) i wyłączać możliwość ich odznaczenia. */

//ustawiam zdarzenie na zaznaczenie/oznaczenie chceckboxa
let checkboxAll = document.getElementById("all-agreements");
checkboxAll.addEventListener('change', selectOther);


function selectOther() {
  //console.log('wywołano funkcję selectOther');
  let checkbox1 = document.getElementById("agreement1");
  let checkbox2 = document.getElementById("agreement2");

  checkbox1.checked = checkboxAll.checked;
  checkbox2.checked = checkboxAll.checked;
  checkbox1.disabled = checkboxAll.checked;
  checkbox2.disabled = checkboxAll.checked;


  /* if (checkboxAll.checked) {
    checkbox1.checked = true;
    checkbox2.checked = true;
    checkbox1.disabled = true;
    checkbox2.disabled = true;
  }
  else {
    checkbox1.checked = false;
    checkbox2.checked = false;
    checkbox1.disabled = false;
    checkbox2.disabled = false;
  } */

}

