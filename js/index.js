




// Auxiliar
function myFunction() {
    let burger = document.getElementsByClassName('burger')[0];

    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      burger.src = "assets/icon/cross.svg";
      burger.style.width = "25px";
      burger.style.height = "25px";
    } else {
      x.className = "topnav";
      burger.src = "assets/icon/bars.svg";
      burger.style.width = "20px";
      burger.style.height = "20px";
    }
  } 

function navResponsiveFix(){
  let dad = document.getElementById("eleDadAux");
  let list = dad.children;
  cont = 2;
  aux = 3.5;
  for(let i = 1; i<list.length -2; i++){
      list[i].style.top = aux+cont+"rem";
      aux += cont; 
  }
}

function darkLightStyle(){
    let sunMoon = document.getElementsByClassName('sunMoon')[0];
    let auxLightDark = document.getElementsByClassName('auxLightDark');
    let burger = document.getElementsByClassName('burger')[0];
    let color = document.body.style.backgroundColor;

    if(color == "white"){
      sunMoon.src = "assets/icon/sun.svg";
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      burger.src = "assets/icon/barsWhite.svg";
      for(let i = 0; i<auxLightDark.length;i++){
          auxLightDark[i].style.color = "white";
      }
    }
    else if(color == "#191523"){
      sunMoon.src = "assets/icon/moon.svg";
      document.body.style.backgroundColor = "white"; 
      document.body.style.color = "#191523";
      burger.src = "assets/icon/bars.svg";
      for(let i = 0; i<auxLightDark.length;i++){
        auxLightDark[i].style.color = "#191523";
      }
    }
    else{
      sunMoon.src = "assets/icon/sun.svg";
      document.body.style.backgroundColor = "#191523";
      document.body.style.color = "white"; 
      burger.src = "assets/icon/barsWhite.svg";
      for(let i = 0; i<auxLightDark.length;i++){
        auxLightDark[i].style.color = "white";
      }
    }
}