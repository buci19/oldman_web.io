<!-- 健康知识库-营养饮食 -->
<template>
    <div class="body">
        <div class="nav">
            <router-link title="返回首页" :to="{ path: '/oldman/index' }">首页</router-link>&nbsp;&nbsp;>&nbsp;&nbsp;
            <router-link title="返回健康知识库" :to="{ path: '/oldman/Hknowledge' }">健康知识库</router-link>&nbsp;&nbsp;>&nbsp;&nbsp;
            <router-link :to="{ path: '/oldman/HknowHealthyEat' }">营养饮食</router-link>
        </div>
        <div class="title">
            合理膳食，均衡营养
        </div>
        <div class="content">
            膳食营养是保证老年人健康的基础。与年轻时相比，老年人身体机能有不少的变化，如：合成代谢降低；肌肉量减少，骨骼的矿物质减少、消化酶、消化液分泌减少导致消化功能减退。
        </div>
        <div class="content1">
            <div class="content1-img"><img src="@/assets/images/HknowHealthyEat6.jpg" alt=""></div>
            <div class="content1-title">1、食物多样化，主食应粗细搭配</div>
            <div class="content1-content">
                每天食物应包括五大类：谷薯类、鱼禽蛋肉类、豆类奶类、蔬菜水果类和油脂，最好能吃12种以上的食物，注意荤素搭配。每天主食摄入量约200克～300克，如果消化功能较好建议适当吃些全谷物食品或粗粮。
            </div>
            <div class="content1-title2">2、常吃鱼、禽、蛋和瘦肉类，保证优质蛋白质供应</div>
            <div class="content1-content">
                动物食物是优质蛋白的重要来源，后者是维护正常免疫所必需的营养。建议每天吃鱼类等水产食物40克～75克，蛋类40克～50克，禽畜肉40克～75克。
            </div>
        </div>
        <div class="content3">
            <div class="content3-title">3、适量摄入奶类、大豆及其制品</div>
            <div class="content3-content">
                建议每天喝250毫升～300毫升鲜牛奶或相当量的奶制品。对乳糖不耐受者，可尝试酸奶等，同时每日应摄入适量的豆制品，如豆浆、豆腐、豆干等。
            </div>
        </div>
        <div class="content2">
            <div class="content2-title">4、摄入足量蔬菜、水果，尽量选择新鲜和当季的品种</div>
            <div class="content2-content">
                建议每天摄入300克～500克蔬菜，其中深色蔬菜占总量的一半以上；水果推荐量为200克左右。糖尿病患者在食用蔬菜水果时需要注意多样化选择、适量摄入、控制糖分和碳水化合物含量以及监测血糖变化等方面的问题。每个人的病情和身体状况不同，因此在制定饮食计划时最好咨询医生或营养师的专业意见。
            </div>
            <div class="content2-img"><img src="@/assets/images/HknowHealthyEat7.jpg" alt=""></div>
        </div>
        <div class="content3">
            <div class="content3-title">5、饮食清淡，少油、限盐。</div>
            <div class="content3-content">减少心血管疾病风险：
                清淡饮食有助于降低血脂水平，因为油脂摄入过多是动脉粥样硬化的危险因素之一。老年人通过减少油腻食物的摄入，可以有效预防高脂血症、冠心病等心血管疾病的发生。
                限盐饮食有助于降低高血压的风险。高血压是老年人常见的慢性疾病，而食盐过量是高血压的重要诱因。通过限制食盐摄入，可以维持血压的稳定，减少心脑血管意外的发生。
                <br>预防糖尿病：
                清淡饮食中的低糖、低脂特点有助于预防糖尿病的发生。过多的糖分和脂肪摄入会增加胰岛素分泌负担，长期以往可能导致胰岛功能受损，进而引发糖尿病。
                <br>预防肥胖：
                少油饮食有助于控制总热量摄入，减少脂肪堆积，从而预防肥胖。肥胖是多种慢性疾病的危险因素，包括心血管疾病、糖尿病等。
            </div>
        </div>
        <div class="content4">
            <div class="content4-img"><img src="@/assets/images/HknowHealthyEat5.png" alt=""></div>
            <div class="content4-title">6、摄入充足食物，预防营养缺乏，鼓励老年人与家人共同用餐，愉悦用餐，保障营养需求</div>
            <div class="content4-content">
                一定要经常关注老人的营养摄入，对于食物摄入不足或怀疑有营养不良的长者，应寻求医生帮助，必要时在医生指导下进行适当的营养支持治疗，及时改善营养状况，减少疾病或并发症发生的风险。
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

.content1-title2 {
    font-size: 1.2vw;
    font-weight: bold;
    margin-left: 45vw;
    margin-top: 3vw;
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