<!-- 老年外卖--老年医疗 -->
<template>
    <div class="container">
        <!-- 主图banner -->
        <div class="banner">
            <img src="@/assets/images/oldmanMedical.webp" alt="医疗护理服务" class="main-banner">
            <div class="banner-text">
                <h1>专业医疗护理服务</h1>
                <p>让健康守护触手可及</p>
            </div>
        </div>

        <!-- 服务项目展示 -->
        <div class="service-items">
            <h2 class="section-title">护理服务项目</h2>
            <div class="items-grid">
                <div class="service-item">
                    <img src="@/assets/images/diagnosis.svg" alt="上门诊疗">
                    <h3>上门诊疗</h3>
                    <p>专业医生定期上门问诊、体检、开具处方</p>
                </div>
                <div class="service-item">
                    <img src="@/assets/images/care1.svg" alt="康复护理">
                    <h3>康复护理</h3>
                    <p>专业康复师指导，帮助恢复身体机能</p>
                </div>
                <div class="service-item">
                    <img src="@/assets/images/disease.svg" alt="慢病管理">
                    <h3>慢病管理</h3>
                    <p>高血压、糖尿病等慢性病长期跟踪管理</p>
                </div>
                <div class="service-item">
                    <img src="@/assets/images/medicine.svg" alt="用药指导">
                    <h3>用药指导</h3>
                    <p>专业药师指导用药，避免用药风险</p>
                </div>
            </div>
        </div>

        <!-- 专家团队 -->
        <div class="expert-team">
            <h2 class="section-title">专家团队</h2>
            <div class="team-grid">
                <div class="expert-card">
                    <img src="@/assets/images/oldmanMedical.webp" alt="主任医师">
                    <div class="expert-info">
                        <h3>张医生</h3>
                        <p class="title">主任医师</p>
                        <p class="desc">从医30年，专注老年医学</p>
                    </div>
                </div>
                <div class="expert-card">
                    <img src="@/assets/images/oldmanMedical.webp" alt="护理主任">
                    <div class="expert-info">
                        <h3>李护士</h3>
                        <p class="title">护理主任</p>
                        <p class="desc">专业康复护理15年经验</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 预约流程 -->
        <div class="booking-process">
            <h2 class="section-title">预约流程</h2>
            <div class="process-steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <p>在线预约</p>
                </div>
                <div class="step-arrow">→</div>
                <div class="step">
                    <div class="step-number">2</div>
                    <p>专家确认</p>
                </div>
                <div class="step-arrow">→</div>
                <div class="step">
                    <div class="step-number">3</div>
                    <p>上门服务</p>
                </div>
                <div class="step-arrow">→</div>
                <div class="step">
                    <div class="step-number">4</div>
                    <p>随访跟踪</p>
                </div>
            </div>
        </div>

        <!-- 联系预约 -->
        <div class="contact-section">
            <h2 class="section-title">立即预约</h2>
            <div class="contact-box">
                <button class="contact-btn" @click="handleBooking">在线预约</button>
                <p class="service-time">服务时间：周一至周日 8:00-20:00</p>
                <p class="contact-phone">咨询电话: 17507522648</p>
            </div>
        </div>
        <!-- 添加预约弹窗组件 -->
        <booking-modal :visible="showBookingModal" @close="showBookingModal = false" @submit="handleBookingSubmit" />
    </div>
</template>

<script>
import oldmanMedicalWindow from './oldmanMedicalWindow.vue';
export default {
    name: 'OldmanMedical',
    components: {
        'booking-modal': oldmanMedicalWindow
    },
    data() {
        return {
            // 如果需要可以在这里添加数据
            showBookingModal: false
        }
    },
    methods: {
        handleBooking() {
            // 处理预约逻辑
            this.showBookingModal = true
            console.log('预约医疗服务')
            // 例如：
            // this.$router.push('/booking')
            // 或者打开预约弹窗等
        },
        handleBookingSubmit() {
            // 处理预约提交逻辑
            console.log('预约提交')
        }
    }
}
</script>

