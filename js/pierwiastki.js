var pierwiastki = [] ;
var odp1 = "" ;
var y = 0 ;

container = document.getElementsByClassName("symbol") ;

function randomElements(){


//console.log(container.length) ;
for(x = 0; x<container.length; x++){
    if(container[x].textContent != "DE" 
    && container[x].textContent != "57-71" 
    && container[x].textContent != "89-103"){
        pierwiastki[y] = container[x].textContent ;
        y++ ;
    }
}

for(x = 0; x<pierwiastki.length; x++){
//    console.log("x:"+x +"," +pierwiastki[x]) ;
}

random = Math.floor(Math.random() * pierwiastki.length) ;
console.log(pierwiastki[random]) ;



for(x = 0; x<container.length; x++){
    if(container[x].textContent == pierwiastki[random]){
        wylosowany = container[x] ;
    }
}

console.log(wylosowany) ;
wylosowany = wylosowany.parentNode ;

wylosowany.setAttribute("class","checked")
console.log(wylosowany) ;

odp1 = pierwiastek[random][1] ;
console.log("odp1: "+odp1) ;
}

const easy = document.getElementById("easy") ;
const normal = document.getElementById("normal") ;
const hard = document.getElementById("hard") ;

easy.addEventListener('click',gameStart) ;
normal.addEventListener('click',gameStart) ;
hard.addEventListener('click',gameStart) ;

function gameStart(e){
    console.log(e.target.id) ;
    randomElements() ;
    document.getElementById("input").className = "show"
    document.getElementById("buttonStart").className = "hide"
}

function checkQuestion(event){
    if(event.keyCode == 13){
      inputAuto = document.getElementById("inputAuto").value
      if(inputAuto == odp1){
        console.log(wylosowany) ;
        wylosowany.classList.remove("checked") ;
        wylosowany.classList.add("true") ;
        randomElements();
      }
      else {
        wylosowany.classList.remove("checked") ;
        wylosowany.classList.add("false") ;
        randomElements();
      }
    }
  }

