
<template>
    <!-- 疫情热点 -->
    <div class="nav-container">
        <router-link to="/" class="nav-item">
            <img src="https://img1.dxycdn.com/2021/0804/220/9442938684169526943-22.png" />
            <span>免费问诊</span>
        </router-link>

        <router-link to="/hesuan" class="nav-item">
            <img src="https://img1.dxycdn.com/2021/0804/598/2642938684169526943-22.png" />
            <span>核酸检测</span>
        </router-link>

        <router-link to="/prevention" class="nav-item">
            <img src="https://img1.dxycdn.com/2021/0804/827/1742938684169526943-22.png" />
            <span>防疫物资</span>
        </router-link>

        <router-link to="/" class="nav-item">
            <img src="https://img1.dxycdn.com/2021/0804/239/7448668684169526943-22.png" />
            <span>出行政策</span>
        </router-link>
    </div>
</template>

<script setup>


</script>


<style  lang="less">
.nav-container {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0.22rem 0 0.32rem 0;
    // background-color: rgb(190, 31, 190);
    .nav-item {
        width: 25%;
        // background-color: aqua;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        img {
            width: 0.8rem;
        }
        span {
            font-size: 0.26rem;
        }
    }
}
</style>