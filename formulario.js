const inputs = document.querySelectorAll('.inputs');
const enviar = document.getElementById('enviar');
enviar.addEventListener('click', (e) => {
e.preventDefault()
inputs.forEach((input) => {
    if(input.value === ''){
        input.classList.add('nao-preenchido')
        input.nextElementSibling.classList.remove('esconder')
    }else {
        input.classList.add('preenchido')
        input.classList.remove('nao-preenchido')
        input.nextElementSibling.classList.add('esconder')
    }
}) 
} )
