import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('longpress', {
  bind: function(el, binding) {
    let timer = null
    let start = function(e) {
      // 如果是点击事件，不启动计时器，直接返回
      if(e.type === 'click') {
        return
      }
      if(timer == null) {
        // 创建定时器 (2s之后执行长按功能函数)
        timer = setTimeout(function() {
          // 执行长按功能函数
          binding.value()
        }, 1000)
      }
    }
  
    let cancel = function() {
      if(timer !== null) {
        clearTimeout(timer)
        timer = null
      }
    }
  
    // 添加事件监听器
    el.addEventListener('mousedown', start)
    el.addEventListener('touchstart', start)
  
    // 取消定时器
    el.addEventListener('click', cancel)
    el.addEventListener('mouseout', cancel)
    el.addEventListener('touchend', cancel)
    el.addEventListener('touchcancel', cancel)
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
