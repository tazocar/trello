//llamo a mi contenedor de TODAS las listas
var listCont = document.getElementById("lists-container");
//creo un div contenedor para cada lista
var inputDiv = document.createElement("div");
//le doy clase
inputDiv.setAttribute("class", "list-div");

//creo un input
var inputStart = document.createElement("input");
inputStart.setAttribute("type", "text")
inputStart.setAttribute("placeholder", "Añadir una lista");
inputStart.classList.add("input-start");

//Creando Botón
var btnSave = document.createElement("button");
var btnSaveText = document.createTextNode("Guardar");
btnSave.appendChild(btnSaveText)
btnSave.className = "btn-save";

//Creando X
var cancel = document.createElement("i");
cancel.classList.add("fa", "fa-times");


//Uniendo hijos
inputDiv.appendChild(inputStart);
listCont.appendChild(inputDiv);

//Evento en el input
inputStart.addEventListener('focus', firstCardFocus);
function firstCardFocus(){
	//al hacer click en el input
	inputStart.classList.add('input-focus');
	inputDiv.className = "list-div-active"
	inputDiv.appendChild(btnSave);
	inputDiv.appendChild(cancel);

}
cancel.addEventListener('click', firstCardBlur);
function firstCardBlur(){
	//al hacer click en el input
	inputStart.classList.remove('input-focus');
	inputDiv.className = "list-div"
	inputDiv.removeChild(btnSave);
	inputDiv.removeChild(cancel);

}
