<!-- 健康知识库 -->
<template>
    <div class="body">
        <div class="header">
            <router-link :to="{ path: '/oldman/index' }">
                <div class="return">
                    <img src="@/assets/images/return.png" alt="">
                    <div title="首页">返回</div>
                </div>
            </router-link>
            <div class="header-logo">
                <img src="@/assets/images/logo.png" alt="" style="width: 4vw; max-width: 100px;">
            </div>
            <div class="header-title">老年健康服务平台</div>
            <div class="header-user" @click="userCenter">
                <img src="@/assets/images/user.png" alt="">
            </div>
        </div>
        <div class="bg">
            <div>
                <img src="@/assets/images/Hknowledgebg.jpg" alt="">

            </div>
        </div>
        <div class="content">
            <div class="content-title">
                健康知识库
            </div>
            <ul>
                <li>
                    <router-link :to="{ path: '/oldman/HknowHabits' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowHabits1.jpg" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">生活习惯</div>
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
                                <div class="Cinner-title">营养饮食</div>
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
                                <div class="Cinner-title">运动指导</div>
                                <div class="Cinner-introduce">
                                    锻炼身体，对任何年龄段的人都很重要。但是，当你渐渐变老的时候，是否坚持锻炼可能意味着是独立生活还是不得不受别人照顾的区别。
                                    老了，锻炼的方式和年轻人的就不再相同了。健康专家认为，对于 65 岁以上的老年人，要使用不同的锻炼方式，还要遵守特别的注意事项。
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/oldman/HknowMentalHealthy' }">
                        <div class="content-inner">
                            <div class="Cinner-Images">
                                <img src="@/assets/images/HknowMentalHealthy1.jpg" alt="">
                            </div>
                            <div class="Cinner-bottom">
                                <div class="Cinner-title">心理健康</div>
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
                                <div class="Cinner-title">疾病预防</div>
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
                                <div class="Cinner-title">作息指南</div>
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
/* eslint-disable */
export default {
    data() {
        return {

        }
    },
    methods: {
        userCenter() {
            if (localStorage.getItem('token')) {
                // 如果 token 存在，则假设用户已经登录，跳转到用户中心
                this.$router.replace({ path: '/Oldman/userCenter' });
            } else {
                // 如果没有 token，跳转到登录页面
                alert('请先登录');
                this.$router.replace({ path: '/oldman/Login' });
            }
        }
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

.header-user {
    margin-left: 62vw;
    font-size: 1.2vw;
    display: flex;
    align-items: center;
    color: #000;
}

.header-user>div {
    padding-right: 0.5vw;
}

.header-user img {
    width: 2vw;
}

.bg {
    width: 100vw;
    height: 70vh;
    margin-top: 9vh;
}

.bg>div {
    width: 80vw;
    height: 70vh;
    margin: 0 auto;
}

.bg>div>img {
    width: 80vw;
    height: 70vh;
}

.content {
    width: 80vw;
    height: 120vh;
    margin: 5vh 0 0 10vw;
    background-color: #fff;
}

.content .content-title {
    height: 10vh;
    line-height: 10vh;
    margin-left: 1.2vw;
    font-size: 1.5vw;
}

.content ul li {
    width: 25vw;
    height: 50vh;
    float: left;
    margin: 0 0 2vw 1.2vw;
    border: 1px solid #cfcbcb;
}

.content ul li:nth-child(1),
.content ul li:nth-child(4) {
    margin-left: 1.2vw;
}

.content ul li .content-inner .Cinner-bottom {
    padding: 1vw;
}

.content ul li .content-inner .Cinner-Images,
.content ul li .content-inner .Cinner-Images img {
    width: 25vw;
    height: 35vh;
}

.content ul li .content-inner .Cinner-title {
    background-color: #fff;
    color: skyblue;
    font-size: 1.5vw;
}

.content ul li .content-inner .Cinner-introduce {
    background-color: #fff;
    color: #666565;
    font-size: 1vw;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 
    overflow: hidden;
    text-overflow: ellipsis;
    height: 3vw;
}
.content ul li .content-inner .Cinner-introduce:hover{
    color: rgb(147, 172, 241);
}
</style>