 
<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    label1: {
      type: String
    },
     label2: {
      type: String
    },
    chartData1: {
      type: Array
    },
    chartData2: {
      type: Array
    },
    options: {
      type: Object,
    },
  },
  mounted () {
    //console.log(this.chartData1)
    //console.log(this.chartData2)
    const dates1 = this.chartData1.map(d => d.date).reverse();
    const totals1 = this.chartData1.map(d => d.total).reverse();
    const dates2 = this.chartData2.map(d => d.date).reverse();
    const totals2 = this.chartData2.map(d => d.total).reverse();
    //console.log(totals1)
    //console.log(totals2)
    

    this.renderChart({ 
        labels:dates1,dates2,
        datasets: [{
          label: this.label1,
          data: totals1,
          pointBorderColor: "#6B8F71",
          pointBackgroundcolor: "#AAD2BA",
          borderColor: "#6B8F71",
          backgroundColor: "#AAD2BA"
        },
        {
          label: this.label2,
          data: totals2,
          pointBorderColor: "#006E90",
          pointBackgroundcolor: "#006E90",
          borderColor: "#0E0E52",
          backgroundColor: "#80CED7"
        }]
    },
    this.options
    );
  }
}
</script>

<style>

</style>