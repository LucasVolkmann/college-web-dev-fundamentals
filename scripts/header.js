// Adiciona um evento para quando a página carregar
window.addEventListener('onload', setListItem())

// Função que encontra o item do menu de navegação que corresponde a página atual 
// e adiciona uma classe para identificá-lo na página
function setListItem() {
    const list = document.querySelectorAll('.listNavBar li a')
    
    list.forEach((e) => { 
        // Se o href da página atual for igual ao atributo href do item
        if(window.location.href.endsWith(e.getAttribute('href'))){
            e.classList.add('is-selected')
        } else if (!window.location.href.endsWith(e.getAttribute('href')) && e.getAttribute('href') == 'index.html') {
            e.classList.add('is-selected')
        } else {
            e.classList.remove('is-selected')
        }
    })
    
}