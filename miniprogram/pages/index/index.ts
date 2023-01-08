// index.ts
// 有问题微信找 effortCG
// 微信视频号 期待晨光
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
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
  onLoad() {
  },
  onShareAppMessage() { },
  onShareTimeline() { },
})
