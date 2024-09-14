<template>
    <div class="body">
        <div class="center">
            <div class="register">
                <p>注册</p>
            </div>
            <form action="">
                <!-- 用户名输入框 -->
                <div class="userName">
                    <input type="text" placeholder="请输入用户名" style="height: 45px; width: 370px; border-radius: 15px; border-color: white; padding-left: 10px;
                        text-indent: 20px;">
                </div>
                <!-- 密码输入框 -->
                <div class="passWd">
                    <input type="text" placeholder="请输入密码" style="height: 45px; width: 370px; border-radius: 15px; border-color: white; padding-left: 10px;
                        text-indent: 20px;">
                </div>
                <!-- 手机号输入框 -->
                <div class="phone">
                    <input type="text" placeholder="请输入手机号" style="height: 45px; width: 270px; border-radius: 15px; border-color: white; padding-left: 10px;
                        text-indent: 20px;" class="phoneText">
                    <span class="authCode"><input type="button" value="获取验证码" style="height: 38px; width: 100px; border-radius: 15px;
                     border-color: white; padding-left: 10px; font-size: 17px; font-family: 宋体;
                     background-color: rgb(153,153,255);  box-shadow: 2px 2px 5px 2px gray;"></span>
                </div>
                <!-- 输入验证码 -->
                <div class="authCodeGet">
                    <input type="text" placeholder="请输入验证码" style="height: 45px; width: 370px; border-radius: 15px; border-color: white; padding-left: 10px;
                        text-indent: 20px;">
                </div>
                <!-- 注册按钮 -->
                <div class="register_bottom">
                    <input type="button" value="注册" style="height: 38px; width: 150px; border-radius: 15px;
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
import axios from 'axios';

export default {
    data() {
        return {
            userName: '',
            passWd: '',
            phone: '',
            authCode: ''
        }
    },
    methods: {
        async register() {
            try {
                // 后端的API是/oldman/register
                // 下面的那个注释是确保代码如果没有使用到也不会报错
                // eslint-disable-next-line no-unused-vars 
                const response = await axios.post('http://localhost:5080/oldman/register', {
                    username: this.userName,
                    password: this.passWd,
                    phone: this.phone,
                    authCode: this.authCode
                })
                //// 处理注册成功的响应  
                alert('注册成功！');
            } catch (error) {
                // 处理注册失败的情况  
                console.error('注册失败:', error.response.data);
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

.phone {
    position: relative;
    left: 50px;
    top: 100px;
}

/* 单独对第一个input框单独设置背景图片 */
.phone .phoneText {
    background-image: url("@/assets/images/phone.png");
    background-position: left;
    background-size: 25px 25px;
    background-repeat: no-repeat;
    padding-left: 10px;
}

.authCode {
    height: 60px;
    width: 190px;
    position: relative;
    left: 20px;
    top: 5px;
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

.authCodeGet {
    position: relative;
    left: 50px;
    top: 130px;
}

.authCodeGet input {
    background-image: url("@/assets/images/authCode.png");
    background-position: left;
    background-size: 25px 25px;
    background-repeat: no-repeat;
    padding-left: 10px;
}
</style>