<style scoped>
:root {
    --primary-color: #ff6b6b;
    --text-primary: #333;
    --text-secondary: #666;
    --bg-light: #f8f9fa;
    --bg-white: #fff;
    --shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.container {
    width: 100%;
    overflow-x: hidden;
}

/* Banner样式 */
.banner {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
}

.main-banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.banner::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
}

.banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    width: 100%;
    padding: 0 20px;
    z-index: 2;
}

.banner-text h1 {
    font-size: 76px;
    margin-bottom: 20px;
    font-weight: 600;
}

.banner-text p {
    font-size: 36px;
    letter-spacing: 2px;
}

/* 通用标题样式 */
.section-title {
    text-align: center;
    font-size: 42px;
    color: var(--text-primary);
    margin: 40px 0;
    font-weight: 600;
}

/* 服务项目样式 */
.items-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}

.service-item {
    text-align: center;
    padding: 40px 30px;
    background: var(--bg-white);
    border-radius: 12px;
    box-shadow: var(--shadow);
    /* transition: all 0.3s ease; */
}

/* .service-item:hover {
    transform: translateY(-10px);
} */

.service-item img {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    /* border-radius: 50%; */
}

.service-item h3 {
    font-size: 26px;
    color: var(--text-primary);
    margin-bottom: 15px;
    font-weight: 600;
}

.service-item p {
    color: var(--text-secondary);
    line-height: 1.8;
    font-size: 20px;
}

/* 专家团队样式 */
.expert-team {
    background: var(--bg-light);
    padding: 60px 0;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.expert-card {
    background: var(--bg-white);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow);
}

.expert-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.expert-info {
    padding: 25px 20px;
    text-align: center;
}

.expert-info h3 {
    font-size: 28px;
    color: var(--text-primary);
    margin-bottom: 10px;
    font-weight: 600;
}

.expert-info .title {
    color: var(--primary-color);
    font-size: 20px;
    margin-bottom: 12px;
    font-weight: 500;
}

.expert-info .desc {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 18px;
}

/* 预约流程样式 */
.booking-process {
    padding: 60px 0;
    background: var(--bg-white);
}

.process-steps {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    margin: 40px auto;
    padding: 0 20px;
    flex-wrap: wrap;
    gap: 20px;
}

.step {
    text-align: center;
    /* padding: 20px; */
    min-width: 150px;
}

.step-number {
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: var(--primary-color);
    background: #ff6b6b;
    color: white;
    border-radius: 50%;
    margin: 0 auto 15px;
    font-size: 24px;
    font-weight: bold;
}

.step p {
    color: var(--text-primary);
    font-size: 26px;
    font-weight: 500;
}

.step-arrow {
    color: var(--primary-color);
    font-size: 24px;
    margin: 0 10px;
}

/* 联系预约样式 */
.contact-section {
    padding: 60px 0;
    background: var(--bg-light);
}

.contact-box {
    text-align: center;
    padding: 40px 0;
}

.contact-btn {
    background: #ff6b6b;
    position: relative;
    bottom: 20px;
    color: white;
    border: none;
    padding: 15px 40px;
    border-radius: 30px;
    font-size: 22px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.contact-btn:hover {
    background: #ff5252;
}
.service-time{
    font-size: 24px;
}
.contact-phone {
    margin-top: 20px;
    font-size: 24px;
    color: var(--text-primary);
}

/* 响应式适配 */
@media (max-width: 768px) {
    .banner {
        height: 300px;
    }

    .banner-text h1 {
        font-size: 32px;
    }

    .banner-text p {
        font-size: 18px;
    }

    .section-title {
        font-size: 28px;
        margin: 30px 0;
    }

    .service-item {
        padding: 30px 20px;
    }

    .expert-info h3 {
        font-size: 20px;
    }

    .expert-info .title {
        font-size: 16px;
    }

    .team-grid {
        grid-template-columns: 1fr;
    }

    .process-steps {
        flex-direction: column;
    }

    .step-arrow {
        transform: rotate(90deg);
        margin: 10px 0;
    }
}
</style>