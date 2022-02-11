<template>
    <div class="menu">
        <el-tooltip content="页面设计/生成" placement="bottom">
            <span class="menu-item">
                <router-link to="/">
                <svg t="1642647347050" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8243" width="22" height="22"><path d="M149.333333 800h128c29.866667 0 53.333333-23.466667 53.333334-53.333333V533.333333c0-29.866667-23.466667-53.333333-53.333334-53.333333H149.333333c-29.866667 0-53.333333 23.466667-53.333333 53.333333v213.333334c0 29.866667 23.466667 53.333333 53.333333 53.333333z m10.666667-256h106.666667v192h-106.666667v-192zM448 800h128c29.866667 0 53.333333-23.466667 53.333333-53.333333V149.333333c0-29.866667-23.466667-53.333333-53.333333-53.333333h-128c-29.866667 0-53.333333 23.466667-53.333333 53.333333v597.333334c0 29.866667 23.466667 53.333333 53.333333 53.333333z m10.666667-640h106.666666v576h-106.666666v-576zM874.666667 309.333333h-128c-29.866667 0-53.333333 23.466667-53.333334 53.333334v384c0 29.866667 23.466667 53.333333 53.333334 53.333333h128c29.866667 0 53.333333-23.466667 53.333333-53.333333V362.666667c0-29.866667-23.466667-53.333333-53.333333-53.333334z m-10.666667 426.666667h-106.666667v-362.666667h106.666667v362.666667zM896 853.333333H128c-17.066667 0-32 14.933333-32 32S110.933333 917.333333 128 917.333333h768c17.066667 0 32-14.933333 32-32S913.066667 853.333333 896 853.333333z" p-id="8244" fill="#666666"></path></svg>
                </router-link>
            </span>
        </el-tooltip>
        <el-tooltip content="Excel可视化" placement="bottom">
            <span class="menu-item active">
                <svg t="1642647062215" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6614" width="22" height="22"><path d="M832 96H192c-35.2 0-64 28.8-64 64v704c0 35.2 28.8 64 64 64h640c35.2 0 64-28.8 64-64V160c0-35.2-28.8-64-64-64zM192 416h640v192H192v-192z m640-256v192H192V160h640zM192 864v-192h640v192H192z" p-id="6615" fill="#666666"></path><path d="M288 256m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" p-id="6616" fill="#666666"></path><path d="M288 512m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" p-id="6617" fill="#666666"></path><path d="M288 768m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" p-id="6618" fill="#666666"></path></svg>
            </span>
        </el-tooltip>
        <span class="menu-separator"></span>
        
        <el-tooltip content="打开Excel" placement="bottom">
            <span class="menu-item" @click="openExcel()">
                <svg t="1642581939189" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1117" width="22" height="22"><path d="M896 384V320H608a128 128 0 0 1-102.4-51.2L448 192H128v192h768z m0 64H128v384h768V448zM128 128h315.328a64 64 0 0 1 50.112 24.192l63.36 79.616A64 64 0 0 0 606.848 256H896a64 64 0 0 1 64 64v512a64 64 0 0 1-64 64H128a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64z" p-id="1118" fill="#666666"></path></svg>
            </span>
        </el-tooltip>
        <input type="file" accept=".xls,.xlsx" id="excel" style="display: none" @change="loadExcel()">
    </div>

    <div class="container" v-loading="loading">
        <div class="left">
            <div v-for="(item, i) in this.tables" v-bind:key="i" class="table-name" :id="'table_' + i" @click="selectCurrent(item, i)">{{item}}</div>
        </div>
        <div class="right">
            <el-form :inline="true" size="mini">
                <el-row>
                    <el-col :span="5">
                        <el-form-item label="维度">
                            <el-select v-model="this.xAxis" placeholder="请选择" id="xaxis" @change="dataModified()">
                                <el-option 
                                    v-for="item in this.columns[this.current]" 
                                    :key="item"
                                    :label="item"
                                    :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="14">
                        <el-form-item label="数据">
                            <el-select v-model="this.yAxis" multiple multiple-limit="3" placeholder="请选择" id="yaxis" style="width:40vw" @change="dataModified()">
                                <el-option 
                                    v-for="item in this.columns[this.current]" 
                                    :key="item"
                                    :label="item"
                                    :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="">
                            <el-radio-group v-model="this.queryType">
                                <el-radio-button label="COUNT">
                                    <svg t="1644548058878" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1953" width="12" height="12"><path d="M866.459706 205.439092V117.534865H238.987366l366.025532 362.771972a54.497135 54.497135 0 0 1 0 79.886525l-360.215603 345.225986h621.662411v-52.754157a58.912681 58.912681 0 0 1 63.90922-59.145078 61.352851 61.352851 0 0 1 63.90922 59.145078v111.841135a62.398638 62.398638 0 0 1-63.90922 59.145078l-836.629787-1.568681a69.138156 69.138156 0 0 1-58.099291-35.150071 53.393248 53.393248 0 0 1 11.619858-63.909219l424.124823-405.881646L47.259706 98.420199a53.27705 53.27705 0 0 1-11.619858-63.90922 71.171631 71.171631 0 0 1 58.099291-33.58139h836.629787a61.352851 61.352851 0 0 1 63.90922 59.145078v146.991205a62.398638 62.398638 0 0 1-63.90922 59.145078 64.838809 64.838809 0 0 1-63.90922-60.713759z m0 0" p-id="1954"></path></svg>
                                </el-radio-button>
                                <el-radio-button label="SUM">
                                    <svg t="1644548308899" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3416" width="12" height="12"><path d="M742.4 64h-697.6c-12.8 0-19.2 0-25.6 6.4-12.8 12.8-12.8 38.4 0 51.2l38.4 38.4 313.6 313.6c6.4 6.4 6.4 25.6 0 32l-300.8 300.8-64 64v51.2c0 19.2 19.2 38.4 38.4 38.4h704c19.2 0 32-12.8 32-32v-64c0-19.2-12.8-32-32-32s-38.4 12.8-38.4 32v32h-633.6l345.6-345.6c32-32 32-89.6 0-121.6l-307.2-300.8h595.2v32c0 19.2 12.8 32 32 32s32-12.8 32-32v-64c0-19.2-12.8-32-32-32z" p-id="3417"></path><path d="M633.6 544l32 6.4 6.4 6.4c-6.4 32-12.8 51.2-32 64-12.8 19.2-32 25.6-51.2 25.6-32 0-51.2-12.8-70.4-32-12.8-25.6-25.6-57.6-25.6-96 0-44.8 12.8-76.8 25.6-96 19.2-19.2 38.4-32 70.4-32 19.2 0 38.4 6.4 51.2 19.2s25.6 32 25.6 57.6l-6.4 6.4-25.6 6.4-6.4-6.4c0-12.8-6.4-25.6-12.8-32s-19.2-6.4-25.6-6.4c-12.8 0-25.6 6.4-32 19.2-6.4 12.8-12.8 32-12.8 64s6.4 51.2 12.8 64c6.4 12.8 19.2 19.2 32 19.2s19.2-6.4 25.6-12.8c6.4-6.4 12.8-19.2 19.2-44.8-6.4 6.4 0 0 0 0zM761.6 403.2c12.8-6.4 25.6-12.8 38.4-12.8 12.8 0 19.2 0 32 6.4 6.4 6.4 19.2 12.8 25.6 19.2 6.4 6.4 12.8 19.2 12.8 25.6 0 12.8 6.4 25.6 6.4 51.2v140.8l-6.4 6.4h-32l-6.4-6.4v-140.8c0-19.2 0-25.6-6.4-32 0-6.4-6.4-12.8-12.8-12.8-6.4-6.4-12.8-6.4-19.2-6.4-12.8 0-25.6 6.4-32 12.8-6.4 12.8-12.8 25.6-12.8 57.6v128l-6.4 6.4h-32l-6.4-12.8v-230.4l6.4-6.4h32l6.4 6.4v12.8l12.8-12.8zM979.2 569.6v19.2s6.4 6.4 12.8 6.4h12.8l6.4 6.4 6.4 32-6.4 6.4c-6.4 0-19.2 6.4-25.6 6.4-12.8 0-25.6 0-32-6.4l-19.2-19.2c0-6.4-6.4-25.6-6.4-51.2v-128h-19.2l-6.4-6.4v-32l6.4-6.4h19.2v-57.6l44.8-25.6 12.8 6.4v76.8h25.6l6.4 6.4v32l-6.4 6.4h-25.6l-6.4 128z" p-id="3418"></path></svg>
                                </el-radio-button>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div class="options">
                <span class="btn-chart" @click="updateChart('bar')"><i class="fa fa-bar-chart"></i></span>
                <span class="btn-chart" @click="updateChart('line')"><i class="fa fa-line-chart"></i></span>
                <span class="btn-chart" @click="updateChart('pie')"><i class="fa fa-pie-chart"></i></span>
            </div>
            <el-divider></el-divider>
            <div class="main-chart" id="chart"></div>
        </div>
    </div>
