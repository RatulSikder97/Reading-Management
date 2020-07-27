let navBar = document.getElementById('navbar');
let menuBar = document.getElementById('menu-bar');
let val;
window.onload = function(){
    menuBar.onclick = function(){
      val = navBar.style.display;
     if(val=="flex"){
        navBar.style.display = "none";
     }else{
        navBar.style.display = "flex";
     }
    }
    
}