const btnAbrir = document.getElementById("botaoAbrir");

btnAbrir.addEventListener("click", () =>{
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagensMenuHamburguer/list.svg"
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imagensMenuHamburguer/x-circle-fill.svg"       
    }
})