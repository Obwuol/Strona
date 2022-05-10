button = document.getElementById("button") ;
console.log(button);

button.addEventListener("click",animation) ;
function animation(e){
    console.log(e.target) ;
    button.classList.add('animate__animated','animate__bounce') ;
}