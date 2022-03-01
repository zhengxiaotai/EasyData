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
                    <el-col :span="12">
                        <el-form-item label="数据">
                            <el-select v-model="this.yAxis" multiple :multiple-limit=3 placeholder="请选择" id="yaxis" style="width:33vw" @change="dataModified()">
                                <el-option 
                                    v-for="item in this.columns[this.current]" 
                                    :key="item"
                                    :label="item"
                                    :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="">
                            <el-radio-group v-model="this.queryType">
                                <el-tooltip content="求和" placement="bottom">
                                    <el-radio-button label="SUM">
                                        <svg t="1644573029670" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13786" width="12" height="12"><path d="M822.848 311.68l36.576-33.408-128-150.272H128l384 417.376L128 896h676.576L896 678.944h-36.576l-73.152 98.112H347.424L640 509.056 347.424 178.08h365.728z" p-id="13787"></path></svg>
                                    </el-radio-button>
                                </el-tooltip>
                                <el-tooltip content="计数" placement="bottom">
                                    <el-radio-button label="COUNT">
                                        <svg t="1644573066317" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14014" width="12" height="12"><path d="M576 887.904c-35.04 14.368-73.376 21.536-115.04 21.536-109.76 0-200.64-38.272-272.704-114.816-72.064-76.512-108.096-173.024-108.096-289.504 0-117.216 33.024-212.992 99.136-287.264 66.08-74.304 151.36-111.456 255.904-111.456 38.08 0 68.48 3.2 91.296 9.504 22.752 6.368 50.944 19.232 84.544 38.656 16.416 9.696 28.736 14.56 36.96 14.56 6.72 0 13.056-5.984 19.04-17.92 9.696-20.896 17.536-31.36 23.52-31.36 5.984 0 8.96 2.976 8.96 8.96 0 2.976-0.736 7.84-2.24 14.56-8.224 35.84-12.32 103.04-12.32 201.6 0 14.176-1.12 22.4-3.36 24.64a12.096 12.096 0 0 1-8.96 3.36c-7.456 0-12.32-7.104-14.56-21.28-9.696-59.744-23.52-104.16-41.44-133.28-36.576-59.744-94.08-89.6-172.48-89.6-60.48 0-108.256 20.16-143.36 60.48-63.456 72.416-95.2 178.464-95.2 318.08 0 124.704 26.144 221.376 78.4 290.08 45.536 59.744 106.016 89.6 181.44 89.6A201.696 201.696 0 0 0 576 855.36v32.544z m217.536 8.096h-80v-9.952c5.248-1.6 9.056-3.04 11.36-4.256a16.64 16.64 0 0 0 5.76-5.088 26.144 26.144 0 0 0 3.68-10.048 117.76 117.76 0 0 0 1.312-20.64v-53.216a371.2 371.2 0 0 0-0.8-25.792 107.328 107.328 0 0 0-2.752-18.976 39.36 39.36 0 0 0-4.672-11.584 29.696 29.696 0 0 0-15.136-11.776 39.168 39.168 0 0 0-12.8-1.728c-5.28 0-10.272 1.056-15.04 3.136a61.44 61.44 0 0 0-15.616 10.88c-5.696 5.12-9.824 10.24-12.384 15.232-2.56 4.992-3.84 10.752-3.84 17.28v75.744c0 11.648 0.512 19.744 1.6 24.288 1.088 4.512 3.136 8 6.176 10.336 3.072 2.368 8.032 4.448 14.944 6.208V896h-79.616v-9.952c5.28-1.6 9.024-3.04 11.264-4.256a16.96 16.96 0 0 0 5.696-5.088 26.016 26.016 0 0 0 3.648-9.952c0.896-4.48 1.312-11.456 1.312-20.928v-88.544c0-8.672-0.128-15.68-0.384-20.928a31.68 31.68 0 0 0-2.88-12.704 15.456 15.456 0 0 0-7.392-7.104 58.624 58.624 0 0 0-14.112-3.968v-10.752l47.52-1.824h12.384l-2.24 33.088 2.88 0.832c10.016-10.176 18.08-17.408 24.256-21.76 6.176-4.32 12.384-7.68 18.688-10.048a56.32 56.32 0 0 1 20-3.52c7.328 0 13.856 0.832 19.616 2.496a42.784 42.784 0 0 1 26.112 20.928c2.816 5.216 4.96 11.488 6.4 18.784 1.408 7.328 2.112 16.608 2.112 27.84v76.576c0 9.344 0.288 16.128 0.8 20.32a26.112 26.112 0 0 0 2.88 9.76 16.64 16.64 0 0 0 5.856 5.76c2.56 1.6 7.04 3.232 13.44 4.992V896z m22.144-184.032c6.784-1.088 12.256-2.976 16.448-5.696a29.12 29.12 0 0 0 9.856-10.464c2.368-4.256 4.224-9.6 5.6-16.032 1.344-6.432 2.784-15.808 4.256-28.16h28.832v50.208h65.6v20.48h-65.6v90.4c0 13.12 0.544 23.616 1.632 31.392 1.088 7.808 3.136 13.888 6.08 18.272a27.2 27.2 0 0 0 10.176 9.472c3.808 1.888 8.64 2.816 14.624 2.816 5.44 0 10.496-1.088 15.232-3.328 4.736-2.24 9.408-5.44 14.016-9.664l9.152 10.976c-9.6 9.344-18.72 16.128-27.328 20.32a60.192 60.192 0 0 1-26.72 6.304c-17.472 0-30.464-5.184-38.976-15.552-8.544-10.368-12.8-26.56-12.8-48.64v-112.736h-30.08v-10.368z" p-id="14015"></path></svg>
                                    </el-radio-button>
                                </el-tooltip>
                                <el-tooltip content="最大值" placement="bottom">
                                    <el-radio-button label="MAX">
                                        <svg t="1644573206156" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14242" width="12" height="12"><path d="M541.76 885.6a41.728 41.728 0 0 1-7.2-9.216 49.12 49.12 0 0 1-6.304-25.056c0-19.776 9.792-35.04 29.344-45.824 19.584-10.752 48.928-17.024 88.064-18.784v-13.216c0-14.08-1.376-25.184-4.064-33.28-2.72-8.16-6.976-14.08-12.8-17.92-5.824-3.776-13.6-5.664-23.36-5.664-10.56 0-19.072 2.784-25.504 8.32-6.4 5.568-11.264 13.888-14.528 24.992h-26.592v-26.4a290.112 290.112 0 0 1 32.512-14.944c8.64-3.2 17.312-5.664 25.984-7.52 8.64-1.824 17.472-2.72 26.4-2.72 13.44 0 24.192 2.112 32.32 6.4 8.096 4.256 14.208 10.784 18.24 19.584 4.096 8.8 6.112 22.08 6.112 39.808v70.72c0 10.016 0.064 17.088 0.224 21.216 0.128 4.128 0.512 7.936 1.216 11.456 0.64 3.52 1.696 6.336 3.04 8.448a16.672 16.672 0 0 0 5.984 5.376c2.656 1.504 6.944 3.04 12.896 4.672V896h-55.68l1.056-29.056-3.072-0.8c-11.776 12.064-22.848 20.576-33.184 25.6a74.848 74.848 0 0 1-33.024 7.52c-10.272 0-19.36-2.016-27.2-6.016a46.08 46.08 0 0 1-8.64-5.632v4.832a7.04 7.04 0 0 1-2.24-6.848zM649.088 672V208.32c0 0.736-4.096 13.824-12.32 39.2-29.856 90.336-73.184 226.24-129.92 407.68l-52.64 178.08c-10.464 35.104-17.92 52.64-22.4 52.64-5.216 0-10.816-8.96-16.8-26.88-21.664-67.936-82.88-237.44-183.68-508.48L186.56 230.72c0.736 14.176 1.12 33.6 1.12 58.24v364c0 136.64 1.12 205.696 3.36 207.2 5.216 9.696 23.136 14.56 53.76 14.56 24.64 0 36.96 3.36 36.96 10.08 0 7.456-7.84 11.2-23.52 11.2-9.696 0-18.656-0.384-26.88-1.12a397.344 397.344 0 0 0-28-1.12l-128.8 3.36c-13.44 0-20.16-3.36-20.16-10.08 0-7.456 21.28-11.584 63.84-12.32 17.92 0 28.384-2.976 31.36-8.96 2.976-5.984 4.48-25.376 4.48-58.24V271.04c0-61.984-0.736-95.584-2.24-100.8a30.4 30.4 0 0 0-19.04-21.28c-9.696-3.744-30.624-6.72-62.72-8.96-11.936-0.736-17.92-4.096-17.92-10.08 0-8.224 10.816-12.32 32.48-12.32 2.976 0 9.344 0.384 19.04 1.12h58.24c44.064 0 75.04-0.384 92.96-1.12 3.744 9.696 25.76 68.32 66.08 175.84 17.184 44.8 65.344 175.456 144.48 392 14.176-48.544 28.736-96.32 43.68-143.36l118.72-370.72c6.72-21.664 12.704-39.584 17.92-53.76l168-1.12c24.64 0 38.816 1.12 42.56 3.36 3.744 2.24 5.6 5.6 5.6 10.08 0 7.456-6.336 11.2-19.04 11.2-20.896 0-35.104 0.736-42.56 2.24-17.92 2.976-30.24 8.96-36.96 17.92-3.744 5.216-5.6 48.896-5.6 131.04V672h-108.64z m-3.456 131.36c-27.52 0.288-48.096 3.936-61.76 10.976-13.664 7.04-20.512 17.664-20.512 31.904 0 7.712 1.568 13.792 4.672 18.272 3.104 4.48 7.04 7.552 11.776 9.248 4.736 1.696 10.368 2.56 16.864 2.56 9.216 0 17.568-2.24 25.088-6.72 7.52-4.48 13.376-10.176 17.568-17.056 4.192-6.912 6.304-13.76 6.304-20.544v-28.64z m175.072-24.576l26.432-33.504c2.848-3.648 5.12-7.2 6.88-10.656a23.2 23.2 0 0 0 2.656-10.656 9.856 9.856 0 0 0-3.456-7.744 22.816 22.816 0 0 0-10.752-4.48v-9.92h66.4v9.92c-5.12 1.504-10.368 4.416-15.744 8.768-5.344 4.32-11.872 11.296-19.584 20.896l-42.048 51.616 46.304 62.336c6.624 8.96 12.608 15.776 17.888 20.544 5.28 4.736 10.56 8.096 15.84 10.144V896h-81.664v-9.952c11.232-1.344 16.864-5.568 16.864-12.608a23.328 23.328 0 0 0-1.408-8.096 36.192 36.192 0 0 0-5.312-8.96l-29.44-41.024-31.264 40.64a54.4 54.4 0 0 0-5.408 8.224 18.176 18.176 0 0 0-1.92 8.416c0 3.648 1.28 6.656 3.744 9.024 2.528 2.4 6.464 3.84 11.904 4.384V896h-67.84v-9.952c4.48-1.6 8.48-3.648 12.064-6.08 3.584-2.464 7.264-5.6 10.976-9.472 3.712-3.84 8.64-9.504 14.72-16.96l42.24-52.384-43.232-59.328a185.024 185.024 0 0 0-14.24-17.664 55.264 55.264 0 0 0-9.728-8.32 32.736 32.736 0 0 0-8.96-4.064v-9.952h79.648v9.92c-10.72 1.632-16.064 5.856-16.064 12.608 0 3.136 0.704 6.24 2.144 9.344 1.408 3.136 3.616 6.56 6.592 10.368l24.768 34.72z" p-id="14243"></path></svg>
                                    </el-radio-button>
                                </el-tooltip>
                                <el-tooltip content="最小值" placement="bottom">
                                    <el-radio-button label="MIN">
                                        <svg t="1644573274770" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14420" width="12" height="12"><path d="M544 892.48a7.04 7.04 0 0 1-2.4-5.44c0-2.016 0.8-3.776 2.4-5.248v10.656zM649.12 576V208.32c0 0.736-4.096 13.824-12.32 39.2-29.856 90.336-73.184 226.24-129.92 407.68l-52.64 178.08c-10.464 35.104-17.92 52.64-22.4 52.64-5.216 0-10.816-8.96-16.8-26.88-21.664-67.936-82.88-237.44-183.68-508.48L186.56 230.72c0.736 14.176 1.12 33.6 1.12 58.24v364c0 136.64 1.12 205.696 3.36 207.2 5.216 9.696 23.136 14.56 53.76 14.56 24.64 0 36.96 3.36 36.96 10.08 0 7.456-7.84 11.2-23.52 11.2-9.696 0-18.656-0.384-26.88-1.12a397.344 397.344 0 0 0-28-1.12l-128.8 3.36c-13.44 0-20.16-3.36-20.16-10.08 0-7.456 21.28-11.584 63.84-12.32 17.92 0 28.384-2.976 31.36-8.96 2.976-5.984 4.48-25.376 4.48-58.24V271.04c0-61.984-0.736-95.584-2.24-100.8a30.4 30.4 0 0 0-19.04-21.28c-9.696-3.744-30.624-6.72-62.72-8.96-11.936-0.736-17.92-4.096-17.92-10.08 0-8.224 10.816-12.32 32.48-12.32 2.976 0 9.344 0.384 19.04 1.12h58.24c44.064 0 75.04-0.384 92.96-1.12 3.744 9.696 25.76 68.32 66.08 175.84 17.184 44.8 65.344 175.456 144.48 392 14.176-48.544 28.736-96.32 43.68-143.36l118.72-370.72c6.72-21.664 12.704-39.584 17.92-53.76l168-1.12c24.64 0 38.816 1.12 42.56 3.36 3.744 2.24 5.6 5.6 5.6 10.08 0 7.456-6.336 11.2-19.04 11.2-20.896 0-35.104 0.736-42.56 2.24-17.92 2.976-30.24 8.96-36.96 17.92-3.744 5.216-5.6 48.896-5.6 131.04V576h-108.64z m36.672 46.176v39.424h-37.376v-39.424h37.376z m-58.08 263.872c5.28-1.6 9.024-3.04 11.264-4.256a16.96 16.96 0 0 0 5.696-5.088 26.016 26.016 0 0 0 3.648-9.952c0.896-4.48 1.312-11.456 1.312-20.928v-88.544c0-8.672-0.128-15.68-0.384-20.928a31.68 31.68 0 0 0-2.88-12.704 15.456 15.456 0 0 0-7.392-7.104 58.624 58.624 0 0 0-14.112-3.968v-10.752l47.328-1.824h12.384v145.216c0 11.648 0.544 19.744 1.6 24.288 1.12 4.512 3.2 8 6.208 10.336 3.072 2.368 8.032 4.448 14.944 6.208V896h-79.616v-9.952zM941.12 896h-80v-9.952c5.248-1.6 9.056-3.04 11.36-4.256a16.64 16.64 0 0 0 5.76-5.088 26.144 26.144 0 0 0 3.68-10.048 117.76 117.76 0 0 0 1.312-20.64v-53.216a371.2 371.2 0 0 0-0.8-25.792 107.328 107.328 0 0 0-2.752-18.976 39.36 39.36 0 0 0-4.672-11.584 29.696 29.696 0 0 0-15.136-11.776 39.168 39.168 0 0 0-12.8-1.728c-5.28 0-10.272 1.056-15.04 3.136a61.44 61.44 0 0 0-15.616 10.88c-5.696 5.12-9.824 10.24-12.416 15.232-2.56 4.992-3.84 10.752-3.84 17.28v75.744c0 11.648 0.544 19.744 1.6 24.288 1.12 4.512 3.2 8 6.208 10.336 3.04 2.368 8.032 4.448 14.944 6.208V896h-79.616v-9.952c5.28-1.6 9.024-3.04 11.264-4.256a16.96 16.96 0 0 0 5.696-5.088 26.016 26.016 0 0 0 3.648-9.952c0.864-4.48 1.312-11.456 1.312-20.928v-88.544c0-8.672-0.128-15.68-0.416-20.928a31.68 31.68 0 0 0-2.816-12.704 15.456 15.456 0 0 0-7.424-7.104 58.624 58.624 0 0 0-14.112-3.968v-10.752l47.52-1.824h12.384l-2.24 33.088 2.88 0.832c9.984-10.176 18.08-17.408 24.256-21.76 6.144-4.32 12.384-7.68 18.688-10.048a56.32 56.32 0 0 1 20-3.52c7.328 0 13.856 0.832 19.616 2.496a42.784 42.784 0 0 1 26.112 20.928c2.816 5.216 4.96 11.488 6.4 18.784 1.408 7.328 2.112 16.608 2.112 27.84v76.576c0 9.344 0.256 16.128 0.8 20.32a26.112 26.112 0 0 0 2.88 9.76 16.64 16.64 0 0 0 5.856 5.76c2.56 1.6 7.04 3.232 13.44 4.992V896z" p-id="14421"></path></svg>
                                    </el-radio-button>
                                </el-tooltip>
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
        this.chart = null
        return {
            loading: false,
            db: null, 
            tables: [],
            columns: {}, 
            current: '', 
            xAxis: '',
            yAxis: [], 
            queryType: 'COUNT',
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
                    _this.loading = false
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