
<script>
import { getCovInfo } from '../../api/covInfo.js';
import { computed, onMounted, ref } from 'vue';
import News from '../../components/news/index.vue'
import ChinaMap from '../../components/vueEcharts/ChinaMap.vue'
import Nav from '../../components/nav/index.vue'
// import Test from '../../components/template/index.vue'
import CovCount from '../../components/covCount/index.vue'

export default {
  components: {
    News,
    ChinaMap,
    Nav,
    CovCount,
  },
  setup() {
    let newsListRef = ref([]);
    let covCountRef = ref(null);  
    let highRiskRef = ref(0);   // 高风险地区数量
    let midRiskRef = ref(0);    // 中风险地区数量

    getCovInfo().then(res => {
      console.log(res);
      newsListRef.value = res.newslist[0].news;
      covCountRef.value = {
        confirmedCount: res.newslist[0].desc.confirmedCount,  // 累计确诊
        confirmedIncr: res.newslist[0].desc.confirmedIncr,   // 较昨天新增的累计确诊数
        currentConfirmedIncr: res.newslist[0].desc.currentConfirmedIncr,  // 较昨天新增的现存确诊
        currentConfirmedCount: res.newslist[0].desc.currentConfirmedCount,  // 现存确诊
        deadCount: res.newslist[0].desc.deadCount,  // 累计死亡
        deadIncr: res.newslist[0].desc.deadIncr,  // 较昨天新增死亡数
        curedIncr: res.newslist[0].desc.curedIncr,   // 较昨天新增的治愈数
        curedCount: res.newslist[0].desc.curedCount,  // 累计治愈
        suspectedCount: res.newslist[0].desc.suspectedCount,  // 境外输入的数量
        suspectedIncr: res.newslist[0].desc.suspectedIncr,  // 较昨天新增的境外输入的数量
        seriousCount: res.newslist[0].desc.seriousCount,  // 现存无症状
        seriousIncr: res.newslist[0].desc.seriousIncr,  // 较昨天新增的现存无症状数量
      }
      // console.log(covCountRef.value);
      highRiskRef.value = res.newslist[0].riskarea.high.length;
      midRiskRef.value = res.newslist[0].riskarea.mid.length;
    })

    return {
      newsList: newsListRef,
      covCount: covCountRef,
      highRisk: highRiskRef,
      midRisk: midRiskRef,
    }
  }
}

</script>

<template>
  <div class="home-container">
    <!-- 顶部图片 -->
    <div class="banner-container">
      <img src="https://img1.dxycdn.com/2020/0314/863/3401956761707181858-2.png" />
    </div>
    <!-- 疫情热点 -->
    <News :newsList="newsList" />

    <!-- 小导航 -->
    <Nav></Nav>

    <!-- 风险地区入口 -->
    <div class="riskAreaEntry-container">
      <div class="content">
        <div class="left">
          高风险地区
          <span class="high">{{ highRisk}}</span> 个 中风险地区
          <span class="mid">{{ midRisk }}</span> 个
        </div>
        <router-link class="more" to="/riskarea">
          <span>查看全部</span>
          <i class="iconfont icon-arrowRight icon"></i>
        </router-link>
      </div>
    </div>

    <!-- 国内数据统计 -->
    <CovCount v-if="covCount" :count="covCount" />

    <!-- 国外数据统计 -->
    <div class="foreign-container"></div>

    <div class="map">
      <ChinaMap />
    </div>
  </div>
</template>

<style scoped lang="less">
.home-container {
  width: 100%;
  .banner-container {
    font-size: 0;
    img {
      width: 7.5rem;
    }
  }
  .riskAreaEntry-container {
    width: 7.5rem;
    box-sizing: border-box;
    padding: 0.1rem 0.32rem 0.32rem 0.32rem;
    .content {
      box-sizing: border-box;
      border: 0.01rem solid #d9d9d9;
      padding: 0.16rem;
      font-size: 0.28rem;
      display: flex;
      justify-content: space-between;
      .left {
        .high {
          font-weight: bold;
          font-size: 0.32rem;
          color: rgb(247, 76, 49);
        }
        .mid {
          font-weight: bold;
          font-size: 0.32rem;
          color: #fbb046;
        }
      }
      .more {
        align-items: center;
        display: flex;
        align-items: center;
        color: #007aff;
        height: 0.48rem;
        span {
          font-size: 0.24rem;
          line-height: 0.48rem;
          height: 0.48rem;
        }
        .icon {
          font-size: 0.2rem;
        }
      }
    }
  }
}
</style>



<!-- // 疫情数据 -->
<!-- {
    confirmedCount: data.value.newslist[0].desc.confirmedCount,  // 累计确诊
    confirmedIncr: data.value.newslist[0].desc.confirmedIncr,   // 较昨天新增的累计确诊数
    currentConfirmedIncr: data.value.newslist[0].desc.currentConfirmedIncr,  // 较昨天新增的现存确诊
    currentConfirmedCount: data.value.newslist[0].desc.currentConfirmedCount,  // 现存确诊
    deadCount: data.value.newslist[0].desc.deadCount,  // 累计死亡
    deadIncr: data.value.newslist[0].desc.deadIncr,  // 较昨天新增死亡数
    curedIncr: data.value.newslist[0].desc.curedIncr,   // 较昨天新增的治愈数
    curedCount: data.value.newslist[0].desc.curedCount,  // 累计治愈
    suspectedCount: data.value.newslist[0].desc.suspectedCount,  // 境外输入的数量
    suspectedIncr: data.value.newslist[0].desc.suspectedIncr,  // 较昨天新增的境外输入的数量
    seriousCount: data.value.newslist[0].desc.seriousCount,  // 现存无症状
    seriousIncr: data.value.newslist[0].desc.seriousIncr,  // 较昨天新增的现存无症状数量
} -->




