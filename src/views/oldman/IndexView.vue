<!-- 首页 -->
<template>
    <div id="main">
        <div class="HeaderFather">
            <div class="header">
                <div id="logo">
                    <img src="@/assets/images/logo.png" alt="" style="width: 70px; max-width: 100px;">
                </div>
                <div class="logoContent">老年健康服务平台</div>
                <div class="nav-links">
                    <div class="ai" @click="handClick"><i>AI</i>
                        答疑解惑</div>
                    <div class="nav-link"><router-link :to="{ path: '/oldman/index' }"
                            class="nav-link-inner">首页</router-link>
                    </div>
                    <div class="nav-link"><router-link :to="{ path: '/oldman/Hknowledge' }"
                            class="nav-link-inner">健康知识库</router-link></div>
                    <div class="nav-link">
                        <router-link :to="{ path: '/oldman/Healthyguide' }" class="nav-link-inner">健康指导</router-link>
                    </div>
                    <div class="nav-link">
                        <router-link :to="{ path: '/oldman/oldmanTakeOut' }" class="nav-link-inner">智慧养老</router-link>
                    </div>
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

                </div>
            </div>

        </div>
        <!-- 下拉菜单 -->
        <div class="dropdown-menu" v-if="showDropdown">
            <ul>
                <li @click="userCenter" class="dropdown-item">个人中心</li>
                <li @click="logout" class="dropdown-item">退出登录</li>
            </ul>
        </div>
        <!-- <div class="header">
            <div class="logo">
                <img src="@/assets/images/logo.png" alt="">
            </div>
            <div class="welcomeAll">
                <div class="welcome">欢迎来到老年健康服务平台</div>
                <div class="welcome_English">
                    Welcome to the Senior Health Service Platform.
                </div>
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
                        style="width: 2vw; position: relative; left: 10vw; cursor: pointer;"></div> -->
        <!-- 下拉菜单 -->
        <!-- <div class="dropdown-menu" v-if="showDropdown">
                    <ul> -->
        <!-- <li @click="userCenter" class="dropdown-item">个人中心</li> -->
        <!-- <li @click="logout" class="dropdown-item">退出登录</li>
                    </ul>
                </div>
            </div>
        </div> -->
        <!-- <div class="middle">
            <div class="button">
                <div class="AI" @click="handClick">AI 问答</div>
                <router-link :to="{ path: '/oldman/Hknowledge' }">
                    <div class="enter">进入了解</div>
                </router-link>
            </div>
        </div> -->
        <div class="banner">
            <img :src="images[idx]" alt="">
            <div @click="prev" class="carousel-control prev"><img src="@/assets/images/next.svg" alt=""></div>
            <div @click="next" class="carousel-control next"><img src="@/assets/images/next.svg" alt=""></div>
            <div class="image-list">
                <div :style="{ 'background-color': idx == image - 1 ? '#fff' : '#525050' }"
                    v-for="(image, index) in images.length" :key="index"></div>
            </div>
        </div>

        <div class="features">
            <div class="feature-title">平台特色</div>
            <div class="feature-cards">
                <div class="feature-card">
                    <img src="@/assets/images/robot.png" alt="">
                    <h3>AI智能问答</h3>
                    <p>24小时在线解答健康问题，专业贴心的智能服务</p>
                </div>
                <div class="feature-card">
                    <img src="@/assets/images/healthyKnow.jpg" alt="">
                    <h3>健康知识库</h3>
                    <p>涵盖营养、运动、心理等全方位健康知识</p>
                </div>
                <div class="feature-card">
                    <img src="@/assets/images/zhuanye.jpg" alt="">
                    <h3>专业指导</h3>
                    <p>提供个性化的健康建议和科学的运动指导</p>
                </div>
                <div class="feature-card">
                    <img src="@/assets/images/wisdomOldman.jpg" alt="">
                    <h3>智慧养老</h3>
                    <p>打造全方位的智能养老服务体系</p>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="content-left">
                <div class="title">关于我们</div>
                <div class="content-text">
                    随着科技的不断发展以及对老年群体健康生活关注度的日益提升，我们倾力打造了这款专门服务于老年人的综合性平台，旨在全方位助力老年人过上健康、便捷、舒心的生活，平台汇聚了多项实用且贴心的功能。
                    <br>AI 答疑解惑，在日常生活中，老年人常常会遇到各种各样的疑问，尤其是关乎自身健康方面的问题。而我们平台搭载的先进人工智能系统，就能成为他们随时咨询的 “健康小助手”。
                    <br>我们深知老年人对于健康知识有着多方面的需求，因此精心构建了一个涵盖生活习惯、营养饮食、运动指导、心理健康、疾病预防以及作息指南六大领域的健康知识库。
                    <br>健康指导是平台的又一核心板块，重点聚焦于疾病预防和健康运动指导这两大关键领域，致力于为老年人提供科学、专业且实用的科普知识。
                </div>
            </div>
            <div class="content-right">
                <img src="@/assets/images/1.jpg" alt="">
            </div>
        </div>

        <div class="smart-elderly-care">
            <div class="care-title">智慧养老服务</div>
            <div class="care-intro">
                <p class="intro-text">
                    响应国家"互联网+养老"战略部署，我们推出智慧养老服务平台，致力于用科技创新提升老年人生活品质。针对老年人日常生活需求，我们提供以下特色服务：
                </p>
                <div class="care-services">
                    <div class="service-item">
                        <div class="service-icon">🍜</div>
                        <div class="service-content">
                            <h3>适老化外卖服务</h3>
                            <p>专为老年人定制的营养均衡餐食，可按需定制无盐、无糖、软烂易消化等特殊餐点，让老年人享受安心可口的饮食。</p>
                        </div>
                    </div>
                    <div class="service-item">
                        <div class="service-icon">🏥</div>
                        <div class="service-content">
                            <h3>养老医疗服务</h3>
                            <p>提供线上问诊、预约挂号、送药上门等便捷医疗服务，并配备专业医护人员定期上门体检，守护老年人健康。</p>
                        </div>
                    </div>
                    <div class="service-item">
                        <div class="service-icon">🧹</div>
                        <div class="service-content">
                            <h3>家政服务</h3>
                            <p>提供专业的居家保洁、维修、洗衣等服务，所有服务人员均经过严格筛选和培训，让老年人享受省心的居家生活。</p>
                        </div>
                    </div>
                    <div class="service-item">
                        <div class="service-icon">❤️</div>
                        <div class="service-content">
                            <h3>养老陪护</h3>
                            <p>提供专业陪护人员，可以陪伴聊天、外出散步、就医陪同等，让老年人感受温暖关怀，安享幸福晚年。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="statistics">
            <div class="stat-item">
                <div class="stat-number">10000+</div>
                <div class="stat-label">注册用户</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">5000+</div>
                <div class="stat-label">健康知识</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">98%</div>
                <div class="stat-label">用户好评</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">24h</div>
                <div class="stat-label">在线服务</div>
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
        <div class="footer">
            <router-link :to="{ path: '/oldman/index' }">关于我们</router-link>
            <router-link :to="{ path: '/oldman/index' }">联系我们</router-link>
            <router-link :to="{ path: '/oldman/index' }">官方抖音</router-link>
            <router-link :to="{ path: '/oldman/index' }">加入我们</router-link>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data() {
        return {
            images: [
                require('@/assets/images/Hknowledgebg.jpg'),
                require('@/assets/images/Hknowledgebg1.jpg'),
                require('@/assets/images/HknowRest1.jpg')
            ],
            idx: -1,
            timer: null,
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
        },
        showImages() {
            this.idx = (this.idx + 1) % this.images.length;
            this.timer = setTimeout(() => {
                this.showImages();
            }, 4500)
        },
        next() {
            this.idx =
                (this.idx + 1) % this.images.length;
        },
        prev() {
            this.idx =
                (this.idx - 1 + this.images.length) % this.images.length;
        }

    },
    created() {
        this.checkLogin(); // 在组件创建时检查登录状态
    },
    mounted() {
        this.showImages(),
            this.checkLogin();
    }
}

