// Função que abre uma nova aba com o link informado no atributo href (definido no HTML) do elemento
const project = document.querySelectorAll('div.itemBox')
project.forEach( (element) => {
    element.addEventListener('click', e => {
        window.open(element.getAttribute('href'))
    })
} )

