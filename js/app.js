const preguntas = document.querySelectorAll(".card_ask-container")

preguntas.forEach(pregunta => {
    pregunta.addEventListener("click", function(){
        const parrafoPregunta = pregunta.parentElement.querySelector(".card_text")

        if (!parrafoPregunta.classList.contains("animation")){
            const parrafoActivo = pregunta.parentElement.parentElement.querySelector(".animation")
            if(parrafoActivo){
                ocultarInformacion(parrafoActivo)
            }

            mostrarInformacion(parrafoPregunta)
        }else{
            ocultarInformacion(parrafoPregunta)
        }
    })
});

function mostrarInformacion(parrafoPregunta){
    const tituloPregunta = parrafoPregunta.parentElement.querySelector(".card_title")
    const flechaPregunta = parrafoPregunta.parentElement.querySelector(".card_arrow")

    parrafoPregunta.classList.contains("hideAnimation") ? parrafoPregunta.classList.remove("hideAnimation") : ""
    parrafoPregunta.classList.add("animation")
    tituloPregunta.classList.add("card_title-weight")
    flechaPregunta.classList.add("card_arrow-rotate")
}

function ocultarInformacion(parrafoPregunta){
    const tituloPregunta = parrafoPregunta.parentElement.querySelector(".card_title")
    const flechaPregunta = parrafoPregunta.parentElement.querySelector(".card_arrow")

    parrafoPregunta.classList.add("hideAnimation")
    parrafoPregunta.classList.remove("animation")
    tituloPregunta.classList.remove("card_title-weight")
    flechaPregunta.classList.remove("card_arrow-rotate")
}