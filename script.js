// ANIMAÇÃO AO ROLAR

const elementos = document.querySelectorAll(
'.card, .grid img, .sobre-galeria img, .video, .info'
);

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

});

elementos.forEach(el => {

el.classList.add('fade');
observer.observe(el);

});

const carousel = document.querySelector(".carousel");

const progressBar =
document.querySelector(".carousel-progress-bar");

document.querySelector(".next").addEventListener("click", () => {

    carousel.scrollBy({
        left: 1000,
        behavior: "smooth"
    });

});

document.querySelector(".prev").addEventListener("click", () => {

    carousel.scrollBy({
        left: -1000,
        behavior: "smooth"
    });

});

function atualizarBarra(){

    const scrollMax =
    carousel.scrollWidth - carousel.clientWidth;

    const porcentagem =
    (carousel.scrollLeft / scrollMax) * 85;

    progressBar.style.width =
    (15 + porcentagem) + "%";

}

carousel.addEventListener(
"scroll",
atualizarBarra
);

atualizarBarra();

const categorias = document.querySelectorAll(".categoria-btn");

categorias.forEach(btn => {

    btn.addEventListener("click", () => {

        document
        .querySelectorAll(".categoria-galeria")
        .forEach(g => g.classList.remove("ativa"));

        const id = btn.dataset.categoria;

        document
        .getElementById(id)
        .classList.add("ativa");

    });

});

document.querySelectorAll(".categoria-galeria").forEach(galeria => {

    const carousel = galeria.querySelector(".mini-carousel");

    galeria.querySelector(".next").addEventListener("click", () => {

        carousel.scrollBy({
            left: carousel.offsetWidth,
            behavior: "smooth"
        });

    });

    galeria.querySelector(".prev").addEventListener("click", () => {

        carousel.scrollBy({
            left: -carousel.offsetWidth,
            behavior: "smooth"
        });

    });

});