</script>

<style scoped>
#main {
    position: relative;
    border-radius: 10px;
    width: 100%;
    overflow-x: hidden;
}

/* 导航部分 */
.HeaderFather {
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #aba8a8;
    position: fixed;
    z-index: 1;
    backdrop-filter: blur(15px);
}

.header {
    width: 1500px;
    height: 74px;
    font-size: 17px;
    display: flex;
    align-items: center;
    margin: 0 auto;
}

.dropdown-menu {
    position: absolute;
    top: 9vh;
    right: 1.5vw;
    width: 5vw;
    height: 10vh;
    background-color: #2280eb;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    color: rgb(184, 208, 255);
    font-size: 16px;
    font-weight: bold;
    line-height: 5vh;
    /* padding-top: 0.5vh; */
    text-align: center;

    z-index: 1000;
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

.logoContent {
    font-size: 25px;
    font-weight: bold;
}

#logo {
    margin-left: 20px;
}

.nav-links {
    display: flex;
    align-items: center;
    margin-left: 150px;
}

.header .nav-links .ai {
    width: 104px;
    height: 50px;
    line-height: 50px;
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
    width: 130px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: #8a5b8e;
    margin-left: 15px;
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
    border-bottom: 6px solid rgb(161, 82, 236);
    color: rgb(161, 82, 236);
}

