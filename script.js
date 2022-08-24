var factList=["I'm 16 years old", "I speak four languages: Arabic, English, French< and Spanish", "I used to dance, swim, and figure skate", "I was born and raised in Dubai", "I love spending time with family and friends"];

console.log("hiiiiiiiiiiiiiii");
var myBtn= document.getElementById("factButton");
var factCount = 0;

function generateFact() {

    document.getElementById("fact").innerHTML = factList[factCount];
    factCount += 1;
	if (factCount == 5) {
	    factCount = 0;
	}
	console.log(factList[factCount]);
}

myBtn.addEventListener('click', generateFact);
