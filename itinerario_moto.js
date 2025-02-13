 // Seleziona tutte le immagini cliccabili
 const clickableImages = document.querySelectorAll('.clickable-img');

 clickableImages.forEach(img => {
   img.addEventListener('click', function() {
     // Ottieni l'URL dell'immagine e la descrizione associata
     const modalImage = document.getElementById('modalImage');
     const modalDescription = document.getElementById('modalDescription');

     const imgSrc = img.getAttribute('data-img');
     const imgDesc = img.getAttribute('data-desc');

     // Imposta l'immagine e la descrizione nella modale
     modalImage.src = imgSrc;
     modalDescription.textContent = imgDesc;

     // Mostra la modale
     var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
     myModal.show();
   });
 });