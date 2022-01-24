import { saveAs } from "file-saver";

var exportString = "";

var filterList = [];
var chartList = [];
var blockList = [];

export function exportFile(rowList, rowHeight) {
    exportString += "<template>\n"
                + "    <div class='app-container'>\n";
    for (var i in rowList) {
        var rowData = rowList[i]
        exportString += "        <div class='row' style='height:" + rowHeight[i] + "px'>\n"
        for (var j in rowData) {
            var data = rowData[j]
            exportString += "            <div class='cell" + (data.border ? ' border' : '') + "' id='" + data.id + "' style='width:"+ data.width + "%'>\n"
            if (data.type == 'filter') {
                exportString += "                <el-form label-width='90px' :inline='true'>\n"
                for (var k in data.filterItem) {
                    exportString += "                    <el-form-item label='" + data.filterItem[k].lable + "' prop='" + data.filterItem[k].model + "'>\n"
                    if (data.filterItem[k].type == 'input') {
                        exportString += "                        <el-input v-model='queryParams." + data.filterItem[k].model + "' size='small'></el-input>\n"
                    }
                    else if (data.filterItem[k].type == 'select') {
                        exportString += "                        <el-select v-model='queryParams." + data.filterItem[k].model + "' size='small'></el-select>\n"
                    }
                    else if (data.filterItem[k].type == 'date') {
                        exportString += "                        <el-date-picker v-model='queryParams." + data.filterItem[k].model + "' size='small'></el-date-picker>\n"
                    }
                    exportString += "                    </el-form-item>\n"
                    filterList.push(data.filterItem[k].model)
                }
                exportString += "                    <el-form-item>\n"
                            + "                        <el-button type='primary' plain size='small' @click='handleQuery()'>搜索</el-button>\n"
                            + "                    </el-form-item>\n"
                            + "                </el-form>\n"
            }
            else if (data.type == 'table') {
                exportString += "               <el-table :data='" + data.id + "Data' v-loading='loading' style='width: 100%'>\n"
                for (k in data.tableColumn) {
                    exportString += "                    <el-table-column lable='" + data.tableColumn[k].lable + "' prop='" + data.tableColumn[k].prop + "' />\n"
                }
                exportString += "               </el-table>\n"
            }
            else if (data.type == 'bar' || data.type == 'line' || data.type == 'pie') {
                exportString += "                <div class='chart' id='" + data.name + "'></div>\n"
            }
            else if (data.type == 'number') {
                exportString += "                <div class'data-row'>\n"
                for (k in data.blockData) {
                    exportString += "                    <div class='data-block'>\n"
                                + "                        <div class='data-block-icon' style='background-color: " + data.blockData[k].iconColor + ";'>\n"
                                + "                            <i class='fa " + data.blockData[k].iconClass + "' />\n"
                                + "                        </div>\n"
                                + "                        <div class='data-block-content'>\n"
                                + "                            <div class='data-block-number'>{{ " + data.blockData[k].prop + " }}</div>\n"
                                + "                            <div class='data-block-title'>" + data.blockData[k].title + "</div>\n"
                                + "                        </div>\n"
                                + "                    </div>\n"
                    blockList.push(data.blockData[k].prop)
                }
                exportString += "                </div>\n"
            }
            exportString += "            </div>\n"
        }
        exportString += "        </div>\n"
    }
    exportString += "    </div>\n"
                + "</template>\n"
                + "<script>\n"
                + "import * as echarts from 'echarts';\n"
                + "export default {\n"
                + "    name: 'GeneratedPage', \n"
                + "    data() {\n"
                + "        return {\n"
                + "            loading: true,\n"
                + "            exportLoading: true,\n"
                + "            showSearch: true,\n"
                + "            queryParams: {\n"
    // iterate for filter options
    for (i in filterList) {
        exportString += "                " + filterList[i] + ": null,\n"
    }
    exportString += "            },\n"
    // iterate for chart object & options
    for (i in rowList) {
        rowData = rowList[i]
        for (j in rowData) {
            data = rowData[j]
            if (data.type == 'bar' || data.type == 'line' || data.type == 'pie') {
                exportString += "            " + data.name + ": null,\n"
                exportString += "            " + data.name + "Option: " + JSON.stringify(data.option) + ",\n"
                chartList.push(data.name)
            }
            else if (data.type == 'table') {
                exportString += "            " + data.id + "Data: null,\n"
            }
        }
    }
    exportString += "            blockData: {\n"
    for (i in blockList) {
        exportString += "                " + blockList[i] + ": 0,\n"
    }
    exportString += "            }\n"
                + "        }\n"
                + "    },\n"
                + "    mounted() {\n"
                + "        this.$nextTick(() => {\n"
                + "            this.initChart()\n"
                + "        })\n"
                + "    },\n"
                + "    created() {\n"
                + "    },\n"
                + "    methods: {\n"
                + "        initChart() {\n"
    // itereate chart object to init
    for (i in chartList) {
        exportString += "            this." + chartList[i] + " = echarts.init(document.getElementById('" + chartList[i] + "'))\n"
                    + "            this." + chartList[i] + ".setOption(this." + chartList[i] + "Option)\n"
    }
    exportString += "        },\n"
                + "        handleQuery() {\n"
                + "            // Request data & assign to parameters above\n"
                + "        },\n"
                + "    }\n"
                + "}\n"
                + "</script>\n"
                + "<style scoped>\n"
                + ".row {\n"
                + "    display: flex;\n"
                + "    margin: 10px 2% 40px 2%;\n"
                + "}\n"
                + ".row .cell {\n"
                + "    height: 100%;\n"
                + "    margin: 0 2%;\n"
                + "}\n"
                + ".row .cell.border {\n"
                + "    border: #E0E0E0 1px solid;\n"
                + "    border-radius: 3px;\n"
                + "    box-shadow: #EEEEEE 2px 2px 6px;\n"
                + "}\n"
                + ".chart {\n"
                + "    width: 100%;\n"
                + "    height: 100%;\n"
                + "}\n"
                + "thead th {\n"
                + "    background-color: #F7F7F7!important;\n"
                + "}\n"
                + "form {\n"
                + "    margin: 15px 0;\n"
                + "}\n"
                + ".data-row {\n"
                + "    margin-top: 5px;\n"
                + "    padding: 5px;\n"
                + "    display: flex;\n"
                + "    justify-content: space-between;\n"
                + "}\n"
                + ".data-block {\n"
                + "    display: flex;\n"
                + "}\n"
                + ".data-block .data-block-icon {\n"
                + "    margin-top: 2px;\n"
                + "    width: 60px;\n"
                + "    height: 60px;\n"
                + "    border-radius: 30px;\n"
                + "    font-size: 38px;\n"
                + "    text-align: center;\n"
                + "    line-height: 60px;\n"
                + "    color: #FFFFFF;\n"
                + "}\n"
                + ".data-block:hover .data-block-icon {\n"
                + "    box-shadow: #D0D0D0 2px 2px 6px;\n"
                + "    cursor: pointer;\n"
                + "}\n"
                + ".data-block .data-block-content {\n"
                + "    margin-left: 20px;\n"
                + "    width: 90px;\n"
                + "}\n"
                + ".data-block .data-block-content .data-block-number {\n"
                + "    font-size: 32px;\n"
                + "    font-weight: bold;\n"
                + "    color: #333333;\n"
                + "}\n"
                + ".data-block .data-block-content .data-block-title {\n"
                + "    font-size: 16px;\n"
                + "    color: #666666;\n"
                + "    margin-top: 5px;\n"
                + "}\n"
                + "</style>"

    saveAs(new Blob([exportString], {type: 'text/plain; charset=utf-8'}), 'index.vue')
}