<!-- 健康指导 -->
<template>
    <div class="body">
        <div class="HeaderFather">
            <div class="header">
                <div id="logo">
                    <img src="@/assets/images/logo.png" alt="" style="width: 70px; max-width: 100px;">
                </div>
                <div class="logoContent">老年健康服务平台</div>
                <div class="nav-links">
                    <div class="ai"><router-link :to="{ path: '/Oldman/Aianswer' }" class="ai-inner"><i>AI</i>
                            答疑解惑</router-link></div>
                    <div class="nav-link"><router-link :to="{ path: '/oldman/index' }"
                            class="nav-link-inner">首页</router-link>
                    </div>
                    <div class="nav-link"><router-link :to="{ path: '/oldman/Hknowledge' }"
                            class="nav-link-inner">健康知识库</router-link></div>
                    <div class="nav-link"><router-link :to="{ path: '/oldman/Healthyguide' }"
                            class="nav-link-inner">健康指导</router-link></div>
                    <div class="nav-link"><router-link :to="{path:'/oldman/oldmanTakeOut'}" class="nav-link-inner">智慧养老</router-link></div>

                </div>
                <div class="actions">
                    <div class="login" v-if="!isLoggedIn">
                        <router-link :to="{ path: '/oldman/Login' }" class="login-inner">
                            登录
                        </router-link>
                    </div>
                    <div class="register" v-if="!isLoggedIn">
                        <router-link :to="{ path: '/oldman/Register' }" class="register-inner">
                            免费注册
                        </router-link>
                    </div>
                    <div v-if="isLoggedIn"><img :src="userImg" @click="toggleDropdown" alt=""
                            style="width: 2px; position: relative; left: 10px; cursor: pointer;"></div>
                    <!-- 下拉菜单 -->
                    <div class="dropdown-menu" v-if="showDropdown">
                        <ul>
                            <li @click="userCenter" class="dropdown-item">个人中心</li>
                            <li @click="logout" class="dropdown-item">退出登录</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="content-title">
                健康指导
            </div>
            <ul class="ul1">
                <li>
                    <router-link :to="{ path: '/oldman/HguideHypertension' }">
                        <div class="content-inner">
                            <img src="@/assets/images/HguideHypertension.png" alt="">
                            <div class="Cinner-text">
                                <div class="Cinner-title">高血压</div>
                                <div class="Cinner-introduce">
                                    即血压升高，是血液在流动时对血管壁造成的压力值持续高于正常的现象。根据《中国高血压临床实践指南》，成人高血压的诊断标准是收缩压≥130mmHg和/或舒张压≥80mmHg。高血压的发病原因多为遗传因素和不健康的生活方式，如高盐饮食、过量饮酒、长期精神紧张和体力活动不足等。高血压在5类人群中易发：有家族史的人群；情绪易激动的人群；摄入盐量偏高的人群；嗜酒人群；工作或生活压力大的人群。
                                    高血压的典型症状包括头痛、疲倦或不安、心律失常、心悸耳鸣等。然而，许多高血压患者可能在没有任何症状的情况下已出现其他并发症，如脑卒中、视物模糊、意识丧失、失忆等，所以高血压被称为“无声的杀手”。
                                    对于高血压患者，改善生活方式和药物治疗是最常用的治疗方式。药物治疗的基本原则包括优先使用长效降压药物，控制24小时血压，并适时根据需要调整药物与剂量。如果高血压患者的血压长期得不到控制，可能会导致更严重的并发症，甚至可能导致卒中、脑梗死等致命的结果。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HguideHyperglycemia' }">
                        <div class="content-inner">
                            <img src="@/assets/images/HguideHyperglycemia.png" alt="">
                            <div class="Cinner-text">
                                <div class="Cinner-title">高血糖</div>
                                <div class="Cinner-introduce">
                                    高血糖指的是血液中的葡萄糖含量高于正常值的范围。在临床上空腹血糖正常值为4.4~6.1mmol/L。餐后2小时血糖正常值为≤7.8
                                    mmol/L。如果空腹血糖高于6.1mmol/L，餐后2小时血糖高于7.8mmol/L，均可以称为高血糖。<br>高血糖不是一种疾病的诊断，只是一种血糖监测结果的判定，高血糖不完全等于糖尿病。高血糖可能是由于遗传因素、环境因素等原因导致的。
                                    一般患者可出现可有血糖升高、口渴、多饮、多尿、乏力、体重减轻等症状。长期高血糖还会导致全身微动脉血管病变，可导致相应器官损害，发生糖尿病肾病、糖尿病视网膜病变、糖尿病神经病变、糖尿病足等。高血糖没有传染性，也没有潜伏期。
                                    高血糖在治疗时需要针对病因治疗，一般生理性高血糖不需要特殊治疗。病理性的高血糖需要针对病因进行相应的治疗，而通常在临床上多会采取药物治疗，控制血糖正常。对于因嗜铬细胞瘤、胰高血糖素瘤等疾病引起的高血糖需要手术治疗，切出肿瘤，达到治疗的目的。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HguideBronchitis' }">
                        <div class="content-inner">
                            <img src="@/assets/images/HguideBronchitis.png" alt="">
                            <div class="Cinner-text">
                                <div class="Cinner-title">慢性支气管炎</div>
                                <div class="Cinner-introduce">
                                    慢性支气管炎多发生在中年人年龄组，病程缓慢，多数隐潜起病，初起在寒冷季节发病。出现咳嗽及咳痰的症状，尤清晨最明显，痰呈白色粘液泡沫状，粘稠不易咯出，在感染或受寒后则症状迅速加剧，痰量增多，粘度增大或呈黄色脓性。有时咳痰中可带血，随着病情发展，终年均有咳嗽、咳痰，而以秋冬为剧。
                                    本病早期多无特殊体征，大多数在肺底部可听到湿性和干性罗音，有时咳嗽或咳痰后消失，长期发作者可导致肺气肿。
                                    <br>发病原因
                                    <br>
                                    正常情况下，呼吸道具有完善的防御功能，对吸入的空气可发挥过滤加温和湿化的作用。气道黏膜表面的纤毛运动和咳嗽反射等借此可清除气道中的异物和病原微生物。下呼吸道还存在分泌型IgA，有抗病原微生物的作用，因此下呼吸道一般能保持净化状态。全身或呼吸道局部防御和免疫功能减退（尤其是老年人）则极易罹患慢性支气管炎且反复发作而不愈。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
            <div class="content-title">
                健康运动指导
            </div>
            <ul class="ul2">
                <li>
                    <router-link :to="{ path: '/oldman/HguideJogging' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HguideJogging.png" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">慢跑</div>
                                <div class="Cinner-introduce">
                                    慢跑对于保持中老年人良好的心脏功能，防止肺组织弹性衰退，预防肌肉萎缩，防治冠心病、高血压、动脉硬化等，具有积极的作用。同时也必须关注慢跑鞋等一些细节。可加速脂肪消耗达到快速的减肥目的。也可以增强自身体质，提高抵抗力。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HguideSwim' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HguideSwim.png" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">游泳</div>
                                <div class="Cinner-introduce">
                                    游泳是一种出色的锻炼方式，尤其对于增强心肌功能。当人们在水中活动时，所有器官都会参与，导致能量消耗增加和血液循环加速。这种增加的血流速度对心脏产生额外的负荷，使其跳动更快、收缩更强。长期游泳的人，其心脏功能明显优于常人，心率更低，每搏输出量更高。此外，游泳还有助于增强血管壁的厚度和弹性，进一步提高心脏的每搏输出量。因此，游泳是一种非常有效的锻炼心脏的方法。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HguideBaduanjin' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HguideBaduanjin.jpg" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">八段锦</div>
                                <div class="Cinner-introduce">
                                    八段锦是一种古老的健身功法，包含了八个小组动作，涵盖身体的各个部位，可以锻炼身体。八段锦中的许多动作都需要进行旋转、舒展和伸展，有助于提高身体的柔韧性。这些动作还可以放松肌肉、加强关节，并增强身体的协调性和平衡能力。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HguideAerobics' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowSportInstruction2.jpg" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">健身操</div>
                                <div class="Cinner-introduce">
                                    通过健美操的锻炼达到改善体质、增进健康、塑造体型、控制体重、愉悦精神、陶冶情操等“三健”目的。社会封誉健美操的桂冠很多：健美操、健美舞、健身操、健身舞、健康舞、有氧操、有氧舞蹈、有氧运动等。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HguideTaichi' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HguideTaichi.jpg" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">太极拳</div>
                                <div class="Cinner-introduce">
                                    太极拳吸收了传统医学的经络、俞穴、气血、导引、藏象等理论，符合医理，具有健身性。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HguideSoftball' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HguideSoftball.png" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">柔力球 </div>
                                <div class="Cinner-introduce">
                                    太极柔力球运动是一种全身性的运动，它可以使颈、肩、腰、腿得到均衡全面的发展。特别是由于圆形动作的变化比较复杂，随机多样，对训练中枢神经系统机能和发展多向思维都具有良好的作用。正确的弧形引化动作要求以肩为轴，肩、肘、腕保持一个弧形，因此整个上肢都不是紧张的，这有助于静脉血的回流，保护了心脏的安全。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: false,
            userImg: require('@/assets/images/user.png'), // 确保路径正确
            showDropdown: false, // 控制下拉框显示的状态
        }
    },
    methods: {
        checkLogin() {
            if (localStorage.getItem('token')) {
                this.isLoggedIn = true;
                this.userImg = require('@/assets/images/user.png');
            }
        },
        toggleDropdown() {
            this.showDropdown = !this.showDropdown; // 切换下拉菜单的显示状态
        },
        userCenter() {
            this.$router.replace({ path: '/Oldman/userCenter' });
        },
        logout() {
            localStorage.clear();
            this.$router.replace({ path: '/oldman/Login' });
        }

    },
    created() {
        this.checkLogin(); // 在组件创建时检查登录状态
    }
}


