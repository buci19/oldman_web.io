<!-- 健康知识库 -->
<template>
    <div class="body">
        <!-- <div class="header">
            <router-link :to="{ path: '/oldman/index' }">
                <div class="return">
                    <img src="@/assets/images/return.png" alt="">
                    <div title="首页">返回</div>
                </div>
            </router-link>
            <div class="header-logo">
                <img src="@/assets/images/logo.png" alt="" style="width: 4vw; max-width: 100px;">
            </div>
            <div class="header-title">老年健康服务平台</div>
            <div class="header-user" @click="userCenter">
                <img src="@/assets/images/user.png" alt="">
            </div>
        </div> -->
        <div class="HeaderFather">
            <div class="header">
                <div id="logo">
                    <img src="@/assets/images/logo.png" alt="" style="width: 70px; max-width: 100px;">
                </div>
                <div class="logoContent">老年健康服务平台</div>
                <div class="nav-links">
                    <div class="ai" @click="handleClick"><i>AI</i>
                        答疑解惑</div>
                    <div class="nav-link"><router-link :to="{ path: '/oldman/index' }"
                            class="nav-link-inner">首页</router-link>
                    </div>
                    <div class="nav-link"><router-link :to="{ path: '/oldman/Hknowledge' }"
                            class="nav-link-inner">健康知识库</router-link></div>
                    <div class="nav-link" @click="handleClick2">
                        健康指导</div>
                </div>
                <div class="actions">
                    <!-- <div class="login" v-if="!isLoggedIn">
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
                    <!-- <div class="dropdown-menu" v-if="showDropdown"> -->
                    <!-- <ul> -->
                    <!-- <li @click="userCenter" class="dropdown-item">个人中心</li> -->
                    <!-- <li @click="logout" class="dropdown-item">退出登录</li>
                        </ul>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="banner">
            <img :src="images[idx]" alt="">
            <div @click="prev" class="carousel-control prev"><img src="@/assets/images/next.svg" alt=""></div>
            <div @click="next" class="carousel-control next"><img src="@/assets/images/next.svg" alt=""></div>
            <div class="image-list">
                <div :style="{ 'background-color': idx == image - 1 ? '#fff' : '#525050' }"
                    v-for="(image, index) in images.length" :key="index"></div>
            </div>
        </div>
        <div class="content">
            <div class="content-title">
                健康知识库
            </div>
            <ul>
                <li>
                    <router-link :to="{ path: '/oldman/HknowHabits' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowHabits1.jpg" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">生活习惯</div>
                                <div class="Cinner-introduce">
                                    老年人随着年龄的增长，身体的机能都在慢慢退化，免疫力逐渐降低，各种各样的疾病也随之而来。很多生活中的小细节，一不注意就会给老年人的身体健康带来很大的危害。掌握一些重要的健康知识，可以让老年人的生活更有保障。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HknowHealthyEat' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowHealthyEat6.jpg" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">营养饮食</div>
                                <div class="Cinner-introduce">
                                    膳食营养是保证老年人健康的基础。与年轻时相比，老年人身体机能有不少的变化，如：合成代谢降低；肌肉量减少，骨骼的矿物质减少、消化酶、消化液分泌减少导致消化功能减退。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HknowSportInstruction' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowSportInstruction2.jpg" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">运动指导</div>
                                <div class="Cinner-introduce">
                                    锻炼身体，对任何年龄段的人都很重要。但是，当你渐渐变老的时候，是否坚持锻炼可能意味着是独立生活还是不得不受别人照顾的区别。
                                    老了，锻炼的方式和年轻人的就不再相同了。健康专家认为，对于 65 岁以上的老年人，要使用不同的锻炼方式，还要遵守特别的注意事项。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HknowMentalHealthy' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowMentalHealthy1.jpg" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">心理健康</div>
                                <div class="Cinner-introduce">
                                    老年人心理健康很大程度上影响着老年人晚年生活质量，是老年健康的一项重要议题。老年人应该保持积极的社交互动，与家人、朋友和社区保持联系，参加社交活动，以减少孤独感和抑郁情绪。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HknowDiseasePrevention' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowDiseasePrevention1.jpg" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">疾病预防</div>
                                <div class="Cinner-introduce">
                                    老年人是慢性病患病率和发病率最高的人群。患有慢性疾病的老年人，随着年龄增长，免疫机能逐渐衰减，罹患感染性疾病的风险将显著增加。感染这些常见感染性疾病，也可能会影响慢性病的控制。那么，哪些情况下更易“中招”感染性疾病？如何预防？
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HknowRest' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowRest3.jpg" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">作息指南</div>
                                <div class="Cinner-introduce">
                                    很多老年人刚退休，一时调整不过来作息时间，也有些老年人一直就没有良好的作息生活，不好的生活方式可能导致身体机能失衡，各种“不舒服”。
                                    因此，我们需要寻找一种科学合理的作息时间表来改善生活品质，维护身体健康。所以，我为老年朋友们制作一份作息时间表，可以按照此时间表进行培养规律的生活习惯，执行过程中逐渐按自己的喜好，调整活动内容，但要保持规律。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
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
                require('@/assets/images/HknowRest2.jpg'),
                require('@/assets/images/HknowRest1.jpg')
            ],
            idx: -1,
            timer: null,
            showDropdown: false, // 控制下拉框显示的状态
            isLoggedIn: false,
        }
    },
    methods: {
        handleClick() {
            if (localStorage.getItem('token')) {
                // 判断是否登录
                this.$router.replace({ path: '/oldman/Aianswer' });
            } else {
                // 如果没有 token，跳转到登录页面
                alert('请先登录');
                this.$router.replace({ path: '/oldman/Login' });
            }
        },
        handleClick2() {
            if (localStorage.getItem('token')) {
                // 判断是否登录
                this.$router.replace({ path: '/oldman/Healthyguide' });
            } else {
                // 如果没有 token，跳转到登录页面
                alert('请先登录');
                this.$router.replace({ path: '/oldman/Login' });
            }
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
        },
        userCenter() {
            if (localStorage.getItem('token')) {
                // 如果 token 存在，则假设用户已经登录，跳转到用户中心
                this.$router.replace({ path: '/Oldman/userCenter' });
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
        }
    },
    mounted() {
        this.showImages(),
            this.checkLogin();
    }
}

