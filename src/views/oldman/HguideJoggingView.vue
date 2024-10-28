<!-- 健康指导-慢跑 -->
<template>
    <div class="body">
        <div class="header">
            <router-link :to="{ path: '/oldman/Healthyguide' }">
                <div class="return">
                    <img src="@/assets/images/return.png" alt="">
                    <div title="返回健康指导">返回</div>
                </div>
            </router-link>
            <h1>慢跑教学</h1>
        </div>
        <div class="content">
            <div class=" content-video">
                <video class="video" src="@/assets/videos/Healthy7jogging.mp4" controls></video>
            </div>
            <div class="content-text">
                <div class="Ctext-header">简介</div>
                <div class="Ctext-title">
                    慢跑的好处
                </div>
                <div class="Ctext-content">
                    <br>提高免疫力：慢跑是一种安全且有效的提高免疫力的运动方式，尤其适合年老体弱或有慢性疾病的人群。首先，慢跑能够减轻心理压力，从而有助于提高免疫系统的功能。当人们处于紧张或压力状态时，免疫系统的效能会降低，而慢跑作为一种轻松的有氧运动，可以帮助放松紧张情绪，减轻心理负担。其次，慢跑还能加速新陈代谢，促进体内毒素的排出，这也有助于提高免疫力。总体来说，慢跑不仅安全，还能在多个方面提高免疫力，是一种非常推荐的运动方式。
                    <br><br>提高生活品质：提高生活品质的关键在于拥有健康的身体，而慢跑是促进身体健康的有效途径。慢跑不仅有助于增强心肺功能，还能缓解压力和焦虑，从而提升整体生活质量。对于各个年龄段的人来说，包括老年人，慢跑都是一个安全且有效的锻炼方式。在进行慢跑时，动作应自然放松，呼吸深长而有节奏，避免憋气。通过持续的慢跑锻炼，人们可以逐渐增加跑步距离，从起初的少量跑步或隔天跑一次，逐渐增加至每天跑3000至4000米。
                    <br><br>提高心肺功能：慢跑是一种有效的提高心肺功能的方式。首先，慢跑时需要大量吸入氧气，这有助于锻炼肺部，增加肺活量。其次，慢跑还能增强心肌，具有锻炼心脏的作用。长期坚持慢跑的人，心肺功能会有所提高，因为慢跑的时候会呼吸更多的氧气，毛细血管张开，新陈代谢的速率提高，通过排汗的方式将身体的废物和毒素排出体外，人就会感到更加的轻便。
                </div>
                <div class="Ctext-middle">相关推荐</div>
                <div class="Ctext-middle-list">
                    <router-link :to="{ path: '/oldman/HguideSwim' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HguideSwim.png" alt="">
                            </div>
                            <div class="Cinner-text">
                                <div class="Cinner-title">游泳</div>
                                <div class="Cinner-introduce">
                                    游泳是一种出色的锻炼方式，尤其对于增强心肌功能。当人们在水中活动时，所有器官都会参与，导致能量消耗增加和血液循环加速。这种增加的血流速度对心脏产生额外的负荷，使其跳动更快、收缩更强。长期游泳的人，其心脏功能明显优于常人，心率更低，每搏输出量更高。此外，游泳还有助于增强血管壁的厚度和弹性，进一步提高心脏的每搏输出量。因此，游泳是一种非常有效的锻炼心脏的方法。
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <router-link :to="{ path: '/oldman/HguideBaduanjin' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HguideBaduanjin.jpg" alt="">
                            </div>
                            <div class="Cinner-text">
                                <div class="Cinner-title">八段锦</div>
                                <div class="Cinner-introduce">
                                    八段锦是一种古老的健身功法，包含了八个小组动作，涵盖身体的各个部位，可以锻炼身体。八段锦中的许多动作都需要进行旋转、舒展和伸展，有助于提高身体的柔韧性。这些动作还可以放松肌肉、加强关节，并增强身体的协调性和平衡能力。
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <router-link :to="{ path: '/oldman/HguideAerobics' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowSportInstruction2.jpg" alt="">
                            </div>
                            <div class="Cinner-text">
                                <div class="Cinner-title">健身操</div>
                                <div class="Cinner-introduce">
                                    通过健美操的锻炼达到改善体质、增进健康、塑造体型、控制体重、愉悦精神、陶冶情操等“三健”目的。社会封誉健美操的桂冠很多：健美操、健美舞、健身操、健身舞、健康舞、有氧操、有氧舞蹈、有氧运动等。
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <router-link :to="{ path: '/oldman/HguideTaichi' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HguideTaichi.jpg" alt="">
                            </div>
                            <div class="Cinner-text">
                                <div class="Cinner-title">太极拳</div>
                                <div class="Cinner-introduce">
                                    慢性支气管炎多发生在中年人年龄组，病程缓慢，多数隐潜起病，初起在寒冷季节发病。出现咳嗽及咳痰的症状，尤清晨最明显，痰呈白色粘液泡沫状，粘稠不易咯出，在感染或受寒后则症状迅速加剧，痰量增多，粘度增大或呈黄色脓性。有时咳痰中可带血，随着病情发展，终年均有咳嗽、咳痰，而以秋冬为剧。
                                    本病早期多无特殊体征，大多数在肺底部可听到湿性和干性罗音，有时咳嗽或咳痰后消失，长期发作者可导致肺气肿。
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <router-link :to="{ path: '/oldman/HguideSoftball' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HguideSoftball.png" alt="">
                            </div>
                            <div class="Cinner-text">
                                <div class="Cinner-title">柔力球</div>
                                <div class="Cinner-introduce">
                                    太极柔力球运动是一种全身性的运动，它可以使颈、肩、腰、腿得到均衡全面的发展。特别是由于圆形动作的变化比较复杂，随机多样，对训练中枢神经系统机能和发展多向思维都具有良好的作用。正确的弧形引化动作要求以肩为轴，肩、肘、腕保持一个弧形，因此整个上肢都不是紧张的，这有助于静脉血的回流，保护了心脏的安全。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.body {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
}

