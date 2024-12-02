<!-- 健康知识库-生活习惯 -->
<template>
    <div class="body">
        <div class="nav">
            <router-link title="返回首页" :to="{ path: '/oldman/index' }">首页</router-link>&nbsp;&nbsp;>&nbsp;&nbsp;
            <router-link title="返回健康知识库" :to="{ path: '/oldman/Hknowledge' }">健康知识库</router-link>&nbsp;&nbsp;>&nbsp;&nbsp;
            <router-link :to="{ path: '/oldman/HknowHabits' }">生活习惯</router-link>
        </div>
        <div class="title">
            老年人的健康生活习惯，从生活的细节做起
        </div>
        <div class="content">
            老年人随着年龄的增长，身体的机能都在慢慢退化，免疫力逐渐降低，各种各样的疾病也随之而来。很多生活中的小细节，一不注意就会给老年人的身体健康带来很大的危害。掌握一些重要的健康知识，可以让老年人的生活更有保障。
        </div>
        <div class="content1">
            <div class="content1-img"><img src="@/assets/images/HknowHabits1.jpg" alt=""></div>
            <div class="content1-title">1、积极认识老龄化和衰老</div>
            <div class="content1-content">
                首先，老年人需要认识到衰老是生命的一个自然阶段，每个人都有这一天。接受这一事实，是积极面对老龄化的第一步。不要抗拒或否认衰老，而是要学会与之和平共处。<br>乐观的心态是抵抗衰老的重要武器。老年人应该努力保持积极向上的心态，关注生活中的美好事物，感恩拥有的每一刻。可以通过冥想、阅读、旅行等方式来丰富精神世界，保持心情愉悦。
            </div>
        </div>
        <div class="content2">
            <div class="content2-title">2、合理膳食，均衡营养</div>
            <div class="content2-content">
                老年人饮食要定时、定量，每日食物品种应包含粮谷类、杂豆类及薯类（粗细搭配），动物性食物，蔬菜、水果，奶类及奶制品，以及坚果类等，控制烹调油和食盐摄入量。建议老年人三餐两点，一日三餐能量分配为早餐约30%，午餐约40%，晚餐约30%，上下午各加一次零食或水果。
            </div>
            <div class="content2-img"><img src="@/assets/images/HknowHealthyEat1.png" alt=""></div>
        </div>
        <div class="content3">
            <div class="content3-title">3、保持良好睡眠</div>
            <div class="content3-content">规律起床与就寝：每天尽量在同一时间起床和就寝，这样可以帮助调整身体的生物钟，使身体适应规律的作息模式。避免晚上熬夜或早晨过早起床，保证充足的睡眠时间。
                <br>合理安排午休：对于老年人来说，适当的午休可以缓解疲劳，提高下午的精神状态。但午休时间不宜过长，一般控制在半小时到一小时为宜，以免影响晚上的睡眠质量。
            </div>
        </div>
        <div class="content4">
            <div class="content4-img"><img src="@/assets/images/HknowHabits2.jpg" alt=""></div>
            <div class="content4-title">4、戒烟限酒</div>
            <div class="content4-content">戒烟：吸烟是多种疾病的根源，老年人应尽早戒烟，以降低患病风险。
                <br>限酒：适量饮酒可能对健康有一定益处，但过量饮酒会导致多种健康问题，老年人应严格控制饮酒量。
                <br>戒烟戒酒后的老人，由于身体健康状况的改善，整体生活满意度会提高。他们能够更好地享受日常生活，参与社交活动，与家人朋友共度美好时光。
                <br>戒酒后，老人的精神状态会得到显著改善，焦虑、抑郁等心理问题会减少。他们会感到更加轻松愉快，情绪更加稳定。
            </div>
        </div>
        <div class="content5">
            <div class="content5-title">5、定期体检</div>
            <div class="content5-content">早期发现疾病：许多疾病在早期阶段并没有明显的症状，但通过体检可以检测到异常的生理指标或病理变化，从而在疾病还未发展到严重阶段时就进行干预和治疗，提高治愈率和生存率。
                <br>预防并发症：老年人往往患有多种慢性疾病，如高血压、糖尿病、心脏病等。定期体检可以监测这些疾病的控制情况，及时调整治疗方案，有效预防并发症的发生，提高生活质量。
                <br>评估健康风险：根据体检结果，医生可以评估老年人的整体健康状况和潜在的健康风险，提供个性化的健康建议，包括饮食调整、运动指导、心理干预等，帮助老年人更好地管理自己的健康。
                <br>促进健康行为：定期体检可以增强老年人的健康意识，使他们更加重视日常的健康行为，如合理膳食、适量运动、戒烟限酒等，从而养成良好的生活习惯，减少疾病的发生。
                <br>增强心理安全感：老年人常常担心自己的健康状况，定期体检可以让他们及时了解自己的身体状况，减少不必要的担忧和恐惧，增强心理安全感。
                <br>及时调整医疗方案：随着年龄的增长，老年人的身体状况会发生变化，原有的医疗方案可能不再适用。定期体检可以及时发现这些变化，为医生调整医疗方案提供依据，确保治疗的有效性和安全性。
                <br>提高生活质量：通过定期体检和及时的健康干预，老年人可以保持较好的身体状态，减少因疾病带来的痛苦和不便，从而提高生活质量，享受更加健康、快乐的晚年生活。
            </div>
        </div>
        <div class="footer">
            <router-link :to="{path: '/oldman/index'}">关于我们</router-link>
            <router-link :to="{path: '/oldman/index'}">联系我们</router-link>
            <router-link :to="{path: '/oldman/index'}">官方抖音</router-link>
            <router-link :to="{path: '/oldman/index'}">加入我们</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.body {
    width: 80%;
    margin: 0 auto;
}

