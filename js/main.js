document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');
    let selectedRating = null;
  
    buttons.forEach((button) => {
      button.addEventListener('click', function () {
        buttons.forEach((button) => button.classList.remove('active'));
        this.classList.add('active');
        selectedRating = this.getAttribute('data-number');
        if (selectedRating) {
          sendButton.disabled = false;
          sendButton.style.backgroundColor = 'hsl(25, 97%, 53%)';
        }
      });
    });
  
    const sendButton = document.querySelector('.send');
    sendButton.addEventListener('click', function () {
        
      if (selectedRating) {
        // Oculta el formulario de comentarios
        document.querySelector('div.card').classList.add("confirmation");
        // Mostrar la pantalla de confirmación
        document.querySelector('.confirmationCard').classList.remove("confirmation");;
        // Actualizar la calificación seleccionada
        document.querySelector('.message .rating').textContent = selectedRating;
      } else {
        alert('Por favor, selecciona una valoración antes de enviar.');
      }
    });
  });
  