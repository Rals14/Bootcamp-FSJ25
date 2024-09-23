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

