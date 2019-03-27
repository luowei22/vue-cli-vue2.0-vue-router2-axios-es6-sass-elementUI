<template>
  <div class="top-nav">
    <a class="top-logo">
      <img src="../../assets/images/logo.png" title="享7美食">
      <p>运营平台管理系统</p>
    </a>
    <ul class="top-menu">
      <router-link v-for="(item, index) in menuList[curRouter]" 
        :key="index" 
        :class="{'active': isActive(item.path)}"
        :to="item.path"
      > 
        {{item.link}} 
      </router-link> 
    </ul>
    <div class="top-right">
      <div class="top-user-con">
        <!-- 全屏显示 -->
        <div class="btn-fullscreen" @click="handleFullScreen">
          <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator">
          <img src="../../assets/images/user.jpg">
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{username}}
            <i class="el-icon-arrow-down"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <a target="_blank">
              <el-dropdown-item>关于我们</el-dropdown-item>
            </a>
            <a target="_blank">
              <el-dropdown-item>编辑</el-dropdown-item>
            </a>
            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      fullscreen: false,  //全屏提示
      curRouter:'',
      menuList: {
        auth:[{
          link: "角色管理",
          path: '/auth/role'
        },
        {
          link: "用户管理",
          path: '/auth/user'
        },
        {
          link: "用户反馈",
          path: '/auth/Feedback'
        },
        {
          link: "商家入驻",
          path: '/auth/Enter'
        },
        {
          link: "Token管理",
          path: '/auth/Token'
        }],
        finance:[
          {
           link: "商户对账2",
           path: '/auth/role'
          },
          {
           link: "退款申请",
           path: '/auth/role'
          },
          {
           link: "平台对账",
           path: '/auth/role'
          }
         
        ]
      } 
    };
  },
  computed: {
    username() {
      let username = localStorage.getItem("ms_username");
      return username ? username : this.name;
    }
  },
  watch:{
    $route(to,from){
      console.log(to.path);
      console.log(to);
      let pathName = to.path.split('/')[1];
      this.curRouter = pathName;
    }
  },
  methods: {
    // 监听顶部路由高亮显示当前
    isActive(path) {
        return path === this.$route.fullPath;
    },
    // 监听退出登录
    handleCommand(command) {
      if (command == "loginout") {
        localStorage.removeItem("ms_username");
        this.$router.push("/login");
      }
    },
    // 监听全屏
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    }
  }
};
</script>

<style scoped>
.top-nav {
  position: relative;
  width: 100%;
  height: 64px;
  background-color: #5769f0;
}
.top-logo {
  float: left;
  width: 210px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
.top-logo > img {
  width: 31px;
  height: 34px;
  margin-right: 9px;
}
.top-menu {
  float: left;
}
.top-menu > a {
  display: block;
  float: left;
  width: 156px;
  height: 64px;
  line-height: 64px;
  cursor: pointer;
  color: #fff;
  font-size: 14px; 
  display: flex;
  justify-content: center; 
  text-decoration: none;
}
.top-menu > a::before {
  content: "";
  position: absolute; 
  bottom: -100%;  
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 35px solid #fff;  
  transition: all 0.3s; 
}
.top-menu > a.active,
.top-menu > a:hover {
  background: rgba(255, 255, 255, 0.16);
}
.top-menu > a.active::before {
  bottom: -22px; 
}
.top-right {
  float: right;
  padding-right: 30px;
}
.top-user-con {
  display: flex;
  height: 70px;
  align-items: center;
  color: #fff;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
  cursor: pointer;
}
.user-name {
  margin-left: 10px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
.el-dropdown-menu__item {
  line-height: 27px;
  font-size: 13px;
}
</style>


