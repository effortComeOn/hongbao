// logs.ts
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
