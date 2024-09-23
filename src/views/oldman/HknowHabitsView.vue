<template>
    <div class="body">
        <div class="nav">
            <router-link :to="{ path: '/oldman/index' }">首页</router-link>&nbsp;&nbsp;>&nbsp;&nbsp;
            <router-link :to="{ path: '/oldman/Hknowledge' }">健康知识库</router-link>&nbsp;&nbsp;>&nbsp;&nbsp;
            <router-link :to="{ path: '/oldman/HknowHabits' }">生活习惯</router-link>
        </div>
        <div class="title">
            老年人的健康生活习惯，从生活的细节做起
        </div>
        <div class="content">
            老年人随着年龄的增长，身体的机能都在慢慢退化，免疫力逐渐降低，各种各样的疾病也随之而来。很多生活中的小细节，一不注意就会给老年人的身体健康带来很大的危害。掌握一些重要的健康知识，可以让老年人的生活更有保障。
        </div>
        <div class="img1">
            <div class="img1-img"><img src="@/assets/images/HknowHabits1.jpg" alt=""></div>
            <div class="img1-title">1、积极认识老龄化和衰老</div>
            <div class="img1-content">首先，老年人需要认识到衰老是生命的一个自然阶段，每个人都有这一天。接受这一事实，是积极面对老龄化的第一步。不要抗拒或否认衰老，而是要学会与之和平共处。<br>乐观的心态是抵抗衰老的重要武器。老年人应该努力保持积极向上的心态，关注生活中的美好事物，感恩拥有的每一刻。可以通过冥想、阅读、旅行等方式来丰富精神世界，保持心情愉悦。</div>
        </div>
        <div class="img2">
            <div class="img2-title">2、合理膳食，均衡营养</div>
            <div class="img2-content">老年人饮食要定时、定量，每日食物品种应包含粮谷类、杂豆类及薯类（粗细搭配），动物性食物，蔬菜、水果，奶类及奶制品，以及坚果类等，控制烹调油和食盐摄入量。建议老年人三餐两点，一日三餐能量分配为早餐约30%，午餐约40%，晚餐约30%，上下午各加一次零食或水果。</div>
            <div class="img2-img"><img src="@/assets/images/HknowHealthyEat1.png" alt=""></div>
        </div>
        <div class="img3">
            <div class="img3-img"><img src="@/assets/images/HknowHabits2.jpg" alt=""></div>
            <div class="img3-title">3、戒烟限酒</div>
            <div class="img3-content">戒烟：吸烟是多种疾病的根源，老年人应尽早戒烟，以降低患病风险。
                <br>限酒：适量饮酒可能对健康有一定益处，但过量饮酒会导致多种健康问题，老年人应严格控制饮酒量。
                <br>戒烟戒酒后的老人，由于身体健康状况的改善，整体生活满意度会提高。他们能够更好地享受日常生活，参与社交活动，与家人朋友共度美好时光。
                <br>戒酒后，老人的精神状态会得到显著改善，焦虑、抑郁等心理问题会减少。他们会感到更加轻松愉快，情绪更加稳定。
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.body {
    width: 80vw;
    margin: 0 auto;
}
.nav{
    margin-top: 2vw;
}
.nav a{
    color: #403f3f;
}
.nav a:hover{
    color: rgb(161, 82, 236);
}
.title {
    height: 10vh;
    line-height: 10vh;
    font-size: 2vw;
    font-weight: bold;
}

.content {
    font-size: 1.2vw;
    line-height: 4.5vh;
}

.img1 {
    float: left;
    width: 80vw;
    margin-top: 3vw;
}

.img1 .img1-img {
    width: 40vw;
    float: left;
}

.img1 .img1-img img {
    width: 40vw;
}

.img1-title {
    font-size: 1.2vw;
    font-weight: bold;
    margin-left: 45vw;
}

.img1-content {
    font-size: 1.2vw;
    line-height: 4.5vh;
    margin: 3vw 0 0 45vw;
}
.img2{
    float: left;
    margin-top: 3vw;
}
.img2-title {
    font-size: 1.2vw;
    font-weight: bold;
}
.img2-content {
    font-size: 1.2vw;
    margin-top: 3vw;
    line-height: 4.5vh;
}
.img2-img img{
    width: 80vw;
    float: left;
}
.img3 {
    width: 80vw;
    margin-top: 3vw;
    float: left;
}
.img3-title {
    width: 40vw;
    font-size: 1.2vw;
    font-weight: bold;
}

.img3-content {
    width: 35vw;
    font-size: 1.2vw;
    line-height: 4.5vh;
    margin-top: 3vw;
}
.img3 .img3-img {
    width: 40vw;
    float: right;
}

.img3 .img3-img img {
    float: right;
    width: 40vw;
}
</style>