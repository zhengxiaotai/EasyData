<template>
    <div class="chart" :id="chartName"></div>
</template>

<script>
// import * as echarts from "echarts";

export default {
    name: 'DataChart', 
    props: {
        chartName: String,
        option: Object
    },
    data() {
        return {
            chart: null
        }
    }, 
    mounted() {
        // this.$nextTick(() => {
        //     this.chart = echarts.init(document.getElementById(this.chartName))
        //     this.chart.setOption(this.option)
        // })
    }, 
    methods: {

    }
}
</script>

<style scoped>
 .chart {
     width: 100%;
     height: 100%;
     background: #FEFEFE;
 }
</style>
