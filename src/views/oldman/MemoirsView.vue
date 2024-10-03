<!-- 山河记忆 -->
<template>
    <div id="app">
        <!-- 标题 -->
        <div class="memory">
            <div><img src="" alt=""></div>
            <div class="title">忆往昔</div>
        </div>
        <!-- 导航栏 -->
        <div class="header_nav">
            <span> <router-link :to="{ path: '/oldman/MemoirsSuggest' }">建议反馈</router-link> </span>
        </div>
        <!-- 主体 -->
        <router-link :to="{ path: '/oldman/MemoirsScenery' }">
            <div class="body">
                <div class="img"><img src="@/assets/images/scenery.jpg" alt=""></div>
                <div class="content">
                    <span class="span1">祖国的壮丽山河</span>
                    <span
                        class="span2">穿越千年的壮阔画卷，祖国的山河如此多娇。从珠穆朗玛的雪峰到东海的碧波，从长城的蜿蜒到桂林的山水，每一寸土地都诉说着不朽的传奇。让我们一同领略这壮丽的自然风光，感受祖国的心跳，铭记这永恒的美丽。</span>
                </div>
            </div>
        </router-link>
        <router-link :to="{ path: '/oldman/MemoirsScenic' }">
            <div class="body2">
                <div class="img2"><img src="@/assets/images/scenery.jpg" alt=""></div>
                <div class="content2">
                    <span class="span1">名胜古迹收集录</span>
                    <span
                        class="span2">《时光印记：中国名胜古迹巡礼》——一本穿越时空的收藏，记录着华夏大地的璀璨瑰宝。从故宫的金碧辉煌到敦煌的千年壁画，从秦始皇陵的兵马俑到苏州的古典园林，每一页都承载着历史的厚重与文化的深邃。翻开这本书，让我们一同踏上寻根之旅，探索那些历经风雨却依然屹立的古迹，感受时间的沉淀与文明的辉煌。</span>
                </div>
            </div>
        </router-link>
        <router-link :to="{ path: '/oldman/MemoirsHealthy' }">
            <div class="body3">
                <div class="img3"><img src="@/assets/images/scenery.jpg" alt=""></div>
                <div class="content3">
                    <span class="span1">健康美食分享会</span>
                    <span
                        class="span2">《舌尖上的健康：美味与营养的和谐交响》——一场味蕾与健康的双重盛宴。在这里，我们不仅分享色香味俱全的佳肴，更探讨食物背后的健康哲学。从五谷杂粮到新鲜蔬果，从传统药膳到现代营养学，每一道菜都是对健康生活的致敬。加入我们，一起探索食物的力量，让健康与美味同行，享受生活的每一刻。</span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>

</script>

<style scoped>
.span1 {
    color: white;
    position: relative;
    top: 2vh;
    text-align: center;
}

.span2 {
    position: relative;
    top: 4vh;
    text-align: center;
}

.body {
    background-color: #bab4ff;
    width: 22vw;
    height: 58vh;
    position: relative;
    left: 10vw;
    top: 10vh;
    border: 3px solid #fff;
    float: left;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.body:hover {
    transform: scale(1.05);
}

.body img {
    width: 22vw;
    height: 25vh;
}

.body span {
    display: block;
}

.body2 {
    background-color: #bab4ff;
    width: 22vw;
    height: 58vh;
    position: relative;
    left: 15vw;
    top: 10vh;
    border: 3px solid #fff;
    float: left;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.body2:hover {
    transform: scale(1.05);
}

.body2 img {
    width: 22vw;
    height: 25vh;
}

.body2 span {
    display: block;
}

.body3 {
    background-color: #bab4ff;
    width: 22vw;
    height: 58vh;
    position: relative;
    left: 20vw;
    top: 10vh;
    border: 3px solid #fff;
    float: left;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.body3:hover {
    transform: scale(1.05);
}

.body3 img {
    width: 22vw;
    height: 25vh;
}

.body3 span {
    display: block;
}

.memory {
    width: 90vw;
    height: 12vh;
    background-color: #cdc4ff;
    margin: auto;
    position: relative;
}

.title {
    font-weight: bold;
    font-size: 23px;
    position: relative;
    left: 15vw;
    top: 4vh;
}

.header_nav {
    width: 90vw;
    height: 4.5vh;
    background-color: #cdc4ff;
    margin: auto;
    position: relative;
    top: 1vh;
}

.header_nav span {
    font-size: 18px;
    margin-right: 1.5vw;
    position: relative;
    left: 84vw;
    font-weight: bold;
    top: 0.5vh;
    cursor: pointer;
}

#app {
    width: 100%;
    height: 100vh;
    background-color: #beb8fd;
    overflow: hidden;
}
</style>