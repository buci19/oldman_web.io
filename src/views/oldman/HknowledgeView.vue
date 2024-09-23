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
        <div class="bg">
            <div>
                <img src="@/assets/images/Hknowledgebg.jpg" alt="">

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
                                <img src="@/assets/images/HknowAcknowledge2.png" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">生活习惯</div>
                                <div class="Cinner-introduce">
                                    胃口差、不想吃饭、没食欲该怎么办？食欲不振可能是由感染、心理、医疗条件或药物等多种因素引起的。本文介绍了食欲不振的常见原因和如何寻求紧急治疗，以及增加食欲的 16
                                    种方法，包括家庭护理、营养补充和食物选择等。</div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HknowAcknowledge' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowAcknowledge2.png" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">营养饮食</div>
                                <div class="Cinner-introduce">
                                    胃口差、不想吃饭、没食欲该怎么办？食欲不振可能是由感染、心理、医疗条件或药物等多种因素引起的。本文介绍了食欲不振的常见原因和如何寻求紧急治疗，以及增加食欲的 16
                                    种方法，包括家庭护理、营养补充和食物选择等。</div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HknowAcknowledge' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowAcknowledge2.png" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">运动指导</div>
                                <div class="Cinner-introduce">
                                    胃口差、不想吃饭、没食欲该怎么办？食欲不振可能是由感染、心理、医疗条件或药物等多种因素引起的。本文介绍了食欲不振的常见原因和如何寻求紧急治疗，以及增加食欲的 16
                                    种方法，包括家庭护理、营养补充和食物选择等。</div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HknowAcknowledge' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowAcknowledge2.png" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">心理健康</div>
                                <div class="Cinner-introduce">
                                    胃口差、不想吃饭、没食欲该怎么办？食欲不振可能是由感染、心理、医疗条件或药物等多种因素引起的。本文介绍了食欲不振的常见原因和如何寻求紧急治疗，以及增加食欲的 16
                                    种方法，包括家庭护理、营养补充和食物选择等。</div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HknowAcknowledge' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowAcknowledge2.png" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">疾病预防</div>
                                <div class="Cinner-introduce">
                                    胃口差、不想吃饭、没食欲该怎么办？食欲不振可能是由感染、心理、医疗条件或药物等多种因素引起的。本文介绍了食欲不振的常见原因和如何寻求紧急治疗，以及增加食欲的 16
                                    种方法，包括家庭护理、营养补充和食物选择等。</div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HknowAcknowledge' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowAcknowledge2.png" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">作息指南</div>
                                <div class="Cinner-introduce">
                                    胃口差、不想吃饭、没食欲该怎么办？食欲不振可能是由感染、心理、医疗条件或药物等多种因素引起的。本文介绍了食欲不振的常见原因和如何寻求紧急治疗，以及增加食欲的 16
                                    种方法，包括家庭护理、营养补充和食物选择等。</div>
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
    background: #eeeeee;
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

.bg {
    width: 100vw;
    height: 70vh;
}

.bg>div {
    width: 80vw;
    height: 70vh;
    margin: 0 auto;
}

.bg>div>img {
    width: 80vw;
    height: 70vh;
}

.content {
    width: 80vw;
    height: 120vh;
    margin: 5vh 0 0 10vw;
    background-color: #fff;
}

.content .content-title {
    height: 10vh;
    line-height: 10vh;
    margin-left: 1.2vw;
    font-size: 1.5vw;
}

.content ul li {
    width: 25vw;
    height: 50vh;
    float: left;
    margin: 0 0 2vw 1.2vw;
    border: 1px solid #cfcbcb;
}

.content ul li:nth-child(1),
.content ul li:nth-child(4) {
    margin-left: 1.2vw;
}

.content ul li .content-inner .Cinner-bottom {
    padding: 1vw;
}

.content ul li .content-inner .Cinner-Images,
.content ul li .content-inner .Cinner-Images img {
    width: 25vw;
    height: 35vh;
}

.content ul li .content-inner .Cinner-title {
    background-color: #fff;
    color: skyblue;
    font-size: 1.5vw;
}

.content ul li .content-inner .Cinner-introduce {
    background-color: #fff;
    color: #666565;
    font-size: 1vw;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 3vw;
}
</style>