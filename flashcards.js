//Creating BasicCard constructor
function BasicCard(front, back){
	this.front = front;
	this.back = back;
}

// Creating clozeCard constructor
function clozeCard(text, cloze) {
	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "...");
	var textLower = text.toLowerCase();
	var clozeLower = cloze.toLowerCase();
}

//module.exports = BasicCard;
module.exports = clozeCard;