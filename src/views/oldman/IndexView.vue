<template>
    <div id="main">
        <div class="header">
            <div id="logo">
                <img src="@/assets/images/logo.png" alt="" style="width: 4vw; max-width: 100px;">
            </div>
            <div class="logoContent">老年健康服务平台</div>
            <div class="nav-links">
                <div class="ai"><router-link :to="{ path: '/Oldman/Aianswer' }" class="ai-inner"><i>AI</i> 答疑解惑</router-link></div>
                <div class="nav-link"><router-link :to="{ path: '/oldman/index' }" class="nav-link-inner">首页</router-link></div>
                <div class="nav-link"><router-link :to="{ path: '/oldman/Hknowledge' }" class="nav-link-inner">健康知识库</router-link></div>
                <div class="nav-link"><router-link :to="{ path: '/oldman/Memoirs' }" class="nav-link-inner">回忆录</router-link></div>
                <div class="nav-link"><router-link :to="{ path: '/oldman/Healthysport' }" class="nav-link-inner">康复运动与指导</router-link></div>
            </div>
            <div class="actions">
                <div class="login">
                    <router-link :to="{ path: '/oldman/Login' }" class="login-inner">
                        登录
                    </router-link>
                </div>
                <div class="register">
                    <router-link :to="{ path: '/oldman/Register' }" class="register-inner">
                        免费注册
                    </router-link>
                </div>
            </div>
        </div>
        <div class="content">
            <p class="Chinese">欢迎来到老年健康服务平台</p>
            <p class="English">Welcome to the Elderly Health Service Platform</p>
            <div class="understand">
                <router-link :to="{path: '/oldman/Hknowledge/HknowAcknowledge'}" class="understand-inner">
                    进入了解
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
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
.logoContent{
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
.header .nav-links .ai .ai-inner{
    display: block; /* 使router-link充满整个父div */  
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
.understand-inner{
    display: block; /* 使router-link充满整个父div */  
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
    background-image: linear-gradient(to bottom right, rgb(206, 240, 180), rgb(187, 231, 244), rgb(135, 235, 156));
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