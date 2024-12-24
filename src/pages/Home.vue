<template>
  <a-layout class="layout">
    
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item > <router-link to="/">Home</router-link> </a-breadcrumb-item>
        <a-breadcrumb-item> <router-link to="/page1">Page1</router-link> </a-breadcrumb-item>
      </a-breadcrumb>
      <div class="mi-layout-content">
        
        <router-view></router-view>

      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Davicio.eu
    </a-layout-footer>
  </a-layout>
</template>
<script setup>


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