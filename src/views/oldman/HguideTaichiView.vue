<!-- 健康指导-太极 -->
<template>
    <div class="body">
        <div class="header">
            <router-link :to="{ path: '/oldman/Healthyguide' }">
                <div class="return">
                    <img src="@/assets/images/return.png" alt="">
                    <div title="返回健康指导">返回</div>
                </div>
            </router-link>
            <h1>太极拳教学</h1>
        </div>
        <div class="content">
            <div class=" content-video">
                <video class="video" src="@/assets/videos/Healthy5taichi.mp4" controls></video>
            </div>
            <div class="content-text">
                <div class="Ctext-header">简介</div>
                <div class="Ctext-title">
                    打太极的好处
                </div>
                <div class="Ctext-content">
                    <br>修养身心：
                    太极拳是一种修养身心的优秀方式。在练习过程中，要求心静用意，消除杂念，使精神集中。这种专注的状态，加上太极拳的刚柔并重和呼吸调协，使得练习者在结束后感到轻松、压力得到缓解，情绪稳定。此外，太极拳的套路练习强调顺其自然，体会和感知自己的身体，不违反自然和人体规律，这样在循序渐进中增强能力、提升智慧。
                    <br><br>提高心肺功能：
                    打太极拳是一种有效的提高心肺功能的方法。在练习过程中，通过采用深、细、长、缓、匀的腹式呼吸方式，可以增加胸腔的容气量，进而提高吸氧呼碳的次数，确保气体充分交换，从而提高各器官的获氧量。这种呼吸方式不仅适用于年轻人，对于心肺功能较差的老年人也特别有益，有助于增强心肺功能和提高免疫力。
                    <br><br>改善神经系统：
                    太极拳对神经系统有显著的改善作用。神经系统负责调节全身各器官的功能活动，确保人体内部的完整统一，以适应外部环境的变化。太极拳通过意念、呼吸与动作的完美配合，能够促进大脑神经细胞的功能完善。这种协调不仅有助于兴奋和抑制过程的平衡，对于精神创伤和神经类疾病如神经衰弱、失眠和高血压也有很好的防治效果。此外，太极拳还有助于放松紧张或僵硬的神经系统，明显缓解头晕眼花等症状。
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