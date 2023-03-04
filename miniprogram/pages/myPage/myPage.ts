// pages/myPage/myPage.ts
Page({
  data: {
    textArr: [
      "2023/02/26",
      "开始编写我的第一个小程序",
      "这是我的第一个页面"
    ],
    showText: true,
    moreData: [{
      text: '学习内容',
      arr: ['HTML', 'JS', 'CSS']
    }]
  },

  setShowText() {
    this.setData({
      showText: !this.data.showText
    })
  },

  onTapText(e: any) {
    wx.showToast({
      title: e.target.dataset.text || '',
      icon: 'none'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})