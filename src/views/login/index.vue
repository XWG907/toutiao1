<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class ='login'>
    <el-card class="login-card">
      <div class="login_img">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 表单组件 -->
      <el-form>
        <!-- 表单项 -->
        <el-form-item>
          <!-- 放置组件项0 -->
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <!-- 放置组件项0 -->
          <el-input style="width:280px"></el-input>
          <el-button style= "float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox>我已阅读并同意用户协议</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button  type="primary"  style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>

    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}

</script>

<style lang='less' scoped>
// scoped  表示只对当前自己的组件有效果 比较适合规范因为组件相对独立
.login{
  background-image: url('../../assets/img/login_bg.jpg');
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card{
    height: 350px;
    width: 440px;
    .login_img{
      text-align: center;
      img{
        height: 45px;
      }
    }
  }
}
</style>