/* 导航栏 */
.header {
    width: 100vw;
    height: 9vh;
    background: #fff;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1000;
}

.header .return {
    width: 5vw;
    display: flex;
    align-items: center;
    margin-left: 1vw;
    font-size: 1vw;
    color: #666565;
}

.header .return:hover {
    color: rgb(161, 82, 236);

}

.header .return img {
    width: 1vw;
}

.header-logo {
    margin-left: 1vw;
}

.header-title {
    font-size: 1.5vw;
    font-weight: bold;
}


.content {
    width: 100vw;
    height: 91vh;
    margin-top: 9vh;
    overflow-y: hidden;
}

/* 左边视频 */
.content .content-video {
    margin-left: 2vw;
    float: left;
}

.content .video {
    width: 66vw;
    height: 91vh;
}

/* 右边文本 */
.content .content-text {
    height: 91vh;
    background-color: #fff;
    padding: 0 1vw 0 1vw;
    margin-left: 69vw;
    margin-right: 2vw;
    border-radius: 1vh;
}

.content-text .Ctext-header {
    height: 4vh;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1vh;
    font-weight: bold;
}

.content-text .Ctext-title {
    font-size: 24px;
    color: skyblue;
}

.content-text .Ctext-content {
    border-bottom: 1px solid #ccc;
    padding-bottom: 2vh;
    overflow-y: auto;
    height: 40vh;
}

.content-text .Ctext-content::-webkit-scrollbar {
    display: none;
}

.content-text .Ctext-middle-list {
    border-bottom: 1px solid #ccc;
    padding-bottom: 2vh;
    overflow-y: auto;
    height: 35vh;
}

.content-text .Ctext-middle-list::-webkit-scrollbar {
    display: none;
}

.content-text .Ctext-middle {
    margin-top: 1vh;
    font-weight: bold;
}

.content-inner {
    height: 16vh;
    margin-top: 1vw;
    border-radius: 0.5vw;
}

.content-inner:hover {
    background-color: #e7e5e5;
}

.content-inner .Cinner-Images img {
    width: 12vw;
    height: 14vh;
    float: left;
    border-radius: 1vh;
    margin: 1vh 0 1vh 0.5vw;
}

.content-inner .Cinner-text {
    margin: 0 0.5vw 0 13vw;
}

.content-inner .Cinner-title {
    color: skyblue;
    font-size: 1.2vw;
    padding-top: 1vh;
    margin-bottom: 1vh;
}

.content-inner .Cinner-introduce {
    color: #666565;
    font-size: 17px;
    line-height: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 8px;
}

.content-inner .Cinner-introduce:hover {
    color: rgb(147, 172, 241);
}
</style>