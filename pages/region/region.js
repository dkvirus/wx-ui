// pages/region/region.js
Page({

  data: {
    address: {
      province: '安徽省',
      city: '合肥市',
      district: '包河区',
    }
  },

  // 点击省市区模态框确定按钮回调函数
  handleRegionChange: function (e) {
    const value = e.detail.value;
    wx.showModal({
      title: '省市区值为：',
      content: JSON.stringify(value),
    });
  }

})