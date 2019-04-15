<template>
  <div id="app">
    <button @click="onClick" v-longpress="onLongpress">拥有点击和长按事件</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    onClick() {
      alert('点击')
    },
    onLongpress() {
      alert('长按')
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
}
</style>
