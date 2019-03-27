<template>
  <div class="left-nav">
    <ul class="sidebar-el-menu">
      <a @click="collapseChage()">
        <i class="icon iconfont el-icon-menu"></i>
      </a>
      <li v-for="(item, index) in navList" :key="index">
        <router-link
          :to="item.path"
          :class="{'active': isActive(item.path)}"
          effect="dark"
          content="item.link"
          placement="right"
        >
          <el-tooltip
            :disabled="disabled"
            class="item"
            effect="dark"
            :content="item.link"
            placement="right"
          >
            <i class="icon iconfont" :class="item.icon"></i>
          </el-tooltip>
          <div class="title">{{item.link}}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import bus from "@/components/common/bus.js";
export default {
  data() {
    return {
      disabled: true,
      collapse: false, //侧边栏折叠
      navList: [
        {
          icon: "icon-commodity",
          link: "认证中心",
          path: "/auth"
        },
        {
          icon: "icon-message",
          link: "运营中心",
          path: "/b"
        },
        {
          icon: "icon-commodity",
          link: "财务管理",
          path: "/c"
        },
        {
          icon: "icon-funds-mgr",
          link: "运营监控",
          path: "/d"
        }
      ]
    };
  },
  methods: {
    isActive(path) {
      return path === this.$route.fullPath;
    },
    // 侧边栏折叠
    collapseChage() {
      this.disabled = !this.disabled;
      this.collapse = !this.collapse;
      bus.$emit("collapse", this.collapse);
    }
  },
  mounted() {
    if (document.body.clientWidth < 1500) {
      this.collapseChage();
    }
  }
};
</script>

<style scoped>
.left-nav {
  display: block;
  position: absolute;
  left: 0;
  top: 64px;
  bottom: 0;
  overflow-y: scroll;
  background: #282b33;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 210px;
}
.left-nav > ul a {
  display: flex;
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #fff;
  cursor: pointer;
  background: rgba(40, 43, 51, 1);
  font-size: 18px;
  font-weight: 400px;
  text-decoration: none;
}
.left-nav > ul a .iconfont {
  font-size: 14px;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 64px;
}
.left-nav > ul a .title {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.left-nav > ul a:hover {
  background: rgba(57, 61, 73, 0.7);
}
.left-nav > ul > li a.active {
  background: rgba(57, 61, 73, 1);
}
</style>


