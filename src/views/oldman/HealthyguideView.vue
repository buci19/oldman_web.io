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
                            <img src="@/assets/images/HknowHabits1.jpg" alt="">
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
                            <img src="@/assets/images/HknowSportInstruction2.jpg" alt="">
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
                    <router-link :to="{ path: '/oldman/HguideHyperlipidemia' }">
                        <div class="content-inner">
                            <img src="@/assets/images/HknowHealthyEat6.jpg" alt="">
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
                    <router-link :to="{ path: '/oldman/HknowHabits' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowHabits1.jpg" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">平衡训练</div>
                                <div class="Cinner-introduce">
                                    老年人随着年龄的增长，身体的机能都在慢慢退化，免疫力逐渐降低，各种各样的疾病也随之而来。很多生活中的小细节，一不注意就会给老年人的身体健康带来很大的危害。掌握一些重要的健康知识，可以让老年人的生活更有保障。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HknowHealthyEat' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowHealthyEat6.jpg" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">柔韧训练</div>
                                <div class="Cinner-introduce">
                                    膳食营养是保证老年人健康的基础。与年轻时相比，老年人身体机能有不少的变化，如：合成代谢降低；肌肉量减少，骨骼的矿物质减少、消化酶、消化液分泌减少导致消化功能减退。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HknowSportInstruction' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowSportInstruction2.jpg" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">心肺训练</div>
                                <div class="Cinner-introduce">
                                    锻炼身体，对任何年龄段的人都很重要。但是，当你渐渐变老的时候，是否坚持锻炼可能意味着是独立生活还是不得不受别人照顾的区别。
                                    老了，锻炼的方式和年轻人的就不再相同了。健康专家认为，对于 65 岁以上的老年人，要使用不同的锻炼方式，还要遵守特别的注意事项。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HguideStrength' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowMentalHealthy1.jpg" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">力量训练</div>
                                <div class="Cinner-introduce">
                                    老年人心理健康很大程度上影响着老年人晚年生活质量，是老年健康的一项重要议题。老年人应该保持积极的社交互动，与家人、朋友和社区保持联系，参加社交活动，以减少孤独感和抑郁情绪。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HknowDiseasePrevention' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowDiseasePrevention1.jpg" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">耐力训练</div>
                                <div class="Cinner-introduce">
                                    老年人是慢性病患病率和发病率最高的人群。患有慢性疾病的老年人，随着年龄增长，免疫机能逐渐衰减，罹患感染性疾病的风险将显著增加。感染这些常见感染性疾病，也可能会影响慢性病的控制。那么，哪些情况下更易“中招”感染性疾病？如何预防？
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HknowRest' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowRest3.jpg" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">速度训练</div>
                                <div class="Cinner-introduce">
                                    很多老年人刚退休，一时调整不过来作息时间，也有些老年人一直就没有良好的作息生活，不好的生活方式可能导致身体机能失衡，各种“不舒服”。
                                    因此，我们需要寻找一种科学合理的作息时间表来改善生活品质，维护身体健康。所以，我为老年朋友们制作一份作息时间表，可以按照此时间表进行培养规律的生活习惯，执行过程中逐渐按自己的喜好，调整活动内容，但要保持规律。
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
    margin-left: 200px;
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
    margin-left: 240px;
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
    font-size: 26px;
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
    font-size: 26px;
}

.ul1 li .content-inner .Cinner-introduce {
    color: #666565;
    font-size: 17px;
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
    height: 700px;
    margin: 30px auto;
    background-color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.content .ul2 li {
    width: 400px;
    height: 300px;
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
    font-size: 25px;
}

.content .ul2 li .content-inner .Cinner-introduce {
    background-color: #fff;
    color: #666565;
    font-size: 17px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 50px;
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
}</style>