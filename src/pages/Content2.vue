<template>
  <div id="main">
    
    <button @click="contador++">contador {{ contador }}</button>
    <hr>

    <code>{{ datos.num1 }}</code>

    <ul>
      <li v-for="elval, index in datos.multiples" :key="index">
        
        lista {{ index }} {{ elval }}

      </li>
    </ul>

    <div class="lacaja"></div>


    <div class="bloques">
      <div class="bloque1"></div>
      <div class="bloque2"></div>
      <div class="bloque3"></div>
    </div>

  </div>
</template>
<script setup>

import {reactive, ref, onMounted} from 'vue'



const contador = ref(0)
const datos = reactive({
  num1: 1,
  multiples: [1,2,3,4,5,6,7,8,9,10]
})


onMounted(() => {

  console.log("salida del inicio")

  const elemento = document.querySelector('.lacaja')

  elemento.addEventListener('click', function() {

    console.log("salida")

  })

})


</script>
<style scoped>

.lacaja {

  background-color: #eee;
  width: 200px;
  height:200px;
  
}

.bloques {
  display: flex;
  justify-content: space-evenly;

}

.bloques div {
  width: 100px;
  height: 100px;
  background-color: antiquewhite;
}

.bloques .bloque1 {
  background-color:aqua;
}


</style>