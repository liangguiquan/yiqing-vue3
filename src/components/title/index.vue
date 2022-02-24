<template>
    <div class="title-container">
        <i class="blue-line"></i>
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.title-container {
    display: flex;
    width: 4rem;
    align-items: center;
    // background-color: orange;
    .blue-line {
        width: 0.08rem;
        height: 0.32rem;
        background-color: #4169e2;
        margin-right: 0.16rem;
    }
}
</style>
