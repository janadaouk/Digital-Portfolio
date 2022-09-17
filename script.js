var factList=["You are amazing", "You are going to have a great day!", "You will do awesome!", "You look incredible!", "HAHA you're funny", "Your hair looks goregous today!", "Your fit is fire!"];

console.log("hiiiiiiiiiiiiiii");
var myBtn= document.getElementById("factButton");

var check = 0;
var fact = document.getElementById("fact");

function generateFact() {

  //  document.getElementById("fact").innerHTML = factList[factCount];
    var random = Math.floor(Math.random()*factList.length);
    //console.log(check, random);
    while (check == random) {
	var random = Math.floor(Math.random()*factList.length);
    }
   // console.log(check, random);
    fact.innerHTML = factList[random];
    check = random;
 //	console.log(factList[factCount]);
}

myBtn.addEventListener('click', generateFact);
