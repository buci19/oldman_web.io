<!-- 老年外卖--老年助餐 -->
<template>
    <div class="meal-service">
        <!-- 服务介绍banner -->
        <div class="service-banner">
            <img src="@/assets/images/oldmanEat.jpg" alt="助餐服务" class="banner-img">
            <div class="banner-content">
                <h1>营养助餐服务</h1>
                <p>专业营养配餐，让老人吃得健康可口</p>
            </div>
        </div>

        <!-- 今日菜品 -->
        <div class="today-meals">
            <h2 class="section-title">今日推荐菜品</h2>
            <div class="meal-grid">
                <div v-for="meal in meals" :key="meal.id" class="meal-card">
                    <img :src="meal.image" :alt="meal.name">
                    <div class="meal-info">
                        <h3>{{ meal.name }}</h3>
                        <p class="meal-desc">{{ meal.description }}</p>
                        <div class="meal-footer">
                            <span class="price">¥{{ meal.price }}</span>
                            <el-button type="primary" size="small" @click="addToCart(meal)" style="font-size: 18px;">
                                加入购物车
                            </el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 服务说明 -->
        <div class="service-info">
            <h2 class="section-title">服务说明</h2>
            <div class="info-grid">
                <div class="info-item">
                    <h3>配送时间</h3>
                    <p>午餐：10:30-12:30</p>
                    <p>晚餐：16:30-18:30</p>
                </div>
                <div class="info-item">
                    <h3>配送范围</h3>
                    <p>市区范围内免费配送</p>
                    <p>其他区域请咨询客服</p>
                </div>
                <div class="info-item">
                    <h3>订餐须知</h3>
                    <p>建议提前1天预订</p>
                    <p>可定制无盐、软烂等特殊需求</p>
                </div>
            </div>
        </div>

        <!-- 购物车悬浮按钮 -->
        <div class="cart-float" @click="showCart">
            <el-badge :value="cartCount" class="cart-badge">
                <i class="el-icon-shopping-cart-2"></i>
            </el-badge>
        </div>

        <!-- 购物车弹窗 -->
        <el-dialog :visible.sync="cartVisible" title="购物车" width="60%" :before-close="handleClose">
            <div class="cart-content">
                <div v-if="cartItems.length === 0" class="empty-cart">
                    <i class="el-icon-shopping-cart-2"></i>
                    <p>购物车是空的</p>
                </div>
                <div v-else class="cart-items">
                    <div v-for="item in cartItems" :key="item.id" class="cart-item">
                        <img :src="item.image" :alt="item.name">
                        <div class="item-info">
                            <h4>{{ item.name }}</h4>
                            <p class="price">¥{{ item.price }}</p>
                        </div>
                        <div class="item-control">
                            <el-input-number v-model="item.quantity" :min="1" :max="99" @change="updateCart"
                                size="small" />
                            <el-button type="danger" size="small" @click="removeFromCart(item)">
                                删除
                            </el-button>
                        </div>
                    </div>
                </div>
                <div class="cart-footer">
                    <div class="total">
                        总计: <span>¥{{ totalPrice }}</span>
                    </div>
                    <el-button type="primary" @click="checkout">去结算</el-button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
/* eslint-disable */
import { Message } from 'element-ui'

