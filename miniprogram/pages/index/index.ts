// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    linkArr: [
      {
        text: "4000款红包封面",
        artical: 'https://mp.weixin.qq.com/s/K1Gg4WD2iQ1Sc4K1PLS-KQ'
      },
      {
        text: "免费红包封面",
        artical: 'https://mp.weixin.qq.com/s/K1Gg4WD2iQ1Sc4K1PLS-KQ'
      },
    ]
  },
  // 事件处理函数
  bindViewTap(e:any) {
    const link = e.target.dataset.link;
    wx.navigateTo({
      url: `../logs/logs?link=${link}`,
    })
  },
  onLoad() {
  },
  onShareAppMessage() {}
})
