<template>
    <div class="body">
        <div class="center">
            <div class="register">
                <p>注册</p>
            </div>
            <form action="">
                <!-- 用户名输入框 -->
                <div class="userName">
                    <input type="text" v-model="Register.username" placeholder="请输入用户名" style="height: 45px; width: 370px; border-radius: 15px; border-color: white; padding-left: 10px;
                        text-indent: 20px;">
                </div>
                <!-- 密码输入框 -->
                <div class="passWd">
                    <input type="text" v-model="Register.password" placeholder="请输入密码" style="height: 45px; width: 370px; border-radius: 15px; border-color: white; padding-left: 10px;
                        text-indent: 20px;">
                </div>
                <div class="confirmPasswd">
                    <input type="text" v-model="Register.confirmpasswd" placeholder="再次确认密码" style="height: 45px; width: 370px; border-radius: 15px; border-color: white; padding-left: 10px;
                        text-indent: 20px;">
                </div>
                <!-- 注册按钮 -->
                <div class="register_bottom">
                    <input type="button" value="注册" @click="register" style="height: 38px; width: 150px; border-radius: 15px;
                     border: none; padding-left: 10px; font-size: 23px; font-family: 宋体;
                     background: linear-gradient(-200deg, #fac0e7, #aac2ee); color: #fff; ">
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
            }
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

.loginView {
    position: relative;
    left: 20px;
    top: 150px;
}

.center {
    width: 32vw;
    height: 72vh;
    margin: auto;
    /* margin-top: 200px; */
    position: relative;
    top: 60px;
    border-radius: 20px;
    background: linear-gradient(200deg, #e3beee, #9bb8ee);
    box-shadow: 5px 5px 13px 5px gray;
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
    background: linear-gradient(200deg, #e3c5eb, #a9c1ed);
}

.register {
    font-size: 32px;
    text-align: center;
    padding-top: 50px;
    position: relative;
    top: 10px;
}

.register p {
    color: white;
    font-weight: 600;
}

.userName {
    position: relative;
    left: 50px;
    top: 40px;
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
    top: 70px;
}


.passWd input {
    background-image: url("@/assets/images/passwd.png");
    background-position: left;
    background-size: 25px 25px;
    background-repeat: no-repeat;
    padding-left: 10px;
}

.confirmPasswd {
    position: relative;
    left: 50px;
    top: 100px;
}

.confirmPasswd input {
    background-image: url("@/assets/images/passwd.png");
    background-position: left;
    background-size: 25px 25px;
    background-repeat: no-repeat;
    padding-left: 10px;
}


.register_bottom {
    height: 60px;
    width: 190px;
    position: relative;
    left: 160px;
    top: 160px;
    transition: transform 0.3s;
}

.register_bottom:hover {
    transform: scale(1.1);
}
</style>