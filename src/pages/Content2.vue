<template>
  <div id="main">
    <div class="tablecontent">

      <table>
        <thead>
          <tr>
            <td></td>
            <td>
              <a-radio-group v-model:value="size">
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
          <tr>
            <td>
              <a-button type="dashed" size="small">1</a-button>
            </td>
            <td>
              
              <a-input-group compact>
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
              </a-input-group>
              </td>
              <td>
                <a-button type="dashed">Resultado</a-button>
              </td>
          </tr>
          <tr>
            <td>
              <a-button type="dashed"  size="small">2</a-button>
            </td>
            <td>
              <a-input-group compact>
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
              </a-input-group>
              </td>
              <td>
                <a-button type="dashed">Resultado</a-button>
              </td>
          </tr>
          <tr>
            <td>
              <a-button type="dashed"  size="small">3</a-button>
            </td>
            <td>
              <a-input-group compact>
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
              </a-input-group>
              </td>
              <td>
                <a-button type="dashed">Resultado</a-button>
              </td>
          </tr>
          <tr>
            <td>
              <a-button type="dashed"  size="small">4</a-button>
            </td>
            <td>
              <a-input-group compact>
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
              </a-input-group>
              </td>
              <td>
                <a-button type="dashed">Resultado</a-button>
              </td>
          </tr>
          <tr>
            <td>
              <a-button type="dashed"  size="small">5</a-button>
            </td>
            <td>
              <a-input-group compact>
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
              </a-input-group>
              </td>
              <td>
                <a-button type="dashed">Resultado</a-button>
              </td>
          </tr>
          <tr>
            <td>
              <a-button type="dashed"  size="small">6</a-button>
            </td>
            <td>
              <a-input-group compact>
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
              </a-input-group>
              </td>
              <td>
                <a-button type="dashed">Resultado</a-button>
              </td>
          </tr>
          <tr>
            <td>
              <a-button type="dashed"  size="small">7</a-button>
            </td>
            <td>
              <a-input-group compact>
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
              </a-input-group>
              </td>
              <td>
                <a-button type="dashed">Resultado</a-button>
              </td>
          </tr>
          <tr>
            <td>
              <a-button type="dashed"  size="small">8</a-button>
            </td>
            <td>
              <a-input-group compact>
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
              </a-input-group>
              </td>
              <td>
                <a-button type="dashed">Resultado</a-button>
              </td>
          </tr>
          <tr>
            <td>
              <a-button type="dashed"  size="small">9</a-button>
            </td>
            <td>
              <a-input-group compact>
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
              </a-input-group>
              </td>
              <td>
                <a-button type="dashed">Resultado</a-button>
              </td>
          </tr>
          <tr>
            <td>
              <a-button type="dashed"  size="small">10</a-button>
            </td>
            <td>
              <a-input-group compact>
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
              </a-input-group>
              </td>
              <td>
                <a-button type="dashed">Resultado</a-button>
              </td>
          </tr>
          <tr>
            <td>
              <a-button type="dashed"  size="small">11</a-button>
            </td>
            <td>
              <a-input-group compact>
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
              </a-input-group>
              </td>
              <td>
                <a-button type="dashed">Resultado</a-button>
              </td>
          </tr>
          <tr>
            <td>
              <a-button type="dashed"  size="small">12</a-button>
            </td>
            <td>
              <a-input-group compact>
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
              </a-input-group>
              </td>
              <td>
                <a-button type="dashed">Resultado</a-button>
              </td>
          </tr>
          <tr>
            <td>
              <a-button type="dashed"  size="small">13</a-button>
            </td>
            <td>
              <a-input-group compact>
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
              </a-input-group>
              </td>
              <td>
                <a-button type="dashed">Resultado</a-button>
              </td>
          </tr>
          <tr>
            <td>
              <a-button type="dashed"  size="small">14</a-button>
            </td>
            <td>
              <a-input-group compact>
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
              </a-input-group>
              </td>
              <td>
                <a-button type="dashed">Resultado</a-button>
              </td>
          </tr>
          <tr>
            <td>
              <a-button type="dashed"  size="small">15</a-button>
            </td>
            <td>
              <a-input-group compact>
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
              </a-input-group>
              </td>
              <td>
                <a-button type="dashed">Resultado</a-button>
              </td>
          </tr>
          <tr>
            <td>
              <a-button type="dashed"  size="small">16</a-button>
            </td>
            <td>
              <a-input-group compact>
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value1" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
                <a-input-number v-model:value="value2" style="width: 100px" />
              </a-input-group>
              </td>
              <td>
                <a-button type="dashed">Resultado</a-button>
              </td>
          </tr>

        </tbody>
      </table>

    </div>
  </div>
</template>
<script setup>

import {reactive} from 'vue'

const tableData = reactive([
  [11,12,13,14,15,16],
  [21,22,23,24,25,26],
  [31,32,33,34,35,36],
  [41,42,43,44,45,46],
  [51,52,53,54,55,56],
  [61,62,63,64,65,66],
])


</script>
<style scoped>

table {
  border-collapse: separate; /* Necesario para que border-spacing funcione */
  border-spacing: 10px 10px; /* Espacio horizontal (0) y vertical (10px) */
}

#main {
  display: flex;
  justify-content: center;
}

.tablecontent {
  margin: 0 auto;
  
}

.headnumber {
  width: 100px;
  text-align: center;
}

</style>