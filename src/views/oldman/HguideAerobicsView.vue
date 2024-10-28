<!-- 健康指导-健身操 -->
<template>
    <div class="body">
        <div class="header">
            <router-link :to="{ path: '/oldman/Healthyguide' }">
                <div class="return">
                    <img src="@/assets/images/return.png" alt="">
                    <div title="返回健康指导">返回</div>
                </div>
            </router-link>
            <h1>健身操教学</h1>
        </div>
        <div class="content">
            <div class=" content-video">
                <video class="video" src="@/assets/videos/Healthy6aerobics.mp4" controls></video>
            </div>
            <div class="content-text">
                <div class="Ctext-header">简介</div>
                <div class="Ctext-title">
                    健身操的好处
                </div>
                <div class="Ctext-content">
                    <br>预防骨质疏松：跳健身操是预防骨质疏松的有效方法。中老年健身操特别针对平时不易得到锻炼的肌肉和其他部位，提供全面的身体活动。这种锻炼不仅增强肌肉力量，还能减缓骨质疏松的进展。特别是在做操过程中，如伸臂、屈腿、摆髋和耸肩等动作，不仅锻炼了全身肌肉，还活动了各个关节。这种综合性的锻炼方式有助于强化骨骼，减少骨折的风险。因此，结合适当的负重运动和健身操，可以有效预防骨质疏松。
                    <br><br>预防糖尿病：跳健身操是预防2型糖尿病的有效方法。缺乏运动是导致2型糖尿病发病的关键因素。研究显示，每天进行至少半小时的有氧运动或快步行走可以降低发生2型糖尿病的风险达30%～40%。这种运动方式能够提高胰岛素的敏感性，从而有效地预防糖尿病并改善其症状。
                    <br><br>增加心肺功能：跳健身操能有效增加心肺功能。心肺功能主要涉及心脏和肺部的协同工作，为身体提供充足的氧气并排除二氧化碳。广场舞健身操在跳舞过程中，不仅帮助人们排出二氧化碳并吸入新鲜空气，从而改善心肺功能，还能加速新陈代谢和促进消化。这种持续的锻炼对于中老年人尤其有益，有助于增强免疫能力和延缓衰老。因此，为了保持身体健康，避免疾病，定期进行有氧操锻炼是十分重要的。
                </div>
                <div class="Ctext-middle">相关推荐</div>
                <div class="Ctext-middle-list">
                    <router-link :to="{ path: '/oldman/HguideJogging' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HguideJogging.png" alt="">
                            </div>
                            <div class="Cinner-text">
                                <div class="Cinner-title">慢跑</div>
                                <div class="Cinner-introduce">
                                    慢跑对于保持中老年人良好的心脏功能，防止肺组织弹性衰退，预防肌肉萎缩，防治冠心病、高血压、动脉硬化等，具有积极的作用。同时也必须关注慢跑鞋等一些细节。可加速脂肪消耗达到快速的减肥目的。也可以增强自身体质，提高抵抗力。
                                </div>
                            </div>
                        </div>
                    </router-link>
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