<template>
  <div id="app">
    <button @click="onClick" v-longpress="onLongpress1(1)">长按事件带参数</button>
    <div @click="onClick" v-longpress="onLongpress2">拥有点击和长按事件</div>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    onClick() {
      alert('点击')
    },
    onLongpress1(num) {
      return () => {
        alert(`长按 携带参数${num}`)
      }
    },
    onLongpress2() {
      alert(`长按 不带参数`)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  user-select: none;
}
</style>
