Page({
  data: {
    price: 5
  },

  onPageInputChange: function (e) {
    this.setData({ price: e.detail.value })
  },
})