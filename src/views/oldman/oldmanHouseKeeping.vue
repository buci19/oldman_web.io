<!-- 老年外卖--老年家政 -->
<template>
    <div class="container">
        <!-- 主图banner -->
        <div class="banner">
            <img src="@/assets/images/oldmanHouseKeeping.webp" alt="家政服务" class="main-banner">
            <div class="banner-text">
                <h1>专业家政服务</h1>
                <p>让生活更轻松舒适</p>
            </div>
        </div>

        <!-- 服务项目展示 -->
        <div class="service-items">
            <h2 class="section-title">家政服务项目</h2>
            <div class="items-grid">
                <div class="service-item">
                    <img src="@/assets/images/daily-cleaning.svg" alt="日常保洁">
                    <h3>日常保洁</h3>
                    <p>专业保洁人员，提供房屋清洁、消毒等服务</p>
                    <div class="price">起价：<span>50</span>元/次</div>
                </div>
                <div class="service-item">
                    <img src="@/assets/images/finishing.svg" alt="居家整理">
                    <h3>居家整理</h3>
                    <p>衣物整理、收纳规划、环境改善服务</p>
                    <div class="price">起价：<span>80</span>元/次</div>
                </div>
                <div class="service-item">
                    <img src="@/assets/images/deep-cleaning.svg" alt="深度清洁">
                    <h3>深度清洁</h3>
                    <p>厨卫深度清洁、玻璃清洗、地板打蜡等</p>
                    <div class="price">起价：<span>150</span>元/次</div>
                </div>
                <div class="service-item">
                    <img src="@/assets/images/Life-care.svg" alt="生活照料">
                    <h3>生活照料</h3>
                    <p>洗衣做饭、代购代办、陪同外出等服务</p>
                    <div class="price">起价：<span>100</span>元/次</div>
                </div>
            </div>
        </div>

        <!-- 服务保障 -->
        <div class="service-guarantee">
            <h2 class="section-title">服务保障</h2>
            <div class="guarantee-grid">
                <div class="guarantee-item">
                    <div class="icon">
                        <img src="@/assets/images/Housekeeper.svg" alt="专业人员">
                    </div>
                    <h3>专业人员</h3>
                    <p>经过专业培训，持证上岗</p>
                </div>
                <div class="guarantee-item">
                    <div class="icon">
                        <img src="@/assets/images/quality.svg" alt="品质保证">
                    </div>
                    <h3>品质保证</h3>
                    <p>标准化服务流程，品质有保障</p>
                </div>
                <div class="guarantee-item">
                    <div class="icon">
                        <img src="@/assets/images/guarantee.svg" alt="安全保障">
                    </div>
                    <h3>安全保障</h3>
                    <p>人员保险，损坏赔付</p>
                </div>
            </div>
        </div>

        <!-- 服务流程 -->
        <div class="service-process">
            <h2 class="section-title">服务流程</h2>
            <div class="process-steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <h3>预约下单</h3>
                    <p>线上预约或电话预约</p>
                </div>
                <div class="step-arrow">→</div>
                <div class="step">
                    <div class="step-number">2</div>
                    <h3>上门服务</h3>
                    <p>专业人员准时上门</p>
                </div>
                <div class="step-arrow">→</div>
                <div class="step">
                    <div class="step-number">3</div>
                    <h3>服务验收</h3>
                    <p>确认服务完成情况</p>
                </div>
                <div class="step-arrow">→</div>
                <div class="step">
                    <div class="step-number">4</div>
                    <h3>评价反馈</h3>
                    <p>服务评价与建议</p>
                </div>
            </div>
        </div>

        <!-- 预约服务 -->
        <div class="booking-section">
            <h2 class="section-title">立即预约</h2>
            <div class="booking-box">
                <button class="booking-btn" @click="showBookingForm">在线预约</button>
                <p class="service-time">服务时间：周一至周日 8:00-20:00</p>
                <p class="contact-phone">咨询电话：400-XXX-XXXX</p>
            </div>
        </div>
        <!-- 添加预约弹窗组件 -->
        <booking-modal :visible="showBookingModal" @close="showBookingModal = false" @submit="showBookingFormSubmit" />
    </div>

</template>

<script>
import oldmanHousekeepingWindow from './oldmanHousekeepingWindow.vue';
export default {
    name: 'OldmanHouseKeeping',
    components: {
        'booking-modal': oldmanHousekeepingWindow
    },
    data() {
        return {
            // 如果需要可以在这里添加数据
            showBookingModal: false
        }
    },
    methods: {
        showBookingForm() {
            // 处理预约逻辑
            this.showBookingModal = true;
            console.log('预约服务')
        },
        showBookingFormSubmit() {
            console.log('提交预约')
        }
    }
}
</script>

<style scoped>
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

/* 服务项目样式 */
.service-items {
    padding: 60px 0;
    background: #fff;
}

.items-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.service-item {
    text-align: center;
    padding: 40px 30px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
}

.service-item:hover {
    transform: translateY(-10px);
}

.service-item img {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    /* border-radius: 50%; */
}

.service-item h3 {
    font-size: 30px;
    color: #333;
    margin-bottom: 15px;
    font-weight: 600;
}

.service-item p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 15px;
    font-size: 22px;
}

.price {
    color: #ff6b6b;
    font-size: 22px;
}

.price span {
    font-size: 24px;
    font-weight: bold;
}

/* 服务保障样式 */
.service-guarantee {
    padding: 60px 0;
    background: #f8f9fa;
}

.guarantee-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.guarantee-item {
    text-align: center;
    padding: 30px;
}

.guarantee-item .icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
}

.guarantee-item .icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.guarantee-item h3 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
}

.guarantee-item p {
    color: #666;
    line-height: 1.6;
    font-size: 22px;
}

/* 服务流程样式 */
.service-process {
    padding: 60px 0;
    background: #fff;
}

.process-steps {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    flex-wrap: wrap;
}

.step {
    text-align: center;
    padding: 20px;
    min-width: 200px;
}

.step-number {
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: #ff6b6b;
    color: white;
    border-radius: 50%;
    margin: 0 auto 15px;
    font-size: 24px;
    font-weight: bold;
}

.step h3 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
}

.step p {
    color: #666;
    font-size: 22px;
}

.step-arrow {
    color: #ff6b6b;
    font-size: 24px;
    margin: 0 10px;
}

/* 预约部分样式 */
.booking-section {
    padding: 60px 0;
    background: #f8f9fa;
}

.booking-box {
    text-align: center;
    padding: 40px 0;
}

.booking-btn {
    background: #ff6b6b;
    color: white;
    border: none;
    padding: 15px 40px;
    border-radius: 30px;
    font-size: 24px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.booking-btn:hover {
    background: #ff5252;
}

.service-time {
    margin-top: 20px;
    font-size: 20px;
    color: #666;
}
.contact-phone {
    margin-top: 10px;
    font-size: 20px;
    color: #666;
}

/* 通用标题样式 */
.section-title {
    text-align: center;
    font-size: 36px;
    color: #333;
    margin-bottom: 40px;
    font-weight: 600;
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
        margin-bottom: 30px;
    }

    .service-item {
        padding: 30px 20px;
    }

    .process-steps {
        flex-direction: column;
    }

    .step-arrow {
        transform: rotate(90deg);
        margin: 10px 0;
    }

    .step {
        min-width: 150px;
    }
}
</style>