<template>
  <div class="c-tag">当前位置：
    <a href>{{tagOne}}</a>-
    <a href>{{tagTwo}}</a>
  </div>
</template>

<script>
export default {
  name: "Tag",
  data() {
    return {
      tagOne: "认证中心",
      tagTwo: "角色管理"
    };
  }
};
</script>

<style scoped lang="scss">
.c-tag {
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #555;
  font-size: 14px;
  text-indent: 29px;
  font-size: 14px;
  background: #fff;
  a {
    color: #555;
    text-decoration: none;
    &:hover {
      color: #5769f0;
    }
  }
}
</style>