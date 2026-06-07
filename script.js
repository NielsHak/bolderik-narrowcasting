const slides = document.querySelectorAll('.slide');
let current = 0;

// Slides wisselen elke 8 seconden
setInterval(() => {
    slides[current].classList.remove('active');

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    slides[current].classList.add('active');

}, 8000);


// Alle agenda-iframes elke minuut verversen,
// maar alleen als ze op dat moment niet zichtbaar zijn
setInterval(() => {
    const agendaFrames = document.querySelectorAll('.agendaFrame');

    agendaFrames.forEach((iframe) => {
        const parentSlide = iframe.closest('.slide');

        if (!parentSlide.classList.contains('active')) {
            const baseUrl = iframe.src.split('?')[0];
            const agendaNumber = iframe.src.includes('agenda=2') ? '2' :
                                 iframe.src.includes('agenda=3') ? '3' : '1';

            iframe.src = baseUrl + '?agenda=' + agendaNumber + '&t=' + Date.now();
        }
    });

}, 60000);