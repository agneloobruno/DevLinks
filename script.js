function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")


    // substituir a imagem
    if(html.classList.contains('light')) {
        // se tiver ligth mode on, adicionar a imagem light
        img.setAttribute('src', './imagens/avatar-light-mode.png')
    } else {
        // se tiver dark mode on, adicionar imagem dark
        img.setAttribute('src', './imagens/Avatar.png')
    }
}

