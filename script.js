$(document).ready(function(){
    
    $('form').on('submit', function(e){
        e.preventDefault()
        const inputItem = $('#input-item').val()
        const novoItemLista = $(`<li>${inputItem}</li>`)
        $(novoItemLista).appendTo('ul')
        $('#input-item').val('')
    
    })

    $('ul').on('click', 'li', function(){
        $(this).toggleClass('complete')
    })
})