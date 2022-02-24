
<!-- 国内疫情数据统计 -->
<script>
// import { onMounted, ref } from 'vue'
import ModifyTime from '../../components/modifyTime/index.vue'

export default {
    props: {
        count: {
            type: Object,
            default: {}
        }
    },
    components: {
        ModifyTime,
    },
    setup(props, ctx) {
        // console.log(props, props.count);

        // // 判断一个属是否为正数，是正数的话在数字前加上'+'号
        function isPositiveNumber(num) {
            let result = num > 0 ? '+' + num : num;
            return result;
        };

        // 将数字变成千分位格式 12345678 --> 12,345,678
        function toLocaleString(num) {
            return num.toLocaleString();
        };

        return {
            isPositiveNumber,
            toLocaleString,
        }
    }
}

</script>

<template>
    <div class="covData-container">
        <ModifyTime />
        <ul class="panel">
            <li>
                <div class="change">
                    较昨日
                    <span class="color">{{ isPositiveNumber(count.currentConfirmedIncr) }}</span>
                </div>
                <p class="count color">{{ toLocaleString(count.currentConfirmedCount) }}</p>
                <p class="type">现存确诊</p>
            </li>
            <li>
                <div class="change">
                    较昨日
                    <span class="color">{{ isPositiveNumber(count.suspectedIncr) }}</span>
                </div>
                <p class="count color">{{ toLocaleString(count.suspectedCount) }}</p>
                <p class="type">境外输入</p>
            </li>
            <li>
                <div class="change">
                    较昨日
                    <span class="color">{{ isPositiveNumber(count.seriousIncr) }}</span>
                </div>
                <p class="count color">{{ toLocaleString(count.seriousCount) }}</p>
                <p class="type">现存无症状</p>
            </li>
            <li>
                <div class="change">
                    较昨日
                    <span class="color">{{ isPositiveNumber(count.confirmedIncr) }}</span>
                </div>
                <p class="count color">{{ toLocaleString(count.confirmedCount) }}</p>
                <p class="type">累计确诊</p>
            </li>
            <li>
                <div class="change">
                    较昨日
                    <span class="color">{{ isPositiveNumber(count.deadIncr) }}</span>
                </div>
                <p class="count color">{{ toLocaleString(count.deadCount) }}</p>
                <p class="type">累计死亡</p>
            </li>
            <li>
                <div class="change">
                    较昨日
                    <span class="color">{{ isPositiveNumber(count.curedIncr) }}</span>
                </div>
                <p class="count color">{{ toLocaleString(count.curedCount) }}</p>
                <p class="type">累计治愈</p>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="less">
.covData-container {
    background-color: #fff;
    width: 7.5rem;
    box-sizing: border-box;
    padding: 0 0.32rem 0.32rem 0.32rem;
    .panel {
        display: flex;
        flex-wrap: wrap;
        border: 0.01rem solid #ebebeb;
        border-radius: 0.08rem;
        font-size: 0.32rem;
        box-shadow: 0 0.04rem 0.12rem 0 rgba(0, 0, 0, 5%);
        li {
            width: 33.333333%;
            box-sizing: border-box;
            padding: 0.1rem 0;
            text-align: center;
            position: relative;
            &:nth-child(3n + 2)::before,
            &:nth-child(3n + 3)::before {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 2;
                content: "";
                display: block;
                width: 0.02rem;
                height: 0.8rem;
                background-image: linear-gradient(
                    180deg,
                    #eee,
                    #e1e1e1 51%,
                    #fff
                );
            }
            &:nth-child(1) .color {
                color: rgb(247, 76, 49);
            }
            &:nth-child(2) .color {
                color: rgb(247, 130, 7);
            }
            &:nth-child(3) .color {
                color: rgb(162, 90, 78);
            }
            &:nth-child(4) .color {
                color: rgb(174, 33, 44);
            }
            &:nth-child(5) .color {
                color: rgb(93, 112, 146);
            }
            &:nth-child(6) .color {
                color: rgb(40, 183, 163);
            }
            .change {
                font-size: 0.24rem;
                color: #666;
                font-weight: bold;
                span {
                    font-weight: normal;
                }
            }
            .count {
                font-weight: bold;
                font-size: 0.4rem;
            }
            .type {
                font-size: 0.24rem;
                font-weight: bold;
            }
        }
    }
}
</style>
