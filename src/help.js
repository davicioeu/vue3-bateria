

function setStorage(value) {

  localStorage.setItem('tableData', JSON.stringify(value))

}

function getStorage() {
  const data = localStorage.getItem('tableData')

  // Verificar si el dato existe en localStorage
  if (data) {
    // Convertir la cadena JSON de nuevo a un array
    const parsedData = JSON.parse(data);

    console.log(parsedData);  // Muestra el array recuperado
    return parsedData
  } else {
    console.log('No hay datos guardados.');
    return []
  }

}

export {setStorage, getStorage}