.nav {
    margin-top: 30px;
}

.nav a {
    color: #403f3f;
    font-size: 22px;
}

.nav a:hover {
    color: rgb(161, 82, 236);
}

.title {
    height: 100px;
    line-height: 100px;
    font-size: 46px;
    font-weight: bold;
    text-align: center;
}

.content {
    font-size: 26px;
    line-height:40px;
}

.content1 {
    float: left;
    width: 80vw;
    margin-top: 3vw;
}

.content1 .content1-img {
    width: 40vw;
    float: left;
}

.content1 .content1-img img {
    width: 40vw;
}

.content1-title {
    font-size: 1.2vw;
    font-weight: bold;
    margin-left: 45vw;
}

.content1-content {
    font-size: 1.2vw;
    line-height: 4.5vh;
    margin: 3vw 0 0 45vw;
}

.content2 {
    float: left;
    margin-top: 3vw;
}

.content2-title {
    font-size: 1.2vw;
    font-weight: bold;
}

.content2-content {
    font-size: 1.2vw;
    margin-top: 3vw;
    line-height: 4.5vh;
}

.content2-img img {
    width: 80vw;
    float: left;
}

.content3 {
    float: left;
    margin-top: 3vw;
}

.content3-title {
    font-size: 1.2vw;
    font-weight: bold;
}

.content3-content {
    font-size: 1.2vw;
    margin-top: 3vw;
    line-height: 4.5vh;
}

.content4 {
    float: left;
    width: 80vw;
    margin-top: 3vw;
}

.content4-title {
    width: 40vw;
    font-size: 1.2vw;
    font-weight: bold;
}

.content4-content {
    width: 35vw;
    font-size: 1.2vw;
    line-height: 4.5vh;
    margin-top: 3vw;
}

.content4 .content4-img {
    width: 40vw;
    float: right;
}

.content4 .content4-img img {
    float: right;
    width: 40vw;
}
.content5 {
    float: left;
    margin-top: 3vw;
}

.content5-title {
    font-size: 1.2vw;
    font-weight: bold;
}

.content5-content {
    font-size: 1.2vw;
    margin: 3vw 0 3vw 0;
    line-height: 4.5vh;
}
.footer {
    float: left;
    width: 80vw;
    height: 20vh;
    line-height: 20vh;
    text-align: center;
    font-size: 0.8vw;
    border-top: 1px solid #000;
}
.footer a{
    margin: 1vw 2vw;
    color: #000;
}
.footer a:hover{
    color: blue;
}
</style>