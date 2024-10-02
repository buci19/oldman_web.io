<template>
    <div class="body">
        <!-- 导航栏 -->
        <div class="nav_header">
            <img src="img/logo.png" alt="">
            <span class="span1">oldman_healthy</span>
        </div>
        <!-- 中间部分--基本资料 -->
        <div class="nav_body">
            <div class="nav_body_font" v-if="showSection === 'basicInfo'">基本资料</div>
            <div class="nav_body_body" v-if="showSection === 'basicInfo'">
                <span>昵称: {{ username }}</span>
                <br>
                <span>性别:
                    <input id="man" type="radio" value="1" v-model="gender" :checked="gender === '1'" />男
                    <input type="radio" id="woman" value="0" v-model="gender" :checked="gender === '0'" />女
                </span><br>
                <!-- <button @click="save">保存</button> -->
            </div>
            <div class="nav_body_font" v-if="showSection === 'changePassword'">修改密码</div>
            <div class="nav_body_body" v-if="showSection === 'changePassword'">
                <span>原密码: <input v-model="oldPassword" type="text"
                        style="border-color: aliceblue; width: 20vw;"></span><br>
                <span>新密码: <input v-model="newPassword" type="text"
                        style="border-color: aliceblue; width: 20vw;"></span><br>
                <span style="right: 1.5vw;">确认密码: <input v-model="IsnewPassword" type="text"
                        style="border-color: aliceblue; width: 20vw;"></span><br>
                <button @click="changePassword">保存</button>
            </div>
        </div>
        <!-- 侧边头像 -->
        <div class="left_nav_img">
            <img src="img/robot.png" alt="">
        </div>
        <div class="left_nav_name">智韵天成</div>
        <div class="left_nav">
            <button id="nav1" @click="showSection = 'basicInfo'">基本资料</button>
            <button id="nav2" @click="showSection = 'changeAvatar'">更改头像</button>
            <button id="nav3" @click="showSection = 'changePassword'">修改密码</button>
            <button id="nav4" @click="showSection = 'aboutUs'">关于我们</button>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    data() {
        return {
            showSection: 'basicInfo',
            username: '',
            gender: 1,
            faction: '',
            oldPassword: '',
            newPassword: '',
            IsnewPassword: ''
        };
    },
    created() {
        // 在组件创建时从localStorage获取username
        this.username = localStorage.getItem('username') || '默认用户名';
    }

}
</script>
<style>
* {
    margin: 0;
    padding: 0;
}

.input_style {
    width: 13vw;
    height: 3vh;
    border-color: aliceblue;
    border-radius: 5px;
}

.input_style:focus {
    border-color: aliceblue;
    outline: none;
}

.nav_header {
    width: 100%;
    height: 9vh;
    background-color: rgb(245, 245, 245);

}

.nav_header img {
    width: 4vw;
    height: 4vw;
    position: relative;
    left: 10vw;
}

.span1 {
    position: relative;
    left: 4.5vw;
    top: 0.6vh;
    font-size: 13px;
}

.body {
    background-color: rgb(232, 232, 232);
    width: 100%;
    height: 100vh;
}

.left_nav_img {
    width: 10vw;
    height: 10vw;
    position: relative;
    left: 10vw;
    top: 6vh;
    background-color: aliceblue;
    border-radius: 50%;
    z-index: 2;
}

.left_nav_img img {
    width: 10vw;
    height: 10vw;
    z-index: 2;
}

.left_nav_name {
    position: relative;
    left: 9vw;
    top: 8vh;
    /* background-color: antiquewhite; */
    width: 12vw;
    text-align: center;
    z-index: 2;
}

.left_nav {
    width: 14vw;
    height: 60vh;
    background-color: white;
    position: relative;
    bottom: 2vh;
    left: 8vw;
    border-radius: 8px;
    z-index: 1;
}

.left_nav button {
    font-size: 20px;
    font-family: "宋体";
    font-weight: bold;
    position: relative;
    top: 15vh;
    left: 4vw;
    display: block;
    margin-bottom: 4vh;
    background-color: white;
    border-color: white;
    border: none;
    cursor: pointer;
    /* 鼠标悬停时显示手指形状的指针 */
    transition: background-color 0.3s ease;
    /* 设置背景颜色渐变过渡时间 */
}

.left_nav button:hover {
    color: rgb(212, 217, 236);
}

.nav_body {
    width: 60vw;
    height: 75vh;
    background-color: white;
    position: relative;
    top: 5vh;
    right: 15vw;
    float: right;
    border-radius: 10px;
}

.nav_body_font {
    position: relative;
    left: 5vw;
    top: 3vh;
    width: 5vw;
    /* background-color: aliceblue; */
}

.nav_body_body {
    /* background-color: antiquewhite; */
    width: 50vw;
    height: 50vh;
    position: relative;
    left: 15vw;
    top: 15vh;
}

.nav_body_body span {
    font-size: 20px;
    font-family: "宋体";
    font-weight: bold;
    position: relative;
    display: block;
}

.nav_body_body button {
    font-size: 20px;
    background-color: rgb(92, 173, 255);
    width: 10vw;
    position: relative;
    left: 3vw;
    top: 1vh;
    border-color: aliceblue;
}
</style>