
<!-- 最后更新时间 -->
<script >
import { ref } from 'vue';
import { getCovInfo } from '../../api/covInfo.js';
export default {
    setup() {

        let modifyTimeRef = ref('');

        getCovInfo().then(res => {
             let time = res.newslist[0].desc.modifyTime;
            // console.log(time);
            time = new Date(time).toLocaleString();
            modifyTimeRef.value = time.replace(/\//g, '-').slice(0, -3);
        })
        return {
            modifyTime: modifyTimeRef,
        }
    },
}
</script>

<template>
    <div class="modifyTime">截至北京时间 {{modifyTime}}</div>
</template>

<style scoped lang="less">
.modifyTime {
    padding: 0.22rem 0;
    font-size: 0.24rem;
    color: #666;
}
</style>
