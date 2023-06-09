<template>
	<view>
		  <!-- logo -->
		  <view class="logo">
		    <image class="fengrui-img" mode="aspectFit" src="../../static/logo.png" />
		  </view>
		
		  <!-- 名称 -->
		  <view class="name-title">
		  izhar发卡
		    <view class="name-v">
		      V1.0
		    </view>
		  </view>
		
		  <!-- 描述 -->
		  <view class="desrc">
		    <rich-text>致我们终将逝去的青春 在这个喧闹的城市， 我们背负了太多的包袱， 走过了很多路， 吃过了很多苦。 寂静夜空，对天仰望， 尘世间寻找心灵的安慰， 我希望这些文字感动了你。</rich-text>
		  </view>
		
		  <!-- foot -->
		  <view class="foot">
		    <view>
		      BY：izharBegim
		    </view>
		    <view>
		      Copyright@2023 izhar.cn
		    </view>
		  </view>
		
		  <!-- 元素装饰 -->
		  <view class="about-img">
		    <image class="fengrui-img about-img-right" mode="aspectFit" src="../../static/images/about.svg" />
		  </view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
			}

			}
</script>

<style>
	.logo {
	  width: 380rpx;
	  height: 180rpx;
	  border-radius: 40rpx;
	  overflow: hidden;
	  margin: 150rpx auto 52rpx auto;
	}
	
	/* 名称 */
	.name-title {
	  font-size: 60rpx;
	  text-align: center;
	  position: relative;
	  margin: auto;
	  display: table;
	  font-family: "AlimamaShuHeiTi-Bold";
	}
	
	.name-v {
	  position: absolute;
	  top: 10rpx;
	  right: -130rpx;
	  padding: 0rpx 26rpx;
	  height: 44rpx;
	  line-height: 44rpx;
	  border-radius: 100rpx;
	  background: rgba(59, 104, 255, 1);
	  color: #fff;
	  font-size: 24rpx;
	}
	
	/* 描述 */
	.desrc{
	  margin: 78rpx 68rpx;
	  line-height: 54rpx;
	  /* color: #777777; */
	  z-index: 9;
	  position: sticky;
	}
	/* foot */
	.foot{
	  margin:80rpx 0;
	  line-height: 60rpx;
	  text-align: center;
	  color:#ADADAD;
	  font-size: 26rpx;
	  z-index: 9;
	  position: sticky;
	}
	.about-img{
	  position: fixed;
	  bottom: 0;
	  right: 0;
	  width: 400rpx;
	  height: 400rpx;
	}
	.about-img-right{
	  margin-left: 80rpx;
	}
	
</style>