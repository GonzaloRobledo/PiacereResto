//MENU HAMBURGUESA

document.addEventListener("click", e=>{
    if(e.target.matches(".boton-nav") || e.target.matches(".boton-nav i")){
        document.querySelector(".navegation-responsive").classList.toggle("translate-0");
        document.querySelector(".fa-bars").classList.toggle("none");
        document.querySelector(".fa-xmark").classList.toggle("none");
    }
})