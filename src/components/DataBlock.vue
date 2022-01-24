<template>
    <div class="data-row">
        <div class="data-block" v-for="(data, i) in blockData" v-bind:key="i">
            <div class="data-block-icon" :style="{backgroundColor: data.iconColor}">
                <i :class="['fa', data.iconClass]" />
            </div>
            <div class="data-block-content">
                <div class="data-block-number">0</div>
                <div class="data-block-title">{{ data.title }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DataBlock', 
    props: {
        blockData: Array
    }
}
</script>

<style>
.data-row {
    margin-top: 5px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
}
.data-block {
    display: flex;
}
.data-block .data-block-icon {
    margin-top: 2px;
    width: 60px;
    height: 60px;
    font-size: 38px;
    border-radius: 30px;
    text-align: center;
    line-height: 60px;
    color: #FFFFFF;
}
.data-block:hover .data-block-icon {
    box-shadow: #D0D0D0 2px 2px 6px;
    cursor: pointer;
}

.data-block .data-block-content {
    margin-left: 20px;
    width: 90px;
}
.data-block .data-block-content .data-block-number {
    font-size: 32px;
    font-weight: bold;
    color: #333333;
}
.data-block .data-block-content .data-block-title {
    font-size: 16px;
    color: #666666;
    margin-top: 5px;
}
</style>