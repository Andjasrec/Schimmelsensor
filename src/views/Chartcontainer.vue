<template>
  <div class="container" v-if="arrLuftfeuchtigkeit.length > 0" >
    <line-chart :chartData1="arrTemperatur" :chartData2="arrLuftfeuchtigkeit" :options="chartOptions" label1="Raumtemperatur" label2="Luftfeuchtigkeit"></line-chart>
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
        },
    }
  },
  async created() {
  const { data } = await axios.get("https://schimmelsensor_backend.ds.ava.hfg.design/api/last10");
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