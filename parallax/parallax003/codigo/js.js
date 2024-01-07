var capa = document.querySelector(".capa");
window.addEventListener("load", function(){
    capa.style.marginLeft = -1920 + "px";
})

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var moveu = true;
function botao(){
    if (moveu==true){
        img1.style.transform = "translateX(-300px)";
        img2.style.transform = "translateX(300px)";
    }
    else {
        img1.style.transform = "translateX(0px)";
        img2.style.transform = "translateX(0px)";
    }
    moveu = !moveu;
    }
    
