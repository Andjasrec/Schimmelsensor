 
<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Array,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    const dates = this.chartData.map
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style>

</style>