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
                    <input type="text" v-model="loginForm.username" placeholder="请输入用户名">
                </div>
                <!-- 密码输入框 -->
                <div class="passWd">
                    <input type="password" v-model="loginForm.password" placeholder="请输入密码">
                </div>
                <!-- 登录按钮 -->
                <div class="login_bottom">
                    <input type="button" @click="login" class="login-button" value="登录">
                </div>
            </form>
            <!-- 写一个跳转注册的文字，使用超链接来接受 -->
            <div class="registerView">
                还没注册？<router-link :to="{ path: '/oldman/Register' }">立即注册</router-link>
            </div>
        </div>
        <div class="square">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="circle">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import { jwtDecode } from 'jwt-decode';
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
            // const tokenStore = useTokenStore();
            this.$axios
                .post('/api/oldman/login', {
                    username: this.loginForm.username,
                    password: this.loginForm.password
                })
                .then(successResponse => {
                    if (successResponse.data.code === 200) {
                        // 假设后端在登录成功时返回的响应体直接是JWT
                        const jwt = successResponse.data.data;
                        console.log(jwt);
                        if (jwt) {
                            localStorage.setItem('token', jwt);
                            const username = jwtDecode(jwt).username;
                            const gender = jwtDecode(jwt).gender;
                            const faction = jwtDecode(jwt).faction;
                            const id = jwtDecode(jwt).id;
                            localStorage.setItem('username', username);
                            localStorage.setItem('gender', gender);
                            localStorage.setItem('faction', faction);
                            localStorage.setItem('id', id);
                            console.log(localStorage.getItem('username'));
                            console.log(localStorage.getItem('gender'));
                            console.log(localStorage.getItem('faction'));
                            console.log(localStorage.getItem('id'));
                            this.$router.replace({ path: '/oldman/index' });
                        }else{
                            alert('用户名或密码错误');
                        }

                    }
                })
        }
    }
}
</script>

<style scoped>
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
    /* background: linear-gradient(to bottom right, rgb(211, 187, 240), rgb(178, 102, 255)); */
    background: linear-gradient(200deg, #e3c5eb, #a9c1ed);
    overflow: hidden;
}


/* 中间的登录页面 */
.center {
    width: 450px;
    height: 600px;
    margin:70px auto;
    border-radius: 20px;
    background-color: #ffffff;
    box-shadow: 0 0 8px gray;
    position: relative;
}

.logo {
    width: 180px;
    height: 180px;
    margin:0 auto;
    padding-top: 20px;
}
.logo img {
    width: 180px;
    height: 180px;
}

.login {
    font-size: 32px;
    text-align: center;
}
.login p {
    color: rgb(74, 71, 71);
    font-family: 微软雅黑; 
    font-weight: bold;
}

/* 输入框位置 */
.userName ,
.passWd {
    width: 380px;
    height: 55px;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
}
.userName{
    margin-top: 40px;
    margin-bottom: 20px;
}
.passWd {
    border-bottom: 1px solid #ccc;
}
/* 在输入框加入图标 */
.userName input ,
.passWd input{
    width: 300px;
    height: 55px; 
    font-size: 18px;
    border-radius: 15px;
    border-color: white; 
    padding-left: 10px;
    text-indent: 20px;
    background-position: left;
    background-size: 25px 25px;
    background-repeat: no-repeat;
    border: none;
    outline: none;
}
.userName input{
    background-image: url("@/assets/images/user.png");
}
.passWd input {
    background-image: url("@/assets/images/passwd.png");
}

.login_bottom {
    margin: 40px auto 0 auto;
    height: 48px;
    width: 380px;
    transition: transform 0.3s;
}
.login_bottom input{
    cursor: pointer;
    width: 380px;
    height: 48px;  
    border-radius: 15px;
    border: none; 
    font-size: 23px; 
    font-family: 宋体; 
    font-weight: bold;
    background: linear-gradient(-200deg, #fac0e7, #aac2ee); 
    color: #fff;
}
.login_bottom:hover {
    transform: scale(1.1);
}

.registerView {
    width: 380px;
    margin: 30px auto;
}
.registerView a{
    color: #595959;
}

/* 动画 */
ul li {
    position: relative;
    border: 1px solid #fff;
    width: 30px;
    height: 30px;
    background-color: #fff;
    list-style-type: none;
    opacity: 0;
}

.square ul li {
    bottom: 0vh;
    left: 20vw;
    /* 执行动画，动画名 时长 线性的 无限次播放 */
    animation: square 10s linear infinite;
}

.square li:nth-child(2) {
    bottom: 60vh;
    left: 20vw;
    /* 设置动画延迟 */
    animation-delay: 2s;
}

.square li:nth-child(3) {
    bottom: 70vh;
    left: 76vw;
    /* 设置动画延迟 */
    animation-delay: 4s;
}

.square li:nth-child(4) {
    bottom: 10vh;
    left: 75vw;
    /* 设置动画延迟 */
    animation-delay: 6s;
}

.square li:nth-child(5) {
    bottom: 50vh;
    left: 70vw;
    /* 设置动画延迟 */
    animation-delay: 8s;
}

.circle li {
    bottom: 0;
    left: 15vw;
    /* 执行动画 */
    animation: circle 10s linear infinite;
}

.circle li:nth-child(2) {
    left: 35vw;
    /* 设置动画延迟 */
    animation-delay: 2s;
}

.circle li:nth-child(3) {
    left: 55vw;
    /* 设置动画延迟 */
    animation-delay: 6s;
}

.circle li:nth-child(4) {
    left: 75vw;
    /* 设置动画延迟 */
    animation-delay: 4s;
}

.circle li:nth-child(5) {
    left: 90vw;
    /* 设置动画延迟 */
    animation-delay: 8s;
}

/* 定义动画 */
@keyframes square {
    0% {
        transform: scale(0) rotateY(0deg);
        opacity: 1;
        bottom: 0;
        border-radius: 0;
    }

    100% {
        transform: scale(5) rotateY(1000deg);
        opacity: 0;
        bottom: 90;
        border-radius: 50%;
    }
}

@keyframes circle {
    0% {
        transform: scale(0) rotateY(0deg);
        opacity: 1;
    }

    100% {
        transform: scale(5) rotateY(1000deg);
        opacity: 0;
    }
}
</style>