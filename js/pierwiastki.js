var elementsTable = [] ;
var elementChoosed = [] ;
var answer = "";
var y = 0 ;
var k=0 ;
h = 0 ;
var point = 0;
container = document.getElementsByClassName("symbol");
for(x = 0; x < container.length; x++){
  if(container[x].textContent != "DE"
  && container[x].textContent != "DEL"
  && container[x].textContent != "57-71" 
  && container[x].textContent != "89-103"  ){
      elementsTable[y] = container[x] ;
      y++ ;
  }
}
document.getElementById("score").classList.remove("hide");
function randomElements(){
if(elementChoosed.length < elements.length){
random = Math.floor(Math.random() * elements.length) ;
answer = elements[random][1];
randomElement = elementsTable[random].parentNode ;
if (elementChoosed.includes(random)){
       randomElements();
} else {
randomElement.setAttribute("class","checked");
elementChoosed.push(random);
}
} else {
  
}
}

const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");

easy.addEventListener('click',gameStart);
medium.addEventListener('click',gameStart);
hard.addEventListener('click',gameStart);

function gameStart(e){
  randomElements();
  document.getElementById("startButton").className = "hide"
  document.getElementById("inputAuto").className = "show"
  document.getElementById("resetButton").className = "show btn btn-info"
  document.getElementById("score").className.add("show");
  
}

function checkQuestion(event){
  if(event.keyCode == 13){
    inputAuto = document.getElementById("inputAuto").value
    if(inputAuto == answer){
      randomElement.classList.remove("checked");
      randomElement.classList.add("true");
      randomElement.classList.add("pink");
      h++ ;
      document.getElementById("score").innerHTML = h ;
    }
    else {
      randomElement.classList.remove("checked");
      randomElement.classList.add("false");
      randomElement.classList.add("pink");
    }
    randomElements();
    document.getElementById("inputAuto").value = "";
  }
}

resetButton.addEventListener("click", resetGame);
function resetGame(e){
  for(x = 0; x < elementsTable.length; x++){
    elementsTable[x].parentNode.classList.remove("false");
    elementsTable[x].parentNode.classList.remove("true");
    elementsTable[x].parentNode.classList.remove("checked");
    elementsTable[x].parentNode.classList.remove("pink");
    elementsTable[x].parentNode.classList.add("pink");
  }
  elementChoosed = [] ;
  document.getElementById("startButton").className = "btn btn-secondary show";
  document.getElementById("inputAuto").className = "hide";
  document.getElementById("resetButton").className = "hide";
  document.getElementById("score").innerHTML = h=0 ;
  document
}