<!-- 首页 -->
<template>
    <div id="main">
        <div class="logo">
            <img src="@/assets/images/logo.png" alt="">
        </div>
        <div class="header">
            <div class="actions">
                <div class="login" v-if="!isLoggedIn">
                    <router-link :to="{ path: '/oldman/Login' }" class="login-inner">
                        登录
                    </router-link>
                </div>
                <div class="register" v-if="!isLoggedIn">
                    <router-link :to="{ path: '/oldman/Register' }" class="register-inner">
                        免费注册
                    </router-link>
                </div>
                <div v-if="isLoggedIn"><img :src="userImg" @click="toggleDropdown" alt=""
                        style="width: 2vw; position: relative; left: 10vw; cursor: pointer;"></div>
                <!-- 下拉菜单 -->
                <div class="dropdown-menu" v-if="showDropdown">
                    <ul>
                        <!-- <li @click="userCenter" class="dropdown-item">个人中心</li> -->
                        <li @click="logout" class="dropdown-item">退出登录</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="welcome">欢迎来到老年健康服务平台</div>
        <div class="welcome_English">
            Welcome to the Senior Health Service Platform.
        </div>
        <div class="button">
            <el-row>
                <el-button type="primary" plain @click="handClick">ai问答</el-button>
                <router-link :to="{ path: '/oldman/Hknowledge' }">
                    <el-button plain style="margin-left: 2vw;">进入了解</el-button>
                </router-link>
            </el-row>
        </div>
        <div class="img1">
            <img src="@/assets/images/31.jpg" alt="">
        </div>
        <div class="img2">
            <img src="@/assets/images/32.jpg" alt="">
        </div>
        <div class="img3">
            <img src="@/assets/images/R-C.png" alt="">
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
export default {
    data() {
        return {
            isLoggedIn: false,
            userImg: require('@/assets/images/user.png'), // 确保路径正确
            showDropdown: false, // 控制下拉框显示的状态
        }
    },
    methods: {
        handClick() {
            // 判断是否登录
            if (localStorage.getItem('token')) {
                // 如果 token 存在，则假设用户已经登录
                this.$router.replace({ path: '/oldman/Aianswer' });
            } else {
                // 如果没有 token，跳转到登录页面
                alert('请先登录');
                this.$router.replace({ path: '/oldman/Login' });
            }
        },
        checkLogin() {
            if (localStorage.getItem('token')) {
                this.isLoggedIn = true;
                this.userImg = require('@/assets/images/user.png');
            }
        },
        toggleDropdown() {
            this.showDropdown = !this.showDropdown; // 切换下拉菜单的显示状态
        },
        userCenter() {
            this.$router.replace({ path: '/Oldman/userCenter' });
        },
        logout() {
            localStorage.clear();
            this.$router.replace({ path: '/oldman/Login' });
        }

    },
    created() {
        this.checkLogin(); // 在组件创建时检查登录状态
    }
}

</script>

<style scoped>
.square ul li {
    position: relative;
    border: 1px solid #fff;
    width: 30px;
    height: 30px;
    background-color: #fff;
    list-style-type: none;
    opacity: 0;
}

.circle ul li {
    position: relative;
    border: 1px solid #fff;
    width: 30px;
    height: 30px;
    background-color: #fff;
    list-style-type: none;
    opacity: 0;
}

.square ul li {
    bottom: 4vh;
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

.logo {
    position: relative;
    width: 20vw;
    height: 20vh;
    float: left;
}

.logo img {
    width: 25vh;
    height: 25vh;
}

.img1 {
    position: relative;
    top: 10vh;
    left: 66vw;
}

.img1 img {
    width: 30vw;
    height: 40vh;
    transform: rotate(-30deg);
}

.img2 {
    position: relative;
    float: left;
    left: 4vw;
    bottom: 40vh;

}

.img2 img {
    width: 30vw;
    height: 40vh;
    transform: rotate(10deg);
}

.img3 {
    position: relative;
    float: left;
    /* left: 2vw; */
    bottom: 30vh;
}

.img3 img {
    width: 40vw;

}

.button {
    position: relative;
    /* top: 0vh; */
    left: 40vw;
}

.welcome {
    position: absolute;
    top: 10vh;
    left: 27vw;
    font-size: 3vw;
    color: white;
    letter-spacing: 12px;
}

.welcome_English {
    position: absolute;
    top: 19vh;
    left: 29.5vw;
    font-size: 1.5vw;
    color: white;
    letter-spacing: 2px;
}

/* 导航部分 */
.header {
    width: 100vw;
    height: 9vh;
    font-size: 1vw;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    /* border-bottom: 1px solid #868181; */
    /* background-color: #fff; */
}

.dropdown-menu {
    position: relative;
    top: 5vh;
    left: 6.6vw;
    width: 5vw;
    height: 5vh;
    background-color: #2280eb;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    color: rgb(184, 208, 255);
    font-size: 16px;
    font-weight: bold;
    line-height: 5vh;
    /* padding-top: 0.5vh; */
    text-align: center;

    z-index: 1;
}

.dropdown-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    /* color: #868282; */
}

.dropdown-item {
    /* padding: 12px 16px; */
    cursor: pointer;
    transition: background-color 0.3s;
    /* color: #868282; */
    /* 添加平滑过渡效果 */
}

.dropdown-item:hover {
    background-color: #8292ff;
    /* 鼠标悬停时的背景色 */
}


.actions {
    display: flex;
    color: #8a5b8e;
    align-items: center;
    margin-left: 86vw;
    position: relative;
    bottom: 20vh;
    float: right;

}

.header .actions .login {
    width: 4vw;
    height: 5vh;
    line-height: 5vh;
    text-align: center;
    border: 1px solid #868282;
    margin-left: 1vw;
    border-radius: 2vw;
    cursor: pointer;
}

.header .actions .login:hover {
    border: 1px solid #da44eb;
    color: #da44eb;
}

.header .actions .register {
    width: 6vw;
    height: 5vh;
    line-height: 5vh;
    text-align: center;
    background-color: #e334ed;
    margin-left: 1vw;
    border-radius: 2vw;
    color: #fff;
    cursor: pointer;
}

.header .actions .register:hover {
    background-image: linear-gradient(to bottom right, rgb(195, 54, 220), rgb(207, 55, 207), rgb(197, 31, 174));
}


#main {
    border-radius: 0.5vw;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #afd0ff;
    /* background-image: linear-gradient(to bottom right, rgb(206, 240, 180), rgb(187, 231, 244), rgb(135, 235, 156)); */
}
</style>