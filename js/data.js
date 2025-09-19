
window.addEventListener('DOMContentLoaded', function() {
  
    const dataElement = document.getElementById('data');
    const datoGuardado = localStorage.getItem('dato');
    if (datoGuardado !== null) {
          dataElement.textContent = datoGuardado;
    } else {   
        dataElement.textContent = 'No hay datos guardados';
        dataElement.style.color = '#999';
        dataElement.style.fontStyle = 'italic';
    }
});