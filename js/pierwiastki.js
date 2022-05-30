var elementsTable = [] ;
var elementChoosed = [] ;
var answer = "";
var y = 0 ;
var k=0 ;
var scor = 0 ;
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
document.getElementById("score").className = "hide"
function randomElements(){
if(elementChoosed.length < elements.length){
random = Math.floor(Math.random() * elements.length) ;
answer = elements[random][1];
ele = elements[random][0];
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
  document.getElementById("score").className = "show"
  document.getElementById("timer").className = "show"
  document.getElementById("score").innerHTML ="<div> Wynik: "+scor+"</div>"  ;
  countDownDate = new Date().getTime()+1000*10*30;
}

function checkQuestion(event){
  if(event.keyCode == 13){
    inputAuto = document.getElementById("inputAuto").value
    if(inputAuto == answer){
      randomElement.classList.remove("checked");
      randomElement.classList.add("true");
      randomElement.classList.add("pink");
      scor++ ;
      document.getElementById("score").innerHTML ="<div> Wynik: "+scor+"</div>"  ;
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
  document.getElementById("score").className = "show"
  document.getElementById("timer").className = "hide"
  scor=0
  document.getElementById("score").innerHTML =""  ;
}
//TIMER
var countDownDate = new Date().getTime()+1000*10*30;

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var minutes = Math.floor((distance % (1000 * 10 * 30)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
  
  if(scor == 1){
    document.getElementById("chance").innerHTML = "Wybierz pierwiastek" ;
    document.getElementsByClassName("checked").className = "pink" ;
    document.getElementsByClassName("pink").setAttribute("type", "button")
    document.getElementsByClassName
}

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "KONIEC GRY";
  }
}, 1000);

  //Slider
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
  
  var imagesSliderPath = [] ;
  imagesSliderPath[0] = 'gory' ;
  imagesSliderPath[1] = 'goryzima' ;
  imagesSliderPath[2] = 'tatry' ;
  imageElements = [] ;
  imageDiv = [] ;
  dotsElements = [] ;
  y = 0;
  
  for(x=0 ; x < imagesSliderPath.length ; x++) {
      imageDiv[x] = document.createElement("div");
      imageDiv[x].classList.add("mySlides","disappear");
      imageDiv[x].style.display = "none"
      imageElements[x] = document.createElement("img");
      imageElements[x].classList.add("images");
      imageElements[x].setAttribute("src","./img/"+imagesSliderPath[x]+".jpg");
      imageElements[x].style.width = "100%" ;
      imageElements[x].style.height = "365px" ;
      //imageElements[x].style.display = "none";
      imageDiv[x].append(imageElements[x]);
      document.getElementsByClassName("imageSlider")[0].append(imageDiv[x]);
      dotsElements[x] = document.createElement("span");
      dotsElements[x].classList.add("dot");
      y++;
      dotsElements[x].setAttribute("onclick","currentSlide("+y+")");
      document.getElementsByClassName("dotsDiv")[0].append(dotsElements[x]);
      
  }