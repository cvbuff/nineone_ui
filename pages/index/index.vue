<template>
	<!-- 自定义状态栏 -->
	<view class="content">
		<view class="cover-fixed">
			<view class="cover_bar cover_bar_srcoll">
				<view class="cover-user">
					<view v-if="userid">用户ID：{{userid}}</view>
				</view>
			</view>
		</view>
		<block>
			<!-- 顶部信息  背景图片 -->
			<view class="info-bg">
				<image class="fengrui-img" src="../../static/images/infobg.png" mode="aspectFill" />
				<view class="info-img">
					<image class="fengrui-img" src="../../static/Diving.svg" mode="aspectFit" />
				</view>
			</view>
			<!-- slogan -->
			<view class="slogan">
				<view>{{data.xcx_name}}</view>
				<!-- <view>荣幸遇见你</view> -->
			</view>
			<!-- 金刚区 -->
			<!-- 	<view class="group-icon-view">
				<block>
					<button class="group-icon-item" @click="talon()">
						<view class="group-icon-icon">
							<image class="fengrui-img" src="../../static/images/doc.png" mode="widthFix" />
						</view>
						<view class="group-icon-text">
							获取记录
						</view>
					</button>
					<button class="group-icon-item" @click="abuot()">
						<view class="group-icon-icon">
							<image class="fengrui-img" src="../../static/images/about.png" mode="widthFix" />
						</view>
						<view class="group-icon-text">
							关于我们
						</view>
					</button>
					<button class="group-icon-item" open-type="share">
						<view class="group-icon-icon">
							<image class="fengrui-img" src="../../static/images/share.png" mode="widthFix" />
						</view>
						<view class="group-icon-text">
							好友分享
						</view>
					</button>
					<button class="group-icon-item" @click="abuoti()">
						<view class="group-icon-icon">
							<image class="fengrui-img" src="../../static/images/kefu.png" mode="widthFix" />
						</view>
						<view class="group-icon-text">
							程序文档
						</view>
					</button>
				</block>
			</view> -->
			<!-- 金刚区 -->
			<view class="group-icon-view">
				<block v-for="(item, index) in vajra" :key="index">
					<button class="group-icon-item" v-if="item.type != 'wx_kefu' && item.type != 'wx_share'"
						:data-type="item.type" :data-appid="item.appId" :data-url="item.url" @tap="vajraTap">
						<view class="group-icon-icon">
							<image class="fengrui-img" :src="item.icon" mode="widthFix" />
						</view>
						<view class="group-icon-text">
							{{ item.title }}
						</view>
					</button>

					<button class="group-icon-item" open-type="contact" v-if="item.type == 'wx_kefu'">
						<view class="group-icon-icon">
							<image class="fengrui-img" :src="item.icon" mode="widthFix" />
						</view>
						<view class="group-icon-text">
							{{ item.title }}
						</view>
					</button>

					<button class="group-icon-item" open-type="share" v-if="item.type == 'wx_share'">
						<view class="group-icon-icon">
							<image class="fengrui-img" :src="item.icon" mode="widthFix" />
						</view>
						<view class="group-icon-text">
							{{ item.title }}
						</view>
					</button>
				</block>
			</view>
			<!-- 公告 -->
			<view class="notice" v-if="data.contact">
				<text class="notice-h">公告：</text>
				{{data.contact}}
			</view>
			<!-- 标题 -->
			<view class="ds-felx">
				<view class="title">
					选择卡密
				</view>
			</view>
			<!-- 滚动案例区 -->
			<block>
				<swiper class="swiper-case" next-margin="260rpx">
					<block v-for="(item,index) in classArray" :key="index">
						<swiper-item class="swiper-case-item" @click="getdetali(index)">
							<view class="swiper-case-list">
								<view class="swiper-case-flex">
									<view class="swiper-case-title font-ooverflow-one">{{item.payName}}</view>
								</view>
								<view class="swiper-case-desrc font-ooverflow-two">{{item.introduce}}</view>
								<view class="swiper-case-img">
									<image class="fengrui-img" mode="aspectFit" src="../../static/Diving.svg"></image>
								</view>
							</view>
							<view v-if="item.fangshi=='0'" class="izgod">获取方式：购买 {{item.name}} 元</view>
							<view v-if="item.fangshi=='1'" class="izgod">获取方式：看广告获取</view>
							<view v-if="item.fangshi=='2'" class="izgod">获取方式：密码获取</view>
						</swiper-item>
					</block>
				</swiper>
			</block>

			<view class="izharjan">By nineone</view>
			<!-- 占位 -->
			<view style="margin: 60px 0;height: 1px;"></view>
			<!-- 底部导航 -->
			<view class="navigation cover_bar_srcoll">
				<view class="navigation-item" @tap="tarbarTap" :data-type="item.type" :data-url="item.url"
					v-for="(item, index) in tarbar" :key="index">
					<image class="navigation-icon" :src="item.icon" mode="" />
				</view>
			</view>

		</block>
		<!-- 购买-->
		<page-container :show="isMask" round="true" position="center">
			<view class="detail-page">
				<view class="detail-img">
					<image class="fengrui-img" src="../../static/Diving.svg" mode="aspectFill" />
				</view>
				<view class="detail-title">
					{{sname}}
				</view>
				<view v-if="fangshi=='2'" style="margin: 35rpx;background: #e8e8e8;height: 68rpx;border-radius: 10rpx;">
					<view style="padding-top: 12rpx;">
						<input @input="onInput" v-model="value" :type="type" :border="border" :height="86"
							placeholder=" 请输入密码获取卡密 " />
					</view>
				</view>

				<view class="detail-desrc">
					<text>{{squxanqa}}</text>
				</view>

				<view v-if="fangshi=='0'" class="detail-btn" bindtap="getVideoAd" @click="paymini()">
					购买获取
				</view>
				<view v-if="fangshi=='1'" class="detail-btn" bindtap="getVideoAd" @click="loadAD()">
					<image class="detail-icon" src="../../static/images/ad_video.svg" mode="aspectFill" />
					看广告获取
				</view>
				<view v-if="fangshi=='2'" class="detail-btn" bindtap="getVideoAd" @click="confirmedPassword">
					密码获取
				</view>
				<view class="detail-no" bindtap="onClickoverlay" @click="closeMask()">
					算了，返回
				</view>
			</view>
		</page-container>

		<view v-if="isfaka" class="mask">
			<view class="messBox">
				<view class="wrapBox">
					<view class="title">获取成功</view>
					<view class="desc">
						<view>您的卡密：{{izkami}}</view>
						{{izsm}}
					</view>
					<view class="btnbox">
						<view class="btnUp" @click="PasswordCopy">复制卡密</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import utils from '@/utils/utils.js';
	// import izPopup from '@/components/izhar-popup.vue';
	let rewardedVideoAd = null;
	var app = getApp()
	export default {
		components: {
			// izPopup
		},
		data() {
			return {
				// 密码访问
				passwordInput: '', // 用户输入的密码
				passwordMatchFlag: '', // 密码是否匹配标志
				// 首页信息
				isMask: false, //是否显示弹窗
				isfaka: false, //购买成功显示弹窗
				data: [],
				classArray: [],
				sname: '',
				squxanqa: '',
				cid: '',
				btnnum: 0,
				// 已购买信息
				recordList: [],
				userid: 0,
				izkami: '',
				izsm: '',
				fangshi: '',
				usetip: '',
				jump_web_url: '',
				jump_web_name: '',
				jump_xcx_url: '',
				jump_xcx_name: '',
				mima: '',
				izlist: false,
				// 金刚区
				vajra: [{
						id: 1,
						type: "record_cdkey",
						title: "获取记录",
						appId: "",
						url: "",
						icon: "/static/images/doc.png"
					},
					{
						id: 2,
						type: "wx_web",
						title: "程序文档",
						appId: "",
						url: "",
						icon: "/static/images/about.png"
					},
					{
						id: 3,
						// type: "wx_program",
						type: "wx_share",
						title: "好友分享",
						appId: "wx8e5aa027e8400064",
						url: "pages/index/index",
						icon: "/static/images/share.png"
					},
					{
						id: 4,
						type: "wx_kefu",
						title: "联系客服",
						appId: "",
						url: "",
						icon: "/static/images/kefu.png"
					}

				],
				// 底部导航
				tarbar: [{
						id: 1,
						type: 'index',
						icon: '/static/images/index.png',
						url: '../index/index'
					},
					{
						id: 2,
						type: 'default',
						icon: '/static/images/lists.png',
						url: '../category/category'
					},
					{
						id: 3,
						type: 'default',
						icon: '/static/images/about-2.png',
						url: '../about/about'
					}
				]

			}
		},
		onLoad() {
			console.log('onload')
			this.getClassDatas()
			this.getRecord()

		},
		// 分享到好友
		onShareAppMessage: function() {
			return {
				title: this.data.xcx_name,
				path: 'pages/index/index'
			}
		},
		// 分享到朋友圈
		onShareTimeline() {
			return {
				title: this.data.xcx_name
			};
		},
		methods: {
			// 密码访问
			// #ifdef MP-WEIXIN
			// 接收用户输入密码
			onInput(e) {
				this.passwordInput = e.target.value;
				if (this.passwordInput == this.mima) { // 密码判断
					console.log('tohra')
					this.passwordMatchFlag = '0'
				} else {
					console.log('hata')
					this.passwordMatchFlag = ''
				}

			},
			confirmedPassword: function() {
				if (!this.passwordInput) {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					})
					console.log('请输入密码')
					return
				}
				var t = this
				let passwordMatchFlag = t.passwordMatchFlag
				// t.nol()

				if (passwordMatchFlag == '0') {
					uni.showToast({
						title: '验证成功'
					})
					t.clearPasswordFields()
					t.loadAD()
				} else {
					wx.showToast({
						title: '密码错误',
						icon: 'error',
						duration: 2000 // 提示的延迟时间
					})
				}
			},
			// 清空密码
			clearPasswordFields() {
				this.passwordInput = ''
				this.passwordMatchFlag = ''
			},



			// #endif
			//复制
			PasswordCopy: function() {
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
				t.isfaka = false;
			},
			change(e) {
				this.btnnum = e
				console.log(this.btnnum)
			},

			getdetali(index) {
				// Powerd By nineone
				this.isMask = true
				this.sname = this.classArray[index].payName
				this.Payname = this.classArray[index].payName
				this.squxanqa = this.classArray[index].introduce
				this.cid = this.classArray[index].cid
				this.fangshi = this.classArray[index].fangshi
				this.usetip = this.classArray[index].usetip
				this.mima = this.classArray[index].mima
			},
			closeMask() { //关闭弹窗
				if (this.isMask = true) {
					this.isMask = false;
				} else if (this.isfaka = true) {
					this.isfaka = false;
				}
			},

			paymini: function() {
				var that = this;
				uni.showLoading({
					title: "加载中"
				});
				var trade_no = utils.buildOrderNo();
				var content = JSON.stringify({
					order: trade_no,
					cid: this.cid,
					name: this.Payname
				});
				uni.login({
					success: function success(code) {
						console.log(code)
						uni.request({
							url: app.globalData.request_url + 'Api/submit.php',
							method: "POST",
							data: {
								content: content,
								code: code.code
							},
							header: {
								"content-type": "application/x-www-form-urlencoded; charset=utf-8"
							},
							success: function success(res) {
								console.log(res);
								if (res.data.code == 200) {
									uni.hideLoading();
									uni.requestPayment({
										//调起支付
										//下边参数具体看微信小程序官方文档
										timeStamp: res.data.timeStamp,
										nonceStr: res.data.nonceStr,
										package: res.data.package,
										signType: res.data.signType,
										paySign: res.data.paySign,
										success: function success(res) {
											console.log("支付成功", res);
											that.ok(trade_no);
											that.isMask = false;
										},
										fail: function fail(eer) {
											that.isMask = false;
											console.log("支付失败", eer);
											uni.showModal({
												title: "提示",
												content: "支付失败，重新支付",
												showCancel: !1,
												confirmText: "ok",
												success: function success() {}
											});
										}
									});
								} else {
									uni.hideLoading();
									that.isMask = false;
									uni.showModal({
										title: "提示",
										content: res.data.msg,
										showCancel: !1
									});
								}
							},
							fail: function fail() {
								that.isMask = false
								uni.showModal({
									title: "提示",
									content: "创建订单失败",
									showCancel: !1
								});
							}
						});
					}
				});
			},
			ok: function ok(trade_no) {
				var that = this;
				uni.login({
					success: function success(code) {
						utils.getRequest("/Api/getCarmel.php?code=" + code.code + "&cid=" + that.cid +
							"&trade_no=" + trade_no).then(function(res) {
							console.log(res);
							if (res.data.code == 200) {
								that.isfaka = true,
									that.izkami = res.data.carmel,
									that.izsm = that.usetip,
									that.isMask = false
							} else {
								uni.showModal({
									title: "提示",
									content: res.data.msg,
									showCancel: !1,
									confirmText: "我知道了",
									success: function success() {
										that.setData({
											shareShow: !1
										});
									}
								});
							}
						}).catch(function(res) {
							uni.showModal({
								title: "提示",
								content: "网络请求超时",
								confirmText: "重试",
								success: function success() {
									that.setData({
										shareShow: !1
									});
									that.getClassDatas();
								}
							});
						});
					},
					fail: function fail(eer) {
						uni.showModal({
							title: "提示",
							content: "网络请求超时",
							confirmText: "重试",
							success: function success() {
								that.setData({
									shareShow: !1
								});
								that.getClassDatas();
							}
						});
					}
				});
			},

			getClassDatas() {
				var that = this;
				uni.login({
					success: function success(code) {
						utils.getRequest("/Api/classDatas.php?code=" + code.code).then(function(res) {
							console.log(res);
							if (res.data.code == 200) {
								that.data = res.data.data,
								that.classArray = res.data.class,
								that.tongji = res.data.tongji,
								// that.web_url = res.data.data.shareImg // 跳转到第三方网页
								that.jump_web_name = res.data.data.shareWebTitle // 跳转到第三方网页
								that.jump_web_url = res.data.data.shareWebUrl // 跳转到第三方网页

								that.jump_xcx_name = res.data.data.shareXcxTitle // 跳转小程序
								that.jump_xcx_url = res.data.data.shareXcxUrl // 跳转小程序

								uni.setNavigationBarTitle({
									title: res.data.data.xcx_name
								});
							} else {
								uni.showModal({
									title: "提示",
									content: res.data.msg,
									showCancel: !1,
									confirmText: "重试",
									success: function success() {
										that.getClassDatas();
									}
								});
							}
						}).catch(function(res) {
							console.log(res);
							uni.showModal({
								title: "提示",
								content: "网络错误",
								confirmText: "重试",
								success: function success() {
									that.getClassDatas();
								}
							});
						});
					}
				});

			},
			// 已购买信息
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
								that.userid = res.data.userid
							} else {
								uni.showModal({
									title: "提示",
									content: res.data.msg,
									showCancel: !1,
									confirmText: "重试",
									success: function success() {
										that.getClassDatas();
									}
								});
							}
						}).catch(function(res) {
							uni.hideLoading();
							console.log(res);
							uni.showModal({
								title: "提示",
								content: "网络请求超时",
								confirmText: "重试",
								success: function success() {
									that.getClassDatas();
								}
							});
						});
					}
				});
			},
			// 广告事件
			loadAD() {
				var that = this;
				let videoAd = wx.createRewardedVideoAd({
					adUnitId: that.data.adVideoId
				})
				videoAd.onError(function(res) {
					console.log('监听广告错误 请检查网络', res)
				})
				videoAd.onLoad(function(res) {
					console.log('监听广告加载', res)
				})
				videoAd.onClose(res => {
					if (res.isEnded) {
						console.log('成功', res)
						that.ok();
					} else {
						wx.showToast({
							title: '中途关闭广告',
							icon: 'none',
							duration: 3000
						})
					}
				})
				videoAd.load()
					.then(() => {
						console.log('激励视频加载成功')
						videoAd.show()
							.then(() => {
								console.log('激励视频 广告显示成功')
							})
							.catch(err => {
								console.log('激励视频 广告显示失败')
							})
					})
					.catch(err => {
						console.log('激励视频加载失败');
						uni.showToast({
							icon: 'error',
							title: '激励视频加载失败'
						})
					})
			},

			// 金刚区点击
			vajraTap(e) {
				var vajras = e.currentTarget.dataset;
				switch (vajras.type) {
					// 卡密获取记录
					case 'record_cdkey':
						uni.navigateTo({
							url: '/pages/index/record_cdkey'
						});
						break;
						//跳转web
					case 'wx_web':
						var t = this
						uni.navigateTo({
							url: '../../pages/weblist/weblist?aurl=' + t.jump_web_url
						});
						break;
						// //跳转web
						// case 'wx_web':
						//     uni.navigateTo({
						//         url: '../web/web?url=' + vajras.url
						//     });
						//     break;
						//跳转小程序
					case 'wx_program':
						uni.navigateToMiniProgram({
							appId: vajras.appid,
							path: vajras.url,
							success(res) {}
						});
						break;
						//跳转二级页面
					case 'wx_default':
						uni.navigateTo({
							url: vajras.url
						});
						break;
				}
			},
			// 底部导航点击
			tarbarTap(e) {
				var vajras = e.currentTarget.dataset;
				if (vajras.type == 'default') {
					uni.navigateTo({
						url: vajras.url
					});
				}
			}


		}
	}
