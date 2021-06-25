<template>
  <div class="container" v-if="arrLuftfeuchtigkeit.length > 0" >
    <line-chart :chartData="arrLuftfeuchtigkeit" :options="chartOptions" label="Luftfeuchtigkeit"></line-chart>
  </div>
</template>

<script>
import LineChart from './chart.vue';
import axios from "axios";
import moment from "moment";
export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data(){
    return{
        arrLuftfeuchtigkeit: [],
        arrTemperatur: [],
        chartOptions:{
          responive: true,
          maintianAspectRatio:false
        }
    }
  },
  async created() {
  const { data } = await axios.get("http://localhost:3000/api/last10");
  //console.log(data)
  data.forEach(d => {
    const date = moment(d.createdat, "YYYYMMDD").format("MM/DD");

    const {
        Luftfeuchtigkeit,
        Temperatur,
      } = d;

      this.arrLuftfeuchtigkeit.push({ date, total:Luftfeuchtigkeit });
      this.arrTemperatur.push({ date, total:Temperatur });
      
      
  });
  //console.log(this.arrLuftfeuchtigkeit)
  },
  
  
}
</script>