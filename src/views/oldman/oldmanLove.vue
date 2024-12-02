<template>
    <div class="container">
        <!-- 主图banner -->
        <div class="banner">
            <img src="@/assets/images/HknowMentalHealthy2.jpg" alt="陪护关爱服务" class="main-banner">
            <div class="banner-text">
                <h1>温暖陪伴，贴心关爱</h1>
                <p>让爱不孤单</p>
            </div>
        </div>

        <!-- 服务内容 -->
        <div class="service-content">
            <h2 class="section-title">服务内容</h2>
            <div class="service-grid">
                <div class="service-item">
                    <img src="@/assets/images/love1.jpg" alt="生活陪护">
                    <h3>生活陪护</h3>
                    <ul>
                        <li>日常生活陪伴</li>
                        <li>散步陪同</li>
                        <li>聊天解闷</li>
                        <li>娱乐活动陪同</li>
                    </ul>
                </div>
                <div class="service-item">
                    <img src="@/assets/images/love2.jpg" alt="情感关怀">
                    <h3>情感关怀</h3>
                    <ul>
                        <li>心理疏导</li>
                        <li>情感交流</li>
                        <li>生活倾听</li>
                        <li>兴趣培养</li>
                    </ul>
                </div>
                <div class="service-item">
                    <img src="@/assets/images/love3.jpg" alt="文化娱乐">
                    <h3>文化娱乐</h3>
                    <ul>
                        <li>读书陪伴</li>
                        <li>下棋娱乐</li>
                        <li>手工制作</li>
                        <li>户外活动</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 服务特色 -->
        <div class="features">
            <h2 class="section-title">服务特色</h2>
            <div class="features-grid">
                <div class="feature-item">
                    <div class="feature-icon">
                        <i class="el-icon-user"></i>
                    </div>
                    <div class="feature-content">
                        <h3>专业陪护</h3>
                        <div class="feature-details">
                            <p class="main-text">经验丰富的陪护人员，专业贴心的服务</p>
                            <ul class="sub-text">
                                <li>持证上岗，定期培训</li>
                                <li>服务经验丰富</li>
                                <li>耐心细致，懂得沟通</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">
                        <i class="el-icon-magic-stick"></i>
                    </div>
                    <div class="feature-content">
                        <h3>个性定制</h3>
                        <div class="feature-details">
                            <p class="main-text">根据老人需求定制专属陪护方案</p>
                            <ul class="sub-text">
                                <li>个性化需求评估</li>
                                <li>灵活时间安排</li>
                                <li>一对一定制服务</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">
                        <i class="el-icon-umbrella"></i>
                    </div>
                    <div class="feature-content">
                        <h3>全程保障</h3>
                        <div class="feature-details">
                            <p class="main-text">服务全程保险保障，安全无忧</p>
                            <ul class="sub-text">
                                <li>服务人员保险保障</li>
                                <li>服务质量跟踪</li>
                                <li>24小时投诉处理</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 预约服务 -->
        <div class="booking-section">
            <h2 class="section-title">预约服务</h2>
            <div class="booking-form">
                <el-form :model="bookingForm" label-width="100px">
                    <el-form-item label="服务类型" >
                        <el-select v-model="bookingForm.serviceType" placeholder="请选择服务类型">
                            <el-option label="生活陪护" value="life"></el-option>
                            <el-option label="情感关怀" value="emotion"></el-option>
                            <el-option label="文化娱乐" value="culture"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="预约时间">
                        <el-date-picker v-model="bookingForm.date" type="datetime" placeholder="选择日期时间">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-input v-model="bookingForm.phone" placeholder="请输入联系电话"></el-input>
                    </el-form-item>
                    <el-form-item label="备注信息">
                        <el-input type="textarea" v-model="bookingForm.remarks" placeholder="请输入特殊需求或备注信息">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitBooking" style="font-size: 22px;">立即预约</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'OldmanCare',
    data() {
        return {
            bookingForm: {
                serviceType: '',
                date: '',
                phone: '',
                remarks: ''
            }
        }
    },
    methods: {
        submitBooking() {
            // 这里添加预约提交逻辑
            if (!this.bookingForm.serviceType || !this.bookingForm.date || !this.bookingForm.phone) {
                this.$message({
                    message: '请填写完整信息',
                    type: 'warning',
                    duration: 3000
                })
                return;
            }
            this.$message({
                message: '预约成功！我们会尽快与您联系确认。',
                type: 'success',
                duration: 3000
            })
            console.log('提交预约', this.bookingForm)
        }
    }}
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

.banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
.banner-text h1{
    font-size: 76px;
}
.banner-text p{
    font-size: 36px;
}


/* 服务内容样式 */
.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}

.service-item {
    text-align: center;
    padding: 30px;
    background: #f8f9fa;
    border-radius: 12px;
    transition: all 0.3s ease;
}
.service-item h3{
    font-size: 30px;
}
.service-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.service-item img {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
}

.service-item ul {
    list-style: none;
    padding: 0;
    text-align: left;
    margin-top: 20px;
}

.service-item ul li {
    margin: 10px 0;
    color: #666;
    font-size: 22px;
}

/* 服务特色样式 */
.features {
    background: #f8f9fa;
    padding: 60px 0;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.feature-item {
    background: #fff;
    border-radius: 12px;
    padding: 30px;
    transition: all 0.3s ease;
}

.feature-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.feature-icon {
    font-size: 36px;
    color: #ff6b6b;
    margin-bottom: 20px;
}

.feature-content h3 {
    font-size: 30px;
    color: #333;
    margin-bottom: 15px;
}

.feature-details .main-text {
    color: #666;
    font-size: 22px;
    margin-bottom: 15px;
    line-height: 1.6;
}

.feature-details .sub-text {
    list-style: none;
    padding: 0;
    margin: 0;
}

.feature-details .sub-text li {
    color: #888;
    font-size: 20px;
    margin: 8px 0;
    padding-left: 20px;
    position: relative;
}

.feature-details .sub-text li::before {
    content: "•";
    color: #ff6b6b;
    position: absolute;
    left: 0;
    font-size: 16px;
}

/* 预约表单样式 */
.booking-section {
    padding: 60px 0;
    background: #fff;
}

.booking-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-size: 30px;
}
/* 添加以下样式来修改表单标签字体大小 */
.booking-form :deep(.el-form-item__label) {
    font-size: 22px;
}

/* 如果也想调整输入框内的字体大小，可以添加： */
.booking-form :deep(.el-input__inner) {
    font-size: 20px;
}

/* 添加下拉框选项的字体大小 */
.booking-form :deep(.el-select-dropdown__item) {
    font-size: 20px;
}

/* 下拉框中已选中的文字大小也需要调整 */
.booking-form :deep(el-select-dropdown__item:hover) {
    font-size: 20px;
}
.booking-form :deep(.el-select .el-input__inner) {
    font-size: 20px;
}
.booking-form :deep(.el-textarea__inner) {
    font-size: 20px;
}

/* 响应式适配 */
@media (max-width: 768px) {
    .features-grid {
        grid-template-columns: 1fr;
    }

    .feature-item {
        padding: 20px;
    }

    .banner-text h1{
        font-size: 36px;
    }
    .banner-text p{
        font-size: 16px;
    }
}

/* 通用样式 */
.section-title {
    text-align: center;
    font-size: 36px;
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
</style>