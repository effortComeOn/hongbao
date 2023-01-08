// logs.ts
// 有问题微信找 effortCG
Page({
  data: {
    // 默认文章链接
    link: ""
  },
  onLoad(option) {
    this.setData({
      link: option.link
    })
  },
  onShareAppMessage() { },
  onShareTimeline() { },
})
