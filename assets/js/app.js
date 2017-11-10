var listCont = document.createElement("section");
listCont.id = "lists-container";
var scriptJs = document.getElementsByTagName("script")[0];
document.body.insertBefore(listCont, scriptJs);


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
		//creo titulo
		var titleH = document.createElement("h4");
		titleH.appendChild(titleCard);
		//crear link
		var addCardLink = document.createElement("a");
		addCardLink.setAttribute("href", "#");
		var textCardLink = document.createTextNode("Añadir una tarjeta...");
		//uno los hijos
		addCardLink.appendChild(textCardLink);
		listDiv.appendChild(titleH);
		listDiv.appendChild(addCardLink);
		listCont.insertBefore(listDiv, inputDiv);
		//limpio mi input
		document.getElementById("setCardName").value = "";
		inputStart.focus();
		// //le quito el diseño de focus
		// inputStart.classList.remove("input-focus");
		// inputDiv.className = "list-div"
		// inputDiv.removeChild(btnSave);
		// inputDiv.removeChild(cancel);
	

		/////////// Event Input para añadir tarjeta
		addCardLink.addEventListener("click", function(){
			var textAreaCard = document.createElement("textarea");
			textAreaCard.id = "text"
			var btnSend = document.createElement("button");
			btnSend.className = "btn-save";
			var btnSendText = document.createTextNode("Añadir")
			btnSend.appendChild(btnSendText);
			listDiv.appendChild(textAreaCard);
			listDiv.appendChild(btnSend);
			//remueve añadir tarjeta
			listDiv.removeChild(addCardLink);
			//focus textarea
			textAreaCard.focus();


			//////////////////////////////////////////////////////////////////////////
			//me sale este error
			//Uncaught DOMException: Failed to execute 'removeChild' 
			//on 'Node': The node to be removed is not a child of this node
			//no entiendo que significa, pero funciona c: aun así lo dejé comentado
			//////////////////////// inputStart.addEventListener("focus", abortCard);
			//////////////////////////////////////////////////////////////////////////


			//llamo al input
			var element = document.getElementById('text');
			//le agrego un evento que llame a la función resize
			element.addEventListener('keydown', autosize);
			//Función que cambia el tamaño del input
			function autosize(){
		  		setTimeout(function(){
			  		//le doy alto inline (dentro del html)
			  		element.style.cssText = 'height:auto; padding:0';
			  		//hago que el alto cambie según el alto del contenido del input (scrollHeight)
					element.style.cssText = 'height:' + element.scrollHeight + 'px';
	  			},0);
			}

			btnSend.addEventListener("click", function(){
				var paragraph = document.createElement("p");
				var textCard = document.createTextNode(textAreaCard.value);
				if (textCard.length >0) {
					paragraph.appendChild(textCard);
					listDiv.insertBefore(paragraph, textAreaCard);
					textAreaCard.value = "";
					//reseteo el alto del input
					document.getElementById("text").style.cssText = "height: auto;";
					textAreaCard.focus();
				} else {
					alert("Parece que esta tarjeta está vacía. Escribe algo para añadir c:")
				}
			});

			////// Cancel Events
			///creo un X por lista
			var cancelCard = document.createElement("i");
			cancelCard.classList.add("fa", "fa-times");
			listDiv.appendChild(cancelCard)

			cancelCard.addEventListener("click", abortCard);
			
			function abortCard(){
				listDiv.removeChild(textAreaCard);
				listDiv.appendChild(addCardLink);
				listDiv.removeChild(btnSend);
				listDiv.removeChild(cancelCard);
			};
		});
	} else {
		alert(":o parece que intentas crear una lista está vacía, no se puede trabajar así!");
	}
});


///////////////////////////////////////////

//Evento en el input
inputStart.addEventListener("focus", firstCardFocus);
function firstCardFocus(){
	//al hacer click en el input
	inputStart.classList.add("input-focus");
	inputDiv.className = "list-div-active"
	inputDiv.appendChild(btnSave);
	inputDiv.appendChild(cancel);

}
cancel.addEventListener("click", firstCardBlur);
function firstCardBlur(){
	//al hacer click en el input
	inputStart.classList.remove("input-focus");
	inputDiv.className = "list-div"
	inputDiv.removeChild(btnSave);
	inputDiv.removeChild(cancel);
	document.getElementById("setCardName").value = "";
}