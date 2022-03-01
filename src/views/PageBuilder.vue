<template>
    <div class="menu">
        <input type="file" accept=".page" id="preset" style="display: none" @change="loadPreset()">
        <el-tooltip content="页面设计/生成" placement="bottom">
            <span class="menu-item active">
                <svg t="1642647347050" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8243" width="22" height="22"><path d="M149.333333 800h128c29.866667 0 53.333333-23.466667 53.333334-53.333333V533.333333c0-29.866667-23.466667-53.333333-53.333334-53.333333H149.333333c-29.866667 0-53.333333 23.466667-53.333333 53.333333v213.333334c0 29.866667 23.466667 53.333333 53.333333 53.333333z m10.666667-256h106.666667v192h-106.666667v-192zM448 800h128c29.866667 0 53.333333-23.466667 53.333333-53.333333V149.333333c0-29.866667-23.466667-53.333333-53.333333-53.333333h-128c-29.866667 0-53.333333 23.466667-53.333333 53.333333v597.333334c0 29.866667 23.466667 53.333333 53.333333 53.333333z m10.666667-640h106.666666v576h-106.666666v-576zM874.666667 309.333333h-128c-29.866667 0-53.333333 23.466667-53.333334 53.333334v384c0 29.866667 23.466667 53.333333 53.333334 53.333333h128c29.866667 0 53.333333-23.466667 53.333333-53.333333V362.666667c0-29.866667-23.466667-53.333333-53.333333-53.333334z m-10.666667 426.666667h-106.666667v-362.666667h106.666667v362.666667zM896 853.333333H128c-17.066667 0-32 14.933333-32 32S110.933333 917.333333 128 917.333333h768c17.066667 0 32-14.933333 32-32S913.066667 853.333333 896 853.333333z" p-id="8244" fill="#666666"></path></svg>
            </span>
        </el-tooltip>
        <el-tooltip content="Excel可视化" placement="bottom">
            <span class="menu-item">
                <router-link to="/excel">
                <svg t="1642647062215" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6614" width="22" height="22"><path d="M832 96H192c-35.2 0-64 28.8-64 64v704c0 35.2 28.8 64 64 64h640c35.2 0 64-28.8 64-64V160c0-35.2-28.8-64-64-64zM192 416h640v192H192v-192z m640-256v192H192V160h640zM192 864v-192h640v192H192z" p-id="6615" fill="#666666"></path><path d="M288 256m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" p-id="6616" fill="#666666"></path><path d="M288 512m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" p-id="6617" fill="#666666"></path><path d="M288 768m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" p-id="6618" fill="#666666"></path></svg>
                </router-link>
            </span>
        </el-tooltip>
        <span class="menu-separator"></span>

        <el-tooltip content="打开预设" placement="bottom">
            <span class="menu-item" @click="openPreset()">
                <svg t="1642581939189" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1117" width="22" height="22"><path d="M896 384V320H608a128 128 0 0 1-102.4-51.2L448 192H128v192h768z m0 64H128v384h768V448zM128 128h315.328a64 64 0 0 1 50.112 24.192l63.36 79.616A64 64 0 0 0 606.848 256H896a64 64 0 0 1 64 64v512a64 64 0 0 1-64 64H128a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64z" p-id="1118" fill="#666666"></path></svg>
            </span>
        </el-tooltip>
        <el-tooltip content="保存预设" placement="bottom">
            <span class="menu-item" @click="savePreset()">
                <svg t="1642581878276" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17174" width="22" height="22"><path d="M667.733333 85.333333c13.738667 0 26.368 1.194667 36.266667 10.666667l218.88 192c10.538667 10.069333 15.786667 23.850667 15.786667 38.4v494.933333a96 96 0 0 1-96 96H181.333333A96 96 0 0 1 85.333333 821.333333v-640A96 96 0 0 1 181.333333 85.333333h486.4zM256 149.290667L181.333333 149.333333a32 32 0 0 0-32 32v640c0 17.664 14.336 32 32 32H213.333333v-245.333333a74.666667 74.666667 0 0 1 68.522667-74.410667l6.144-0.256h449.493333c39.168 0 69.973333 31.701333 72.96 70.229334l0.213334 6.144V853.333333h32a32 32 0 0 0 32-32V331.349333L662.869333 149.333333l-1.536-0.042666v138.794666a74.666667 74.666667 0 0 1-74.666666 74.666667h-256A74.666667 74.666667 0 0 1 256 288.085333V149.333333zM737.493333 597.333333H288a10.666667 10.666667 0 0 0-10.368 8.234667l-0.298667 2.432V853.333333h469.333334v-245.333333c0-4.906667-2.304-9.045333-6.485334-10.282667L737.493333 597.333333zM597.333333 149.290667H320v138.794666c0 5.930667 4.778667 10.666667 10.666667 10.666667h256a10.666667 10.666667 0 0 0 10.666666-10.666667V149.333333z" p-id="17175" fill="#666666"></path></svg>
            </span>
        </el-tooltip>
        <el-tooltip content="导出页面" placement="bottom">
            <span class="menu-item" @click="exportCurrent()">
                <svg t="1642581997761" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6103" width="22" height="22"><path d="M894.6 532.3c-17.5 0-31.7 14.2-31.7 31.7v251c0 23.3-19 42.3-42.3 42.3H203.7c-23.3 0-42.3-19-42.3-42.3V233.7c0-23.3 19-42.3 42.3-42.3h270.7c17.5 0 31.7-14.2 31.7-31.7S492 128 474.4 128H203.7C145.4 128 98 175.4 98 233.7V815c0 58.3 47.4 105.7 105.7 105.7h616.9c58.3 0 105.7-47.4 105.7-105.7V564c0-17.5-14.2-31.7-31.7-31.7z" p-id="6104" fill="#666666"></path><path d="M253.1 688.9c98.5-93.2 197.9-237.3 373.7-228 12.4 0.7 22.1 10.4 22.1 22.9v61c-0.1 19.2 22.2 29.9 37.1 17.8l227.9-184.3c11.3-9.1 11.3-26.4-0.1-35.5L687 138.8c-14.9-12-38.1-1.4-38.2 17.7v61.8c0 11.6-7.9 20-19.3 22.6-302.5 69-379 423.6-376.4 448z" p-id="6105" fill="#666666"></path></svg>
            </span>
        </el-tooltip>
    </div>
    <div class="container">
        <div class="left" @mouseup="up()" @mousemove="moveY($event)">
            <div v-for="(item, i) in this.rowList" v-bind:key="i" class="line">
                <div class="row" :style="{height: this.rowHeight[i] + 'px'}">
                    <div :class="['cell', { border: cell.border }]" 
                    v-for="(cell, j) in this.rowList[i]" 
                    v-bind:key="j" 
                    :style="{width: cell.width + '%'}" 
                    :id="cell.id" draggable="true"
                    @click="active(i, j)" 
                    @dragstart="dragStart($event, i, j)" 
                    @drop="drop($event, i, j)"
                    @dragover.prevent @dragenter.prevent>

                        <data-chart v-if="cell.type == 'bar'" :chartName="cell.name" :option="cell.option"></data-chart>
                        <data-chart v-else-if="cell.type == 'line'" :chartName="cell.name" :option="cell.option"></data-chart>
                        <data-chart v-else-if="cell.type == 'pie'" :chartName="cell.name" :option="cell.option"></data-chart>
                        <data-table v-else-if="cell.type == 'table'" :tableColumn="cell.tableColumn" :tableData="cell.tableData"></data-table>
                        <data-filter v-else-if="cell.type == 'filter'" :filterItem="cell.filterItem"></data-filter>
                        <data-block v-else-if="cell.type == 'number'" :blockData="cell.blockData"></data-block>
                        <p v-else style="text-align: center">Empty block</p>

                        <!-- <div v-if="cell.footer" class="cell-footer">{{ cell.footer }}</div> -->
                        <span class="close-icon" @click="deleteCell(i, j)">X</span>
                    </div>
                </div>
                <div class="footer" 
                @mouseenter="enterY(i)"  
                @mouseleave="leaveY()" 
                @mousedown="downY($event)">
                    <span @click="createFilterCell(i)"><i class="fa fa-filter"></i></span>
                    <span @click="createTabelCell(i)"><i class="fa fa-table"></i></span>
                    <span @click="createNumberCell(i)"><i class="fa fa-info-circle"></i></span>
                    <span @click="createBarCell(i)"><i class="fa fa-bar-chart"></i></span>
                    <span @click="createLineCell(i)"><i class="fa fa-line-chart"></i></span>
                    <span @click="createPieCell(i)"><i class="fa fa-pie-chart"></i></span>
                    <span @click="deleteRow(i)"><i class="fa fa-trash" style="color: #f06c6c"></i></span>
                </div>
            </div>
            <div class="add" @click="addRow()">
                <span>Add</span>
            </div>
        </div>

        <div class="right">
            <div v-if="this.activeCell && this.activeCell.type == 'bar'">
                <p>Bar Chart Options</p>
                <el-form label-width="70px" label-position="right" size="mini">
                    <el-form-item label="Title">
                        <el-input v-model="this.activeCell.option.title.text"></el-input>
                    </el-form-item>
                    <el-form-item label="X轴">
                        <el-checkbox v-model="this.activeCell.option.xAxis.axisTick.show">刻度线</el-checkbox>
                        <el-checkbox v-model="this.activeCell.option.xAxis.axisLabel.show">刻度标签</el-checkbox>
                        <el-checkbox v-model="this.activeCell.option.xAxis.splitLine.show">分隔线</el-checkbox>
                    </el-form-item>
                    <el-form-item label="Y轴">
                        <el-checkbox v-model="this.activeCell.option.yAxis.axisLabel.show">刻度标签</el-checkbox>
                        <el-checkbox v-model="this.activeCell.option.yAxis.axisTick.show">刻度线</el-checkbox>
                        <el-checkbox v-model="this.activeCell.option.yAxis.splitLine.show">分隔线</el-checkbox>
                    </el-form-item>
                    <el-form-item label="横向柱子">
                        <el-switch v-model="this.barOption.horizontal"></el-switch>
                    </el-form-item>
                    <el-form-item label="数据集">
                        <el-color-picker v-for="(item, i) in this.activeCell.option.series" v-bind:key="i" v-model="item.itemStyle.color" />
                        <span class="add-serie" @click="addSerieData()">+</span>
                        <span class="add-serie" @click="delSerieData()">-</span>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="updateChart(this.activeCell.type)">Update</el-button>
                    </el-form-item>
                    <el-divider></el-divider>
                    <el-form-item label="边框">
                        <el-switch v-model="this.activeCell.border" ></el-switch>
                    </el-form-item>
                    <el-form-item label="宽度">
                        <el-slider v-model="this.activeCell.width" :step="10"></el-slider>
                    </el-form-item>
                </el-form>
            </div>
            <div v-if="this.activeCell && this.activeCell.type == 'line'">
                <p>Line Chart Options</p>
                <el-form label-width="70px" label-position="right" size="mini">
                    <el-form-item label="Title">
                        <el-input v-model="this.activeCell.option.title.text"></el-input>
                    </el-form-item>
                    <el-form-item label="X轴">
                        <el-checkbox v-model="this.activeCell.option.xAxis.axisTick.show">刻度线</el-checkbox>
                        <el-checkbox v-model="this.activeCell.option.xAxis.axisLabel.show">刻度标签</el-checkbox>
                        <el-checkbox v-model="this.activeCell.option.xAxis.splitLine.show">分隔线</el-checkbox>
                    </el-form-item>
                    <el-form-item label="Y轴">
                        <el-checkbox v-model="this.activeCell.option.yAxis.axisLabel.show">刻度标签</el-checkbox>
                        <el-checkbox v-model="this.activeCell.option.yAxis.axisTick.show">刻度线</el-checkbox>
                        <el-checkbox v-model="this.activeCell.option.yAxis.splitLine.show">分隔线</el-checkbox>
                    </el-form-item>
                    <el-form-item label="圆滑">
                        <el-switch v-model="this.lineOption.smooth"></el-switch>
                    </el-form-item>
                    <el-form-item label="数据">
                        <el-checkbox v-model="this.lineOption.showSymbol">数据点</el-checkbox>
                        <el-checkbox v-model="this.lineOption.stack">数据叠加</el-checkbox>
                    </el-form-item>
                    <el-form-item label="数据集">
                        <el-color-picker v-for="(item, i) in this.activeCell.option.series" v-bind:key="i" v-model="item.itemStyle.color" />
                        <span class="add-serie" @click="addSerieData()">+</span>
                        <span class="add-serie" @click="delSerieData()">-</span>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="updateChart(this.activeCell.type)">Update</el-button>
                    </el-form-item>
                    <el-divider></el-divider>
                    <el-form-item label="边框">
                        <el-switch v-model="this.activeCell.border" ></el-switch>
                    </el-form-item>
                    <el-form-item label="宽度">
                        <el-slider v-model="this.activeCell.width" :step="10"></el-slider>
                    </el-form-item>
                </el-form>
            </div>
            <div v-if="this.activeCell && this.activeCell.type == 'pie'">
                <p>Pie Chart Options</p>
                <el-form label-width="70px" label-position="right" size="mini">
                    <el-form-item label="Title">
                        <el-input v-model="this.activeCell.option.title.text"></el-input>
                    </el-form-item>
                    <el-form-item label="内外半径">
                        <el-input-number v-model="this.activeCell.option.series[0].radius[0]"></el-input-number>
                        <el-input-number v-model="this.activeCell.option.series[0].radius[1]"></el-input-number>
                    </el-form-item>
                    <el-form-item label="标签">
                        <el-switch v-model="this.activeCell.option.series[0].label.show"></el-switch>
                    </el-form-item>
                    <el-form-item label="Rose">
                        <el-switch v-model="this.activeCell.option.series[0].roseType"></el-switch>
                    </el-form-item>
                    <el-form-item label="数据">
                        <el-color-picker v-for="(item, i) in this.activeCell.option.series[0].data" v-bind:key="i" v-model="item.itemStyle.color" />
                        <span class="add-serie" @click="addSerieData()">+</span>
                        <span class="add-serie" @click="delSerieData()">-</span>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="updateChart(this.activeCell.type)">Update</el-button>
                    </el-form-item>
                    <el-divider></el-divider>
                    <el-form-item label="边框">
                        <el-switch v-model="this.activeCell.border" ></el-switch>
                    </el-form-item>
                    <el-form-item label="宽度">
                        <el-slider v-model="this.activeCell.width" :step="10"></el-slider>
                    </el-form-item>
                </el-form>
            </div>
            <div v-if="this.activeCell && this.activeCell.type == 'table'">
                <p>Table Options</p>
                <el-form label-width="70px" label-position="right" size="mini">
                    <div v-for="(item, i) in this.activeCell.tableColumn" v-bind:key="i">
                        <el-form-item :label="'列名'+i">
                            <el-input v-model="item.lable"></el-input>
                        </el-form-item>
                        <el-form-item :label="'属性'+i">
                            <el-input v-model="item.prop"></el-input>
                            <el-button type="warning" plain @click="delTableColumn(i)" size="mini">删除列</el-button>
                        </el-form-item>
                    </div>
                    <el-form-item>
                        <el-button type="primary" @click="addTableColumn()">添加列</el-button>
                    </el-form-item>
                    <el-divider></el-divider>
                    <el-form-item label="边框">
                        <el-switch v-model="this.activeCell.border" ></el-switch>
                    </el-form-item>
                    <el-form-item label="宽度">
                        <el-slider v-model="this.activeCell.width" :step="10"></el-slider>
                    </el-form-item>
                </el-form>
            </div>
            <div v-if="this.activeCell && this.activeCell.type == 'filter'">
                <p>Filter Options</p>
                <el-form label-width="70px" label-position="right" size="mini">
                    <div v-for="(item, i) in this.activeCell.filterItem" v-bind:key="i">
                        <el-form-item :label="'属性名'+i">
                            <el-input v-model="item.lable"></el-input>
                        </el-form-item>
                        <el-form-item label="类型">
                            <el-select v-model="item.type">
                                <el-option value="input">Input</el-option>
                                <el-option value="select">Select</el-option>
                                <el-option value="date">Date</el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="绑定属性">
                            <el-input v-model="item.model"></el-input>
                        </el-form-item>
                    </div>
                    <el-form-item>
                        <el-button type="primary" @click="addFilterItem()">添加项</el-button>
                    </el-form-item>
                    <el-divider></el-divider>
                    <el-form-item label="边框">
                        <el-switch v-model="this.activeCell.border" ></el-switch>
                    </el-form-item>
                    <el-form-item label="宽度">
                        <el-slider v-model="this.activeCell.width" :step="10"></el-slider>
                    </el-form-item>
                </el-form>
            </div>
            <div v-if="this.activeCell && this.activeCell.type == 'number'">
                <p>Datablock Options</p>
                <el-form label-width="70px" label-position="right" size="mini">
                    <div v-for="(item, i) in this.activeCell.blockData" v-bind:key="i">
                        <el-form-item :label="'数据名'+i">
                            <el-input v-model="item.title"></el-input>
                        </el-form-item>
                        <el-form-item label="图标">
                            <el-input v-model="item.iconClass" />
                        </el-form-item>
                        <el-form-item label="图标颜色">
                            <el-color-picker v-model="item.iconColor" />
                        </el-form-item>
                        <el-form-item label="绑定属性">
                            <el-input v-model="item.prop"></el-input>
                        </el-form-item>
                    </div>
                    <el-form-item>
                        <el-button type="primary" @click="addNumberItem()">添加项</el-button>
                        <el-button type="warning" @click="delNumberItem()">删除项</el-button>
                    </el-form-item>
                    <el-divider></el-divider>
                    <el-form-item label="边框">
                        <el-switch v-model="this.activeCell.border" ></el-switch>
                    </el-form-item>
                    <el-form-item label="宽度">
                        <el-slider v-model="this.activeCell.width" :step="10"></el-slider>
                    </el-form-item>
                </el-form>
            </div>
            <!-- <config-block 
                v-if="this.activeCell && this.activeCell.type == 'number'" 
                v-bind="this.activeCell" 
                v-on:update:border="this.rowList[this.activeIndex[0]][this.activeIndex[1]].border = $event" 
                v-on:update:width="this.rowList[this.activeIndex[0]][this.activeIndex[1]].width = $event" 
                v-on:update:blockData="this.rowList[this.activeIndex[0]][this.activeIndex[1]].blockData = $event"
            ></config-block> -->
        </div>
    </div>
