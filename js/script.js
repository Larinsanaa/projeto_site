// animacao de scroll
window.addEventListener('scroll', scrollAnimation);

function scrollAnimation() {
    const items = document.querySelectorAll('.scroll-item');

    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight - 100) {
            item.classList.add('show');
        }
    });
}

// chama a funcao quando carrega a pagina
scrollAnimation();
