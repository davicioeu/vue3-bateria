<template>
  <div id="main">
   
    <a-float-button
      shape="circle"
      type="primary"
      :style="{
        right: '94px',
        top: '300px'
      }"

      @click="showModal"

    ></a-float-button>

    <a-modal v-model:open="open" title="Ingresar valores de las celdas" @ok="handleOk" @cancel="handleCancel" :maskClosable="false">
      <a-textarea class="textarea_estilo" v-model:value="texto_formulario" placeholder="ingresar valores" :rows="20" />
    </a-modal>


    <div class="tablecontent">

      <table>
        <thead>
          <tr>
            <td></td>
            <td style="padding-bottom: 5px;">
              <a-radio-group size="small">
                <a-radio-button value="a" class="headnumber" >1</a-radio-button>
                <a-radio-button value="b" class="headnumber" >2</a-radio-button>
                <a-radio-button value="c" class="headnumber" >3</a-radio-button>
                <a-radio-button value="d" class="headnumber" >4</a-radio-button>
                <a-radio-button value="e" class="headnumber" >5</a-radio-button>
                <a-radio-button value="f" class="headnumber" >6</a-radio-button>
              </a-radio-group>
            </td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
            <td>
              <a-button tabindex="-1" danger type="dashed" size="small" @click="ordenarfila(rowIndex)" :key="rowIndex">{{ rowIndex+1 }}</a-button>
            </td>
            <td :class="isDisabled ? 'classreadonly': ''">
              
              <a-input-group compact>
                <a-input-number @focus="handleFocus(rowIndex,0)" :status="poner_activo_estilo(rowIndex,0)" v-model:value="tableData[rowIndex][0]" :readOnly="isDisabled" :controls="!isDisabled" class="ainputnumber" />
                <a-input-number @focus="handleFocus(rowIndex,1)" :status="poner_activo_estilo(rowIndex,1)" v-model:value="tableData[rowIndex][1]" :readOnly="isDisabled" :controls="!isDisabled" class="ainputnumber" />
                <a-input-number @focus="handleFocus(rowIndex,2)" :status="poner_activo_estilo(rowIndex,2)" v-model:value="tableData[rowIndex][2]" :readOnly="isDisabled" :controls="!isDisabled" class="ainputnumber" />
                <a-input-number @focus="handleFocus(rowIndex,3)" :status="poner_activo_estilo(rowIndex,3)" v-model:value="tableData[rowIndex][3]" :readOnly="isDisabled" :controls="!isDisabled" class="ainputnumber" />
                <a-input-number @focus="handleFocus(rowIndex,4)" :status="poner_activo_estilo(rowIndex,4)" v-model:value="tableData[rowIndex][4]" :readOnly="isDisabled" :controls="!isDisabled" class="ainputnumber" />
                <a-input-number @focus="handleFocus(rowIndex,5)" :status="poner_activo_estilo(rowIndex,5)" v-model:value="tableData[rowIndex][5]" :readOnly="isDisabled" :controls="!isDisabled" class="ainputnumber" />
              </a-input-group>
              </td>
              <td>
                <a-button tabindex="-1" type="primary" class="btn-showresult">{{ getSum(tableData[rowIndex])  }}</a-button>
              </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <a-button tabindex="-1" @click="toggleDisabled()">Bloquear</a-button> | 
              <a-button tabindex="-1" @click="ordenarceldas()" type="primary" danger>ordenar celdas</a-button> | 
              <a-button tabindex="-1" @click="intercambiarvalores()">intercambiar valores</a-button> | 
              
              <a-tag color="blue">diferencia de: {{  diferenciadevalores }}</a-tag>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>

    </div>
  </div>
</template>
<script setup>

import {reactive, onMounted,onBeforeMount ,watch, ref} from 'vue'
import {getStorage, setStorage, useGlobalKey} from '../help'
import {balanceMatrix} from '../../balancear'


function getInitialData() {
  const savedData = getStorage();
  //console.log(savedData)
  if(savedData.length > 0) {
    //console.log(savedData)
    return savedData
  } else {
    return [
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
    ]
  }

}

function getSum(valuesarray) {
  let sum = 0
  valuesarray.forEach(element => {
    sum += element
  })

  return sum

}

const handleFocus = (row, column) => {
  
  //verificar si un elemento existe ya al final del mismo
  //para evitar duplicidad
  let element = `${row}-${column}`
  if(elementos_enfocos[elementos_enfocos.length - 1] !== element) {
    elementos_enfocos.push(element)
  }


};


