// logs.ts
// 有问题微信找 effortCG
// 微信视频号 期待晨光
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
