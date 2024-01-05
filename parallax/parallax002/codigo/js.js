var bloco = document.querySelector(".bloco1")
window.addEventListener("scroll",function(){
    var valor = window.scrollY

    bloco.style.marginTop = valor * 2 + "px"
})