<!-- 健康指导-柔力球 -->
<template>
    <div class="body">
        <div class="header">
            <router-link :to="{ path: '/oldman/Healthyguide' }">
                <div class="return">
                    <img src="@/assets/images/return.png" alt="">
                    <div title="返回健康指导">返回</div>
                </div>
            </router-link>
            <h1>柔力球教学</h1>
        </div>
        <div class="content">
            <div class=" content-video">
                <video class="video" src="@/assets/videos/Healthy9softball.mp4" controls></video>
            </div>
            <div class="content-text">
                <div class="Ctext-header">简介</div>
                <div class="Ctext-title">
                    柔力球的好处
                </div>
                <div class="Ctext-content">
                    <br>1.‌改善形象和提升能力‌：柔力球能够改善个人形象，提升个人能力，驱除忧虑，焕发精神。
                    <br><br>‌2.提高协调性和柔韧性‌：通过手、腕、手臂和身体的协调运动，柔力球有助于培养身体的柔韧性、平衡感和协调性。
                    <br><br>‌3.提高身体协调性和肌肉控制能力‌：柔力球运动可以提高身体的协调性和肌肉控制能力，增强记忆力。
                    <br><br>‌4.全身性锻炼‌：柔力球是一种全身性的运动，可以使颈、肩、腰、腿等身体各部位得到均衡全面的锻炼。
                    <br><br>‌5.增加肌肉耐力和提高柔韧度‌：柔力球能够有效增加肌肉耐力，提高身体柔韧度，延缓骨质疏松。
                    <br><br>‌6.促进全身协调和肌肉控制‌：柔力球运动可以促进全身的协调和肌肉控制性能，增加通气功能，使血流加速，增进肺泡的换气功能。
                    <br><br>‌7.需注意适度，避免受伤‌：虽然柔力球有许多好处，但需要注意适度，避免过度运动导致受伤。
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