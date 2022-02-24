

<script setup>
import { ref } from 'vue'
let preventionArr = [
    {
        title: '消毒剂',
        imgs: ['https://img1.dxycdn.com/2020/0215/220/3396780175063930893-135.png', 'https://img1.dxycdn.com/2020/0215/637/3396780181506594738-135.png', 'https://img1.dxycdn.com/2020/0215/372/3396780187949046019-135.png']
    },
    {
        title: '口罩',
        imgs: ['https://img1.dxycdn.com/2020/0225/169/3398653034208226202-135.png']
    },
    {
        title: '洗手液',
        imgs: ['https://img1.dxycdn.com/2020/0215/703/3396784974690083861-135.png']
    },
    {
        title: '温度计',
        imgs: ['https://img1.dxycdn.com/2020/0215/743/3396785021934726693-135.png']
    },
];

let active = ref(0);


</script>

<template>
    <div class="prevention-container">
        <div class="banner">
            <img src="https://img1.dxycdn.com/2020/0225/360/3398657919733724819-2.png" alt />
        </div>

        <van-tabs v-model:active="active" sticky>
            <van-tab v-for="item in preventionArr" :key="item.title" :title="item.title">
                <div class="content">
                    <span>{{ item.title }}指南</span>
                    <img v-for="(img, index) in item.imgs" :key="index" :src="img" />
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<style scoped lang="less">
.prevention-container {
    width: 7.5rem;
    font-size: 0;
    background-color: #3343ff;
    img {
        width: 100%;
    }

    .van-tabs {
        font-size: 0.24rem;
        box-sizing: border-box;
        padding: 0 0.32rem;
    }
}
</style>