</template>

<script>
import XLSX from "xlsx"
import * as echarts from "echarts";
import { DefaultBar, DefaultLine, DefaultPie } from '../utils/options';

export default {
    name: 'ExcelVisualizer', 
    data() {
        return {
            loading: false,
            db: null, 
            tables: [],
            columns: {}, 
            current: '', 
            xAxis: '',
            yAxis: [], 
            queryType: 'COUNT',
            chart: null, 
            option: {
                title: {
                    text: 'test', 
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis', 
                    axisPointer: { type: 'shadow' }
                }, 
                xAxis: {
                    type: 'category', 
                    axisTick: { show: false }, 
                    splitLine: { show: false }, 
                    data: []
                }, 
                yAxis: {
                    type: 'value', 
                    axisTick: { show: false }, 
                    axisLabel: { show: false }, 
                    splitLine: { show: false }, 
                }, 
                series: []
            }, 
            modified: false
        }
    }, 
    created() {
        
    }, 
    mounted() {
        this.db = openDatabase('mydb', '1.0', '', 5*1024*1024)
        this.chart = echarts.init(document.getElementById("chart"))
    },
    methods: {
        openExcel() {
            var file = document.getElementById("excel")
            file.click()
        }, 
        loadExcel() {
            var _this = this
            var reader = new FileReader()
            reader.readAsArrayBuffer(document.getElementById("excel").files[0])
            reader.onload = function(e) {
                _this.loading = true
                var bytes = new Uint8Array(e.target.result)
                var binary = ""
                for (var i = 0; i < bytes.byteLength; i++) {
                    binary += String.fromCharCode(bytes[i])
                }
                var workbook = XLSX.read(binary, {
                    type: 'binary'
                });
                var SQL = []
                for (var index = 0; index < workbook.SheetNames.length; index++) {
                    var sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[index]])
                    _this.current = workbook.SheetNames[index]
                    _this.tables.push(workbook.SheetNames[index])
                    _this.columns[workbook.SheetNames[index]] = Object.keys(sheetData[0])

                    var SQL_COLUMN = '('
                    for (i in _this.columns[workbook.SheetNames[index]]) {
                        SQL_COLUMN += _this.columns[workbook.SheetNames[index]][i] + ', '
                    }
                    SQL_COLUMN = SQL_COLUMN.slice(0, SQL_COLUMN.length - 2) + ')'
                    // _this.db.transaction(function(tx) {
                    //     console.log('DROP TABLE ' + workbook.SheetNames[index])
                    //     tx.executeSql('DROP TABLE ' + workbook.SheetNames[index]) 
                    // })
                    SQL.push('CREATE TABLE IF NOT EXISTS ' + workbook.SheetNames[index].toString() + ' ' + SQL_COLUMN.toString())
                    console.log('CREATE TABLE IF NOT EXISTS ' + workbook.SheetNames[index].toString() + ' ' + SQL_COLUMN.toString())
                    var SQL_DATA = ''
                    for (i = 0; i < sheetData.length; i++) {
                        SQL_DATA = '('
                        for (var j in _this.columns[workbook.SheetNames[index]]) {
                            SQL_DATA += '\'' + sheetData[i][_this.columns[workbook.SheetNames[index]][j]] + '\', '
                        }
                        SQL_DATA = SQL_DATA.slice(0, SQL_DATA.length - 2) + ')'
                        SQL.push('INSERT INTO ' + workbook.SheetNames[index] + SQL_COLUMN + ' VALUES ' + SQL_DATA)
                    }
                }
                _this.db.transaction(function(tx) {
                    for (i = 0; i < _this.tables.length; i++) {
                        tx.executeSql('DROP TABLE ' + _this.tables[i])
                    }
                })
                _this.db.transaction(function(tx) {
                    for (i = 0; i < SQL.length; i++) {
                        tx.executeSql(SQL[i])                   
                    }
                })
                _this.$nextTick(() => {
                    _this.selectCurrent(_this.tables[0], 0)
                    console.log(_this.columns)
                })
                
            }
        },
        updateChart(type) {
            var _this = this
            _this.db.transaction(function(tx) {
                var sql_y = ''
                for (var i = 0; i < _this.yAxis.length; i++) {
                    sql_y += ', ' + _this.queryType + '(' + _this.yAxis[i] + ') AS ' + _this.yAxis[i]
                }
                var sql = 'SELECT ' + _this.xAxis + sql_y + ' FROM ' + _this.current + ' GROUP BY ' + _this.xAxis
                console.log('QUERY: ' + sql)
                tx.executeSql(sql, [], function(tx, results) {
                    var xAxisData = []
                    var data = []
                    var pieData = []
                    for (i = 0; i < results.rows.length; i++) {
                        xAxisData.push(results.rows[i][_this.xAxis])
                        for (var j = 0; j < _this.yAxis.length; j++) {
                            if (data[j] == null) {
                                data.push([])
                            }
                            data[j].push(results.rows[i][_this.yAxis[j]])
                            if (pieData[j] == null) {
                                pieData.push([])
                            }
                            pieData[j].push({name: results.rows[i][_this.xAxis], value: results.rows[i][_this.yAxis[j]]})
                        }
                        // data.push(results.rows[i][_this.yAxis[0]])
                        // pieData.push({name: results.rows[i][_this.xAxis], value: results.rows[i][_this.yAxis[0]]})
                    }
                    if (type == 'bar') {
                        _this.option = DefaultBar()
                        _this.option.xAxis.data = xAxisData
                        // _this.option.series[0].data = data
                        _this.option.series = []
                        for (j = 0; j < _this.yAxis.length; j++) {
                            _this.option.series.push({
                                type: 'bar', 
                                name: _this.yAxis[j],
                                data: data[j], 
                                emphasis: { focus: 'series' }, 
                                universalTransition: true,
                                animationDurationUpdate: 1000
                            })
                        }
                    }
                    else if (type == 'line') {
                        _this.option = DefaultLine()
                        _this.option.xAxis.data = xAxisData
                        // _this.option.series[0].data = data
                        _this.option.series = []
                        for (j = 0; j < _this.yAxis.length; j++) {
                            _this.option.series.push({
                                type: 'line', 
                                name: _this.yAxis[j],
                                data: data[j], 
                                areaStyle: {}, 
                                universalTransition: true,
                                animationDurationUpdate: 1000
                            })
                        }
                    }
                    else if (type == 'pie') {
                        _this.option = DefaultPie()
                        // _this.option.series[0].data = pieData
                        // _this.option.xAxis = {}

                        _this.option.series = []
                        for (j = 0; j < _this.yAxis.length; j++) {
                            _this.option.series.push({
                                type: 'pie', 
                                name: _this.yAxis[j],
                                data: pieData[j], 
                                radius: [j * (80 /  _this.yAxis.length), (j+1) * (80 /  _this.yAxis.length)-5], 
                                roseType: false, 
                                label: { show: false }, 
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10, 
                                        shadowOffsetX: 0, 
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }, 
                                universalTransition: true,
                                animationDurationUpdate: 1000
                            })
                        }
                    }
                    if (_this.modified) {
                        _this.chart.clear()
                    }
                    _this.chart.setOption(_this.option)
                    _this.modified = false
                });
            })
        },
        selectCurrent(item, i) {
            document.getElementById("table_" + this.tables.indexOf(this.current)).classList.remove("active")
            this.current = item
            this.xAxis = ''
            this.yAxis = []
            document.getElementById("table_" + i).classList.add("active")
        }, 
        dataModified() {
            this.modified = true
        }
    }
}
</script>