</script>

<style scoped>
.body {
    width: 100%;
    overflow-x: hidden;
    background-color: #d8e5f7;
}

/* 导航栏 */
/* .header {
    width: 100vw;
    height: 9vh;
    background: #fff;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1000;
}

.header .return {
    width: 5vw;
    display: flex;
    align-items: center;
    margin-left: 1vw;
    font-size: 1vw;
    color: #666565;
}

.header .return:hover {
    color: rgb(161, 82, 236);

}

.header .return img {
    width: 1vw;
}

.header-logo {
    margin-left: 1vw;
}

.header-title {
    font-size: 1.5vw;
    font-weight: bold;
}

.header-user {
    margin-left: 62vw;
    font-size: 1.2vw;
    display: flex;
    align-items: center;
    color: #000;
}

.header-user>div {
    padding-right: 0.5vw;
}

.header-user img {
    width: 2vw;
} */

.HeaderFather {
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #aba8a8;
    background-color: #fff;
}

.header {
    width: 1500px;
    height: 74px;
    font-size: 17px;
    display: flex;
    align-items: center;
    /* border-bottom: 1px solid #716565; */
    background-color: #fff;
    /* position: fixed; */
    z-index: 1000;
    margin: 0 auto;
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
    margin-left: 200px;
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

.header .nav-links .nav-link:nth-child(3) {
    border-bottom: 6px solid rgb(161, 82, 236);
    color: rgb(161, 82, 236);
}

.actions {
    display: flex;
    color: #8a5b8e;
    align-items: center;
    margin-left: 240px;
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
    width: 1400px;
    height: 580px;
    position: relative;
    margin: 0 auto;
}

.banner>img {
    width: 1400px;
    height: 580px;
}

.banner .image-list {
    position: absolute;
    left: 600px;
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
    left: 1330px;
    bottom: 250px;
    cursor: pointer;
}

.banner .next img {
    width: 50px;
    transform: scaleX(-1);
}

/* 内容区域 */
.content {
    width: 1400px;
    height: 1000px;
    margin: 30px auto;
    background-color: #fff;
}

.content .content-title {
    height: 80px;
    line-height: 80px;
    margin-left: 26px;
    font-size: 26px;
    font-weight: 500;
}

.content ul li {
    width: 428px;
    height: 410px;
    float: left;
    margin: 0 0 28px 26px;
    border: 1.5px solid #cfcbcb;
    transition: all 500ms;
    overflow: hidden;
}

.content ul li:hover {
    transform: translateY(-10px);
    box-shadow: 10px 10px 30px #ccc;
}

.content ul li .content-inner .Cinner-Images,
.content ul li .content-inner .Cinner-Images img {
    width: 428px;
    height: 290px;
    transition: all 500ms;
}

.content ul li .content-inner .Cinner-Images img:hover {
    transform: scale(1.1);
}

.content ul li .content-inner .Cinner-bottom {
    padding: 15px;
}

.content ul li .content-inner .Cinner-title {
    background-color: #fff;
    color: skyblue;
    font-size: 25px;
}

.content ul li .content-inner .Cinner-introduce {
    background-color: #fff;
    color: #666565;
    font-size: 17px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 50px;
}

.content ul li .content-inner .Cinner-introduce:hover {
    color: rgb(147, 172, 241);
}

/* 媒体查询 */
@media screen and (max-width: 950px) {

    /* 导航栏变化 */
    .header {
        width: 950px;
        height: 74px;
        font-size: 17px;
        display: flex;
        align-items: center;
        /* border-bottom: 1px solid #716565; */
        background-color: #fff;
        /* position: fixed; */
        z-index: 1000;
        margin: 0 auto;
    }

    #logo,
    .logoContent {
        display: none;
    }


    /*轮播图变化 */
    .banner {
        width: 950px;
        height: 393px;
        position: relative;
        margin: 0 auto;
    }

    .banner>img {
        width: 950px;
        height: 393px;
    }

    .banner .image-list {
        position: absolute;
        left: 365px;
        bottom: 5px;
        display: flex;
        flex: row;
    }

    .banner .prev {
        width: 50px;
        position: absolute;
        left: 10px;
        bottom: 150px;
        cursor: pointer;
    }

    .banner .next {
        width: 50px;
        position: absolute;
        left: 870px;
        bottom: 150px;
        cursor: pointer;
    }

    /* 内容区域变化 */
    .content {
        width: 950px;
        margin: 30px auto;
        height: 1400px;
        background-color: #fff;
    }

    .content .content-title {
        height: 80px;
        line-height: 80px;
        margin-left: 26px;
        font-size: 26px;
        font-weight: 500;
    }


}
</style>