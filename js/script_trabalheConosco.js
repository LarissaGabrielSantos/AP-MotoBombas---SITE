document.addEventListener('DOMContentLoaded', () => {
    const vagaHeaders = document.querySelectorAll('.vaga-header');
    vagaHeaders.forEach(header => {
        header.addEventListener('click', () => {
            vagaHeaders.forEach(otherHeader => {
                if (otherHeader !== header && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = null;
                    otherHeader.querySelector('i').classList.replace('fa-minus', 'fa-plus');
                }
            });
            const isActive = header.classList.toggle('active');
            const detalhes = header.nextElementSibling;
            const icone = header.querySelector('i');
            if (isActive) {
                detalhes.style.maxHeight = detalhes.scrollHeight + "px";
                icone.classList.replace('fa-plus', 'fa-minus');
            } else {
                detalhes.style.maxHeight = null;
                icone.classList.replace('fa-minus', 'fa-plus');
            }
        });
    });
});