<style scoped>
    .menu {
        height: 30px;
        padding: 15px;
        font-size: 20px;
        text-align: left;
        border-bottom: #E0E0E0 1px solid;
        box-shadow: #F0F0F0 0 2px 8px;
        background-color: #FFFFFF;
        line-height: 30px;
    }
    .menu .menu-item {
        display: inline-block;
        height: 30px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        border: #F0F0F0 1px solid;
        border-radius: 4px;
        margin: 0 3px;
        vertical-align: top;
    }
    .menu .menu-item:hover {
        border: #E0E0E0 1px solid;
        background-color: #F0F0F0;
    }
    .menu .menu-item .icon {
        margin-top: 3px;
    }
    .menu .menu-item.active {
        background-color: #E0E0E0;
        border: #D0D0D0 1px solid;
    }
    .menu-separator {
        display: inline-block;
        height: 30px;
        width: 0;
        line-height: 30px;
        width: 1px;
        border-left: #E0E0E0 1px solid;
        margin: 0 8px;
    }

    .container {
        width: 100%;
        height: calc(100vh - 61px);
        display: flex;
    }
    .left {
        width: 20%;
        padding: 10px 2%;
        overflow: hidden scroll;
        border-right: #E0E0E0 1px solid;
    }
    .right {
        width: 76%;
        padding: 10px 2%;
    }
    .left::-webkit-scrollbar, .right::-webkit-scrollbar {
        display: none;
    }
    .table-name {
        margin: 8px 2%;
        padding: 5px 0;
        border: #F0F0F0 1px solid;
        text-align: center;
    }
    .table-name:hover, .table-name.active {
        cursor: pointer;
        border: #D0D0D0 1px solid;
        background-color: #F0F0F0;
    }
    .btn-chart {
        display: inline-block;
        width: 35px;
        height: 35px;
        margin: 0 5px;
        border: #E0E0E0 1px solid;
        border-radius: 4px;
        color: #666666;
        font-size: 20px;
        line-height: 35px;
        text-align: center;
    }
    .btn-chart:hover {
        border: #D0D0D0 1px solid;
        background-color: #F0F0F0;
    }
    .main-chart {
        width: 100%; 
        height: calc(100vh - 244px);
        border: #F0F0F0 1px solid;
    }
    .el-radio-button.is-active span svg {
        fill: #FFFFFF;
    }
</style>