.header .nav-links .nav-link:nth-child(2) {
    border-bottom: 6px solid rgb(161, 82, 236);
    color: rgb(161, 82, 236);
}

.actions {
    display: flex;
    color: #8a5b8e;
    align-items: center;
    margin-left: 140px;
}

.header .actions .login {
    width: 68px;
    height: 41px;
    line-height: 41px;
    text-align: center;
    border: 1px solid #868282;
    margin-left: 10px;
    border-radius: 28px;
    cursor: pointer;
}

.header .actions .login:hover {
    border: 1px solid #da44eb;
    color: #da44eb;
}

.header .actions .register {
    width: 102px;
    height: 41px;
    line-height: 41px;
    text-align: center;
    background-color: #e334ed;
    margin-left: 16px;
    border-radius: 28px;
    color: #fff;
    cursor: pointer;
}

.header .actions .register:hover {
    background-image: linear-gradient(to bottom right, rgb(195, 54, 220), rgb(207, 55, 207), rgb(197, 31, 174));
}

/* 轮播图 */
.banner {
    width: 100%;
    height: 580px;
    position: relative;
    margin: 74px auto 0 auto;
}

.banner>img {
    width: 100%;
    height: 580px;
}

.banner .image-list {
    position: absolute;
    left: 45vw;
    bottom: 10px;
    display: flex;
    flex: row;
}

.banner .image-list div {
    width: 50px;
    height: 4px;
    margin: 10px;
    opacity: 0.7;
}

.banner .prev {
    width: 50px;
    position: absolute;
    left: 20px;
    bottom: 250px;
    cursor: pointer;
}

.banner .prev img {
    width: 50px;
}

.banner .next {
    width: 50px;
    position: absolute;
    right: 20px;
    bottom: 250px;
    cursor: pointer;
}

.banner .next img {
    width: 50px;
    transform: scaleX(-1);
}

/* 动画 */
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




/* 内容 */
.content {
    width: 1200px;
    margin: 100px auto 0 auto;
    display: flex;
}

.content .content-left {
    width: 600px;
    padding-right: 50px;
}

.content .content-left .title {
    font-size: 36px;
}

.content .content-left .content-text {
    margin-top: 50px;
    font-size: 22px;
    line-height: 50px;
    color: rgba(119, 119, 119, 1);
}

.content .content-right {
    width: 600px;
    margin-top: 100px;
}

.content .content-right img {
    width: 600px;
}




.features {
    width: 1200px;
    margin: 80px auto;
    text-align: center;
}

.feature-title {
    font-size: 36px;
    margin-bottom: 50px;
    color: #333;
}

.feature-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.feature-card {
    width: 270px;
    padding: 30px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}
.feature-card:nth-child(4){
    margin-top: 60px;
}
.feature-card:hover {
    transform: translateY(-10px);
}

.feature-card img {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
}

.feature-card h3 {
    font-size: 28px;
    color: #333;
    margin-bottom: 15px;
}

.feature-card p {
    font-size: 22px;
    color: #666;
    line-height: 1.6;
}

.statistics {
    width: 1200px;
    margin: 80px auto;
    display: flex;
    justify-content: space-around;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    padding: 40px;
    border-radius: 15px;
    color: white;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
}

.stat-label {
    font-size: 22px;
}

.smart-elderly-care {
    width: 1200px;
    margin: 60px auto;
    padding: 40px;
    background: #f8f9fa;
    border-radius: 20px;
}

.care-title {
    font-size: 36px;
    color: #333;
    text-align: center;
    margin-bottom: 30px;
    font-weight: bold;
}

.intro-text {
    font-size: 22px;
    color: #666;
    line-height: 1.8;
    text-align: justify;
    margin-bottom: 40px;
}

.care-services {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

.service-item {
    display: flex;
    align-items: flex-start;
    padding: 25px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s;
}

.service-item:hover {
    transform: translateY(-5px);
}

.service-icon {
    font-size: 36px;
    margin-right: 20px;
    padding: 15px;
    background: #f0f7ff;
    border-radius: 12px;
}

.service-content h3 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
}

.service-content p {
    font-size: 22px;
    color: #666;
    line-height: 1.6;
}

/* 尾部 */
.footer {
    width: 1200px;
    height: 120px;
    line-height: 80px;
    text-align: center;
    border-top: 1px solid #ccc;
    margin: 0 auto;
}

.footer a {
    margin: 20px 40px;
    color: rgba(119, 119, 119, 1);

}

.footer a:hover {
    color: blue;
}
</style>