 
<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    label: {
      type: String
    },
    chartData: {
      type: Array
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    //console.log(chartData)
    const dates = this.chartData.map(this.chartData.date).reverse();
    const Luftfeuchtigkeits = this.chartData.map(this.chartData.Luftfeuchtigkeit).reverse();
    this.renderChart({
        labels:dates,
        datasets: [{
          label: this.label,
          data: Luftfeuchtigkeits
        }]
    },
    this.options
    );
  }
}
</script>

<style>

</style>