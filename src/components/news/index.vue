
<template>
    <!-- 疫情热点 -->
    <div class="news-container">
        <div class="news-header">
            <Title>
                <img src="https://img1.dxycdn.com/2021/0111/820/9732351014585228543-22.png" />
            </Title>
            <div class="more">
                <span>查看更多</span>
                <i class="iconfont icon-arrowRight"></i>
            </div>
        </div>
        <ul class="news-list">
            <li v-for="item in newsList" :key="item.id">
                <div class="left">
                    <div class="block">最新</div>
                    <span class="title">{{ item.title }}</span>
                </div>
                <i class="iconfont icon-arrowRight icon"></i>
            </li>
        </ul>
    </div>
</template>


<script setup>
import { computed, onMounted, onUpdated, ref } from 'vue'
import Title from '../../components/title/index.vue'

const props = defineProps({
    newsList: Array,
});

// onUpdated(()=>{
//      console.log(props, props.newsList);
// });



</script>

<style lang="less">
@import url("//at.alicdn.com/t/font_3185467_nswygchwr5.css");

.news-container {
    width: 7.5rem;
    font-size: 0;
    box-sizing: border-box;
    padding: 0.32rem 0.32rem 0.1rem 0.32rem;
    // background-color: orange;
    .news-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        img {
            width: 1.4rem;
            height: 0.48rem;
        }
        .more {
            align-items: center;
            display: flex;
            color: #007aff;
            height: 0.48rem;
            span {
                font-size: 0.28rem;
                line-height: 0.48rem;
                height: 0.48rem;
            }
        }
    }
    .news-list {
        font-size: 0.28rem;
        border-bottom: 1px solid #ebebeb;
        padding-bottom: 0.22rem;

        li {
            color: #1a1a1a;
            font-size: 0.3rem;
            line-height: 0.46rem;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-spacing: 10px;
            box-sizing: border-box;
            padding: 0.1rem 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        li:first-child {
            padding-top: 0.2rem;
        }
        .left {
            .block {
                display: inline-block;
                height: 0.32rem;
                background-color: #f74c31;
                color: #fff;
                border-radius: 0.04rem;
                font-size: 0.22rem;
                line-height: 0.32rem;
                margin-right: 0.08rem;
                box-sizing: border-box;
                padding: 0 1px;
            }
            .title {
                letter-spacing: 1px;
            }
        }

        .icon {
            font-size: 0.28rem;
            color: #ccc;
        }
    }
}
</style>
