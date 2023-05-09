const arrowUno = document.querySelector('.card_arrowUno');
const arrowDos = document.querySelector('.card_arrowDos');
const arrowTres = document.querySelector('.card_arrowTres');
const arrowCuatro = document.querySelector('.card_arrowCuatro');
const arrowCinco = document.querySelector('.card_arrowCinco');

arrowUno.addEventListener('click', contadorClicks);
arrowDos.addEventListener('click', contadorClicks);
arrowTres.addEventListener('click', contadorClicks);
arrowCuatro.addEventListener('click', contadorClicks);
arrowCinco.addEventListener('click', contadorClicks);

function contadorClicks(e){
    e.preventDefault();
    const contenedorPregunta = e.target;
    let parrafo, tituloPregunta, arrow;
    if(contenedorPregunta.classList.contains('card_ask-container')){
        parrafo = e.target.parentElement.querySelector('.card_text');
        tituloPregunta = e.target.querySelector('.card_title');
        arrow = e.target.querySelector('.card_arrow');
    }else if(contenedorPregunta.classList.contains('card_title') || contenedorPregunta.classList.contains('card_arrow')){
        parrafo = e.target.parentElement.parentElement.querySelector('.card_text');
        tituloPregunta = e.target.parentElement.querySelector('.card_title');
        arrow = e.target.parentElement.querySelector('.card_arrow');
    }
    if(!parrafo.classList.contains('animation')){
        mostrarInfo(parrafo, tituloPregunta, arrow);
    }else{
        ocultarInfo(parrafo, tituloPregunta, arrow);
    }
}

function mostrarInfo(parrafo, tituloPregunta, arrow){

    parrafo.classList.contains('hideAnimation') ? parrafo.classList.remove('hideAnimation') : ""
    parrafo.classList.add('animation');
    tituloPregunta.classList.add('card_title-weight');
    arrow.classList.add('card_arrow-rotate');
}

function ocultarInfo(parrafo, tituloPregunta, arrow){
    parrafo.classList.remove('animation')
    parrafo.classList.add('hideAnimation');
    tituloPregunta.classList.remove('card_title-weight');
    arrow.classList.remove('card_arrow-rotate');
}
