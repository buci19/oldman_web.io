<!-- 健康指导 -->
<template>
    <div class="body">
        <div class="header">
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
            <router-link :to="{ path: '/oldman/userCenter' }">
                <div class="header-user">
                    <div>个人中心</div>
                    <img src="@/assets/images/user.png" alt="">
                </div>
            </router-link>
        </div>
        <div class="content">
            <div class="content-title">
                健康指导
            </div>
            <ul>
                <li>
                    <router-link :to="{ path: '/oldman/HguideHypertension' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowHabits1.jpg" alt="">
                            </div>
                            <div class="Cinner-text">
                                <div class="Cinner-title">高血压</div>
                                <div class="Cinner-introduce">
                                    健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健
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
                            <div class="Cinner-text">
                                <div class="Cinner-title">高血脂</div>
                                <div class="Cinner-introduce">
                                    健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健
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
                            <div class="Cinner-text">
                                <div class="Cinner-title">高血糖</div>
                                <div class="Cinner-introduce">
                                    健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健
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

</script>

<style scoped>
.body {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background-color: #d8e5f7;
}

/* 导航栏 */
.header {
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
}

.content {
    width: 90vw;
    height: 89vh;
    border-radius: 1vw;
    margin: 10vh 0 0 5vw;
    background-color: #fff;
}

.content .content-title {
    height: 10vh;
    line-height: 10vh;
    margin-left: 1.2vw;
    font-size: 1.5vw;
}
ul li{
    width: 40vw;
}
.content-inner {
    width: 40vw;
    height: 20vh;
    padding: 1.5vw;
}

.content-inner .Cinner-Images img {
    width: 15vw;
    height: 20vh;
    float: left;
    border-radius: 1vh;
}

.content-inner .Cinner-text {
    margin-left: 16vw;
}
.content-inner .Cinner-title {
    color: skyblue;
    font-size: 1.5vw;
}
.content-inner .Cinner-introduce {
    background-color: #fff;
    color: #666565;
    font-size: 1vw;
    line-height: 1.5vw;
    /* display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; */
    margin-top: 1vw;
}
</style>