</template>

<script>
import { DefaultBar, DefaultFilterData, DefaultLine, DefaultNumberData, DefaultPie, DefaultTableColumn } from '../utils/options';
import { exportFile } from '../utils/export';
import * as echarts from "echarts";
import DataTable from '../components/DataTable.vue';
import DataFilter from '../components/DataFilter.vue';
import DataChart from '../components/DataChart.vue';
import DataBlock from '../components/DataBlock.vue';
import { saveAs } from "file-saver";

export default {
    components: { DataChart, DataTable, DataFilter, DataBlock },
    name: 'PageBuilder', 
    data() {
        return {
            rowList: [], 
            rowHeight: [],
            pointerY: 0, 
            rowY: 0,
            resizeIndexY: -1, 

            activeCell: null, 
            activeIndex: [-1, -1], 

            barOption: {
                horizontal: false
            },
            lineOption: {
                smooth: false,
                showSymbol: true, 
                stack: false
            }, 
            pieOption: {}, 
        }
    }, 
    created() {

    }, 
    methods: {
        enterY(index) {
            this.resizeIndexY = index
        }, 
        leaveY() {
            this.resizeIndexY = -1
        },
        downY(e) {
            if (this.resizeIndexY >= 0) {
                this.pointerY = e.clientY
                this.rowY = this.rowHeight[this.resizeIndexY]
            }
        }, 
        up() {
            this.pointerY = 0
            this.rowY = 0
            if (this.resizeIndexY >= 0) {
                this.justifyWidth(this.resizeIndexY, false)
            }
            this.resizeIndexY = -1
        }, 
        moveY(e) {
            if (this.pointerY != 0) {
                var moving = e.clientY
                this.rowHeight[this.resizeIndexY] = this.rowY + moving - this.pointerY
            }
        },
        addRow() {
            this.rowList.push([])
            this.rowHeight.push(100)
        },
        deleteRow(row) {
            this.rowList.splice(row, 1)
        }, 
        deleteCell(row, cell) {
            if (this.rowList[row][cell].chartData) {
                this.rowList[row][cell].chartData.dispose()
            }
            this.rowList[row].splice(cell, 1)
            for (var i in this.rowList[row]) {
                this.rowList[row][i].id = 'cell_' + row + '_' + i
                if (this.rowList[row][i].chartData) {
                    this.rowList[row][i].name = 'chart_' + row + '_' + i
                }
            }
            this.$nextTick(() => {
                this.justifyWidth(row, true)
                this.activeCell = null
                this.activeIndex = [-1, -1]
            })
        },
        createFilterCell(row) {

            this.rowList[row].push({
                type: 'filter', 
                id: 'cell_' + row + '_' + this.rowList[row].length, 
                border: true, 
                width: 100, 
                filterItem: DefaultFilterData()
            })
            this.justifyWidth(row, false)
        }, 
        createTabelCell(row) {
            this.rowList[row].push({
                type: 'table', 
                id: 'cell_' + row + '_' + this.rowList[row].length, 
                border: true, 
                width: 100, 
                tableColumn: DefaultTableColumn(), 
                tableData: []
            })
            this.$nextTick(() => {
                this.justifyWidth(row, false)
            })
        }, 
        createNumberCell(row) {
            this.rowList[row].push({
                type: 'number', 
                id: 'cell_' + row + '_' + this.rowList[row].length, 
                border: true, 
                width: 100, 
                blockData: DefaultNumberData()
            })
            this.justifyWidth(row, false)
        }, 
        createBarCell(row) {
            this.rowList[row].push({
                type: 'bar', 
                id: 'cell_' + row + '_' + this.rowList[row].length, 
                border: true, 
                width: 100, 
                name: 'chart_' + row + '_' + this.rowList[row].length, 
                option: DefaultBar()
            })
            this.justifyWidth(row, true)
            
            this.$nextTick(() => {
                this.rowList[row][this.rowList[row].length - 1].chartData = echarts.init(document.getElementById(this.rowList[row][this.rowList[row].length - 1].name))
                this.rowList[row][this.rowList[row].length - 1].chartData.setOption(this.rowList[row][this.rowList[row].length - 1].option)
            })
        }, 
        createLineCell(row) {
            this.rowList[row].push({
                type: 'line', 
                id: 'cell_' + row + '_' + this.rowList[row].length, 
                border: true, 
                width: 100, 
                name: 'chart_' + row + '_' + this.rowList[row].length, 
                option: DefaultLine()
            })
            this.justifyWidth(row, true)

            this.$nextTick(() => {
                this.rowList[row][this.rowList[row].length - 1].chartData = echarts.init(document.getElementById(this.rowList[row][this.rowList[row].length - 1].name))
                this.rowList[row][this.rowList[row].length - 1].chartData.setOption(this.rowList[row][this.rowList[row].length - 1].option)
            })
        }, 
        createPieCell(row) {
            this.rowList[row].push({
                type: 'pie', 
                id: 'cell_' + row + '_' + this.rowList[row].length, 
                border: true, 
                width: 100, 
                name: 'chart_' + row + '_' + this.rowList[row].length, 
                option: DefaultPie()
            })
            this.justifyWidth(row, true)
            
            this.$nextTick(() => {
                this.rowList[row][this.rowList[row].length - 1].chartData = echarts.init(document.getElementById(this.rowList[row][this.rowList[row].length - 1].name))
                this.rowList[row][this.rowList[row].length - 1].chartData.setOption(this.rowList[row][this.rowList[row].length - 1].option)
            })
        }, 
        justifyWidth(row, rerender) {
            if (rerender) {
                if (this.rowList[row].length == 1) {
                    this.rowList[row][0].width = 100
                }
                else if (this.rowList[row].length == 2) {
                    this.rowList[row][0].width = 50
                    this.rowList[row][1].width = 50
                }
                else if (this.rowList[row].length == 3) {
                    this.rowList[row][0].width = 34
                    this.rowList[row][1].width = 34
                    this.rowList[row][2].width = 34
                }
                else if (this.rowList[row].length >= 4) {
                    this.rowList[row][0].width = 25
                    this.rowList[row][1].width = 25
                    this.rowList[row][2].width = 25
                    this.rowList[row][3].width = 25
                }
            }
            
            this.$nextTick(() => {
                for (var i = 0; i < this.rowList[row].length; i++) {
                    if (this.rowList[row][i].chartData) {
                        if (rerender) {
                            this.rowList[row][i].chartData.dispose()
                            this.rowList[row][i].chartData = echarts.init(document.getElementById(this.rowList[row][i].name))
                        }
                        this.rowList[row][i].chartData.setOption(this.rowList[row][i].option)
                        if (!rerender) {
                            this.rowList[row][i].chartData.resize()
                        }
                    }
                }
            })
        },
        active(i, j) {
            if (i == this.activeIndex[0] && j == this.activeIndex[1]) {
                return
            }
            this.activeCell = this.rowList[i][j]
            if (this.activeCell) {
                document.getElementById(this.activeCell.id).classList.add('active')
                if (this.activeIndex[0] >= 0 && this.activeIndex[1] >= 0) {
                    document.getElementById(this.rowList[this.activeIndex[0]][this.activeIndex[1]].id).classList.remove('active')
                }
                this.activeIndex = [i, j]
            }
        }, 
        updateChart(type) {
            if (type == 'bar') {
                if (this.barOption.horizontal) {
                    this.activeCell.option.xAxis.type = 'value'
                    this.activeCell.option.yAxis.type = 'category'
                    if (this.activeCell.option.xAxis.data) {
                        this.activeCell.option.yAxis.data = this.activeCell.option.xAxis.data
                        delete this.activeCell.option.xAxis.data
                    }
                }
                else {
                    this.activeCell.option.xAxis.type = 'category'
                    this.activeCell.option.yAxis.type = 'value'
                    if (this.activeCell.option.yAxis.data) {
                        this.activeCell.option.xAxis.data = this.activeCell.option.yAxis.data
                        delete this.activeCell.option.yAxis.data
                    }
                }
            }
            else if (type == 'line') {
                var i = 0
                if (this.lineOption.smooth) {
                    for (i in this.activeCell.option.series) {
                        this.activeCell.option.series[i].smooth = true
                    }
                }
                else {
                    for (i in this.activeCell.option.series) {
                        this.activeCell.option.series[i].smooth = false
                    }
                }
                if (this.lineOption.showSymbol) {
                    for (i in this.activeCell.option.series) {
                        this.activeCell.option.series[i].showSymbol = true
                    }
                }
                else {
                    for (i in this.activeCell.option.series) {
                        this.activeCell.option.series[i].showSymbol = false
                    }
                }
                if (this.lineOption.stack) {
                    for (i in this.activeCell.option.series) {
                        this.activeCell.option.series[i].stack = true
                    }
                }
                else {
                    for (i in this.activeCell.option.series) {
                        this.activeCell.option.series[i].stack = false
                    }
                }
            }
            this.rowList[this.activeIndex[0]][this.activeIndex[1]].option = this.activeCell.option
            this.rowList[this.activeIndex[0]][this.activeIndex[1]].chartData.clear()
            this.rowList[this.activeIndex[0]][this.activeIndex[1]].chartData.setOption(this.activeCell.option)

        },
        addTableColumn() {
            if (this.activeCell.type == 'table') {
                this.activeCell.tableColumn.push({
                    prop: '', 
                    lable: ''
                })
            }
        },
        delTableColumn(index) {
            if (this.activeCell.type == 'table') {
                this.activeCell.tableColumn.splice(index, 1)
            }
        },
        addFilterItem() {
            if (this.activeCell.type == 'filter') {
                this.activeCell.filterItem.push({
                    lable: '', 
                    type: 'input', 
                    model: ''
                })
            }
        },
        delFilterItem(index) {
            if (this.activeCell.type == 'filter') {
                this.activeCell.filterItem.splice(index, 1)
            }
        }, 
        addSerieData() {
            if (this.activeCell.type == 'bar') {
                this.activeCell.option.series.push({
                    type: 'bar', 
                    data: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)], 
                    emphasis: { focus: 'series' }, 
                    itemStyle: { color: '' }
                })
            }
            else if (this.activeCell.type == 'line') {
                this.activeCell.option.series.push({
                    type: 'line', 
                    data: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)], 
                    itemStyle: { color: '' }, 
                    areaStyle: {}
                })
            }
            else if (this.activeCell.type == 'pie') {
                this.activeCell.option.series[0].data.push({
                    name: 'zxc', 
                    value: Math.floor(Math.random() * 10), 
                    itemStyle: {}
                })
            }
        }, 
        delSerieData() {
            if (this.activeCell.type == 'bar' || this.activeCell.type == 'line') {
                this.activeCell.option.series.shift()
            }
            else if (this.activeCell.type == 'pie') {
                this.activeCell.option.series[0].data.shift()
            }
        }, 
        addNumberItem() {
            if (this.rowList[this.activeIndex[0]][this.activeIndex[1]].type == 'number') {
                this.rowList[this.activeIndex[0]][this.activeIndex[1]].blockData.push({
                    title: '新的数据', 
                    iconClass: 'fa-file', 
                    iconColor: '#89b7f5'
                })
            }
        },
        delNumberItem() {
            if (this.rowList[this.activeIndex[0]][this.activeIndex[1]].type == 'number') {
                this.rowList[this.activeIndex[0]][this.activeIndex[1]].blockData.shift()
            }
        },
        exportCurrent() {
            exportFile(this.rowList, this.rowHeight)
        }, 
        savePreset() {
            var saveData = []
            var temp = []
            for (var i in this.rowList) {
                temp = []
                for (var j in this.rowList[i]) {
                    var data = {
                        type: this.rowList[i][j].type, 
                        width: this.rowList[i][j].width, 
                        id: this.rowList[i][j].id, 
                        border: this.rowList[i][j].border
                    }
                    if (this.rowList[i][j].type == 'bar' || this.rowList[i][j].type == 'line' || this.rowList[i][j].type == 'pie') {
                        data.option = this.rowList[i][j].option
                        data.name = this.rowList[i][j].name
                    }
                    else if (this.rowList[i][j].type == 'table') {
                        data.tableColumn = this.rowList[i][j].tableColumn
                    }
                    else if (this.rowList[i][j].type == 'filter') {
                        data.filterItem = this.rowList[i][j].filterItem
                    }
                    else if (this.rowList[i][j].type == 'number') {
                        data.blockData = this.rowList[i][j].blockData
                    }
                    temp.push(data)
                }
                saveData.push(temp)
            }
            saveAs(new Blob([JSON.stringify([saveData, this.rowHeight])], {type: 'text/plain; charset=utf-8'}), 'saved-file.page')
        }, 
        openPreset() {
            var file = document.getElementById("preset")
            file.click()
        }, 
        loadPreset() {
            var reader = new FileReader()
            reader.readAsText(document.getElementById("preset").files[0], 'utf8')
            reader.onload = () => {
                var preset = JSON.parse(reader.result)
                for (var i in this.rowList) {
                    for (var j in this.rowList[i]) {
                        if (this.rowList[i][j].type == 'bar' || this.rowList[i][j].type == 'line' || this.rowList[i][j].type == 'pie') {
                            this.rowList[i][j].chartData.dispose()
                        }
                    }
                }
                this.rowList = preset[0]
                this.rowHeight = preset[1]

                this.$nextTick(() => {
                    for (i in this.rowList) {
                        for (j in this.rowList[i]) {
                            if (this.rowList[i][j].type == 'bar' || this.rowList[i][j].type == 'line' || this.rowList[i][j].type == 'pie') {
                                this.rowList[i][j].chartData = echarts.init(document.getElementById(this.rowList[i][j].name))
                                this.rowList[i][j].chartData.setOption(this.rowList[i][j].option)
                            }
                        }
                    }
                })
            }
        }, 
        dragStart(e, row, col) {
            e.dataTransfer.setData('row', row)
            e.dataTransfer.setData('col', col)
        }, 
        drop(e, row, col) {
            var r = e.dataTransfer.getData('row')
            var c = e.dataTransfer.getData('col')
            this.rowList[row].splice(col, 0, this.rowList[r][c])
            if (row == r && col < c) {
                c = (parseInt(c) + 1).toString()
            }
            this.rowList[r].splice(c, 1)
            this.justifyWidth(row, true)
            if (row != r) {
                this.justifyWidth(r, true)
            }
        }
    }
}
</script>

