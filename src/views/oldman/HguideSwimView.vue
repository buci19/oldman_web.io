<!-- 健康指导-游泳 -->
<template>
    <div class="body">
        <div class="header">
            <router-link :to="{ path: '/oldman/Healthyguide' }">
                <div class="return">
                    <img src="@/assets/images/return.png" alt="">
                    <div title="返回健康指导">返回</div>
                </div>
            </router-link>
            <h1>游泳教学</h1>
        </div>
        <div class="content">
            <div class=" content-video">
                <video class="video" src="@/assets/videos/Healthy4swim.mp4" controls></video>
            </div>
            <div class="content-text">
                <div class="Ctext-header">简介</div>
                <div class="Ctext-title">
                    游泳的好处
                </div>
                <div class="Ctext-content">
                    <br>改善心血管功能。水的低温刺激不仅可使血管发生收缩和舒张变化，起到锻炼血管的作用，增强血管的舒缩性;还可使新陈代谢加快，促进血液循环;增强心肌收缩力。水中的静水压力作用于体表，中心血容量增加，促使大量的血液回流到心脏，心脏再把大量的血液输送到全身，从而增强了心肌功能。
                    <br><br>增强肺功能。老年人在水中，呼吸肌的舒缩功能受到限制，必须加深呼吸，才能完成呼吸动作，从而使呼吸肌得到锻炼，增加了肺活量。游泳促使人呼吸肌发达，胸围增大，肺活量增加，而且吸气时肺泡开放更多，换气顺畅，对健康极为有利。
                    <br><br>增强免疫力。游泳池的水温常为26度到28度，在水中浸泡散热快，耗能大。为尽快补充身体散发的热量，以供冷热平衡的需要，神经系统便快速做出反应，使人体新陈代谢加快，增强人体对外界的适应能力，抵御寒冷。经常参加冬泳的老年人，由于体温调节功能改善，就不容易伤风感冒，还能提高人体内分泌功能，使脑垂体功能增加，从而提高对疾病的抵抗力和免疫力。
                    <br><br>游泳虽然有益健康，但一定要把握好量，尤其是老年人，身体本就比较弱。游泳前一定要做好热身，不能直接下水，这样容易在水中抽筋，造成意外事故。若水性不是特别好，下水一定要带上游泳圈，不能逞强随意下水，万一溺水，可能会威胁生命。
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