

var  button = document.getElementById('button');

button.addEventListener('click' , function(){
    var card = document.querySelector('.card');
    card.classList.toggle('active');

    if (card.classList.contains('active')){
        return button.textContent = ' Fechar ';
    }

    button.textContent = 'O que esta incluso ? ';
});