<style scoped>
    .container {
        width: 100%;
        height: calc(100vh - 61px);
        display: flex;
    }
    .left {
        width: 78%;
        margin: 10px 2%;
        overflow: hidden scroll;
    }
    .right {
        width: 19%;
        background: #FCFCFC;
        border-left: #F0F0F0 1px solid;
        box-shadow: #F0F0F0 -2px 2px 8px;
        overflow: hidden scroll;
        text-align: left;
        padding: 10px 2% 10px 1%;
    }
    .right p {
        text-align: center;
        margin-bottom: 40px;
    }
    .left::-webkit-scrollbar, .right::-webkit-scrollbar {
        display: none;
    }
    .add {
        width: 90%;
        height: 60px;
        margin: 10px 5%;
        border: #EEEEEE 1px dashed;
        line-height: 60px;
        color: #E0E0E0;
    }
    .row {
        margin-top: 5px;
        padding: 5px;
        display: flex;
    }
    .row:hover {
        border: #E0E0E0 1px dashed;
    }
    .footer {
        height: 35px;
        border-bottom: #E0E0E0 1px dashed;
        text-align: right;
        font-size: 14px;
    }
    .footer:hover {
        cursor: row-resize;
    }
    .footer span {
        display: none;
        margin-top: 7px;
        margin-right: 10px;
        padding: 2px 3px;
        cursor: pointer;
        border: #E0E0E0 1px solid;
        border-radius: 3px;
        width: 14px;
        text-align: center;
        color: #666666;
    }
    .line:hover .footer span {
        display: inline-block;
    }

    .row .cell {
        height: 100%;
        margin: 0 2%;
        text-align: left;
        position: relative;
    }
    .row .cell.border {
        border: #E0E0E0 1px solid;
        border-radius: 3px;
        box-shadow: #EEEEEE 2px 2px 6px;
    }
    .cell.active {
        border: #89b7f5 1px solid !important;
        box-shadow: #CCCCCC 6px 6px 7px !important;
    }
    .cell p {
        width: 98%;
    }
    .cell .close-icon {
        display: block;
        position: absolute;
        width: 12px;
        height: 12px;
        font-size: 10px;
        border-radius: 6px;
        border: #EEEEEE 1px solid;
        top: -6px;
        right: 6px;
        background: #FFFFFF;
        text-align: center;
        display: none;
        cursor: pointer;
    }
    .cell:hover .close-icon {
        display: block;
    }
    .add-serie {
        display: inline-block;
        margin: 0 3px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: #E6E6E6 1px solid;
        border-radius: 4px;
        cursor: pointer;
        vertical-align: top;
    }

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
</style>