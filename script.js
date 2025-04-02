const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;

function showSlide(i) {
    index = i;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : carousel.children.length - 1;
    showSlide(index);
});

nextBtn.addEventListener('click', () => {
    index = (index < carousel.children.length - 1) ? index + 1 : 0;
    showSlide(index);
});
