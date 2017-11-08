var listCont = document.createElement("section");
listCont.id = "lists-container";
document.body.appendChild(listCont);


//llamo a mi contenedor de TODAS las listas
/*var listCont = document.getElementById("lists-container");*/


//creo un div contenedor para cada lista
var inputDiv = document.createElement("div");
//le doy clase
inputDiv.setAttribute("class", "list-div");

//creo un input
var inputStart = document.createElement("input");
inputStart.setAttribute("type", "text")
inputStart.setAttribute("placeholder", "Añadir una lista");
inputStart.classList.add("input-start");
inputStart.id = "setCardName"

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

///////////////////////////////////////

//Evento de click para agregar tarjetas

btnSave.addEventListener("click", function(){
	var listDiv = document.createElement("div");
	//creo nodo de texto con value del input
	var titleCard = document.createTextNode(document.getElementById("setCardName").value);
	if (titleCard.length > 0) {
		//le agrego clases a mi div
		listDiv.classList.add("list-div", "list-div-active");
		//uno los hijos
		var titleH = document.createElement("h4");
		titleH.appendChild(titleCard);
		//crear link
		var addCardLink = document.createElement("a");
		addCardLink.setAttribute("href", "#");
		var textCardLink = document.createTextNode("Añadir una tarjeta");
		//uno los hijos
		addCardLink.appendChild(textCardLink);
		listDiv.appendChild(titleH);
		listDiv.appendChild(addCardLink);
		listCont.insertBefore(listDiv, inputDiv);
		//limpio mi input
		document.getElementById("setCardName").value = "";
		//le quito el diseño de focus
		inputStart.classList.remove('input-focus');
		inputDiv.className = "list-div"
		inputDiv.removeChild(btnSave);
		inputDiv.removeChild(cancel);

		/////////// Evento Input para añadir tarjeta
		addCardLink.addEventListener('click', function(){
			var textArea = document.createElement("textarea");
			var btnSend = document.createElement("button");
			var btnSendText = document.createTextNode("Añadir")
			btnSend.appendChild(btnSendText);


			listDiv.appendChild(textArea);
			listDiv.appendChild(btnSend);
			//remueve a
			listDiv.removeChild(addCardLink);

		})
		//////////////
	}
});



///////////////////////////////////////////

///////////////////////////////////////////

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
	document.getElementById("setCardName").value = "";
}