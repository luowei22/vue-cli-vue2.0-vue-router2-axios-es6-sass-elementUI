<template>
  <div id="app">
    <topNav></topNav>
    <leftNav></leftNav>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav';
import topNav from '@/components/common/topNav';
export default {
  name: 'app',
  components:{
    leftNav,
    topNav
  }
}
</script>

<style>
#app {
  font-family:'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  float: left;
  width: 88%;
  background-color: #eff2f7;
  height: 91%;
  overflow: hidden;
}
</style>
