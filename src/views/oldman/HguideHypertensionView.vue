<template>
    <div class="body">
        <div class="header">
            <router-link :to="{ path: '/oldman/Healthyguide' }">
                <div class="return">
                    <img src="@/assets/images/return.png" alt="">
                    <div title="返回健康指导">返回</div>
                </div>
            </router-link>
        </div>
        <div class="content">
            <div class="content-video">
                <video class="video" src="@/assets/videos/Healthy1.mp4" controls></video>
            </div>
            <div class="content-text">
                <div class="Ctext-header">简介</div>
                <div class="Ctext-title">
                    高血压
                </div>
                <div class="Ctext-content">
                    健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康
                    健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康
                    健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康
                    健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康
                    健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康
                    健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康
                    健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康
                    健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康
                </div>

                <div class="Ctext-middle">相关推荐</div>
                <router-link :to="{ path: '/oldman/HguideHypertension' }">
                    <div class="content-inner">
                        <div class="Cinner-Images">
                            <img src="@/assets/images/HknowHabits1.jpg" alt="">
                        </div>
                        <div class="Cinner-text">
                            <div class="Cinner-title">高血脂</div>
                            <div class="Cinner-introduce">
                                健康健康健康健康健健康健康健康健康健康健康健康健康健
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link :to="{ path: '/oldman/HguideHypertension' }">
                    <div class="content-inner">
                        <div class="Cinner-Images">
                            <img src="@/assets/images/HknowHabits1.jpg" alt="">
                        </div>
                        <div class="Cinner-text">
                            <div class="Cinner-title">高血脂</div>
                            <div class="Cinner-introduce">
                                健康健康健康健康健健康健康健康健康健康健康健康健康健
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
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


.content {
    width: 100vw;
    height: 91vh;
    margin-top: 9vh;
    overflow-y: hidden;
}

/* 左边视频 */
.content .content-video {
    margin-left: 2vw;
    float: left;
}

.content .video {
    width: 66vw;
    height: 91vh;
}

/* 右边文本 */
.content .content-text {
    height: 91vh;
    background-color: #fff;
    padding: 0 1vw 0 1vw;
    margin-left: 69vw;
    margin-right: 2vw;
    border-radius: 1vh;
}

.content-text .Ctext-header{
    height: 4vh;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1vh;
}

.content-text .Ctext-title {
    font-size: 24px;
    color: skyblue;
}
.content-text .Ctext-content{
    border-bottom: 1px solid #ccc;
    padding-bottom: 2vh;
}

.content-text .Ctext-middle{
    margin-top: 1vh;
}

.content-inner {
    height: 16vh;
    margin-top: 1vw;
}
.content-inner:hover{
    background-color: #e7e5e5;
}
.content-inner .Cinner-Images img {
    width: 12vw;
    height: 14vh;
    float: left;
    border-radius: 1vh;
    margin: 1vh 0 1vh 0.5vw;
}

.content-inner .Cinner-text {
    margin:0 0.5vw 0 13vw;
}
.content-inner .Cinner-title {
    color: skyblue;
    font-size: 1.5vw;
}
.content-inner .Cinner-introduce {
    color: #666565;
    font-size: 1vw;
    line-height: 1.5vw;
}
</style>