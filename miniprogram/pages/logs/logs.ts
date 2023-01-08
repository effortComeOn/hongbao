// logs.ts
// const util = require('../../utils/util.js')

Page({
  data: {
    // 默认文章链接
    link: "https://mp.weixin.qq.com/s/K1Gg4WD2iQ1Sc4K1PLS-KQ"
  },
  onLoad(option) {
    this.setData({
      link: option.link
    })
  },
  onShareAppMessage() {}
})
