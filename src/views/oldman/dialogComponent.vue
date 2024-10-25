<template #bodyCell="{row}">
  <el-dialog title="更新" :visible.sync="detailVisible" width="35%">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="昵称">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="formLabelAlign.phone"></el-input>
      </el-form-item>
      <el-form-item label="签名">
        <el-input v-model="formLabelAlign.faction"></el-input>
      </el-form-item>
      <el-button @click="save" type="primary" round
        style="width: 10vw; height: 6vh; font-size: 20px; padding-top: 0.5vh; margin-left: 11vw;">保存</el-button>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: "dialogComponent",
  data() {
    return {
      detailVisible: false,
      labelPosition: 'right',
      formLabelAlign: {
        username: '',
        phone: '',
        faction: ''
      }
    }
  },

  methods: {
    init(id) {
      this.detailVisible = true;
      this.fetchData(id);
    },
    // 回显
    fetchData() {
      const id = localStorage.getItem('id');
      this.$axios
        .get(`/api/oldman/get/${id}`)
        .then(response => {
          if (response.data.code === 200) {
            const data = response.data.data;
            this.formLabelAlign = {
              username: data.username,
              phone: data.phone,
              faction: data.faction,
              // console.log(name);
              
            };
            // console.log(name);
            console.log(data);
            
          } else {
            alert('获取数据失败');
          }
        })
        .catch(error => {
          // 如果请求被拒绝或失败，打印并显示错误信息
          if (error.response) {
            // 服务器端返回的响应
            console.error('服务器响应错误:', error.response.data);
            console.error('状态码:', error.response.status);
            console.error('响应头:', error.response.headers);
            alert('获取数据失败: ' + error.response.data.message);
          } else if (error.request) {
            // 请求已发出，但没有收到响应
            console.error(error.request);
          } else {
            // 发生了触发错误的请求设置问题
            console.error('Error', error.message);
          }
          alert('获取数据失败');
        });
    },
    // 更新数据
    save() {
      const id = localStorage.getItem('id','username','phone','faction');
      this.$axios
        .put(`/api/oldman/save/${id}`, {
          username: this.formLabelAlign.username,
          phone: this.formLabelAlign.phone,
          faction: this.formLabelAlign.faction
        })
        .then(response => {
          if (response.data.code === 200) {
            localStorage.setItem('username', this.formLabelAlign.username);
            localStorage.setItem('phone', this.formLabelAlign.phone);
            localStorage.setItem('faction', this.formLabelAlign.faction);
            alert('更新成功');
          }
          else {
            alert('更新失败');
          }
        })
        .catch(error => {
          console.error('更新失败:', error);
          alert('更新失败');
        });
    }
  }
}
</script>