</script>

<style scoped>
.body {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background-color: #d8e5f7;
}

/* 导航栏 */
.HeaderFather {
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #aba8a8;
    background-color: #fff;
}

.header {
    width: 1500px;
    height: 74px;
    font-size: 17px;
    display: flex;
    align-items: center;
    /* border-bottom: 1px solid #716565; */
    background-color: #fff;
    /* position: fixed; */
    z-index: 1000;
    margin: 0 auto;
}

.dropdown-menu {
    position: relative;
    top: 9px;
    left: 6.6px;
    width: 5px;
    height: 10px;
    background-color: #d6e7fb;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    color: white;
    font-size: 16px;
    font-weight: bold;
    line-height: 5px;
    padding-top: 1px;
    text-align: center;

    z-index: 1;
}

.dropdown-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.dropdown-item {
    /* padding: 12px 16px; */
    cursor: pointer;
    transition: background-color 0.3s;
    /* 添加平滑过渡效果 */
}

.dropdown-item:hover {
    background-color: #f1f1f1;
    /* 鼠标悬停时的背景色 */
}

.logoContent {
    font-size: 25px;
    font-weight: bold;
}

#logo {
    margin-left: 20px;
}

.nav-links {
    display: flex;
    align-items: center;
    margin-left: 150px;
}

