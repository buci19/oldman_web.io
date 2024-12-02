<!-- 老年外卖 -->
<template>
    <div class="container">
        <!-- 主图banner -->
        <div class="banner">
            <img src="@/assets/images/oldmanTakeOut.webp" alt="智慧养老服务" class="main-banner">
            <div class="banner-text">
                <h1>让养老服务触手可及</h1>
                <p>专业·贴心·便捷</p>
            </div>
        </div>

        <!-- 服务分类展示 -->
        <div class="service-categories">
            <h2 class="section-title">智慧养老服务</h2>
            <div class="category-grid">
                <router-link :to="{ path: '/oldman/oldmanEat' }">
                    <div class="category-item">
                        <img src="@/assets/images/meal.svg" alt="助餐服务">
                        <h3>助餐服务</h3>
                        <p>营养配餐，专业送餐上门，让老人吃得健康又放心</p>
                    </div>
                </router-link>
                <router-link :to="{ path: '/oldman/oldmanMedical' }">
                    <div class="category-item">
                        <img src="@/assets/images/nursing.svg" alt="医疗护理">
                        <h3>医疗护理</h3>
                        <p>专业医护团队，提供上门诊疗、康复护理服务</p>
                    </div>
                </router-link>
                <router-link :to="{ path: '/oldman/oldmanHousekeeping' }">
                    <div class="category-item">
                        <img src="@/assets/images/housekeeping.svg" alt="家政服务">
                        <h3>家政服务</h3>
                        <p>专业保洁、居家整理、生活照料一站式服务</p>
                    </div>
                </router-link>
                <router-link :to="{ path: '/oldman/oldmanLove' }">
                    <div class="category-item">
                        <img src="@/assets/images/care.svg" alt="陪护关爱">
                        <h3>陪护关爱</h3>
                        <p>情感陪护、生活陪伴、心理慰藉服务</p>
                    </div>
                </router-link>
            </div>
        </div>

        <!-- 服务优势 -->
        <div class="advantages">
            <h2 class="section-title">服务优势</h2>
            <div class="advantages-grid">
                <div class="advantage-item">
                    <img src="@/assets/images/quality.svg" alt="品质保障">
                    <div class="advantage-content">
                        <h3>品质保证</h3>
                        <p>严选持证服务人员，定期培训考核</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <img src="@/assets/images/team.svg" alt="专业团队">
                    <div class="advantage-content">
                        <h3>专业团队</h3>
                        <p>专业养老服务团队，一对一定制服务方案</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <img src="@/assets/images/guarantee.svg" alt="安全保障">
                    <div class="advantage-content">
                        <h3>安全保障</h3>
                        <p>全程保险保障，让您无后顾之忧</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 服务流程 -->
        <div class="process-section">
            <h2 class="section-title">服务流程</h2>
            <div class="process-steps">
                <div class="step">
                    <img src="@/assets/images/booking.svg" alt="预约下单">
                    <p>预约下单</p>
                </div>
                <div class="step-arrow">→</div>
                <div class="step">
                    <img src="@/assets/images/confirm.svg" alt="需求确认">
                    <p>需求确认</p>
                </div>
                <div class="step-arrow">→</div>
                <div class="step">
                    <img src="@/assets/images/door.svg" alt="服务上门">
                    <p>服务上门</p>
                </div>
                <div class="step-arrow">→</div>
                <div class="step">
                    <img src="@/assets/images/appraise.svg" alt="服务评价">
                    <p>服务评价</p>
                </div>
            </div>
        </div>
    </div>
</template>

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

.banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.banner-text h1 {
    font-size: 76px;
    margin-bottom: 20px;
}

.banner-text p {
    font-size: 36px;
}

/* 通用section标题样式 */
.section-title {
    text-align: center;
    font-size: 42px;
    color: #333;
    margin: 40px 0;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: #ff6b6b;
}

/* 服务分类样式 */
.service-categories {
    padding: 60px 0;
    background: #fff;
}

.category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.category-item {
    text-align: center;
    padding: 30px;
    background: #f8f9fa;
    border-radius: 12px;
    transition: all 0.3s ease;
}

.category-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.category-item img {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
}

.category-item h3 {
    font-size: 26px;
    color: #333;
    margin-bottom: 15px;
}

.category-item p {
    color: #666;
    line-height: 1.6;
    font-size: 18px;
}

/* 服务优势样式 */
.advantages {
    padding: 60px 0;
    background: #f8f9fa;
}

.advantages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.advantage-item {
    display: flex;
    align-items: center;
    padding: 30px;
    background: #fff;
    border-radius: 12px;
    transition: all 0.3s ease;
}

.advantage-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.advantage-item img {
    width: 60px;
    height: 60px;
    margin-right: 20px;
}

.advantage-content h3 {
    font-size: 26px;
    color: #333;
    margin-bottom: 10px;
}

.advantage-content p {
    color: #666;
    line-height: 1.6;
    font-size: 18px;
}

/* 服务流程样式 */
.process-section {
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
}

.step img {
    width: 64px;
    height: 64px;
    margin-bottom: 15px;
}

.step p {
    color: #333;
    font-size: 20px;
}

.step-arrow {
    font-size: 24px;
    color: #ff6b6b;
    margin: 0 20px;
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

    .step-arrow {
        display: none;
    }

    .process-steps {
        flex-direction: column;
    }

    .step {
        width: 100%;
        margin-bottom: 20px;
    }

    .advantage-item {
        flex-direction: column;
        text-align: center;
    }

    .advantage-item img {
        margin: 0 0 20px 0;
    }
}

/* 动画效果 */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.category-item,
.advantage-item,
.step {
    animation: fadeInUp 0.6s ease forwards;
}

/* 主题色变量 */
:root {
    --primary-color: #ff6b6b;
    --text-primary: #333;
    --text-secondary: #666;
    --bg-light: #f8f9fa;
    --bg-white: #fff;
    --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
</style>
