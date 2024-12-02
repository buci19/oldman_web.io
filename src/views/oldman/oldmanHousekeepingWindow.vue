<template>
    <div class="booking-modal" v-if="visible">
        <div class="modal-overlay" @click="$emit('close')"></div>
        <div class="modal-content">
            <h2>预约家政服务</h2>
            <form @submit.prevent="handleSubmit">
                <div class="form-item">
                    <label>姓名</label>
                    <input type="text" v-model="formData.name" required>
                </div>
                <div class="form-item">
                    <label>联系电话</label>
                    <input type="tel" v-model="formData.phone" required>
                </div>
                <div class="form-item">
                    <label>服务类型</label>
                    <select v-model="formData.serviceType" required>
                        <option value="日常保洁">日常保洁</option>
                        <option value="深度清洁">深度清洁</option>
                        <option value="洗衣服务">洗衣服务</option>
                        <option value="做饭服务">做饭服务</option>
                    </select>
                </div>
                <div class="form-item">
                    <label>预约日期</label>
                    <input type="date" v-model="formData.date" required>
                </div>
                <div class="form-item">
                    <label>备注说明</label>
                    <textarea v-model="formData.remarks" rows="3"></textarea>
                </div>
                <div class="form-buttons">
                    <button type="button" class="cancel-btn" @click="$emit('close')">取消</button>
                    <button type="submit" class="submit-btn">提交预约</button>
                </div>
            </form>
        </div>
        <!-- 添加成功提示框 -->
        <div class="success-modal" v-if="showSuccess">
            <div class="success-content">
                <i class="success-icon">✓</i>
                <h3>预约成功</h3>
                <p>我们会尽快与您联系确认</p>
                <button @click="showSuccess = false">确定</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookingModal',
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            formData: {
                name: '',
                phone: '',
                serviceType: '',
                date: '',
                remarks: ''
            }
        }
    },
    methods: {
        handleSubmit() {
            // 这里处理表单提交逻辑
            console.log('提交的预约信息：', this.formData)
            // 可以发送到后端API
            this.$emit('submit', this.formData)
            // 显示成功提示
            this.$message({
                message: '预约成功！我们会尽快与您联系确认。',
                type: 'success',
                duration: 3000
            })
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.booking-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.modal-content {
    position: relative;
    width: 90%;
    max-width: 500px;
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}

h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
}

.form-item {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
    color: #666;
}

input,
select,
textarea {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
}

textarea {
    resize: vertical;
}

.form-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
    margin-top: 30px;
}

button {
    padding: 10px 25px;
    border-radius: 6px;
    border: none;
    font-size: 16px;
    cursor: pointer;
}

.submit-btn {
    background: #ff6b6b;
    color: white;
}

.cancel-btn {
    background: #f5f5f5;
    color: #666;
}

.submit-btn:hover {
    background: #ff5252;
}

.cancel-btn:hover {
    background: #e8e8e8;
}
</style>