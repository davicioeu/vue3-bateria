import { onMounted, onUnmounted } from 'vue'

function setStorage(value) {

  localStorage.setItem('tableData', JSON.stringify(value))

}

function getStorage() {
  const data = localStorage.getItem('tableData')

  // Verificar si el dato existe en localStorage
  if (data) {
    // Convertir la cadena JSON de nuevo a un array
    const parsedData = JSON.parse(data);

    //console.log(parsedData);  // Muestra el array recuperado
    return parsedData
  } else {
    //console.log('No hay datos guardados.');
    return []
  }

}



function useGlobalKey(callback, key = 'Enter') {
  const handleKeydown = (event) => {
    if (event.key === key) {
      callback(event);
    }
  };

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
  });
}

export {setStorage, getStorage, useGlobalKey}