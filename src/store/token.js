import { defineStore } from "pinia";
import { jwtDecode } from 'jwt-decode';
// import { ref } from 'vue';

// 使用 defineStore 创建一个名为 'token' 的存储仓库
export const useTokenStore = defineStore('token', {
    // 启用持久化
    persist: {
        enabled: true,
    },
    // 定义状态
    state: () => ({
        token: null,
        username: '',
        gender: null,
        faction: '',
    }),
    // 定义修改状态的方法
    actions: {
        updateToken(val) {
            const decodedToken = jwtDecode(val);
            this.token = val;
            this.username = decodedToken.username;
            this.gender = decodedToken.gender;
            this.faction = decodedToken.faction;
        },
        removeToken() {
            this.token = null;
            this.username = '';
            this.gender = null;
            this.faction = '';
        }
    }
});

// 如果需要默认导出，可以添加以下代码
export default useTokenStore;