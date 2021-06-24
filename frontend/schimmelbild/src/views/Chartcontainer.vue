<template>
  <div class="container">
    <line-chart/>
  </div>
</template>

<script>
import LineChart from './Chart.vue';
import axios from "axios";
import moment from "moment";
export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data(){
    return{
      data(){
        arrLuftfeuchtigkeit: []
        arrTemperatur: []
      }
    }
  },
  async created() {
  const { data } = await axios.get("http://localhost:3000/api/last10");
  console.log(data)
  data.forEach(d => {
    const date = moment(d.createdat, "YYYYMMDD").format("MM/DD");

    const {
        Luftfeuchtigkeit,
        Temperatur,
      } = d;

      this.arrLuftfeuchtigkeit.push({ date, Luftfeuchtigkeit });
      this.arrTemperatur.push({ date, Temperatur });

      console.log(this.arrTemperatur)
  });
  },
  
  
}
</script>