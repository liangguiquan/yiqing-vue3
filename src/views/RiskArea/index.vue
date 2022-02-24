
<!-- 风险地区 -->

<script setup>
import { getCovInfo } from '../../api/covInfo.js';

getCovInfo().then((res)=>{
    console.log(res);
})

</script>

<template>
    <div class="container">
        风险地区
    </div>
</template>

<style scoped lang="less">

</style>