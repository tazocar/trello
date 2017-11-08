

// var listContainer = document.getElementById("lists-container")
// var listDiv = document.createElement("div");
// listDiv.setAttribute("class", "list-div");

// var btnSave = document.createElement("button");


// listContainer.appendChild(listDiv);
// listDiv.appendChild(inputStartUno);
// listDiv.appendChild(btnSave);







var inputStart = document.getElementById("input-start");
inputStart.addEventListener('focus', firstCardFocus);
function firstCardFocus(){
	//al hacer click en el input
	inputStart.classList.add('test');
}

inputStart.addEventListener('blur', firstCardBlur);
function firstCardBlur(){
	//al hacer click en el input
	inputStart.classList.remove('test');
}
