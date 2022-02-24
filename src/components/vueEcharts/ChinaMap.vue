
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


<!-- 国内疫情地图 -->
<script>
import Title from '../../components/title/index.vue'
import { getCurrentInstance, onMounted } from 'vue'
import { getChinaData } from '../../api/covInfo'

export default {
    components: {
        Title,
    },
    setup() {
        const instance = getCurrentInstance();
        let data = [];

        onMounted(() => {
            getChinaData().then(res => {
                console.log(res);
                data = res.retdata.map(item => {
                    return {
                        name: item.xArea,
                        value: +item.confirm
                    }
                });
                console.log(data);
                instance.appContext.config.globalProperties.$myChart.chinaMap('main', data);
            })
            // instance.appContext.config.globalProperties.$myChart.line('main');
        });



        return {

        }
    }
}

</script>



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
    background-color: #f7f7f7;
}
</style>
