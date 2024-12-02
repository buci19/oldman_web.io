<template>
    <div class="body">
        <div class="center">
            <div class="register">
                <p>注册</p>
            </div>
            <form action="">
                <!-- 用户名输入框 -->
                <div class="userName">
                    <input type="text" v-model="Register.username" placeholder="请输入用户名">
                </div>
                <!-- 密码输入框 -->
                <div class="passWd">
                    <input :type="showPassword ? 'text' : 'password'" v-model="Register.password" placeholder="请输入密码">
                    <img :src="showPassword ? require('@/assets/images/eye-open.png') : require('@/assets/images/eye-close.png')"
                        @click="togglePassword" class="password-toggle">
                </div>
                <div class="confirmPasswd">
                    <input :type="showConfirmPassword ? 'text' : 'password'" v-model="Register.confirmpasswd" placeholder="再次确认密码">
                    <img :src="showConfirmPassword ? require('@/assets/images/eye-open.png') : require('@/assets/images/eye-close.png')"
                        @click="toggleConfirmPassword" class="password-toggle">
                </div>
                <!-- 注册按钮 -->
                <div class="register_bottom">
                    <input type="button" value="注册" @click="register">
                </div>
            </form>
            <div class="loginView">
                <!-- <button @click="reloadLogin">返回登录</button> -->
                <router-link to="/oldman/Login">返回登录</router-link>
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
import axios from 'axios';
export default {
    data() {
        return {
            Register: {
                username: '',
                password: '',
                confirmpasswd: ''
            },
            showPassword: false,
            showConfirmPassword: false
        }
    },
    methods: {
        register() {
            if (this.Register.password !== this.Register.confirmpasswd) {
                alert('两次密码不一致')
            } else {
                this.$axios
                    .post('/api/oldman/register', {
                        username: this.Register.username,
                        password: this.Register.password
                    })
                    .then(successResponse => {
                        if (successResponse.data.code === 200) {
                            alert('注册成功')
                            this.$router.replace({ path: '/oldman/Login' })
                        } else {
                            alert('注册失败')
                        }
                    })
            }
        },
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        toggleConfirmPassword() {
            this.showConfirmPassword = !this.showConfirmPassword;
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
    background: linear-gradient(200deg, #e3c5eb, #a9c1ed);
    overflow: hidden;
}


.center {
    width: 450px;
    height: 600px;
    margin:70px auto;
    border-radius: 20px;
    /* background: linear-gradient(200deg, #e3beee, #9bb8ee); */
    background-color: #ffffff;
    box-shadow: 0 0 8px gray;
    position: relative;
}

.register {
    font-size: 32px;
    text-align: center;
    padding-top: 50px;
}

.register p {
    font-weight: 600;
}

.userName ,.passWd, .confirmPasswd{
    position: relative;
    width: 380px;
    margin: 30px auto;
    border-bottom: 1px solid #ccc;
}
.userName {
    margin-top: 80px;
}

/* 在输入框加入图标 */
.userName input,
.passWd input,
.confirmPasswd input{
    width: 360px; 
    height: 55px; 
    border-radius: 15px; 
    padding-left: 10px;
    text-indent: 20px;
    font-size: 18px;
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
.confirmPasswd input {
    background-image: url("@/assets/images/passwd.png");
}

.password-toggle {
    position: absolute;
    right:0;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
    height: 25px;
    cursor: pointer;
}

.register_bottom {
    width: 380px;
    height: 48px;
    margin: 40px auto 0 auto;
    transition: transform 0.3s;
}
.register_bottom input{
    width: 380px;
    height: 48px;
    border-radius: 15px;
    border: none; 
    font-size: 23px; 
    font-family: 宋体;
    background: linear-gradient(-200deg, #fac0e7, #aac2ee);
    color: #fff;
    cursor: pointer;
}
.register_bottom:hover {
    transform: scale(1.1);
}

.loginView {
    width: 380px;
    margin: 30px auto;
}
.loginView a{
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