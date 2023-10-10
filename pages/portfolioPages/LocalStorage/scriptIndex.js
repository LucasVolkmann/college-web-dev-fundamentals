const inputs = {
    'name' : document.querySelector('#inputName'),
    'city' : document.querySelector('#inputCity')
}

function saveOnLocalStorage(event) {
    localStorage.setItem('name', inputs['name'].value)
    localStorage.setItem('city', inputs['city'].value)

    window.location.href = "dados.html";
}

