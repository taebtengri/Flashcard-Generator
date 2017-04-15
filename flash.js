function BasicCard(front, back) {
  this.front = front;
  this.back = back;
  
}

function ClozeCard(text, cloze) {
  this.text = text;
  this.cloze = cloze;
  this.closePrint = function(){
  	console.log(this.cloze);
  };
  this.partialPrint = function(){
  var arrText =	text.split(" ");
  var arrCloze = cloze.split(" ");

  for (i=0; i < arrText.length; i++) {
  	if(arrCloze.indexOf(arrText[i]) !== -1) {
  		arrText[i] = "";
  	}
  
  }

  var partial = arrText.join(" ");
  	console.log(partial);
  
  };
  this.fullPrint = function(){
  	console.log(this.text);
  };
  this.errorPrint = function(input){
  	if (this.cloze.length < 1) {
  		console.log("Something's wrong. Try once more.")
  	}

  	if(this.cloze !== input) {
  		console.log("Error!");
  	}
  }
}

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front);

// "George Washington"
console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze);

// " ... was the first president of the United States.
firstPresidentCloze.partialPrint(); 

// "George Washington was the first president of the United States.
firstPresidentCloze.fullPrint();

// Should throw or log an error because "oops" doesn't appear in cloze.
firstPresidentCloze.errorPrint("oops"); 