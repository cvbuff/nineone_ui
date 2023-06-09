<template>
	<view style="direction: rtl;">
		<view class="mask"></view>
		<view v-if="type==1"><!--绑定微信-->
			<view class="wxbox">
				<view class="weixin">
					<view @click="clickLogin()">dddddd</view>
					<view>سۈپەتلىك بىلوگ قۇرۇش ئۈچۈن ئىسىم ۋە باش سۈرەتنى توغۇرلىۋىلىڭ</view>
					<button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
						<image class="avatar" :src="avatarUrl"></image>
						<!-- <image class="picture" src="../static/pictures.svg" mode=""></image> -->
					</button>
					</view>
				    <view class="name-view">
				    	<!-- <image class="name-icon" src="../static/username.svg" mode=""></image> -->
				    	<input type="nickname" @blur="onKeyInput" class="name-input" placeholder="ئىسىم كىرگۈزۈڭ" />
				    </view>
				<view class="btn" @click="eventClick">توغۇرلاپ بولدۇم</view>
				<!-- <view class="close" @click="close"><icon type="clear" size="26"/></view> -->
			</view>
		</view>
		<view v-else-if="type==2">
			<view class="redbox">
				<!-- <image src="../static/izPopup/hongbao_bg.png"></image> -->
				<view class="wrapBox">
					<view class="tips">恭喜您升级为达人！<view>获得奖励红包</view></view>
					<view class="money">￥<text>{{money}}</text></view>
					<view class="btn" @click="eventClick">收下红包</view>
				</view>
				<view class="close" @click="close"><icon type="clear" size="30" color="#fff"/></view>
			</view>
		</view>
		<view v-else-if="type==3">
			<view class="messBox">
				<view class="wrapBox">
					<view class="title">{{title}}</view>
					<view class="desc">
						<rich-text :nodes="content"></rich-text>
					</view>
					<view class="btn"  @click="close">我知道了</view>
				</view>
			</view>
		</view>
		<view v-else-if="type==4">
			<view class="updateBox">
				<view class="wrapbox">
					<view class="version">چۈشۈرۈلۈپ بولدى</view>
					<view class="desc">
						<!-- <rich-text :nodes="content"></rich-text> -->
						<ad style="direction: ltr;" unit-id="adunit-27ed74ca398d10db"></ad>
					</view>
					<view style="text-align: center;">يانفۇنىڭىزنىڭ ئالبۇمىغا ساقلاندى</view>
					<view class="btnbox" style="direction: ltr;">
						<view class="btnno" @click="close">ھە بولاپتۇ</view>
					</view>
				</view>
			</view>
		</view>
		<view v-else-if="type==5">
			<view class="messBox">
				<view class="wrapBox">
					<view class="title">{{title}}</view>
					<view class="desc">
						<rich-text :nodes="content"></rich-text>
					</view>
					<view class="btnbox">
						<view class="btnno" @click="close">关闭</view><view class="btnUp" @click="koqur">复制卡密</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		props: {
			type: {
				type: String,
				default:'1'
			},
			title:{
				type:String,
				default:''
			},
			money:{
				type:Number,
				default:1
			},
			content:{
				type:String,
				default:''
			},
			avatarUrl:{
				type:String,
				default:''
			},
			video:{
				type:String,
				default:''
			},
			version:{
				type:String,
				default:''
			}
		},
		data() {
			return {};
		},
		methods:{
			close(){
				this.$emit('close');
			},

			eventClick(){
				this.$emit('eventClick');
			},
			koqur(){
				this.$emit('koqur');
			},
			ChooseAvatar(){
				this.$emit('ChooseAvatar');
			},
			onChooseAvatar(){
				this.$emit('onChooseAvatar');
			},
			clickLogin(){
				this.$emit('clickLogin');
			}
		}
	}
</script>

