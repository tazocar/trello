//llamo a mi contenedor de TODAS las listas
var listCont = document.getElementById("lists-container");
//creo un div contenedor para cada lista
var listDiv = document.createElement("div");
//le doy clase
listDiv.setAttribute("class", "list-div");

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
listDiv.appendChild(inputStart);
listCont.appendChild(listDiv);

//Evento en el input
inputStart.addEventListener('focus', firstCardFocus);
function firstCardFocus(){
	//al hacer click en el input
	inputStart.classList.add('input-focus');
	listDiv.className = "list-div-active"
	listDiv.appendChild(btnSave);
	listDiv.appendChild(cancel);

}

cancel.addEventListener('click', firstCardBlur);
function firstCardBlur(){
	//al hacer click en el input
	inputStart.classList.remove('input-focus');
	listDiv.className = "list-div"
	listDiv.removeChild(btnSave);
	listDiv.removeChild(cancel);

}
