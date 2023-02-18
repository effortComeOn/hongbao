// pages/mine/mine.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "imgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/uvBQ6bLUlsjT6j3fPZHyiap9iabKiaBdibXiatJoPaV6AZMYEzvYQpReQcOhEibzVUWoC7hOp8vYKibudlA7nUUezmIBw/0?wx_fmt=jpeg",
    "qunAddress": "https://mmbiz.qpic.cn/mmbiz_jpg/uvBQ6bLUlsiaJDezuWrlc9oRU2cUfwsEaDwc6qf4DTIHiaibnVrk67EkR0WtdiblNA822icvFBPtdX8boZw4gQWuRGg/0?wx_fmt=jpeg",
    "shareData": [{
      "title": "晨光的个人经历",
      "url": "https://mp.weixin.qq.com/s/JN9tXOhe03M1faMzae8SWg"
    }, {
      "title": "职场经验分享",
      "url": "https://mp.weixin.qq.com/s/U1-JDM6DXRNm8Gpg9deQNw"
    }],
    "keyWord": "code",
    "adUnitId": "adunit-e7aab84f9ed20008",
  },
  // 复制微信
  copyWx() {
    // 下方为微信开发文档中的复制 API
    wx.setClipboardData({
      data: 'hammerzhang01', //复制的数据
      success: () => {
        wx.showToast({
          icon: 'none',
          title: '客服 wx 复制成功',
        });
      }
    });
  },

  onTabSwiperItem: function (e: any) {
    const data = e.currentTarget.dataset;
    const url = this.data.shareData[data.index].url || '';
    wx.navigateTo({
      url: `/pages/logs/logs?link=${url}`,
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