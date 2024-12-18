<template>
  <div id="main">
    <div class="tablecontent">

      <table>
        <thead>
          <tr>
            <td></td>
            <td>
              <a-radio-group>
                <a-radio-button  class="headnumber">1</a-radio-button>
                <a-radio-button  class="headnumber">2</a-radio-button>
                <a-radio-button  class="headnumber">3</a-radio-button>
                <a-radio-button  class="headnumber">4</a-radio-button>
                <a-radio-button  class="headnumber">5</a-radio-button>
                <a-radio-button  class="headnumber">6</a-radio-button>
              </a-radio-group>
            </td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
            <td>
              <a-button danger type="dashed" size="small">{{ rowIndex+1 }}</a-button>
            </td>
            <td>
              
              <a-input-group compact>
                <a-input-number @focus="handleFocus(rowIndex,0)" :status="poner_activo_estilo(rowIndex,0)" v-model:value="tableData[rowIndex][0]" :readOnly="isDisabled"  style="width: 90px" />
                <a-input-number @focus="handleFocus(rowIndex,1)" :status="poner_activo_estilo(rowIndex,1)" v-model:value="tableData[rowIndex][1]" :readOnly="isDisabled" style="width: 90px" />
                <a-input-number @focus="handleFocus(rowIndex,2)" :status="poner_activo_estilo(rowIndex,2)" v-model:value="tableData[rowIndex][2]" :readOnly="isDisabled" style="width: 90px" />
                <a-input-number @focus="handleFocus(rowIndex,3)" :status="poner_activo_estilo(rowIndex,3)" v-model:value="tableData[rowIndex][3]" :readOnly="isDisabled" style="width: 90px" />
                <a-input-number @focus="handleFocus(rowIndex,4)" :status="poner_activo_estilo(rowIndex,4)" v-model:value="tableData[rowIndex][4]" :readOnly="isDisabled" style="width: 90px" />
                <a-input-number @focus="handleFocus(rowIndex,5)" :status="poner_activo_estilo(rowIndex,5)" v-model:value="tableData[rowIndex][5]" :readOnly="isDisabled" style="width: 90px" />
              </a-input-group>
              </td>
              <td>
                <a-button type="primary" style="width: 80px;">{{ getSum(tableData[rowIndex])  }}</a-button>
              </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <a-button @click="toggleDisabled()">disabled input</a-button>
              <a-button @click="intercambiarvalores()">intercambiar</a-button>
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
import {getStorage, setStorage} from '../help'


function getInitialData() {
  const savedData = getStorage();
  console.log(savedData)
  if(savedData.length > 0) {
    console.log(savedData)
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

  if(enfocos.includes(`${row}-${column}`)) {
    return "warning"
  } else {
    return "default"
  }

}


function intercambiarvalores() {
  // Extraer los 2 últimos elementos
  let enfocos = elementos_enfocos.slice(-2);
  let ultimos_2 = enfocos.map((el) => {
    return el.split("-")
  })

  let copia_1 = tableData[ultimos_2[0][0]][ultimos_2[0][1]]
  let copia_2 = tableData[ultimos_2[1][0]][ultimos_2[1][1]]

  tableData[ultimos_2[1][0]][ultimos_2[1][1]] = copia_1
  tableData[ultimos_2[0][0]][ultimos_2[0][1]] = copia_2
  
}



const tableData = reactive(getInitialData())
const isDisabled = ref(false)
const elementos_enfocos = reactive([])
const primer_foco = ref([])
const segundo_foco = ref([])

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


</script>
<style scoped>

table {
  border-collapse: separate;
  border-spacing: 10px 0px; /* Espacio entre filas */
}

#main {
  display: flex;
  justify-content: center;
}

.tablecontent {
  margin: 0 auto;
  
}

.headnumber {
  width: 90px;
  text-align: center;
}

/*

tr:nth-child(even) {
  background-color: #f2f2f2; 
}

tr:nth-child(odd) {
  background-color: #d6d6d6; 
}

*/

.ant-input-number-input[readonly] {
  cursor: pointer !important;
}
</style>