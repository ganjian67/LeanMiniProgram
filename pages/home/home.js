// pages/home/home.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    age: 25

  },
  handleIncrementCpn(){   //修改组建中的counter
    const my_sel = this.selectComponent('.sel-class'); //获取组件对象
    console.log(my_sel);
    // my_sel.setData({                    //修改
    //   counter: my_sel.data.counter + 1
    // })
   
   my_sel.incrementCounter(2)
  },

  handleShowToast(){
    wx.showToast({
      title: '你好！',
    })
  },

  onShareAppMessage: function(option){
    
  }
})