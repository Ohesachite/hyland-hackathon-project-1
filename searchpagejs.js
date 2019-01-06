var allKeywords = [];
var lowBounds = [];
var upBounds = [];

function addRow(tableID) {
	
	// Get a reference to the table
	let tableRef = document.getElementById(tableID);
	// Insert a row at the end of the table
	let newRow = tableRef.insertRow(-1);
	// Insert a cell in the row at index 0
	let newCell = newRow.insertCell(0);
	// Append a text node to the cell
	let newText = document.createTextNode(document.getElementById('search').value);
	newCell.appendChild(newText);
	allKeywords.push(document.getElementById('search').value);
	document.getElementById('search').value = "";
	
	newCell = newRow.insertCell(1);
	let newInput = document.createElement('input');
	newInput.type = 'text';
	newInput.placeholder = 'Lower Bound';
	newCell.appendChild(newInput);
	
	newCell = newRow.insertCell(2);
	let newInput2 = document.createElement('input');
	newInput2.type = 'text';
	newInput2.placeholder = 'Upper Bound';
	newCell.appendChild(newInput2);
		
	newCell = newRow.insertCell(3);
	let newInput3 = document.createElement('input');
	newInput3.type = 'image';
	newInput3.src = 'https://image.flaticon.com/icons/png/512/51/51032.png';
	newInput3.height = 20;
	//newInput3.addEventListener("click", deleteRow(document.getElementById(tableID).rowIndex));
	newCell.appendChild(newInput3);
}



/*function deleteRow(rowNum) {
	document.getElementById('table').deleteRow(rowNum);
}*/


function submitButton(tableID) {
	
	for (i=0; i < allKeywords.length; i++) {
		lowBounds.push(document.getElementById(tableID).rows[i].cells[1].value);
		upBounds.push(document.getElementById(tableID).rows[i].cells[2].value);
	}
	localStorage.setItem("lB", JSON.stringify(lowBounds));
	localStorage.setItem("uB", JSON.stringify(upBounds));
	localStorage.setItem("kW", JSON.stringify(allKeywords));
	location.href = "searchresults.html";
		
}