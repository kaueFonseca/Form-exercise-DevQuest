const inputs = document.querySelectorAll('.input-box input, .input-box textarea');
const button = document.getElementById('button');
const deniedMessage = document.querySelectorAll('.span');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim() !== "") {
            input.closest('.input-box').classList.add('accepted');

        } else {
            input.closest('.input-box').classList.remove('accepted');
            input.nextElementSibling.classList.add('denied-message');
        }
    });
});

button.addEventListener('click', () => {
    const inputsVazios = document.querySelectorAll('.input-box input, .input-box textarea');

    inputsVazios.forEach(inputVazio => {
        if (inputVazio.value.trim() === '') {
            inputVazio.closest('.input-box').classList.add('denied');
            inputVazio.nextElementSibling.classList.add('denied-message');
        }else if(inputVazio.value.trim() !== ''){
            inputVazio.closest('.input-box').classList.remove('denied');
            inputVazio.nextElementSibling.classList.remove('denied-message');
        }
    });
});