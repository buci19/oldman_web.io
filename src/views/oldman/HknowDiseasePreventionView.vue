<!-- 健康知识库-疾病预防 -->
<template>
    <div class="body">
        <div class="nav">
            <router-link title="返回首页" :to="{ path: '/oldman/index' }">首页</router-link>&nbsp;&nbsp;>&nbsp;&nbsp;
            <router-link title="返回健康知识库"
                :to="{ path: '/oldman/Hknowledge' }">健康知识库</router-link>&nbsp;&nbsp;>&nbsp;&nbsp;
            <router-link :to="{ path: '/oldman/HknowDiseasePrevention' }">疾病预防</router-link>
        </div>
        <div class="title">
            预防先行，守护老年人健康
        </div>
        <div class="content">
            老年人是慢性病患病率和发病率最高的人群。患有慢性疾病的老年人，随着年龄增长，免疫机能逐渐衰减，罹患感染性疾病的风险将显著增加。感染这些常见感染性疾病，也可能会影响慢性病的控制。那么，哪些情况下更易“中招”感染性疾病？如何预防？
        </div>
        <div class="content1">
            <div class="content1-img"><img src="@/assets/images/HknowDiseasePrevention3.jpg" alt=""></div>
            <div class="content1-title">1、年龄增长</div>
            <div class="content1-content">
                随着年龄的增长，老年人常常同时存在心脑血管疾病、呼吸系统疾病、糖尿病等慢性疾病，罹患感染性疾病如流感、带状疱疹、肺炎球菌性疾病等风险显著增加。
                <br>以带状疱疹（民间俗称“蛇缠腰”）为例，年龄是其最重要的危险因素，50岁以后发病率显著上升。
            </div>
            <div class="content1-title2">2、了解常见老年病</div>
            <div class="content1-content">
                了解高血压、糖尿病、冠心病、骨质疏松等常见老年病的症状、预防方法和治疗方法。
            </div>
        </div>
        <div class="content2">
            <div class="content2-title">3、基础预防</div>
            <div class="content2-content">
                感染性疾病的基础预防以增强抵抗力为主。老年人要养成良好的生活习惯，比如规律作息、睡眠充足、劳逸结合、积极乐观、心情愉悦、均衡饮食、加强营养、适度运动等。
                <br>
                在医生指导下合理用药，避免滥用药物或随意停药。避免不良习惯，如长时间久坐、熬夜、过度劳累等，这些不良习惯会增加患病风险。
            </div>
            <div class="content2-img"><img src="@/assets/images/HknowDiseasePrevention2.jpg" alt=""></div>
        </div>
        <div class="content3">
            <div class="content3-title">4、接种疫苗</div>
            <div class="content3-content">
                疫苗是预防疾病的有效手段。对于老年人而言，由于免疫力相对较弱，更容易受到各种病原体的侵袭。接种疫苗可以显著降低老年人患病的风险，尤其是针对那些传染性强、危害性大的疾病，如流感、肺炎等。通过接种疫苗，老年人的身体能够提前产生免疫力，从而在病原体入侵时迅速作出反应，有效抵御疾病的侵袭。
                接种疫苗是最有效、可行的预防感染性疾病的手段，“打疫苗不只是小孩子的事”。
                <br>《我国老年人健康防护倡议》提出，老年人要增强疫苗接种预防疾病意识，主动接种流感疫苗、肺炎链球菌疫苗和带状疱疹疫苗。
                老年人接种疫苗需要在专业医生指导下，综合考虑自身身体状况，重点把握疫苗的适用年龄、保护效力、接种禁忌三大“关键词”，选择适合自己的疫苗。

            </div>
        </div>
        <div class="content4">
            <div class="content4-img"><img src="@/assets/images/HknowDiseasePrevention1.jpg" alt=""></div>
            <div class="content4-title">5、定期体检</div>
            <div class="content4-content">
                早期发现疾病：
                定期体检可以帮助老年人早期发现潜在的健康问题，包括高血压、糖尿病、心脏病、癌症等慢性疾病。
                这些疾病在初期往往没有明显的症状，但如果不及时治疗，可能会逐渐恶化，甚至危及生命。通过体检，可以及时发现这些疾病的迹象，从而采取有效的治疗措施，避免病情恶化。
                <br><br><br>制定个性化健康管理计划：
                根据体检结果，医生可以为老年人制定个性化的健康管理计划。这个计划可能包括饮食调整、运动建议、药物治疗、心理干预等多个方面。通过遵循这个计划，老年人可以更好地管理自己的健康，预防疾病的发生和发展。
            </div>
        </div>
        <div class="content2">
            <div class="content2-content">
                提高生活质量：
                通过定期体检和健康管理，老年人可以保持较好的身体状态和心理状态，从而提高生活质量。他们可以更好地参与社会活动、享受家庭生活、保持积极的心态和乐观的情绪。
                <br>减轻经济负担：
                虽然体检需要一定的费用，但相比于疾病发生后需要承担的高额医疗费用和长期治疗费用，定期体检的费用是微不足道的。通过早期发现和治疗疾病，可以避免病情恶化导致的更高昂的医疗费用，从而减轻经济负担。
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