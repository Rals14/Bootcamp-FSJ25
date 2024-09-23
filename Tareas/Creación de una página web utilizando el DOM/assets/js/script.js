/*Color change function*/
const mainBoton = document.querySelector('#main-btn');
mainBoton.addEventListener('click', () => {
    const mainContent = document.querySelector('#main-content');
    if (mainContent.classList.contains('main-content-background')) {
        mainContent.classList.remove('main-content-background');
        mainContent.classList.add('main-content-background-alt');
    }else if(mainContent.classList.contains('main-content-background-alt')){
        mainContent.classList.remove('main-content-background-alt');
        mainContent.classList.add('main-content-background');
    }

});

/*See more on reviews function*/
const reviewBoton = document.querySelector('#review-btn');
reviewBoton.addEventListener('click', () => {
    const extra = document.querySelector('.game-review-extra');
    if (extra.classList.contains('hidden')) {
        extra.classList.remove('hidden')
        reviewBoton.classList.add('hidden')
    }    
});

/*See less on review function*/
const reviewBotonExtra = document.querySelector('#review-btn-extra');
reviewBotonExtra.addEventListener('click', () => {
    const extra = document.querySelector('.game-review-extra');
    if (!extra.classList.contains('hidden')) {
        extra.classList.add('hidden')
        reviewBoton.classList.remove('hidden')
    }    
});

/*Change image function*/
const reviewImg = document.querySelector('#game-review-img');
let i = 1;
reviewImg.addEventListener('click', () => {
    i++;
    if (i > 4) {
        i = 1;
    }
    reviewImg.src = `./assets/img/zelda${i}.jpg`;
});
    
/*Subscribe form function*/
const form = document.querySelector('#subscribe-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email');
    if (email.value === '') {
        alert('Por favor, ingrese un correo electrónico');
    } else {
        alert('Gracias por suscribirte a nuestro blog :D');
    }
});