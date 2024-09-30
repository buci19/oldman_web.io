<!-- 健康知识库-作息指南 -->
<template>
    <div class="body">
        <div class="nav">
            <router-link title="返回首页" :to="{ path: '/oldman/index' }">首页</router-link>&nbsp;&nbsp;>&nbsp;&nbsp;
            <router-link title="返回健康知识库" :to="{ path: '/oldman/Hknowledge' }">健康知识库</router-link>&nbsp;&nbsp;>&nbsp;&nbsp;
            <router-link :to="{ path: '/oldman/HknowRest' }">作息指南</router-link>
        </div>
        <div class="title">
            老年人的健康作息指南
        </div>
        <div class="content">
            很多老年人刚退休，一时调整不过来作息时间，也有些老年人一直就没有良好的作息生活，不好的生活方式可能导致身体机能失衡，各种“不舒服”。
            因此，我们需要寻找一种科学合理的作息时间表来改善生活品质，维护身体健康。所以，我为老年朋友们制作一份作息时间表，可以按照此时间表进行培养规律的生活习惯，执行过程中逐渐按自己的喜好，调整活动内容，但要保持规律。
        </div>
        <div class="content1">
            <div class="content1-img"><img src="@/assets/images/HknowRest1.jpg" alt=""></div>
            <div class="content1-title">1、早晨起床与活动</div>
            <div class="content1-content">
                起床时间：建议老年人在早晨5点至7点之间起床，这个时间段太阳初升，有助于调节生物钟。起床后，可以适量饮用一杯温水，有助于清理肠道和补充水分。
                <br>排便与洗漱：起床后进行排便，然后洗漱，保持个人卫生。
                <br>早餐：7点至9点是早餐的最佳时间，早餐应营养全面，包含蛋白质、碳水化合物、维生素等，如鸡蛋、牛奶、全麦面包、水果等。
            </div>
        </div>
        <div class="content2">
            <div class="content2-title">2、上午活动</div>
            <div class="content2-content">
                轻度运动：早餐后，可以进行一些轻度运动，如散步、太极拳、八段锦等，时间控制在30分钟左右，避免剧烈运动。
                <br>脑力活动：上午10点左右，可以进行一些脑力活动，如读书看报、背诵诗词等，有助于保持大脑活跃。
                <br>加餐：如果感到饥饿，可以适当吃一些坚果或水果作为加餐。
            </div>
            <div class="content2-img"><img src="@/assets/images/HknowRest2.jpg" alt=""></div>
        </div>
        <div class="content3">
            <div class="content3-title">3、午餐与午休</div>
            <div class="content3-content">
                午餐：11点至12点是午餐时间，老年人的午餐应该当清淡，种类丰富，营养搭配要合理。建议以一周为一个时间段写菜谱，将下一周的菜谱写出来，可以一目了然知道营养是否均衡，也可以根据上周食谱，对下周的进行调整。
                <br>午休：午餐后，可以适当休息半小时至一小时，有助于恢复精力。午休时间不宜过长，以免影响夜间睡眠。
            </div>
        </div>
        <div class="content4">
            <div class="content4-img"><img src="@/assets/images/HknowRest3.jpg" alt=""></div>
            <div class="content4-title">4、下午活动</div>
            <div class="content4-content">
                室内活动：下午时间充裕，2点到4点是我们大脑活跃的时间段，可以培养一些兴趣爱好，如绘画、书法、园艺等，有助于陶冶情操和保持心情愉悦。
                <br>户外活动：下午4点至5点是户外活动的最佳时间，此时阳光适中，可以进行散步、晒太阳等活动。
                <br>休息时间：傍晚时间，可以休息一下，多做些放松，看看自己养的花草，做一些简单的家务，逗逗宠物，放空一下大脑。
            </div>
        </div>
        <div class="content5">
            <div class="content5-title">5、晚餐与睡眠</div>
            <div class="content5-content">
                晚餐：晚上6点至8点是晚餐时间，老年人身体机能下降，在晚上尤其不要大鱼大肉，五分饱七分饱自己按情况掌握就好。以好消化，清淡为主。
                <br>餐后活动：晚餐后与家人一起动手收拾碗筷，也是帮助消化晚餐的动作。也可以进行一些轻松的活动，如散步、看电视等，避免立即躺下休息。
                <br>洗漱与准备入睡：晚上9点左右开始洗漱，准备入睡。睡前可以用热水泡脚，不宜过烫，泡脚后进行10分钟左右的搓脚按摩，也是放松大脑的动作，可以让睡眠进入更快，得到更高质量的休息。
                <br>睡眠时间：建议老年人每天保持7至8小时的睡眠时间，尽量在晚上10点前入睡，避免熬夜。
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