<style lang="scss">
	.mask{
		position: fixed;
		top: 0;
		left:0;
		width: 100%;
		height: 100%;
		z-index:888;
		background-color: #1a1a1ba6;
	}
	.btn{
		width:70%;
		margin:20rpx auto;
		margin-top:40rpx;
		padding:20rpx 0px;
		text-align:center;
		background:#4884FF;
		border-radius: 34px;
		font-size: 30rpx;
		color:#fff;
	}
	//微信弹窗
	.wxbox{
		position: absolute;
		top:20%;
		z-index: 998;
		width:80%;
		left:10%;
		background-color: #fff;
		border-radius:30rpx;
		padding:30rpx 0rpx;
		.close{
			position: absolute;
			top:5px;
			right:10px;
			z-index: 999;
			text-align: center;
		}
		.weixin{
			
			text-align: center;
		}
		.tips{
			padding:10rpx 20rpx;
			text-align:center;
			font-size:35rpx;
			color:#333;
		}
	}
	//红包弹窗
	.redbox{
		position: absolute;
		top:12%;
		z-index: 998;
		width:90%;
		left:5%;
		padding:10rpx 0rpx;
		height:750rpx;
		image{
			width:100%;
			height:100%;
		}
		.close{
			text-align: center;
		}
		.wrapBox{
			position: absolute;
			width:60%;
			left:20%;
			top:320rpx;
			padding:10rpx 0rpx;
			text-align:center;
			.tips{
				font-size:35rpx;
				color:#fff;
				font-weight:bold;
				text{
					font-weight: normal;
				}
			}
			.money{
				font-size: 35rpx;
				color:#fff;
				margin-top:30rpx;
				font-weight: bold;
				text{
					font-size: 50rpx;
				}
			}
			.btn{
				width:80%;
				margin:20rpx auto;
				margin-top:40rpx;
				padding:20rpx 0px;
				text-align:center;
				background:linear-gradient(to bottom,#FFF04D,#FFE06B);
				border-radius: 34px;
				font-size: 30rpx;
				color:#CF2A2A;
				font-weight: bold;
			}
		}
	}
	.messBox{
		position: fixed;
		z-index:998;
		width:80%;
		left:10%;
		padding:10rpx 0rpx;
		top: 20%;
		.wrapBox{
			background-color: #fff;
			border-radius: 20rpx;
			padding:30rpx;
			.title{
				text-align:center;
				font-size: 32rpx;
				font-weight: bold;
			}
			.desc{
				height:400rpx;
				margin-top:20rpx;
				font-size: 30rpx;
			}
		}
	}
	.updateBox{
		position: absolute;
		top:20%;
		z-index:998;
		height:300rpx;
		width:80%;
		left:10%;
		.tubiao{
			text-align: center;
			image{
				z-index: 999;
				width:200rpx;
				height:130rpx;
			}
		}
		.wrapbox{
			position: relative;
			z-index: 998;
			top:-70rpx;
			background-color: #fff;
			border-radius: 10rpx;
			padding:30rpx 40rpx;
			.version{
				margin-top:50rpx;
				font-size: 35rpx;
				color:#333;
				font-weight: bold;
				text-align: center;
			}
			.desc-t{
				margin-top:30rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
	}
	.updateBox1{
		position: fixed;
		top:15%;
		z-index:998;
		width:80%;
		left:10%;
		padding:10rpx;
		height:700rpx;
		image{
			width:100%;
			height:100%;
		}
		.wrapBox{
			position: absolute;
			width:85%;
			left:50rpx;
			top:40rpx;
			padding:10rpx 20rpx;
			.version{
				font-size: 35rpx;
				color:#fff;
			}
			.desc-t{
				margin-top:100rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
	}
	.desc{
		height:230rpx;
		overflow:scroll;
		margin-top:10rpx;
		font-size: 30rpx;
		color:#666;
		line-height:50rpx;
	}
	.btnbox{
		display: flex;
		justify-content: space-around;
		margin:40rpx 0rpx 20rpx 0rpx;
		margin-top:-10rpx;
		.btnno{
			padding:10rpx 30rpx;
			background-color: #f8f8f8;
			border-radius: 10rpx;
			font-size: 30rpx;
			color:#666;
		}
		.btnUp{
			padding:10rpx 30rpx;
			background-color: #4884FF;
			border-radius: 10rpx;
			font-size: 30rpx;
			color:#fff;
		}
	}
	// By izharBegim
	/* 头像 */
	.name-icon{
		height: 50upx;
		width: 50upx;
		margin:0 20upx 0 30upx;
		
	}
	.avatar-wrapper {
		padding: 0;
		width: 70px !important;
		border-radius: 8px;
		margin-top: 40px;
		margin-bottom: 40px;
		position: relative;
	}
	
	.avatar {
		display: block;
		width: 70px;
		height: 70px;
	}
	
	.container {
		display: flex;
	}
	
	.picture {
		position: absolute;
		bottom: -10upx;
		right: -10upx;
		width: 70upx;
		height: 70upx;
	}
	
	.name-input {
		width: 80% !important;
	}
	
	.name-view {
		display: flex;
		align-items: center;
		/* background-color: #efefef; */
		background-color: #FFFFFF;
		height: 100rpx;
		width: 72%;
		margin: 30upx auto;
		border-radius: 60rpx;
		direction: rtl;
	}
</style>
