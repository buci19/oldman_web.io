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
                     border: none; padding-left: 10px; font-size: 23px; font-family: 宋体; font-weight: bold;
                     background: linear-gradient(-200deg, #fac0e7, #aac2ee); color: #fff; ">
                </div>
            </form>
            <!-- 写一个跳转注册的文字，使用超链接来接受 -->
            <div class="registerView">
                <router-link :to="{ path: '/oldman/Register' }">还没注册？</router-link>
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
import {useTokenStore} from '@/store/token';
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
            const tokenStore = useTokenStore();
            this.$axios
                .post('/api/oldman/login', {
                    username: this.loginForm.username,
                    password: this.loginForm.password
                })
                .then(successResponse => {
                    if (successResponse.data.code === 1) {
                        // 假设后端在登录成功时返回的响应体直接是JWT
                        const jwt = successResponse.data.data;
                        console.log(jwt);
                        const decodeToken = jwtDecode(jwt)
                        const username = decodeToken.username;
                        const gender = decodeToken.gender;
                        const faction = decodeToken.faction;
                        if (jwt) {
                            tokenStore.updateToken(jwt);
                            // 导航到首页
                            this.$router.replace({ path: '/oldman/index' });
                            console.log(jwt);
                            console.log(username,gender,faction);

                        } else {
                            // 假设后端在登录失败时返回的响应体是一个错误信息
                            const errorMessage = successResponse.data.message || '用户名或密码错误';
                            alert(errorMessage);
                        }
                    }
                    else{
                        alert('登录失败');
                    }
                })



        }
    }
}
</script>

<style scoped>
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

/* 中间的登录页面 */
.center {
    width: 32vw;
    height: 75vh;
    margin: auto;
    /* margin-top: 200px; */
    position: relative;
    top: 60px;
    border-radius: 20px;
    background: linear-gradient(200deg, #e3beee, #9bb8ee);
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
    /* background: linear-gradient(to bottom right, rgb(211, 187, 240), rgb(178, 102, 255)); */
    background: linear-gradient(200deg, #e3c5eb, #a9c1ed);
    overflow: hidden;
}
</style>