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

// Voetbal countdown //

const targetKickoff = new Date("2026-07-04T19:00:00+02:00");

function updateCountdown() {
  const countdown = document.getElementById("countdown");
  if (!countdown) return;

  let diff = targetKickoff - new Date();

if (diff <= 0) {
    countdown.innerHTML = "NU LIVE!";
    countdown.style.fontSize = "150px";
    return;
}

  const hours = Math.floor(diff / 1000 / 60 / 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.textContent =
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);