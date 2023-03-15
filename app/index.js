/// Scroll background effect on index.html and about-us.html
const nav = document.getElementById("nav");
if (window.screen.width > 768) {
    window.onscroll = () => {
        if (window.scrollY >= 300) {
            nav.classList.add('scroll-style');
        } else {
            nav.classList.remove('scroll-style');
        }
    }
}

// Nav btn collapse
const BtnNav = document.querySelector('.btn__menu');
const menu = document.querySelector('.menu');

BtnNav.addEventListener('click', ()=>{
    BtnNav.classList.contains('btn__menu--open') ?
    BtnNav.classList.replace('btn__menu--open', 'btn__menu--close'):
    BtnNav.classList.replace('btn__menu--close', 'btn__menu--open');

    menu.classList.toggle('active');
});

// product slider redirect
const SliderImgs = document.querySelectorAll('.slider__img');
SliderImgs.forEach(img =>{
    img.addEventListener('click', ()=>{
        location.href = './pages/products.html';
    });
})