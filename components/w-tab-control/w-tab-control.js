// components/w-tab-control/w-tab-control.js
Component({
 
  properties: {
    
  titles:{
     type: Array,
     value: []

    }
  },
data: {
  currentIndex: 0
  },

methods: {
  handleItemClick(event){
    const index = event.currentTarget.dataset.index;//取出index
    this.setData({  //修改index
      currentIndex: index
    })

  }
}
})
