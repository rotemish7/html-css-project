
/* global variables */
var isOpen = false;
var toggleBtn =  document.getElementById("topMenu");

// toggle function for collapsable menu
function toggleMenu() { 
    if(!isOpen){
      toggleBtn.style.width = "60px";
        isOpen =true
    } else{
       toggleBtn.style.width = "0%";
        isOpen = false 
    }
}
