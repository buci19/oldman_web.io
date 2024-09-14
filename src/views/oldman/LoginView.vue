<template>
    <div class="body">
        <div class="center">
            <div class="logo">
                <img src="@/assets/images/logo.png" alt="">
            </div>
            <div class="login">
                <p>老年健康服务平台</p>
            </div>
            <form action="">
                <!-- 用户名输入框 -->
                <div class="userName">
                    <input type="text" v-model="loginForm.username" placeholder="请输入用户名" style="height: 45px; width: 370px; border-radius: 15px; border-color: white; padding-left: 10px;
                        text-indent: 20px;">
                </div>
                <!-- 密码输入框 -->
                <div class="passWd">
                    <input type="password" v-model="loginForm.password" placeholder="请输入用户名" style="height: 45px; width: 370px; border-radius: 15px; border-color: white; padding-left: 10px;
                        text-indent: 20px;">
                </div>
                <!-- 登录按钮 -->
                <div class="login_bottom">
                    <input type="button" @click="login" class="login-button" value="登录" style="height: 38px; width: 150px; border-radius: 15px;
                     border-color: white; padding-left: 10px; font-size: 23px; font-family: 宋体;
                     background-color: rgb(153,153,255);  box-shadow: 2px 2px 5px 2px gray;">
                </div>
            </form>
            <!-- 写一个跳转注册的文字，使用超链接来接受 -->
            <div class="registerView">
                <router-link :to="{ path: '/register' }">还没注册？</router-link>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Login',
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            responseResult: []
        }
    },
    methods: {
        login() {
            this.$axios
                .post('http://localhost:5081/api/oldman/login', {
                    username: this.loginForm.username,
                    password: this.loginForm.password
                })
                .then(successResponse => {
                    if (successResponse.data.code === 200) {
                        this.$router.replace({ path: '/index' })
                    }else{
                        alert('用户名或密码错误')
                    }
                })
                .catch(failResponse => {
                })
        }
    }
}
</script>

<style scoped>
/* 中间的登录页面 */
.center {
    width: 480px;
    height: 600px;
    margin: auto;
    /* margin-top: 200px; */
    position: relative;
    top: 60px;
    border-radius: 20px;
    background: linear-gradient(to bottom right, rgb(187, 189, 240), rgb(178, 102, 255));
    box-shadow: 5px 5px 13px 5px gray;
}

.logo {
    width: 90px;
    height: 50px;
}

.logo img {
    width: 190px;
    height: 190px;
    position: relative;
    top: 40px;
    left: 140px;
}

.login {
    font-size: 32px;
    text-align: center;
    padding-top: 50px;
    position: relative;
    top: 130px;
}

.login p {
    color: white;
    font-weight: 600;
}

/* 输入框位置 */
.userName {
    position: relative;
    left: 50px;
    top: 140px;
}

/* 在输入框加入图标 */
.userName input {
    background-image: url("@/assets/images/user.png");
    background-position: left;
    background-size: 25px 25px;
    background-repeat: no-repeat;
    padding-left: 10px;
}

.passWd {
    position: relative;
    left: 50px;
    top: 160px;
}

.login_bottom {
    height: 60px;
    width: 190px;
    position: relative;
    left: 160px;
    top: 190px;
    transition: transform 0.3s;
}

.login_bottom:hover {
    transform: scale(1.1);
}

.userName input {
    background-image: url("@/assets/images/user.png");
    background-position: left;
    background-size: 25px 25px;
    background-repeat: no-repeat;
    padding-left: 10px;
}

.passWd input {
    background-image: url("@/assets/images/passwd.png");
    background-position: left;
    background-size: 25px 25px;
    background-repeat: no-repeat;
    padding-left: 10px;
}

.registerView {
    position: relative;
    left: 20px;
    top: 200px;
}

html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    /* 可选：防止水平滚动条 */
}

.body {
    height: 100vh;
    /* 视口高度的100% */
    background-position: center;
    /* 背景图片居中显示 */
    position: relative;
    /* 如果需要相对于容器定位其他元素 */
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background: linear-gradient(to bottom right, rgb(211, 187, 240), rgb(178, 102, 255));
}
</style>
