<template>
    <div>
        <div class="leftTitle">老年健康促进行动 | 老年健康小知识</div>
        <div class="Sccontent">
            <div>
                <div class="imgTitle">1.三餐规律、控制食量</div>
                <div class="Images"><img src="@/assets/images/HknowHealthyEat1.png" alt=""
                        style="width: 300px; height: auto;">
                </div>
                <div class="imgRight">合理的餐次安排非常重要</div>
                <div class="imgContent">用餐时间应尽量固定，每餐吃到八分饱，细嚼慢咽，这样利于养成良好的生活习惯，切忌饥一顿饱一顿，长期如此不利于健康。最少保证三餐，尽量按照早、中、晚餐2:2:1的热量分配方式;三餐之外，上午或下午可以有个小加餐，如水果、酸奶或坚果等。</div>
            </div>
            <div>
                <div class="imgTitle">2.清淡饮食，少油少盐</div>
                <div class="Images"><img src="@/assets/images/HknowHealthyEat2.png" alt=""
                        style="width: 300px; height: auto;">
                </div>
                <div class="imgRight">增强心肺</div>
                <div class="imgRight">预防骨质疏松</div>
                <div class="imgContent">选择用油少的烹调方式如蒸、煮、炖、焯避免摄入过多的脂肪导致肥胖。少用各种含钠高的酱油料，避免过多的钠摄入引起高血
建议老年人每天用油不超过25克，尽量选择食用植物油，避免动物油。全天用盐不超过5克(大概一啤酒盖)，合并高血压的老人应将盐控制在4克以内。</div>
            </div>
            <div>
                <div class="imgTitle">3.鱼离肉蛋奶不能少，拒绝纯素食</div>
                <div class="Images"><img src="@/assets/images/HknowHealthyEat3.png" alt=""
                        style="width: 300px; height: auto;">
                </div>
                <div class="imgRight">营养充分</div>
                <div class="imgRight">规律用餐</div>
                <div class="imgContent">奶类富含钙，是优质蛋白质和B族维生素的良好来源，每日应摄入300-500ML。(对于乳糖不耐受的人，可多选择舒化奶、酸奶或奶酪等发酵乳制品。)同时每日应摄入适量的豆制品，如豆浆、豆腐、豆干等。鱼、禽、蛋类和瘦肉摄入要适量，平均每天120~200G;每周最好吃鱼2次或300~500G，蛋类300~350G，畜禽肉300~500G。优先选择鱼，少吃肥肉、烟熏和腌制肉制品。</div>
            </div>
            <div>
                <div class="imgTitle">4.主食多样化</div>
                <div class="Images"><img src="@/assets/images/HknowHealthyEat4.png" alt=""
                        style="width: 300px; height: auto;">
                </div>
                <div class="imgRight">营养充分</div>
                <div class="imgRight">规律用餐</div>
                <div class="imgContent">精细粮食与杂粮谷物搭配，如玉米面、养麦燕麦等，由于它们体积大，饱腹感强，可能对控制血糖、血压和血脂有利。建议:根据身体活动水平不同，男性每日摄入谷类250~300G女性200~250G，其中粗粮摄入量每日50~100G。</div>
            </div>
            <div>
                <div class="imgTitle">5.蔬菜水果不能少</div>
                <div class="Images"><img src="@/assets/images/HknowHealthyEat5.png" alt=""
                        style="width: 300px; height: auto;">
                </div>
                <div class="imgRight">营养充分</div>
                <div class="imgRight">规律用餐</div>
                <div class="imgContent">每日推荐摄入蔬菜300-500G，其中深色蔬菜0深绿色、红色、桔红色、紫红色蔬菜)要占一半;可适量选用含粗纤维多的蔬菜。紫色的富含花青素，如茄子:绿色的富含叶绿素、叶黄素如菠菜;黄色的富含B-胡萝卜素，如柑桔;红色的富含番茄红素，如西红柿。
建议每天食用200-350克的新鲜水果。建议两餐之间食用。如果患有糖尿病等疾病，则需根据血糖情况，酌情选择。</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
}
</script>

<style scoped>

.Sccontent {
    width: 78vw;
    height: 80vh;
    padding-top: 20vh;
    padding-left: 20vw;
}



.leftTitle {
    width: 100vw;
    height:10vh;
    line-height: 10vh;
    background-color: #fff;
    position: fixed;
    z-index: 1000;
    /* float: left; */
    font-size: 2vw;
    text-align: center;
    margin-top: 9.05vh;
}


.Sccontent>div {
    padding: 3vh;
}

.Sccontent>div {
    float: left;
    margin-bottom: 10vh;
}

.imgTitle {
    width: 10vw;
    height: 4.5vh;
    font-size: 2vw;
    font-weight: bold;
    border-bottom: 1vh solid #96a5be;
    color: #000;
}

img {
    max-width: 100%;
    /* 确保图片不会超出容器宽度 */
    height: auto;
    /* 保持图片的原始宽高比 */
}

.Images {
    float: left;
}

.imgRight {
    width: 60vw;
    color: red;
    font-size: 3vw;
    text-align: center;
    margin: 4vh auto;
}


.imgContent {
    float: left;
    font-size: 1.5vw;
}
</style>