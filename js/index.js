




// Auxiliar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

function navResponsiveFix(){
  let dad = document.getElementById("eleDadAux");
  let list = dad.children;
  cont = 1.5;
  aux = 2.5;
  for(let i = 1; i<list.length -2; i++){
      list[i].style.top = aux+cont+"rem";
      aux += cont; 
  }
}