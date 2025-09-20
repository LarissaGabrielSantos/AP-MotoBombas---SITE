var swiper = new Swiper(".mySwiper", {
    loop: true, // Permite que o carrossel volte ao início
    grabCursor: true, // Mostra a mãozinha ao passar o mouse
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Permite clicar nas bolinhas para navegar
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});