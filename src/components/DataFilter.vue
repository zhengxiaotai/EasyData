<template>
    <el-form label-width="90px" :inline="true">
        <el-form-item :label="item.lable" v-for="(item, i) in filterItem" v-bind:key="i" size="small">
            <el-input v-if="item.type == 'input'" v-model="item.model" size="small"></el-input>
            <el-select v-else-if="item.type == 'select'" v-model="item.model" size="small"></el-select>
            <el-date-picker v-else-if="item.type == 'date'" v-model="item.model" type='date' size="small"></el-date-picker>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" plain size="mini">搜索</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: 'DataFilter', 
    props: {
        filterItem: Array
    },
}
</script>

<style>
    form {
        margin: 15px 0;
    }
</style>