const modal = document.querySelector('.green');
const button = document.querySelector('p button');
const form = document.querySelector('.contact_form');


const validate = () => {
    modal.style.display = 'block';
    modal.style.transition = 'all 3s';
    form.style.transform = 'translate(0,-600px)';
    form.style.transition = 'all 3s'
}

button.addEventListener('click',validate);

