// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    linkArr: [
      '../logs/logs',
      "../link2/link"
    ]
  },
  // 事件处理函数
  bindViewTap(e:any) {
    const link = e.target.dataset.link;
    wx.navigateTo({
      url: link,
    })
  },
  onLoad() {
  },
  onShareAppMessage() {}
})
