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
                     border-color: white; padding-left: 10px; font-size: 23px; font-family: 宋体;
                     background-color: rgb(153,153,255);  box-shadow: 2px 2px 5px 2px gray;">
                </div>
            </form>
            <div class="loginView">
                <!-- <button @click="reloadLogin">返回登录</button> -->
                <router-link to="/">返回登录</router-link>
            </div>
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
                    .post('http://localhost:5081/api/oldman/register', {
                        username: this.Register.username,
                        password: this.Register.password
                    })
                    .then(successResponse => {
                        if(successResponse.data.code === 200) {
                            alert('注册成功')
                            this.$router.replace({ path: '/' })
                        }else{
                            alert('注册失败')
                        }
                    })
            }
        }
    }



}


</script>

<style>
.loginView {
    position: relative;
    left: 20px;
    top: 150px;
}

.center {
    width: 480px;
    height: 600px;
    margin: auto;
    /* margin-top: 200px; */
    position: relative;
    top: 80px;
    border-radius: 20px;
    background: linear-gradient(to bottom right, rgb(187, 189, 240), rgb(178, 102, 255));
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
    background: linear-gradient(to bottom right, rgb(211, 187, 240), rgb(178, 102, 255));
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
.confirmPasswd input{
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