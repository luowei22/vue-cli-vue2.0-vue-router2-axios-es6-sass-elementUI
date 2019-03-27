<template>
  <div class="login-wrap">
    <!-- 粒子背景效果 -->
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="200"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>

    <!-- 登录框 -->
    <div class="ms-login">
      <div class="ms-welcome">
        <p>欢迎登录</p>
        <h4>运营平台管理系统</h4>
      </div>
      <div class="login-box">
        <div class="login-title">用户登陆</div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="0px"
          class="login-content"
        >
          <div class="login-input" :class="{focus:focusLogin==true}">
            <i class="icon-user"></i>
            <input type="text" 
              v-model="ruleForm.username" 
              placeholder="请输入账号"
              @focus="focusLogin=true"
              @blur="focusLogin=false"
            >
          </div>
          <div class="login-input" :class="{focus:focusPassword==true}">
            <i class="icon-password"></i>
            <input type="password"
              placeholder="请输入密码"
              v-model="ruleForm.password"
              @keyup.enter.native="submitForm('ruleForm')"
              @focus="focusPassword=true"
              @blur="focusPassword=false"
            >
          </div>
          <el-checkbox checked class="remember" style="margin-top:20px;" size="medium">记住密码</el-checkbox>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      focusLogin: false,
      focusPassword: false,
      ruleForm: {
        username: "admin",
        password: "123123"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    //监听input事件
    //监听登陆
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          localStorage.setItem("ms_username", this.ruleForm.username);
          this.$router.push("/");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 836px;
  height: 492px;
  margin: -246px 0 0 -418px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.9);
  overflow: hidden;
}
.ms-welcome {
  float: left;
  width: 316px;
  height: 492px;
  background: url(../../assets/images/login-welcome.png);
}
.ms-welcome > p {
  color: #fff;
  font-size: 18px;
  margin: 400px 0 0 27px;
}
.ms-welcome > h4 {
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  margin: 17px 0 0 27px;
}
.login-box {
  float: left;
  width: 400px;
  margin-left: 60px;
}
.login-title {
  text-align: center;
  color: #000;
  margin-top: 49px;
  font-size: 30px;
  font-weight: 500;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
/*覆盖表单样式*/
.login-input {
  position: relative;
  width: 100%;
  height: 45px;
  margin-top: 55px;
}
.login-input i {
  display: inline-block;
  position: absolute;
  bottom: 15px;
  left: 0;
  background-image: url(../../assets/images/sprites-login.png);
}
.login-input i.icon-user {
  width: 28px;
  height: 30px;
  background-position: -10px -10px;
}
.login-input i.icon-password {
  width: 28px;
  height: 30px;
  background-position: -106px -10px;
}
.login-input input {
  position: absolute;
  bottom: 0;
  left: 0;
  border: none;
  background: none;
  width: 100%;
  padding-bottom: 15px;
  line-height: 30px;
  text-indent: 50px;
  font-size: 20px;
  color: #555;
  border-bottom: 1px solid #cccdda;
  border: 0 none;
  background-image: linear-gradient(#5769f0, #5769f0),
    linear-gradient(#cccdda, #cccdda);
  background-size: 0px 2px, 100% 1px;
  background-repeat: no-repeat;
  background-position: left bottom, left calc(100% - 1px);
  background-color: rgba(0, 0, 0, 0);
}
.login-input input:focus {
  background-size: 100% 2px, 100% 1px;
  transition: all 0.5s;
  border: none;
  outline: none;
}

.login-input.focus i.icon-user {
  background-position: -58px -10px;
}
.login-input.focus i.icon-password {
  background-position: -10px -60px;
}
.login-input input::before:focus {
  width: 100%;
}
.login-btn button {
  width: 200px;
  height: 66px;
  line-height: 66px;
  text-align: center;
  margin-top: 53px;
  padding: 0;
  font-size: 24px;
  font-weight: 400;
  background: #5769f0;
}
.login-btn button:hover {
  color: #fff; 
}
</style>

<style lang="scss">
.login-box .el-checkbox {
  margin-top: 20px;
  .el-checkbox__inner {
    width: 16px;
    height: 16px;
    top: -2px;
  }
  .el-checkbox__inner::after {
    height: 10px;
    left: 5.5px;
    top: 0;
  }
  .el-checkbox__label {
    font-size: 20px;
  }
}
</style>

