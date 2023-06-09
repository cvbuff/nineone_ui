<template>
    <view style="height: 100%">
        <!-- pages/category/category.wxml -->
        <!-- 引入骨架 -->

        <!-- parse <template is="skeleton" v-if="skeleton"/> -->
        <block name="skeleton" v-if="skeleton">
            <view class="sk-container">
                <view class="logo">
                    <image class="fengrui-img sk-image" mode="aspectFit"></image>
                </view>
                <view class="name-title sk-transparent">
                    枫瑞开源作品
                    <view class="name-v sk-transparent sk-text-22-7273-80 sk-text" style="background-position-x: 50%">V2.1</view>
                </view>
                <view class="desrc sk-transparent sk-text-20-3704-268 sk-text">
                    致我们终将逝去的青春 在这个喧闹的城市， 我们背负了太多的包袱， 走过了很多路， 吃过了很多苦。 寂静夜空，对天仰望， 尘世间寻找心灵的安慰， 我希望这些文字感动了你
                </view>
                <view class="foot">
                    <view class="sk-transparent sk-text-28-3333-2 sk-text" style="background-position-x: 50%">BY：Yin Fengrui</view>
                    <view class="sk-transparent sk-text-28-3333-103 sk-text" style="background-position-x: 50%">Copyright@2023 frbkw.com</view>
                </view>
            </view>
        </block>

        <block v-else-if="">
            <!-- 头部信息 -->
            <view class="category-title">
                {{ title }}
            </view>
            <view class="category-desrc">
                {{ desrc }}
            </view>

            <!-- 列表 -->
            <view class="category-lists-flex">
                <block v-for="(item, index) in categories" :key="index">
                    <view class="category-lists-item" :data-id="item.id" @tap="categoryTap">
                        <view class="category-lists-title font-ooverflow-one">{{ item.attributes.name }}</view>
                        <view class="category-lists-dsrc font-ooverflow-two">{{ item.attributes.desrc }}</view>
                        <view class="category-lists-img">
                            <image class="fengrui-img" mode="aspectFit" :src="item.attributes.icon"></image>
                        </view>
                    </view>
                </block>
            </view>

            <!-- loading加载图 -->
            <block v-if="page > 1">
                <loading-lis :listsLoading="listsLoading"></loading-lis>
            </block>
        </block>
    </view>
</template>

<script>
import loadingLis from '../../components/loading-lis/loading-lis';
// pages/category/category.js
import * as API from '../../utils/api';
export default {
    components: {
        loadingLis
    },
    data() {
        return {
            // 引入骨架
            skeleton: true,
            // 页面信息
            title: '嘿！你知道吗',
            desrc: '其实天很蓝，海不宽，生活很温暖，只要顺其自然',
            // 分类数据
            categories: [],
            // 设置缓存
            wxSet: '',
            // 页数
            page: 1,
            // loading加载图
            listsLoading: true
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 获取缓存信息
        this.getSystemInfo();
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        this.setData({
            page: this.page + 1
        });
        this.getCategory();
    },
    // 页面内分享
    onShareAppMessage(res) {
        if (res.from === 'button') {
            console.log(res.target);
        }
        return {
            title: this.wxSet.shareTitle,
            imageUrl: this.wxSet.shareImg,
            path: 'pages/category/category'
        };
    },
    methods: {
        // 获取缓存信息
        getSystemInfo() {
            // 设置缓存
            var wxSet = uni.getStorageSync('frSet');
            this.setData({
                wxSet: wxSet
            });
            // 请求分类接口
            this.getCategory();
        },

        // 请求分类接口
        getCategory() {
            API.getCategory([this.page]).then((res) => {
                console.log('请求分类', res.data.data);
                this.setData({
                    categories: this.categories.concat(res.data.data),
                    skeleton: false
                });
                if (this.page > res.data.meta.pagination.pageCount) {
                    this.setData({
                        listsLoading: false
                    });
                }
            });
        },

        // 分类列表点击
        categoryTap(e) {
            var id = e.currentTarget.dataset.id;
            uni.navigateTo({
                url: '../lists/lists?id=' + id
            });
        }
    }
};
</script>
<style>
@import './category.css';
@import '@/pages/about/about.skeleton.css';
</style>
