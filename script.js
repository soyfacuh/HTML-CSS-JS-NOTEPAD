const editor = document.getElementById('editor');
const guardarBtn = document.getElementById('guardar');
const limpiarBtn = document.getElementById('limpiar');

guardarBtn.addEventListener('click', () => {

    const contenido = editor.value;
    
    const archivo = new Blob([contenido], { type: 'text/plain' });
  
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.download = 'archivo.txt';
    enlaceDescarga.href = window.URL.createObjectURL(archivo);
  
    enlaceDescarga.click();
  });
  

limpiarBtn.addEventListener('click', () => {
    if (confirm('¿Está seguro de que desea limpiar todo el contenido?')) {
      editor.value = '';
    }
  });
  

window.addEventListener('load', () => {
	editor.value = localStorage.getItem('texto') || '';
});
