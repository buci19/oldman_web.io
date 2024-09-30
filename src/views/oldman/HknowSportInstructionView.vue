<!-- 健康知识库-运动指导 -->
<template>
    <div class="body">
        <div class="nav">
            <router-link title="返回首页" :to="{ path: '/oldman/index' }">首页</router-link>&nbsp;&nbsp;>&nbsp;&nbsp;
            <router-link title="返回健康知识库" :to="{ path: '/oldman/Hknowledge' }">健康知识库</router-link>&nbsp;&nbsp;>&nbsp;&nbsp;
            <router-link :to="{ path: '/oldman/HknowSportInstruction' }">运动指导</router-link>
        </div>
        <div class="title">
            老年人运动指南：锻炼身体，永远都不迟
        </div>
        <div class="content">
            锻炼身体，对任何年龄段的人都很重要。但是，当你渐渐变老的时候，是否坚持锻炼可能意味着是独立生活还是不得不受别人照顾的区别。
            老了，锻炼的方式和年轻人的就不再相同了。健康专家认为，对于 65 岁以上的老年人，要使用不同的锻炼方式，还要遵守特别的注意事项。
        </div>
        <div class="content1">
            <div class="content1-img"><img src="@/assets/images/HknowSportInstruction3.jpg" alt=""></div>
            <div class="content1-title">1、平衡训练</div>
            <div class="content1-content">
                根据统计，摔伤是 65 岁以上成年人的最主要受伤方式。通过训练腿部肌肉，可以预防摔倒、让家人更放心。
                <br><br>单脚站立：双手叉腰或自然下垂，闭眼或睁眼，单脚站立，尽量保持身体稳定。
                <br>直线行走：在地面上画一条直线，沿着直线行走，尽量保持脚步稳定且直线行走。
                <br>平衡板或平衡垫上站立：站在平衡板或平衡垫上，尽量保持身体稳定，逐步延长时间。
            </div>
        </div>
        <div class="content2">
            <div class="content2-title">2、柔韧训练</div>
            <div class="content2-content">
                瑜伽训练：
                瑜伽体式要求身体在保持平衡的同时进行伸展和扭转，有助于增加关节的灵活性和活动范围。
                通过练习，可以加强核心肌群和四肢的力量，提高身体的稳定性。
                瑜伽的呼吸练习有助于增强呼吸系统的功能，提高肺活量，同时也有助于放松身心。
                瑜伽的冥想和放松环节可以帮助老年人缓解焦虑、抑郁等负面情绪，提升心理健康水平。
                <br>
                太极训练：
                太极动作要求身体的各个部位相互配合，协调一致，有助于提高身体的平衡能力。
                通过缓慢而有力的动作，太极可以增强腿部、腰部和核心肌群的力量。
                太极的深呼吸和缓慢动作有助于改善心肺功能，提高身体的耐力。
            </div>
            <div class="content2-img"><img src="@/assets/images/HknowSportInstruction4.jpg" alt=""></div>
        </div>
        <div class="content3">
            <div class="content3-title">3、心肺训练</div>
            <div class="content3-content">心肺训练能够显著提高老年人的心肺功能，包括心脏的泵血能力和肺部的气体交换能力。
                通过心肺训练，老年人可以增强身体的耐力，使他们在日常生活中更加轻松应对各种体力活动。
                心肺训练有助于降低血压、改善血脂水平，从而降低心血管疾病和呼吸系统疾病的风险。
                良好的心肺功能使老年人能够参与更多的社交和娱乐活动，提升他们的生活质量和幸福感。
                <br>慢跑：慢跑是一种简单有效的有氧运动方式，适合身体状况较好的老年人。建议从短距离、低强度开始，逐渐增加距离和速度。
                <br>散步：散步是老年人最容易接受的有氧运动之一，可以在户外或室内进行。建议每天保持一定的散步时间，如30分钟至1小时。
                <br>骑车：骑自行车也是一种适合老年人的有氧运动方式，可以锻炼心肺功能并增强下肢力量。
                <br>游泳：游泳是一项全身性的有氧运动，对关节的冲击力较小，适合有关节问题的老年人。

            </div>
        </div>
        <div class="content4">
            <div class="content4-img"><img src="@/assets/images/HknowSportInstruction2.jpg" alt=""></div>
            <div class="content4-title">4、力量训练</div>
            <div class="content4-content">
                从 40 岁起，我们的肌肉每年会萎缩 1%，而到了 60 岁之后，达到 1.5% 以上，再往后，还会更多。这让老年人变得虚弱、反应变慢，体力和骨密度也会随之下降。
                <br><br>
                自重训练：利用自身重量进行训练，如深蹲、俯卧撑（墙壁俯卧撑、跪姿俯卧撑等降低难度的版本）、仰卧起坐等。这些训练方式简单易行，适合老年人初学者。
                <br>器械训练：老年人可以使用哑铃、弹力带等简单的器械进行力量训练。这些器械便于携带和使用，可以根据个人情况调整训练强度和难度。
            </div>
        </div>
        <div class="content2">
            <div class="content2-title">5、运动时间</div>
            <div class="content2-content">最佳运动时间段：
                早晨时段（日出后至上午10点前），适合进行散步、慢跑等轻度运动；下午时段（下午4点至6点），适合太极拳、瑜伽等轻度至中度运动；黄昏时段（傍晚至晚餐前）中医认为黄昏时分（大约下午4点到6点）是人体气血最为旺盛的时候，此时进行适量的户外活动，有助于气血流通，增强体质。
                <br>每次运动时间：老年人每次运动时间不宜过长，建议控制在30分钟至1小时之间。可以根据个人身体状况和运动强度适当调整。
                <br>运动频率：每日可以活动2-3次，但应确保每次运动之间有足够的休息时间，避免过度疲劳。
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