export default {
    name: 'OldmanEat',
    data() {
        return {
            cartVisible: false,
            cartItems: [],
            cartCount: 0,
            meals: [
                {
                    id: 1,
                    name: '营养套餐A',
                    description: '含米饭、红烧肉、青菜、汤品',
                    price: 28,
                    image: require('@/assets/images/comboA.jpg')
                },
                {
                    id: 2,
                    name: '营养套餐B',
                    description: '含米饭、狮子头、青菜、汤品',
                    price: 28,
                    image: require('@/assets/images/comboB.jpg')
                },
                {
                    id: 3,
                    name: '营养套餐C',
                    description: '含米饭、口水鸡、鲜虾滑蛋',
                    price: 28,
                    image: require('@/assets/images/comboC.jpg')
                },
                {
                    id: 4,
                    name: '营养套餐D',
                    description: '含米饭、乌鸡鲜汤、青菜',
                    price: 28,
                    image: require('@/assets/images/comboD.jpg')
                },
                // ... 更多菜品
            ]
        }
    },
    computed: {
        totalPrice() {
            return this.cartItems.reduce((total, item) => {
                return total + (item.price * item.quantity)
            }, 0)
        }
    },
    methods: {
        showCart() {
            this.cartVisible = true
        },
        handleClose() {
            this.cartVisible = false
        },
        addToCart(meal) {
            const existingItem = this.cartItems.find(item => item.id === meal.id)
            if (existingItem) {
                existingItem.quantity++
            } else {
                this.cartItems.push({
                    ...meal,
                    quantity: 1
                })
            }
            this.cartCount = this.cartItems.reduce((sum, item) => sum + item.quantity, 0)
            Message.success('已添加到购物车')
        },
        removeFromCart(item) {
            const index = this.cartItems.indexOf(item)
            this.cartItems.splice(index, 1)
            this.cartCount = this.cartItems.reduce((sum, item) => sum + item.quantity, 0)
        },
        updateCart() {
            this.cartCount = this.cartItems.reduce((sum, item) => sum + item.quantity, 0)
        },
        checkout() {
            if (this.cartItems.length === 0) {
                Message.warning('购物车是空的')
                return
            }
            Message.success('订单提交成功')
            this.cartItems = []
            this.cartCount = 0
            this.cartVisible = false
        }
    }
}
</script>

<style scoped>
.service-info {
    padding: 40px 20px;
    background: #f8f9fa;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.info-item {
    background: #fff;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
}

.info-item:hover {
    transform: translateY(-5px);
}

.info-item h3 {
    color: #333;
    margin-bottom: 15px;
    font-size: 28px;
    position: relative;
    padding-left: 15px;
}

.info-item h3::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 20px;
    background: #ff6b6b;
    border-radius: 2px;
}

.info-item p {
    color: #666;
    line-height: 1.8;
    margin: 8px 0;
    font-size: 22px;
}

/* 购物车弹窗样式 */
.cart-content {
    min-height: 200px;
}

.empty-cart {
    text-align: center;
    padding: 40px 0;
    color: #999;
}

.empty-cart i {
    font-size: 48px;
    margin-bottom: 10px;
}

.cart-items {
    max-height: 400px;
    overflow-y: auto;
}

.cart-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #eee;
}

.cart-item img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 15px;
}

.item-info {
    flex: 1;
}

.item-info h4 {
    margin: 0 0 8px 0;
    color: #333;
}

.item-control {
    display: flex;
    align-items: center;
    gap: 15px;
}

.cart-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 0 0;
    margin-top: 20px;
    border-top: 1px solid #eee;
}

.total {
    font-size: 18px;
    font-weight: bold;
}

.total span {
    color: #ff6b6b;
}

@media (max-width: 768px) {
    .cart-item {
        flex-direction: column;
        text-align: center;
    }

    .item-control {
        margin-top: 15px;
    }

    .el-dialog {
        width: 90% !important;
    }

    
}

.meal-service {
    width: 100%;
}

.service-banner {
    position: relative;
    height: 500px;
    overflow: hidden;
}

.banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.banner-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
}
.banner-content h1{
    font-size: 76px;
}
.banner-content p{
    font-size: 36px;
}
.meal-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.meal-card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.meal-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.meal-info {
    padding: 15px;
}
.meal-info h3{
    font-size: 26px;
}
.meal-info p{
    font-size: 18px;
}
.meal-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.price {
    color: #ff6b6b;
    font-size: 24px;
    font-weight: bold;
}

.cart-float {
    position: fixed;
    right: 30px;
    bottom: 30px;
    background: #ff6b6b;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}

/* 响应式适配 */
@media (max-width: 768px) {
    .service-banner {
        height: 200px;
    }

    .meal-grid {
        grid-template-columns: 1fr;
    }

    .banner-content h1{
        font-size: 36px;
    }
    .banner-content p{
        font-size: 18px;
    }
}
</style>