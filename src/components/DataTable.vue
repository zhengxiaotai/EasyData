<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column v-for="(item, i) in tableColumn" 
        v-bind:key="i" 
        :prop="item.prop" 
        :label="item.lable">
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    name: 'DataTable', 
    props: {
        tableColumn: Array,
        tableData: Array
    },
}
</script>

<style>
    thead th {
        background-color: #F7F7F7!important
    }
</style>