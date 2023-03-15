// Contact placeholder effect on contact.html
const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');

textarea.onfocus = () => {
    textarea.nextElementSibling.classList.add('letter-focus-ta');
    textarea.parentNode.classList.add('focus');
}
textarea.onblur = () => {
    textarea.parentNode.classList.remove('focus');
    textarea.nextElementSibling.classList.remove('letter-focus-ta');
}
textarea.oninput = ()=>{
    textarea.parentNode.classList.add('focus');
}

inputs.forEach(input => {
    input.onfocus = () => {
        input.nextElementSibling.classList.add('letter-focus');
        input.parentNode.classList.add('focus');
    }
    input.onblur = () => {
        input.parentNode.classList.remove('focus');
        input.nextElementSibling.classList.remove('letter-focus');
    }
});

// Nav btn collapse
const BtnNav = document.querySelector('.btn__menu');
const menu = document.querySelector('.menu');

BtnNav.addEventListener('click', ()=>{
    BtnNav.classList.contains('btn__menu--open') ?
    BtnNav.classList.replace('btn__menu--open', 'btn__menu--close'):
    BtnNav.classList.replace('btn__menu--close', 'btn__menu--open');

    menu.classList.toggle('active');
});