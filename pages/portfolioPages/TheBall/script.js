const elements = {
    'ball' : document.querySelector('.test'),
    'shadow' : document.querySelector('.testShadow')
}

 function upScale() {
    elements['shadow'].style.transition = '0.5s';
    elements['shadow'].style.scale = 1.5
}

function downScale() {
    elements['shadow'].style.transition = '0.5s';
    elements['shadow'].style.scale = 1
}

elements['ball'].addEventListener('mouseover', upScale.bind(elements))
elements['ball'].addEventListener('mouseout', downScale.bind(elements))