function poner_activo_estilo(row, column) {

  let enfocos = elementos_enfocos.slice(-2);

  if(enfocos.length > 1) {
   
   let ultimos_2 = enfocos.map((el) => {
     return el.split("-")
   })

   let copia_1 = tableData[ultimos_2[0][0]][ultimos_2[0][1]]
   let copia_2 = tableData[ultimos_2[1][0]][ultimos_2[1][1]]

   diferenciadevalores.value = Math.abs((copia_1 - copia_2))

 }

  if(enfocos.includes(`${row}-${column}`)) {
    return "warning"
  } else {
    return "default"
  }




}


function intercambiarvalores() {
  // Extraer los 2 últimos elementos
  //console.log(elementos_enfocos.length)
  if(elementos_enfocos.length > 1) {
   
    let enfocos = elementos_enfocos.slice(-2);
    let ultimos_2 = enfocos.map((el) => {
      return el.split("-")
    })

    let copia_1 = tableData[ultimos_2[0][0]][ultimos_2[0][1]]
    let copia_2 = tableData[ultimos_2[1][0]][ultimos_2[1][1]]

    tableData[ultimos_2[1][0]][ultimos_2[1][1]] = copia_1
    tableData[ultimos_2[0][0]][ultimos_2[0][1]] = copia_2

    
    //diferenciadevalores.value = Math.abs((copia_1 - copia_2))


  }
  
}

function ordenarfila(row) {
  //console.log(row)
  let fila = tableData[row]
  fila = fila.sort((a, b) => a - b); // Ordena de menor a mayor
  tableData[row] = fila

}

function hacer_enter() {
  
  intercambiarvalores()
  
}

useGlobalKey(hacer_enter, 'Enter'); // Detecta la tecla "Enter"


function ordenarceldas() {

  // Ordenar las filas por la suma de sus elementos en orden ascendente
  //let miarray = tableData
  tableData.sort((a, b) => {
    const sumaA = a.reduce((acc, num) => acc + num, 0); // Suma de la fila 'a'
    const sumaB = b.reduce((acc, num) => acc + num, 0); // Suma de la fila 'b'
    return sumaA - sumaB; // Ordena de menor a mayor
  });

  console.log(tableData);


}

function convertir_array() {
   // Usar una expresión regular para dividir el texto
  let los_numeros = texto_formulario.value
  los_numeros = los_numeros
        .split(/[\s,;]+/) // Divide por espacios, comas, tabulaciones, punto y coma, etc.
        .map(num => num.trim()) // Elimina espacios innecesarios alrededor de los números
        .filter(num => num.length > 0) // Elimina entradas vacías
        .map(num => parseFloat(num)) // Convierte los valores a números (o parseInt dependiendo del caso)
    
    return los_numeros

}


const tableData = reactive(getInitialData())
const isDisabled = ref(false)
const elementos_enfocos = reactive([])
const diferenciadevalores = ref(0)
const texto_formulario = ref("")


const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value;
};



// Observa el cambio de una propiedad específica o todo el array
watch(
  //() => tableData.map(row => [...row]), // Realizamos una copia para "desenvolver" los datos reactivos
  tableData,
  (newVal, oldVal) => {
    //console.log('Nuevo valor:', newVal);
    setStorage(newVal)
    //console.log('Valor anterior:', oldVal);
  },
  { deep: true }
);

const open = ref(false);
const showModal = () => {
  open.value = true;
}

const handleOk = e => {
  //console.log(e);
  open.value = false;

  //console.log(convertir_array())
  let elementos_parabalancear = convertir_array()
  if(elementos_parabalancear.length > 0) {
    let balanceados = balanceMatrix(elementos_parabalancear,16,6)
    console.log(balanceados)
    tableData.splice(0, tableData.length, ...balanceados);

    texto_formulario.value = ""

  }
 

}

const handleCancel = e => {

  console.log("cancel")
  texto_formulario.value = ""
}


</script>
<style scoped>

table {
  border-collapse: separate;
  border-spacing: 5px 0px; /* Espacio entre filas */
}

#main {
  display: flex;
  justify-content: center;
  
}

.tablecontent {
  margin: 0 auto;

}

.classreadonly {
  opacity: 0.75;
}

.headnumber {
  width: 89.1px;
  text-align: center;
}

.ainputnumber {
  max-width: 90px;
}

.btn-showresult {
  width: 80px;
}

@media (max-width: 826px) {
  .ainputnumber {
    max-width: 60px;
  }

  .headnumber {
    max-width: 60px;
    text-align: center;
  }

  .btn-showresult {
    width: 60px;
  }


}

table tfoot tr td {
  padding-top: 10px;
}

.textarea_estilo {
  font-family: "Consolas", "Menlo", "Monaco", "Courier New", monospace;
}


</style>