</script>

<style>
	/* By nineone */
	.izgod {
		padding: 0rpx 24rpx;
		margin-left: 26rpx;
		height: 50rpx;
		line-height: 40rpx;
		border-radius: 0rpx 0rpx 40rpx 40rpx;
		background: #4b75ff;
		color: #FFF;
		font-size: 24rpx;
		z-index: 9999999;
		width: 80%;
		text-align: center;
		margin-top: -52rpx;
		box-shadow: inset 0px -1px 2px 1px #2196f300;
	}

	.izharjan {
		margin: auto;
		text-align: center;
		font-size: 27rpx;
		color: #ababab;
		margin-top: -88rpx;
	}

	.cover-fixed {
		position: fixed;
		z-index: 9999999;
		top: 0;
		left: 0;
		width: 100%;
	}

	.cover_bar {
		height: 170rpx;
		width: 100%;
		display: flex;
		padding-left: 28rpx;
		align-items: center;
	}

	.cover_bar_srcoll {
		backdrop-filter: blur(10px);
	}

	.cover-user {
		height: 70rpx;
		width: 350rpx;
		overflow: hidden;
		margin-top: 105rpx;
		font-family: "AlimamaShuHeiTi-Bold";
		color: #5a5a5a;
	}

	.cover-input {
		background-color: rgba(255, 255, 255, 0.7);
		border-radius: 100rpx;
		padding: 8rpx 20rpx 8rpx 40rpx;
		margin-left: 20rpx;
		width: 220rpx;
		border: 1px rgb(105, 105, 105) solid;
	}

	/* 顶部信息 */
	.index-top {
		height: 760rpx;
		width: 100%;
		position: relative;
	}

	/* 搜索 */
	.search-input {
		position: absolute;
		left: 50%;
		bottom: -50rpx;
		transform: translateX(-50%);
		background-color: rgb(255, 255, 255);
		height: 100rpx;
		border-radius: 200rpx;
		width: 70%;
		padding: 0 60rpx;
		z-index: 99999;
		border: 1px rgb(224, 224, 224) solid;
	}

	/* 金刚区 */
	.group-icon-view {
		margin-top: -4rpx;
		display: flex;
		flex-wrap: wrap;
		width: 94%;
		margin-left: 3%;
		border-radius: 20rpx;
	}

	.group-icon-item {
		width: 25% !important;
		padding: 0 !important;
		margin: 40rpx 0 !important;
		background-color: unset !important;
		text-align: center;
		flex-shrink: 0;
	}

	.group-icon-icon {
		height: 100rpx;
		width: 100rpx;
		margin: auto;
	}

	.group-icon-text {
		font-size: 24rpx;
		text-align: center;
		margin-top: 20rpx;
	}

	/* 公告 */
	.notice {
		padding: 30rpx;
		border-radius: 20rpx;
		background: #4b75ff;
		color: #FFF;
		line-height: 50rpx;
		margin: 30rpx 28rpx;
		margin-top: -15rpx;
	}

	.notice-h {
		font-family: "AlimamaShuHeiTi-Bold";
	}

	/* .案例区 */
	.swiper-case {
		height: 660rpx;
	}

	.swiper-case-item {
		height: 600rpx !important;
	}

	.swiper-case-list {
		width: 90%;
		height: 85%;
		margin: auto;
		border-radius: 40rpx;
		box-shadow: rgb(230, 230, 230) 1rpx 8rpx 26rpx;
		position: relative;
		overflow: hidden;
	}

	.swiper-case-flex {
		display: flex;
		justify-content: start;
		align-items: center;
		margin: 37rpx 54rpx 0 54rpx;
	}

	.swiper-case-title {
		font-size: 46rpx;
		font-family: "AlimamaShuHeiTi-Bold";
	}

	.swiper-case-v {
		padding: 0rpx 24rpx;
		margin-left: 20rpx;
		height: 40rpx;
		line-height: 40rpx;
		border-radius: 40rpx;
		background: #3B68FF;
		color: #FFF;
		font-size: 20rpx;
	}

	.swiper-case-v-red {
		background: red !important;
		padding: 0rpx 24rpx;
		margin-left: 20rpx;
		height: 40rpx;
		line-height: 40rpx;
		border-radius: 40rpx;
		color: #FFF;
		font-size: 20rpx;
	}

	.swiper-case-desrc {
		margin: 9rpx 54rpx;
		color: #ADADAD;
		font-size: 28rpx;
	}

	.swiper-case-img {
		height: 360rpx;
		width: 360rpx;
		left: 50%;
		transform: translateX(-50%);
		position: absolute;
		bottom: 10rpx;
	}

	/* 标题 */
	.ds-felx {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	/* 底部导航 */
	.navigation {
		position: fixed;
		bottom: 50rpx;
		left: 5%;
		display: flex;
		height: 100rpx;
		width: 90%;
		border-radius: 200rpx;
		align-items: center;
		z-index: 999999;
		background-color: rgb(243 243 243 / 0.5);
	}

	.navigation-item {
		width: 33.33%;
		height: 60rpx;
		flex-shrink: 0;
	}

	.navigation-icon {
		height: 60rpx;
		width: 60rpx;
		display: block;
		margin: auto;
	}

	.info-bg {
		height: 500rpx;
		width: 100%;
		position: relative;
	}

	.info-img {
		position: absolute;
		right: 113rpx;
		top: 19%;
		height: 500rpx;
		width: 500rpx;
	}

	/* 标题 */
	.slogan {
		font-size: 80rpx;
		text-align: center;
		margin-top: 40rpx;
		font-family: "AlimamaShuHeiTi-Bold";
	}

	.messBox {
		position: fixed;
		z-index: 998;
		width: 80%;
		left: 10%;
		padding: 10rpx 0rpx;
		top: 20%;

	}

	.mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 888;
		background-color: #1a1a1ba6;
	}

	.wrapBox {
		background-color: #fff;
		border-radius: 20rpx;
		padding: 30rpx;


	}

	.detail-desrc {
		margin-top: 40rpx;
		overflow: auto;
	}

	.desc {
		height: 400rpx;
		margin-top: 20rpx;
		font-size: 30rpx;
	}

	.title {
		text-align: center;
		font-size: 32rpx;
		font-weight: bold;
	}

	.btnbox {
		display: flex;
		justify-content: space-around;
		margin: 40rpx 0rpx 20rpx 0rpx;
		margin-top: -10rpx;
	}

	.btnno {
		padding: 10rpx 30rpx;
		background-color: #f8f8f8;
		border-radius: 10rpx;
		font-size: 30rpx;
		color: #666;
	}

	.btnUp {
		padding: 10rpx 30rpx;
		background-color: #4884FF;
		border-radius: 10rpx;
		font-size: 30rpx;
		color: #fff;
	}
</style>