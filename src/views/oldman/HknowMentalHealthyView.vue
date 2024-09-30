<!-- 健康知识库-心理健康 -->
<template>
    <div class="body">
        <div class="nav">
            <router-link title="返回首页" :to="{ path: '/oldman/index' }">首页</router-link>&nbsp;&nbsp;>&nbsp;&nbsp;
            <router-link title="返回健康知识库" :to="{ path: '/oldman/Hknowledge' }">健康知识库</router-link>&nbsp;&nbsp;>&nbsp;&nbsp;
            <router-link :to="{ path: '/oldman/HknowMentalHealthy' }">心理健康</router-link>
        </div>
        <div class="title">
            老年人的心理健康教育
        </div>
        <div class="content">
            老年人心理健康很大程度上影响着老年人晚年生活质量，是老年健康的一项重要议题。老年人应该保持积极的社交互动，与家人、朋友和社区保持联系，参加社交活动，以减少孤独感和抑郁情绪。
        </div>
        <div class="content1">
            <div class="content1-img"><img src="@/assets/images/HknowMentalHealthy1.jpg" alt=""></div>
            <div class="content1-title">1、建立良好的社交关系</div>
            <div class="content1-content">
                建立良好的社交关系：鼓励老年人积极参加社区活动、兴趣班等，拓宽社交圈子，增加人际交往，减轻孤独感。老年人应保持乐观、开放的心态，主动寻求与他人交往的机会。这种积极的心态能够吸引更多人的关注和友谊。
            </div>
            <div class="content1-title2">2、积极参与运动</div>
            <div class="content1-content">
                如打太极拳、散步、骑自行车等有氧运动，不仅可以增强体质，还能缓解压力，提升心情。
            </div>
        </div>
        <div class="content2">
            <div class="content2-title">3、心理疏导</div>
            <div class="content2-content">
                家庭成员和亲朋好友应关心老年人的心理需求，倾听老年人的心声，帮助他们化解心理困扰。有条件的家庭可以寻求专业心理咨询师的帮助。
                <br>
                参加心理健康知识讲座、培训班等活动，提高心理素质和应对能力。同时，学习一些简单的放松技巧，如深呼吸、渐进性肌肉松弛等，以缓解焦虑和紧张情绪。
            </div>
            <div class="content2-img"><img src="@/assets/images/HknowMentalHealthy2.jpg" alt=""></div>
        </div>
        <div class="content3">
            <div class="content3-title">4、培养兴趣爱好</div>
            <div class="content3-content">心通过培养共同的兴趣爱好，老年人可以更容易地找到志同道合的朋友。
                例如，加入读书会、园艺俱乐部、摄影团体等兴趣小组，与有相同爱好的人一起交流和学习。
                <br>保持耐心和恒心：培养兴趣爱好需要时间和努力，不要急于求成。遇到困难时，保持积极心态，相信自己能够克服。
                <br>与家人朋友分享：将你的兴趣爱好与家人和朋友分享，他们的支持和鼓励会是你坚持下去的重要动力。同时，你也可以邀请他们一起参与，共同享受其中的乐趣。
                <br>保持灵活性：随着年龄的增长，身体条件可能会有所变化。因此，在选择和坚持兴趣爱好时，要根据自己的实际情况灵活调整，确保活动既有趣又安全。

            </div>
        </div>
        <div class="content4">
            <div class="content4-img"><img src="@/assets/images/HknowMentalHealthy3.png" alt=""></div>
            <div class="content4-title">5、保持积极心态</div>
            <div class="content4-content">
                老年人要学会自我心理宽慰，面对生活中的困难和挑战时保持乐观的心态，积极寻求解决问题的方法。
                <br><br>
                保持学习和好奇心：保持对新事物的好奇心和求知欲，不断学习新知识、新技能。可以通过阅读书籍、观看纪录片、参加兴趣班等方式来拓宽视野，增加生活的乐趣和动力。
                <br>接受并适应变化：随着年龄的增长，生活中难免会遇到各种变化和挑战。老年人要学会接受并适应这些变化，以更加灵活和开放的心态面对未来的生活。同时，也要相信自己的能力和智慧，勇敢地迎接新的挑战和机遇。
            </div>
        </div>
        <div class="content5">
            <div class="content5-title">6、寻求社会支持和帮助</div>
            <div class="content5-content">
                政府和社会各界应加大对老年人心理健康服务的投入，完善相关政策措施，为老年人提供更多的心理关爱和支持。
                <br>当感到孤独、焦虑或无助时，不要犹豫寻求家人、朋友或专业机构的支持和帮助。与他人分享自己的感受和困扰，能够获得情感上的支持和理解，从而减轻心理负担。
            </div>
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
export default {

}
</script>

<style scoped>
.body {
    width: 80vw;
    margin: 0 auto;
}

.nav {
    margin-top: 2vw;
}

.nav a {
    color: #403f3f;
}

.nav a:hover {
    color: rgb(161, 82, 236);
}

.title {
    height: 10vh;
    line-height: 10vh;
    font-size: 2vw;
    font-weight: bold;
    text-align: center;
}

.content {
    font-size: 1.2vw;
    line-height: 4.5vh;
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

.content1-title2 {
    font-size: 1.2vw;
    font-weight: bold;
    margin-left: 45vw;
    margin-top: 3vw;
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
    margin-bottom: 3vw;
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
    margin-top: 3vw;
    line-height: 4.5vh;
    margin-bottom: 3vw;
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

.footer a {
    margin: 1vw 2vw;
    color: #000;
}

.footer a:hover {
    color: blue;
}
</style>