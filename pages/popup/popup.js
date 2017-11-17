Page({
  data: {
    isShowModal: false
  },
  clickMe: function () {
    this.setData({ isShowModal: !this.data.isShowModal })
  },
  closeModal: function () {
    wx.showToast({
      title: "模态框关闭了...",
    })
  }
})