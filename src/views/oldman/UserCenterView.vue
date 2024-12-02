<template>
    <!-- 用户中心主容器 -->
    <div class="user-center">
        <!-- 导航栏 -->
        <header class="header">
            <div class="header-content">
                <img src="img/logo.png" alt="logo">
                <span class="header-title">oldman_healthy</span>
            </div>
        </header>

        <!-- 主要内容区域 -->
        <div class="main-content">
            <!-- 侧边栏 -->
            <aside class="sidebar">
                <!-- 用户资料展示区 -->
                <div class="user-profile">
                    <div class="avatar">
                        <img src="img/robot.png" alt="用户头像">
                    </div>
                    <div class="username">智韵天成</div>
                </div>

                <!-- 导航菜单 -->
                <nav class="nav-menu">
                    <button :class="['nav-item', { active: showSection === 'basicInfo' }]"
                        @click="showSection = 'basicInfo'">基本资料</button>
                    <button :class="['nav-item', { active: showSection === 'changePassword' }]"
                        @click="showSection = 'changePassword'">修改密码</button>
                    <button :class="['nav-item', { active: showSection === 'aboutUs' }]"
                        @click="showSection = 'aboutUs'">关于我们</button>
                </nav>
            </aside>

            <!-- 主要内容区 -->
            <main class="content">
                <!-- 基本资料部分 -->
                <section v-if="showSection === 'basicInfo'" class="section-content">
                    <h2 class="section-title">基本资料</h2>
                    <div class="form-content">
                        <!-- 左侧列 -->
                        <div class="form-column">
                            <div class="form-item">
                                <label>昵称：</label>
                                <span v-text="username"></span>
                            </div>
                            <div class="form-item">
                                <label>手机号：</label>
                                <span v-text="phone"></span>
                            </div>
                            <div class="form-item">
                                <label>年龄：</label>
                                <span v-text="age"></span>
                            </div>
                            <div class="form-item">
                                <label>身高(cm)：</label>
                                <span v-text="height"></span>
                            </div>
                            <div class="form-item">
                                <label>体重(kg)：</label>
                                <span v-text="weight"></span>
                            </div>
                            <div class="form-item">
                                <label>血型：</label>
                                <span v-text="bloodType"></span>
                            </div>
                            <div class="form-item">
                                <label>签名：</label>
                                <span v-text="faction"></span>
                            </div>
                        </div>

                        <!-- 右侧列 -->
                        <div class="form-column">
                            <div class="form-item">
                                <label>紧急联系人：</label>
                                <span v-text="emergencyContact"></span>
                            </div>
                            <div class="form-item">
                                <label>紧急电话：</label>
                                <span v-text="emergencyPhone"></span>
                            </div>
                            <div class="form-item">
                                <label>过敏史：</label>
                                <span v-text="allergies"></span>
                            </div>
                            <div class="form-item">
                                <label>慢性病史：</label>
                                <span v-text="chronicDiseases"></span>
                            </div>
                            <div class="form-item">
                                <label>所在地区：</label>
                                <span v-text="address"></span>
                            </div>
                            <div class="form-item">
                                <label>兴趣爱好：</label>
                                <span v-text="hobbies"></span>
                            </div>
                        </div>
                    </div>
                    <div><button class="btn-primary" @click="handleClick('编辑资料')">编辑</button></div>
                </section>

                <!-- 修改密码部分 -->
                <section v-if="showSection === 'changePassword'" class="section-content">
                    <h2 class="section-title">修改密码</h2>
                    <div class="password-form">
                        <!-- 密码修改表单 -->
                        <div class="form-item">
                            <label>原密码：</label>
                            <input type="password" v-model="oldPassword" class="input">
                        </div>
                        <div class="form-item">
                            <label>新密码：</label>
                            <input type="password" v-model="newPassword" class="input">
                        </div>
                        <div class="form-item">
                            <label>确认密码：</label>
                            <input type="password" v-model="IsnewPassword" class="input">
                        </div>
                    </div>
                    <div><button class="btn-primary" @click="changePassword">保存</button></div>
                </section>

                <section v-if="showSection === 'aboutUs'" class="section-content about-us">
                    <h2 class="section-title">关于我们</h2>

                    <div class="about-content">
                        <!-- 公司简介 -->
                        <div class="about-section">
                            <h3>公司简介</h3>
                            <p>智韵天成致力于为老年人提供智能健康管理服务，让科技守护健康。</p>
                        </div>

                        <!-- 核心价值观 -->
                        <div class="about-section">
                            <h3>核心价值观</h3>
                            <div class="values-grid">
                                <div class="value-item">
                                    <i class="value-icon">❤️</i>
                                    <p>关爱为本</p>
                                </div>
                                <div class="value-item">
                                    <i class="value-icon">🔬</i>
                                    <p>科技创新</p>
                                </div>
                                <div class="value-item">
                                    <i class="value-icon">🤝</i>
                                    <p>专业服务</p>
                                </div>
                            </div>
                        </div>

                        <!-- 联系我们 -->
                        <div class="about-section">
                            <h3>联系我们</h3>
                            <div class="contact-info">
                                <p><i class="contact-icon">📞</i> 17507522648</p>
                                <p><i class="contact-icon">✉️</i> 2106476452@qq.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>

        <!-- 对话框组件 -->
        <dialog-component v-if="Visiable" ref="dialog" />
    </div>
