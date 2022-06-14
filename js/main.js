
// Funciones Responsive
function myFunction() {
    let burger = document.getElementsByClassName('burger')[0];
    let color = document.body.style.backgroundColor;

    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";

      if(color == "white")
        burger.src = "assets/icon/cross.svg";

      else if(color == "rgb(1, 4, 36)")
        burger.src = "assets/icon/crossWhite.svg";

      else
        burger.src = "assets/icon/cross.svg";  
      

    } else {
      x.className = "topnav";

      if(color == "white")
        burger.src = "assets/icon/bars.svg";
    
      else if(color == "rgb(1, 4, 36)")
        burger.src = "assets/icon/barsWhite.svg";
        
      else
        burger.src = "assets/icon/bars.svg";     
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


// Funciones Modo Light/Dark
function darkLightStyle(){
    let sunMoon = document.getElementsByClassName('sunMoon')[0];
    let auxLightDark = document.getElementsByClassName('auxLightDark');
    let burger = document.getElementsByClassName('burger')[0];
    let color = document.body.style.backgroundColor;

    if(color == "white"){
      sunMoon.src = "assets/icon/sun.svg";
      document.body.style.backgroundColor = "#010424";
      document.body.style.color = "white";
      burger.src = "assets/icon/barsWhite.svg";
      for(let i = 0; i<auxLightDark.length;i++){
          auxLightDark[i].style.color = "white";
          auxLightDark[i].parentNode.style.backgroundColor = "#010424";

          auxLightDark[i].parentNode.addEventListener("mouseover", function(){hoverDarkLight1(auxLightDark[i].parentNode)});

          auxLightDark[i].parentNode.addEventListener("mouseout", function(){hoverDarkLight2(auxLightDark[i].parentNode)});
      }
    }
    else if(color == "rgb(1, 4, 36)"){
      sunMoon.src = "assets/icon/moon.svg";
      document.body.style.backgroundColor = "white"; 
      document.body.style.color = "#010424";
      burger.src = "assets/icon/bars.svg";
      for(let i = 0; i<auxLightDark.length;i++){
        auxLightDark[i].style.color = "#010424";
        auxLightDark[i].parentNode.style.backgroundColor = "";
      }
    }
    else{
      sunMoon.src = "assets/icon/sun.svg";
      document.body.style.backgroundColor = "#010424";
      document.body.style.color = "white"; 
      burger.src = "assets/icon/barsWhite.svg";
      for(let i = 0; i<auxLightDark.length;i++){
        auxLightDark[i].style.color = "white";
        auxLightDark[i].parentNode.style.backgroundColor = "#010424";

        auxLightDark[i].parentNode.addEventListener("mouseover", function(){hoverDarkLight1(auxLightDark[i].parentNode)});

        auxLightDark[i].parentNode.addEventListener("mouseout", function(){hoverDarkLight2(auxLightDark[i].parentNode)});
      }
    }
}

function hoverDarkLight1(element){
  let color = document.body.style.color;
  if(color == "rgb(1, 4, 36)")
    element.style.backgroundColor = "";
  else
    element.style.backgroundColor = "#030848";
}

function hoverDarkLight2(element){
  let color = document.body.style.color;
  if(color == "rgb(1, 4, 36)")
    element.style.backgroundColor = "";
  else
    element.style.backgroundColor = "#010424";
}
