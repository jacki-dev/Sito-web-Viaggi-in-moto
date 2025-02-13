document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const carouselImages = document.querySelector('.carousel-images');
    const slides = carouselImages.querySelectorAll('img');
    const totalSlides = slides.length;
    const slidesPerPage = 3;

    function moveSlide(direction) {
        // Calcolo la larghezza di ogni immagine (considerando margini)
        const slideWidth = slides[0].getBoundingClientRect().width + 30; // Considera i margini
        currentIndex += direction * slidesPerPage;

        // Se arrivo prima della prima immagine, torno all'ultima
        if (currentIndex < 0) {
            currentIndex = totalSlides - slidesPerPage;
            carouselImages.style.transition = 'none'; // Disabilito la transizione per il reset
            carouselImages.style.transform = `translateX(${-currentIndex * slideWidth}px)`; // Azzero l'offset
            setTimeout(() => {
                carouselImages.style.transition = 'transform 0.5s ease-in-out'; // Riattivo la transizione
            }, 50);
        } 
        // Se arrivo all'ultima immagine, torno all'inizio
        else if (currentIndex >= totalSlides - slidesPerPage) {
            currentIndex = 0;
        }

        const offset = -currentIndex * slideWidth;
        carouselImages.style.transform = `translateX(${offset}px)`;
    }

    // Aggiungi gli eventi ai bottoni
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => moveSlide(-1));
        nextButton.addEventListener('click', () => moveSlide(1));
    }
});