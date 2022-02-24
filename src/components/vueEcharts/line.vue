
<!-- 国内疫情地图 -->
<script setup>
import echarts from 'echarts';
import Title from '../title/index.vue'
import { onMounted } from 'vue';

onMounted(() => {
    createMap()
});

function createMap() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'line',  // 'bar' 柱状图
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    }
    // 绘制图表
    myChart.setOption(option);
}



</script>

<template>
    <div class="map-container">
        <div class="header">
            <Title>
                <p class="title">国内疫情地图</p>
            </Title>
        </div>

        <!-- echarts容器 -->
        <div id="main"></div>
    </div>
</template>

<style scoped lang="less">
.map-container {
    .header {
        box-sizing: border-box;
        padding: 0 0.32rem;
    }
    .title {
        font-weight: 600;
        font-size: 0.34rem;
        height: 0.48rem;
    }
}
#main {
    width: 7.5rem;
    height: 7.5rem;
}
</style>
