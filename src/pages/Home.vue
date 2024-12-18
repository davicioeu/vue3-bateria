<template>
  <a-layout class="layout">
    
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Inicio</a-breadcrumb-item>
        <a-breadcrumb-item>Celdas de baterias</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="mi-layout-content">
        
        <Content></Content>

      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Davicio.eu
    </a-layout-footer>
  </a-layout>
</template>
<script setup>
import { ref } from 'vue'
import Content from './Content.vue'

</script>
<style scoped>

.layout {
  height: 100vh;
}

.mi-layout-content {
  background: #fff;
  padding: 24px;
  min-height: 280px;
  min-width: 625px;
}

@media (max-width: 826px) {

  .mi-layout-content {
    background: #fff;
    padding: 5px;
    min-height: 280px;
    min-width: 625px;
   }


}


</style>