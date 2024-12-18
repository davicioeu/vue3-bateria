import * as math from 'mathjs'

// Función para calcular la suma de cada fila
function rowSums(matrix) {
  return matrix.map(row => math.sum(row));
}

// Función principal sin iteraciones adicionales
function balanceMatrix(data, rows, cols) {
  // Cambiar el valor de 231 a 2310 en la lista de datos
  data = data.map(val => val === 231 ? 2310 : val);

  // Si no hay suficientes datos, completar con 0 hasta llegar al número necesario de elementos
  const totalElements = rows * cols;
  if (data.length < totalElements) {
    const missingElements = totalElements - data.length;
    // Añadir valores predeterminados (0 en este caso) hasta completar la matriz
    data = [...data, ...new Array(missingElements).fill(0)];
  }

  // Crear una matriz original con los datos
  let originalMatrix = math.reshape(data, [rows, cols]);
  //console.log("Matriz Original:");
  printMatrix(originalMatrix);

  // Inicializar la matriz de trabajo con los datos originales
  let currentMatrix = math.clone(originalMatrix);

  // Redistribuir los valores con base en la matriz actual
  currentMatrix = redistributeValues(currentMatrix, rows, cols);

  // Mostrar la matriz final redistribuida
  //console.log("\nMatriz Redistribuida Final:");
  printMatrix(currentMatrix);

  // Mostrar las sumas finales de las filas
  let finalSums = rowSums(currentMatrix);
  //console.log("\nSuma de Filas Redistribuidas:");
 // console.log(finalSums);

  return currentMatrix
}

// Función para redistribuir valores en la matriz
function redistributeValues(matrix, rows, cols) {
  // Extraer todos los valores de la matriz
  let allValues = math.flatten(matrix).valueOf();
  allValues.sort((a, b) => a - b);  // Ordenar los valores para facilitar la redistribución

  // Crear una nueva matriz vacía
  let newMatrix = math.zeros([rows, cols]).valueOf();
  let rowSumsArr = new Array(rows).fill(0); // Guardar las sumas actuales de cada fila

  // Redistribuir los valores en la nueva matriz
  for (let value of allValues) {
    // Encontrar la fila con la suma mínima
    let minRow = rowSumsArr.indexOf(Math.min(...rowSumsArr));

    // Colocar el valor en la primera columna disponible de esa fila
    for (let j = 0; j < cols; j++) {
      if (newMatrix[minRow][j] === 0) { // Buscar la posición vacía
        newMatrix[minRow][j] = value;
        rowSumsArr[minRow] += value; // Actualizar la suma de la fila
        break;
      }
    }
  }
  return newMatrix;
}

// Función para imprimir una matriz
function printMatrix(matrix) {
  matrix.forEach(row => {
    console.log(row.map(val => val.toFixed(0)).join("\t"));
  });
}

// Datos de entrada con 231 cambiado por 2310
const data = [
  2423, 2131, 2212, 2332, 1969, 2584, 2405, 2310, 2314, 2331, 1958, 2521,
  2306, 2154, 2224, 2427, 1920, 2620, 2368, 2263, 2233, 2421, 1956, 2610,
  2367, 2167, 2241, 2316, 2019, 2613, 2357, 2176, 2250, 2305, 2383, 2070,
  2177, 2357, 2252, 2298, 2280, 2659, 2182, 2350, 2257, 2292, 2239, 2671,
  2185, 2249, 2276, 2290, 2287, 2686, 2187, 2348, 2258, 2291, 2283, 2666,
  2192, 2246, 2255, 2292, 2065, 2080, 2193, 2341, 2242, 2313, 2249, 2615,
  2194, 2341, 2238, 2313, 2099, 2630, 2198, 2341, 2226, 2323, 2098, 2639,
  2022, 2334, 2217, 2327, 2053, 2639, 2203, 2333, 2206, 2333, 2099, 2655,
]

// Parámetros de la matriz
const rows = 16;
const cols = 6;

// Ejecutar la función principal
//balanceMatrix(data, rows, cols);


export {balanceMatrix}