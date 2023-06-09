<template>
	<view>
		<view v-if="uqur" class="scroll-view-item">
		        <view class="container">
		            <view class="page-body">
		                <view class="btn-area" style="margin-top: 30rpx;"></view>
		                <view class="clear_10"></view>
		                <view class="page-section page-section-gap">
		                    <view bindtap="preview" class="video-item status expired" v-for="(item,index) in uqur" :key="index">
		                        <text class="long-text">【名称】：<text class="" selectable="true">{{item.name}}</text>
		                        </text>
		                        <view>
		                            <text class="long-text">【卡密】：{{item.km}}</text>
		                        </view>
		                        <view>
		                            <text class="long-text">【创建时间】：{{item.usetime}}</text>
		                        </view>
		                        <view>
		                            <text class="long-text" v-if="item.usetip">【使用方法】：{{item.usetip}}</text>
		                        </view>
		                        <view class="right">
		                            
		                            <button class="mini-btn" @click="koqur(index)">复制卡密</button>
		                        </view>
		                    </view>
		                </view>
		            </view>
		        </view>
		        <view class="clear_10"></view>
		    </view>
			<view v-if="uqur.length === 0" style="text-align: center;margin: auto;">没有相关信息</view>
	</view>
</template>

<script>
	 import utils from '@/utils/utils.js';
	 var app = getApp()
	 export default {
		 data(){
			 return{
				 uqur:[],
				 izkami:'',
				 userid:''
			 }
		 },
		 onLoad() {
		 	console.log('获取记录')
		 	this.getRecord()
		 
		 },
		 onShareAppMessage: function () {
		       return {
		           title: '获取记录',
		           path:  'pages/index/index'
		       }
		   },
		   methods: {
			   getRecord: function getRecord() {
			       var that = this;
			       uni.showLoading({
			           title: "加载中"
			       });
			       uni.login({
			           success: function success(code) {
			               utils.getRequest("/Api/getRecord.php?code=" + code.code).then(function(res) {
			                   console.log(res);
			                   uni.hideLoading();
			                   if (res.data.code == 200) {
								       that.uqur = res.data.recordList
			                           that.userid = res.data.userid
			                   } else {
			                       uni.showModal({
			                           title: "提示",
			                           content: res.data.msg,
			                           showCancel: !1,
			                           confirmText: "重试",
			                           
			                       });
			                   }
			               }).catch(function(res) {
			                   uni.hideLoading();
			                   console.log(res);
			                   uni.showModal({
			                       title: "提示",
			                       content: "网络请求超时",
			                       confirmText: "重试",
			                       
			                   });
			               });
			           }
			       });
			   },
			   
			   koqur (index) {
				var that = this;
				that.izkami = that.uqur[index].km
				that.aq()
			   },
			   aq(){
				   var t = this;
				   uni.setClipboardData({
				   	data: t.izkami,
				   	success: function(t) {
				   		uni.showToast({
				   			title: '复制卡密成功',
				   			icon: "success",
				   			duration: 800
				   		}), setTimeout(function() {
				   			uni.hideToast({});
				   		}, 800);
				   	}
				   });
			   }
		   }
	 }
</script>

<style>
	/* ByizharBegim */
	.iconfont {
	    margin: 0 20px;
	}
	
	text.total {
	    position: absolute;
	    right: 20px;
	    top: -22px;
	}
	
	.add {
	    position: absolute;
	    right: 10px;
	    top: -35px;
	}
	
	.task-type {
	    margin-top: 5px;
	}
	
	.video-item {
	    position: relative;
	    font-size: 14px;
	    margin-bottom: 20px;
	    padding: 10px;
	    border-radius: 7px;
	    border: 1px solid #dbdbdb;
	    box-shadow: 0 2px 6px 0 hsla(0,0%,0%,0.08);
	    background-image: linear-gradient(to top,#2158f3 0%,#009688 100%);
	}
	
	.init,.expired {
	    color: grey;
	}
	
	.right {
	    text-align: right;
	    margin-top: 5px;
	    margin-bottom: -5px;
	}
	
	.mini-btn {
	    margin-right: 5px;
	    padding: 0 14px!important;
	    margin-bottom: 5px;
	}
	
	.mini-btn add {
	}
	
	.status {
	    font-size: 14px;
	    padding: 5px 10px;
	}
	
	.status icon {
	    transform: rotate(180deg);
	    margin-right: 3px;
	}
	
	.expired {
	    color: grey;
	}
	
	.item-remove {
	    position: absolute;
	    right: 5px;
	    top: 5px;
	    margin-top: 5px;
	}
	
	.long-text {
	    word-break: break-all;
	    color: #fff;
	}
	
	.long-texts {
	    word-break: break-all;
	    color: #FF3E96;
	}
	
	.highlight {
	    background-color: #ffffc7;
	}
	
	.clear_10 {
	    width: 100%;
	    height: 10px;
	    clear: both;
	}
	
	.page-body {
	    width: 100%;
	    flex-grow: 1;
	    overflow-x: hidden;
	}
	
	.container {
	    min-height: 100%;
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	    justify-content: space-between;
	    box-sizing: border-box;
	}
	
	.checkbox {
	    text-align: left;
	    margin-top: 15px;
	    margin-bottom: 15fpx;
	}
	
	.weui-cells__title {
	    margin-top: .77em;
	    margin-bottom: .3em;
	    padding-left: 15px;
	    padding-right: 15px;
	    color: #999;
	    font-size: 14px;
	}
	
	.is-relative {
	    position: relative;
	}
	
	.page-section {
	    width: 100%;
	}
	
	.page-section-gap {
	    box-sizing: border-box;
	    padding: 0 30rpx;
	}
	
	.btn-area {
	    margin-top: 60rpx;
	    box-sizing: border-box;
	    width: 100%;
	    padding: 0 30rpx;
	}
	
	.navigator-hover button {
	    background-color: #DEDEDE;
	}
	
	.collect-container {
	    position: fixed;
	    width: 100%;
	    height: 100%;
	    padding: 0 12%;
	    left: 0;
	    right: 0;
	    top: 0;
	    bottom: 0;
	    z-index: 9999;
	    background-color: rgba(0,0,0,0.8);
	    display: flex;
	    flex-direction: column;
	    box-sizing: border-box;
	}
	
	.red-envelope {
	    position: relative;
	    top: 25%;
	    width: 313px;
	    height: 441px;
	}
</style>