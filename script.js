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

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector('.btn');
    var initialLeft = btn.style.left;
    var isRight = false;

    btn.addEventListener('click', function() {
      if (isRight) {
        btn.style.left = initialLeft;
        isRight = false;
      } else {
        btn.style.left = '32px'; /* Altere o valor para controlar a distância do deslizamento */
        isRight = true;
      }
    });
  });