.header .nav-links .ai {
    width: 104px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 10px;
    background-color: #798bf0;
    float: left;
    color: #fffffffb;
    cursor: pointer;
}

.header .nav-links .ai .ai-inner {
    display: block;
    /* 使router-link充满整个父div */
    width: 100%;
    height: 100%;
    color: inherit;
}

.header .nav-links .ai:hover {
    background-image: linear-gradient(to bottom right, rgb(104, 106, 237), rgb(97, 82, 236), rgb(52, 58, 232));
}

.header .nav-links .nav-link {
    width: 130px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: #8a5b8e;
    margin-left: 15px;
    cursor: pointer;
}

.nav-link-inner,
.ai-inner,
.login-inner,
.register-inner,
.understand-inner {
    display: block;
    /* 使router-link充满整个父div */
    width: 100%;
    height: 100%;
    color: inherit;
}

.header .nav-links .nav-link:hover {
    border-bottom: 6px solid rgb(161, 82, 236);
    color: rgb(161, 82, 236);
}

.header .nav-links .nav-link:nth-child(4) {
    border-bottom: 6px solid rgb(161, 82, 236);
    color: rgb(161, 82, 236);
}

.actions {
    display: flex;
    color: #8a5b8e;
    align-items: center;
    margin-left: 140px;
}

.header .actions .login {
    width: 68px;
    height: 41px;
    line-height: 41px;
    text-align: center;
    border: 1px solid #868282;
    margin-left: 10px;
    border-radius: 28px;
    cursor: pointer;
}

