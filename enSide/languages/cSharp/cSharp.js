const modal = document.querySelector('.green');
const button = document.querySelector('p button');

const validate = () => {
    modal.style.display = 'block';
    modal.style.transition = 'all 3s';
}

button.addEventListener('click',validate);