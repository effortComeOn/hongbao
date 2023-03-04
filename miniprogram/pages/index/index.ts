// index.ts
// 有问题微信找 effortCG
// 微信视频号 程序员晨光
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    adUnitId: "adunit-7bfd454af905a970",
    miniappName: "头像小程序",
    linkArr: [
      {
        text: "4000款红包封面",
        artical: 'https://mp.weixin.qq.com/s/iTP6coBA9Klf1S9tlHaDQQ'
      },
      {
        text: "免费红包封面",
        artical: 'https://mp.weixin.qq.com/s/iTP6coBA9Klf1S9tlHaDQQ'
      },
    ]
  },
  // 事件处理函数
  bindViewTap(e: any) {
    const link = e.target.dataset.link;
    wx.navigateTo({
      url: `../logs/logs?link=${link}`,
    })
  },
  onTapToMiniApp: function () {
    wx.navigateToMiniProgram({
      // 跳转小程序 ⬇️ 记得填 appid 和路径
      appId: "",
      // 要跳转小程序的页面路径
      path: "",
      success: () => { },
      fail: () => { },
    })
  },
  gotoMyPage() {
    console.log('===')
    wx.navigateTo({
      url: "/pages/myPage/myPage"
    });
  },
  onLoad() {
  },
  onShareAppMessage() { },
  onShareTimeline() { },
})