.header .actions .login:hover {
    border: 1px solid #da44eb;
    color: #da44eb;
}

.header .actions .register {
    width: 102px;
    height: 41px;
    line-height: 41px;
    text-align: center;
    background-color: #e334ed;
    margin-left: 16px;
    border-radius: 28px;
    color: #fff;
    cursor: pointer;
}

.header .actions .register:hover {
    background-image: linear-gradient(to bottom right, rgb(195, 54, 220), rgb(207, 55, 207), rgb(197, 31, 174));
}


/* 内容区域 */
.content {
    width: 1500px;
    border-radius: 10px;
    background-color: #fff;
    margin: 20px auto;
}

.content .content-title {
    height: 50px;
    padding-top: 25px;
    margin-left: 50px;
    font-size: 36px;
}

.ul1 {
    padding-bottom: 20px;
}

.ul1 li {
    width: 1400px;
    border: 1px solid #ccc;
    border-radius: 20px;
    box-sizing: border-box;
    margin: 20px auto;
    background: #fff;
}



.ul1 li:hover {
    background-color: #f5f5f5;
}

.ul1 li .content-inner {
    width: 1300px;
    height: 220px;
    padding: 18px;
}

.ul1 li .content-inner img {
    width: 390px;
    height: 220px;
    border-radius: 10px;
    float: left;
}

.ul1 li .content-inner .Cinner-text {
    width: 900px;
    margin: 0 420px;
}

.ul1 li .content-inner .Cinner-title {
    color: skyblue;
    font-size: 30px;
}

.ul1 li .content-inner .Cinner-introduce {
    color: #666565;
    font-size: 22px;
    line-height: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 16px;
}

.ul1 li .content-inner .Cinner-introduce:hover {
    color: rgb(147, 172, 241);
}


.ul2 {
    width: 1500px;
    height: 730px;
    margin: 30px auto;
    background-color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.content .ul2 li {
    width: 400px;
    height: 330px;
    border-radius: 10px;
    float: left;
    margin: 0 25px 50px 60px;
    border: 1.5px solid #cfcbcb;
    transition: all 500ms;
    overflow: hidden;
}

.content .ul2 li:hover {
    transform: translateY(-10px);
    box-shadow: 10px 10px 30px #ccc;
}

.content .ul2 li .content-inner .Cinner-Images,
.content .ul2 li .content-inner .Cinner-Images img {
    width: 400px;
    height: 200px;
    transition: all 500ms;
}

.content .ul2 li .content-inner .Cinner-Images img:hover {
    transform: scale(1.1);
}

.content .ul2 li .content-inner .Cinner-bottom {
    padding: 15px;
}

.content .ul2 li .content-inner .Cinner-title {
    background-color: #fff;
    color: skyblue;
    font-size: 30px;
}

.content .ul2 li .content-inner .Cinner-introduce {
    background-color: #fff;
    color: #666565;
    font-size: 22px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 70px;
}

.content .ul2 li .content-inner .Cinner-introduce:hover {
    color: rgb(147, 172, 241);
}


/* 媒体查询 */
@media screen and (max-width: 950px) {

    /* 导航栏变化 */
    .header {
        width: 950px;
        height: 74px;
        font-size: 17px;
        display: flex;
        align-items: center;
        /* border-bottom: 1px solid #716565; */
        background-color: #fff;
        /* position: fixed; */
        z-index: 1000;
        margin: 0 auto;
    }

    #logo,
    .logoContent {
        display: none;
    }


    /* 内容区域变化 */
    .content {
        width: 950px;
        border-radius: 10px;
        background-color: #fff;
        margin: 20px auto;
    }

    .content .content-title {
        height: 50px;
        padding-top: 25px;
        margin-left: 26px;
        font-size: 26px;
    }

    .ul1 li {
        width: 900px;
        border: 1px solid #ccc;
        border-radius: 20px;
        box-sizing: border-box;
        margin: 20px auto;
    }

    .ul1 li:hover {
        background-color: #f5f5f5;
    }

    .ul1 li .content-inner {
        width: 800px;
        height: 170px;
        padding: 18px;
    }

    .ul1 li .content-inner img {
        width: 280px;
        height: 170px;
        border-radius: 10px;
        float: left;
    }

    .ul1 li .content-inner .Cinner-text {
        width: 560px;
        margin: 0 300px;
    }
}
</style>