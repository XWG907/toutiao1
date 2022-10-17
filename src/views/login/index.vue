<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class ='login'>
    <el-card class="login-card">
      <div class="login_img">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>

      <!-- 表单组件 -->
      <el-form :model="loginForm" :rules="rules" ref='loginForm'>
        <!-- 表单项 -->
        <el-form-item prop="mobile">
          <!-- 放置组件项0 -->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <!-- 放置组件项0 -->
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:280px"></el-input>
          <el-button style= "float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox  v-model="loginForm.check">我已阅读并同意用户协议</el-checkbox>
        </el-form-item>
        <el-form-item prop="">
          <el-button @click="login" type="primary"  style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>

    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        check: false
      },
      // 表单验证规则
      rules: {
        mobile: [{
          required: true,
          message: '手机号不能为空'
        }, {
          pattern: /^1[3456789]\d{9}$/,
          message: '手机号格式不正确'
        }
        ],
        code: [{
          required: true,
          message: '验证码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码长度必须为6个数字',
          trigger: 'blur'
        }
        ],
        check: [{
          validator: this.loginFormRule
        }]
      }
    }
  },
  methods: {
    // 自定义验证函数 判读一些值是否正确
    loginFormRule (rule, value, callBack) {
      if (value) {
        callBack()
      } else {
        callBack(new Error('你必须无条件同意'))
      }
    },
    login () {
      // 通过rem获取到elform的dom对象利用表单el-form组件的validate方法来校验整个表单的数据
      this.$refs.loginForm.validate((isOK) => {
        if (isOK) {
          this.$message({ type: 'success', message: '成功' })
        } else {
          this.$message({ type: 'warning', message: '失败' })
        }
      })
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
