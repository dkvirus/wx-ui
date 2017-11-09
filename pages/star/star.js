// pages/star/star.js
Page({
  data: {
    select: 4, // 选中星星数 
    total: 5, // 星星总数
    disabled: true  // 是否可点击
  },

  // 点击改变星星数监听事件
  onStarChange: function (e) {
    wx.showToast({
      title: String(e.detail.value)
    })
  }
})