let previewContainer = document.querySelector('.paisagens_preview');
let previewBox = document.querySelectorAll('.preview');

document.querySelectorAll('.paisagens_container .paisagens').forEach(paisagens=>{
    paisagens.onclick = () =>{
        previewContainer.style.display= 'flex';
        let name = paisagens.getAttribute('data-name');
        previewBox.forEach(preview=>{
         let target = preview.getAttribute('data-target');
         if (name == target){
            preview.classList.add('active');
         } 
        });
    };
})

previewBox.forEach(close=>{
    close.querySelector('#skip').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display= 'none';
    };
});