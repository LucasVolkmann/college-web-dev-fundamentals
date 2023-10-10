const inputs = {
    'name' : document.querySelector('#inputName'),
    'city' : document.querySelector('#inputCity')
}

window.addEventListener('onload', setInputs())

function setInputs() {
    inputs['name'].value = localStorage.getItem('name')
    inputs['city'].value = localStorage.getItem('city')
}

function back() {
    window.location.href = "index.html";
}