</template>

<script>
// 导入对话框组件
import dialogComponent from './dialogComponent.vue';

export default {
    name: 'UserCenter',

    // 注册组件
    components: {
        dialogComponent
    },

    // 组件数据
    data() {
        return {
            showSection: 'basicInfo', // 当前显示的部分
            username: '', // 用户名
            gender: '0', // 性别
            faction: '', // 签名
            phone: '', // 手机号
            address: '', // 地址
            oldPassword: '', // 原密码
            newPassword: '', // 新密码
            IsnewPassword: '', // 确认密码
            Visiable: false, // 对话框可见性
            hobbies: '', // 兴趣爱好
            age: '',
            height: '',
            weight: '',
            bloodType: '',
            emergencyContact: '',
            emergencyPhone: '',
            allergies: '',
            chronicDiseases: '',
        };
    },

    // 生命周期钩子
    created() {
        this.initUserInfo(); // 初始化用户信息
    },

    // 组件方法
    methods: {
        // 初始化用户信息
        async initUserInfo() {
            this.username = (localStorage.getItem('username') || '默认用户名').replace(/['"]/g, '');
            this.gender = (localStorage.getItem('gender') || '0').replace(/['"]/g, '');
            this.faction = (localStorage.getItem('faction') || '默认签名').replace(/['"]/g, '');
            this.phone = (localStorage.getItem('phone') || '默认手机号').replace(/['"]/g, '');
            this.address = (localStorage.getItem('address') || '默认地址').replace(/['"]/g, '');
            this.hobbies = (localStorage.getItem('hobbies') || '暂无兴趣爱好').replace(/['"]/g, '');
            this.age = (localStorage.getItem('age') || '未设置').replace(/['"]/g, '');
            this.height = (localStorage.getItem('height') || '未设置').replace(/['"]/g, '');
            this.weight = (localStorage.getItem('weight') || '未设置').replace(/['"]/g, '');
            this.bloodType = (localStorage.getItem('bloodType') || '未设置').replace(/['"]/g, '');
            this.emergencyContact = (localStorage.getItem('emergencyContact') || '未设置').replace(/['"]/g, '');
            this.emergencyPhone = (localStorage.getItem('emergencyPhone') || '未设置').replace(/['"]/g, '');
            this.allergies = (localStorage.getItem('allergies') || '无').replace(/['"]/g, '');
            this.chronicDiseases = (localStorage.getItem('chronicDiseases') || '无').replace(/['"]/g, '');
        },

        // 处理编辑按钮点击事件
        handleClick(data) {
            this.Visiable = true;
            this.$nextTick(() => {
                this.$refs.dialog.init(data);
            });
        },

        // 修改密码方法
        async changePassword() {
            // 表单验证
            if (!this.validatePasswordForm()) {
                return;
            }

            try {
                const id = localStorage.getItem('id');
                const response = await this.$axios.post(`/api/oldman/changePassword/${id}`, {
                    password: this.IsnewPassword
                });

                if (response.data.code === 200) {
                    this.$message.success('密码修改成功');
                    this.resetPasswordForm();
                } else {
                    this.$message.error(response.data.message || '密码修改失败');
                }
            } catch (error) {
                console.error('修改密码失败:', error);
                this.$message.error('密码修改失败，请稍后重试');
            }
        },

        // 验证密码表单
        validatePasswordForm() {
            if (!this.oldPassword || !this.newPassword || !this.IsnewPassword) {
                this.$message.warning('请填写完整的密码信息');
                return false;
            }

            if (this.newPassword !== this.IsnewPassword) {
                this.$message.warning('两次输入的新密码不一致');
                return false;
            }

            if (this.newPassword.length < 6) {
                this.$message.warning('新密码长度不能少于6位');
                return false;
            }

            return true;
        },

        // 重置密码表单
        resetPasswordForm() {
            this.oldPassword = '';
            this.newPassword = '';
            this.IsnewPassword = '';
        },

        // 更新用户基本信息
        async updateUserInfo(data) {
            try {
                const id = localStorage.getItem('id');
                const response = await this.$axios.post(`/api/oldman/updateInfo/${id}`, data);

                if (response.data.code === 200) {
                    this.$message.success('信息更新成功');
                    this.initUserInfo(); // 重新加载用户信息
                } else {
                    this.$message.error(response.data.message || '信息更新失败');
                }
            } catch (error) {
                console.error('更新用户信息失败:', error);
                this.$message.error('信息更新失败，请稍后重试');
            }
        }
    },
    // 侦听器
    watch: {
        // 监听性别变化，自动保存到localStorage
        gender(newValue) {
            localStorage.setItem('gender', newValue);
        }
    }
};
</script>

<!-- 样式部分 -->
<style scoped>
/* 全局禁用滚动条 */
* {
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE and Edge */
}

/* Chrome, Safari and Opera */
*::-webkit-scrollbar {
    display: none;
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
    height: auto;
    /* 自适应高度 */
}

.about-section {
    margin-bottom: 2rem;
}

.about-section h3 {
    color: #333;
    margin-bottom: 1rem;
}

.values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin: 1rem 0;
}

.value-item {
    text-align: center;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
}

.value-icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.contact-info p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.contact-icon {
    font-size: 1.2rem;
}

/* 上面是关于我们样式 */

/* 用户中心容器样式 */
.user-center {
    min-height: 100vh;
    background: linear-gradient(200deg, #e3c5eb, #a9c1ed);
    overflow: hidden;
}

/* 头部样式 */
.header {
    background: linear-gradient(200deg, #97bbfd, #f2c2ff);
    padding: 1rem;
}

/* 头部内容样式 */
.header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 1rem;
}

/* 头部图片样式 */
.header img {
    width: 40px;
    height: 40px;
}

/* 主要内容区域样式 */
.main-content {
    max-width: 1200px;
    margin: 2rem auto;
    display: flex;
    gap: 2rem;
    min-height: calc(100vh - 200px);
    /* 设置最小高度 */
    overflow: hidden;
}

/* 侧边栏样式 */
.sidebar {
    width: 250px;
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    height: calc(100vh - 200px);
    /* 与content保持一致 */
    overflow: hidden;
}

/* 用户资料样式 */
.user-profile {
    text-align: center;
    margin-bottom: 2rem;
}

/* 头像容器样式 */
.avatar {
    width: 120px;
    height: 120px;
    margin: 0 auto 1rem;
    border-radius: 50%;
    overflow: hidden;
    background: #f0f0f0;
}

/* 头像图片样式 */
.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* 导航菜单样式 */
.nav-menu {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* 删除固定高度 */
}

/* 导航项样式 */
.nav-item {
    padding: 0.8rem 1rem;
    border: none;
    background: none;
    text-align: left;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s;
}

/* 导航项悬停和激活状态样式 */
.nav-item:hover,
.nav-item.active {
    background: #f0f0f0;
    color: #6b9fff;
}

/* 内容区样式 */
.content {
    flex: 1;
    background: white;
    border-radius: 8px;
    padding: 2rem;
    min-height: 600px;
    /* 设置最小高度 */
    height: calc(100vh - 200px);
    /* 设置最大高度，减去头部和边距的高度 */
    overflow: hidden;
}

/* 区块标题样式 */
.section-title {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: #333;
}

/* 表单内容样式 */
.form-content {
    display: flex;
    gap: 2rem;
    max-width: 100%;
    margin-bottom: 2rem;
    height: auto;
    /* 自适应高度 */
}

.form-column {
    flex: 1;
    min-width: 0;
    line-height: 40px;
    /* 防止内容溢出 */
}

/* 表单项样式 */
.form-item {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
}

/* 表单标签样式 */
.form-item label {
    min-width: 100px;
    color: #666;
    flex-shrink: 0;
    /* 防止标签被压缩 */
}

.form-item span {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    /* 文本过长时显示省略号 */
    white-space: nowrap;
}

/* 输入框样式 */
.input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}

/* 单选框样式 */
.radio {
    margin-right: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

/* 主要按钮样式 */
.btn-primary {
    background: #6b9fff;
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
    position: absolute;
    top: 0px;
    right: 20px;
}

.section-content {
    position: relative;
    height: 100%;
    /* 继承父容器高度 */
    padding: 2rem;
}

/* 主要按钮悬停样式 */
.btn-primary:hover {
    background: #5a8ae6;
}

/* 修改密码表单样式 */
.password-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 400px;
    margin: 0 auto;
    line-height: 80px;
}

.password-form .form-item {
    margin-bottom: 0;
}
</style>