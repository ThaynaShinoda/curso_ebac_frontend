const form = document.getElementById('form-verificacao')
let campoA = document.getElementById('campoA')
let campoB = document.getElementById('campoB')
const valoresValidos = false;

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const mensagemValida = document.getElementById('valido')
    const mensagemInvalida = document.getElementById('invalido')
    
    if (Number(campoB.value) > Number(campoA.value)) {
        mensagemValida.style.display = 'block'
        mensagemValida.innerHTML = `Parabéns! O valor do campo B (${campoB.value}) é maior que o valor do campo A (${campoA.value})`
        mensagemInvalida.style.display = 'none'
        campoA.value = ''
        campoB.value = ''
    } else {
        mensagemInvalida.style.display = 'block'
        mensagemInvalida.innerHTML = `Tente novamente! O valor do campo A (${campoA.value}) é maior que o valor do campo B (${campoB.value})`
        mensagemValida.style.display = 'none'
    }
})
