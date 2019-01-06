var lowBounds = JSON.parse(localStorage.getItem("lB"));
var upBounds = JSON.parse(localStorage.getItem("uB"));
var allKeywords = JSON.parse(localStorage.getItem("kW"));

function listTags() {
	for (i=0; i < allKeywords.length; i++) {
		var node = document.createTextNode(allKeywords[i].value + lowBounds[i].value + upBounds[i].value);
		para.appendChild(node);
		var elem = document.getElementById('paraTags');
		elem.appendChild(para);
	}
	
}