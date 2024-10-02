<!-- 首页 -->
<template>
    <div id="main">
        <div class="header">
            <div id="logo">
                <img src="@/assets/images/logo.png" alt="" style="width: 4vw; max-width: 100px;">
            </div>
            <div class="logoContent">老年健康服务平台</div>
            <div class="nav-links">
                <div class="ai"><router-link :to="{ path: '/Oldman/Aianswer' }" class="ai-inner"><i>AI</i>
                        答疑解惑</router-link></div>
                <div class="nav-link"><router-link :to="{ path: '/oldman/index' }"
                        class="nav-link-inner">首页</router-link></div>
                <div class="nav-link"><router-link :to="{ path: '/oldman/Hknowledge' }"
                        class="nav-link-inner">健康知识库</router-link></div>
                <div class="nav-link"><router-link :to="{ path: '/oldman/Memoirs' }"
                        class="nav-link-inner">回忆录</router-link></div>
                <div class="nav-link"><router-link :to="{ path: '/oldman/Healthyguide' }"
                        class="nav-link-inner">健康指导</router-link></div>
            </div>
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
                        <li @click="userCenter" class="dropdown-item">个人中心</li>
                        <li @click="logout" class="dropdown-item">退出登录</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="content">
            <p class="Chinese">欢迎来到老年健康服务平台</p>
            <p class="English">Welcome to the Elderly Health Service Platform</p>
            <div class="understand">
                <router-link :to="{ path: '/oldman/Hknowledge' }" class="understand-inner">
                    进入了解
                </router-link>
            </div>
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
/* 导航部分 */
.header {
    width: 100vw;
    height: 9vh;
    font-size: 1vw;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    border-bottom: 1px solid #868181;
    background-color: #fff;
}

.dropdown-menu{
    position: relative;
    top: 9vh;
    left: 6.6vw;
    width: 5vw;
    height: 10vh;
    background-color: #d6e7fb;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    color: white;
    font-size: 16px;
    font-weight: bold;
    line-height: 5vh;
    padding-top: 1vh;
    text-align: center;
    
    z-index: 1;
}

.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-item {
  /* padding: 12px 16px; */
  cursor: pointer;
  transition: background-color 0.3s; /* 添加平滑过渡效果 */
}

.dropdown-item:hover {
  background-color: #f1f1f1; /* 鼠标悬停时的背景色 */
}

.logoContent {
    font-size: 1.5vw;
    font-weight: bold;
}

#logo {
    margin-left: 7vw;

}

.nav-links {
    display: flex;
    align-items: center;
    margin-left: 7vw;
}

.header .nav-links .ai {
    width: 6vw;
    height: 6vh;
    line-height: 6vh;
    text-align: center;
    border-radius: 10px;
    background-color: #798bf0;
    float: left;
    color: #fffffffb;
    cursor: pointer;
}

.header .nav-links .ai .ai-inner {
    display: block;
    /* 使router-link充满整个父div */
    width: 100%;
    height: 100%;
    color: inherit;
}

.header .nav-links .ai:hover {
    background-image: linear-gradient(to bottom right, rgb(104, 106, 237), rgb(97, 82, 236), rgb(52, 58, 232));
}

.header .nav-links .nav-link {
    width: 8vw;
    height: 9vh;
    line-height: 9vh;
    text-align: center;
    color: #8a5b8e;
    margin-left: 1vw;
    cursor: pointer;
}

.nav-link-inner,
.ai-inner,
.login-inner,
.register-inner,
.understand-inner {
    display: block;
    /* 使router-link充满整个父div */
    width: 100%;
    height: 100%;
    color: inherit;
}

.header .nav-links .nav-link:hover {
    border-bottom: 4px solid rgb(161, 82, 236);
    color: rgb(161, 82, 236);
}

.header .nav-links .nav-link:nth-child(2) {
    border-bottom: 4px solid rgb(161, 82, 236);
    color: rgb(161, 82, 236);
}

.actions {
    display: flex;
    color: #8a5b8e;
    align-items: center;
    margin-left: 11vw;
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
    background-color: #d8e5f7;
    /* background-image: linear-gradient(to bottom right, rgb(206, 240, 180), rgb(187, 231, 244), rgb(135, 235, 156)); */
}


/* 内容部分 */
.content {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.content .Chinese {
    font-family: STKaiti;
    font-size: 50px;
    color: #564d4d;
    text-align: center;
    margin-top: 25vh;
}

.content .English {
    font-size: 26px;
    text-align: center;
    color: #564d4d;
}

.content .understand {
    width: 10vw;
    height: 5vh;
    line-height: 5vh;
    text-align: center;
    margin: 10vh auto;
    background-color: #798bf0;
    border-radius: 2vw;
    font-size: 1vw;
    color: #fff;
    cursor: pointer;
}

.content .understand:hover {
    background-image: linear-gradient(to bottom right, rgb(104, 106, 237), rgb(97, 82, 236), rgb(52, 58, 232));
}
</style>