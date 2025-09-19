
const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');


function guardarDato() {
    const valorInput = inputText.value;
    if (valorInput.trim() !== '') {
        localStorage.setItem('dato', valorInput);
        alert('¡Dato guardado correctamente!');
        inputText.value = '';
    } else {
        alert('Por favor, ingresa un dato válido');
    }
}
buttonText.addEventListener('click', guardarDato);
inputText.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        guardarDato();
    }
});