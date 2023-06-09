<template>
    <view style="height: 100%">
        <!-- components/loading-lis/loading-lis.wxml -->
        <!-- 加载图标 -->
        <block>
            <view class="loading-icon" v-if="listsLoading">
                <image class="fengrui-img" src="/static/images/loading.gif" mode="aspectFit" />
            </view>
            <view v-else-if="" class="loading-text">到底咯 (,,•́ . •̀,,)</view>
        </block>
    </view>
</template>

<script>
// components/loading-lis/loading-lis.js
export default {
    data() {
        return {};
    },
    /**
     * 组件的属性列表
     */
    props: {
        // loading动图
        listsLoading: {
            type: Boolean,
            default: true
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {},
    created: function () {}
};
</script>
<style>
@import './loading-lis.css';
</style>
