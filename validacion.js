function enviarFormulario() {
    
    const loadingMessage = document.querySelector('.loading');
    const errorMessage = document.querySelector('.error-message');
    const sentMessage = document.querySelector('.sent-message');


    // Antes de enviar el formulario
    loadingMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    sentMessage.style.display = 'none';

    // Después de un error en el envío
    loadingMessage.style.display = 'none';
    errorMessage.style.display = 'block';
    sentMessage.style.display = 'none';

    // Después de un envío exitoso
    loadingMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    sentMessage.style.display = 'block';
}