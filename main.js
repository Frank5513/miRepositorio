window.addEventListener('scroll', function(){
    let animacion=document.getElementById('animado1');
    let posicionObj1 =animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2;

    if (posicionObj1 -200 < tamañoDePantalla){
        animacion.style.animation='mover 1s ease-out'
    }

})

window.addEventListener('scroll', function(){
    let animacion=document.getElementById('animado2');
    let posicionObj1 =animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2;

    if (posicionObj1 -200 < tamañoDePantalla){
        animacion.style.animation='mover 2s ease-out'
    }

})

window.addEventListener('scroll', function(){
    let animacion=document.getElementById('animado3');
    let posicionObj1 =animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2;

    if (posicionObj1 -200 < tamañoDePantalla){
        animacion.style.animation='mover 3s ease-out'
    }

})

let menu=document.querySelector('#menu-bars')
let navbar=document.querySelector('.navbar')
