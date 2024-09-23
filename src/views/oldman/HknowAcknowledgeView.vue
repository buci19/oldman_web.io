<template>
    <div>
        <div class="leftTitle">老年健康促进行动 | 老年健康小知识</div>
        <div class="Sccontent">
            <div>
                <div class="imgTitle">1.睡眠充足</div>
                <div class="Images"><img src="@/assets/images/HknowAcknowledge1.png" alt=""
                        style="width: 300px; height: auto;">
                </div>
                <div class="imgRight">精神饱满</div>
                <div class="imgRight">有精气神</div>
                <div class="imgContent">每天的睡眠时间尽量保持在6.5~7.5个小时左右，为了方便入睡，老人可以在睡前一小时关闭电子设备</div>
            </div>
            <div>
                <div class="imgTitle">2.多做运动</div>
                <div class="Images"><img src="@/assets/images/HknowAcknowledge2.png" alt=""
                        style="width: 300px; height: auto;">
                </div>
                <div class="imgRight">增强心肺</div>
                <div class="imgRight">预防骨质疏松</div>
                <div class="imgContent">平时可以快走运动，平均每分钟走120-140步，快走过程中要抬头挺胸、甩开手臂，节奏注意呼吸</div>
            </div>
            <div>
                <div class="imgTitle">3.饮食健康</div>
                <div class="Images"><img src="@/assets/images/HknowAcknowledge3.png" alt=""
                        style="width: 300px; height: auto;">
                </div>
                <div class="imgRight">营养充分</div>
                <div class="imgRight">规律用餐</div>
                <div class="imgContent">平时一定要多注重营养均衡，多吃一些富含膳食纤维、蛋白质的食物，如:豆浆、牛肉、鸡蛋等;避免辛辣、高糖高盐类的食物，如:烤串、蛋糕等</div>
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