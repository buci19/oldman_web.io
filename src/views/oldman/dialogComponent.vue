<template #bodyCell="{row}">
  <!-- 修改 dialog 样式，添加圆角 -->
  <el-dialog title="更新" :visible.sync="detailVisible" width="60%" custom-class="custom-dialog">
    <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" class="form-container">
      <!-- 左侧表单 -->
      <div class="form-column">
        <el-form-item label="昵称">
          <el-input v-model="formLabelAlign.username" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="formLabelAlign.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="formLabelAlign.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="身高">
          <el-input v-model="formLabelAlign.height" placeholder="请输入身高(cm)"></el-input>
        </el-form-item>
        <el-form-item label="体重">
          <el-input v-model="formLabelAlign.weight" placeholder="请输入体重(kg)"></el-input>
        </el-form-item>
        <el-form-item label="血型">
          <el-select v-model="formLabelAlign.bloodType" placeholder="请选择血型">
            <el-option label="A型" value="A"></el-option>
            <el-option label="B型" value="B"></el-option>
            <el-option label="O型" value="O"></el-option>
            <el-option label="AB型" value="AB"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="兴趣爱好">
          <el-select v-model="formLabelAlign.hobbies" multiple placeholder="请选择您的兴趣爱好">
            <el-option v-for="item in hobbyOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </div>

      <!-- 右侧表单 -->
      <div class="form-column">
        <el-form-item label="紧急联系人">
          <el-input v-model="formLabelAlign.emergencyContact" placeholder="请输入紧急联系人姓名" style="min-width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="紧急电话">
          <el-input v-model="formLabelAlign.emergencyPhone" placeholder="请输入紧急联系电话"></el-input>
        </el-form-item>
        <el-form-item label="过敏史">
          <el-input type="textarea" v-model="formLabelAlign.allergies" placeholder="请输入过敏史"></el-input>
        </el-form-item>
        <el-form-item label="慢性病史">
          <el-input type="textarea" v-model="formLabelAlign.chronicDiseases" placeholder="请输入慢性病史"></el-input>
        </el-form-item>
        <el-form-item label="签名">
          <el-input v-model="formLabelAlign.faction" placeholder="请输入签名，不能超过126个字"></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <el-select v-model="formLabelAlign.address" placeholder="请选择您的地区">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

      </div>
    </el-form>

    <!-- 调整按钮位置 -->
    <div class="dialog-footer">
      <el-button @click="save" type="primary" round>保存</el-button>
    </div>
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
        faction: '',
      },
      // 新增兴趣爱好选项数据
      hobbyOptions: [{
        value: '阅读',
        label: '阅读'
      }, {
        value: '下棋',
        label: '下棋'
      }, {
        value: '书法',
        label: '书法'
      }, {
        value: '绘画',
        label: '绘画'
      }, {
        value: '园艺',
        label: '园艺'
      }, {
        value: '太极',
        label: '太极'
      }],
      //地区内容
      options: [{
        value: '北京',
        label: '北京'
      }, {
        value: '上海',
        label: '上海'
      }, {
        value: '广东',
        label: '广东'
      }, {
        value: '安徽',
        label: '安徽'
      }, {
        value: '河南',
        label: '河南'
      }, {
        value: '其他',
        label: '其他'
      }],
      value: ''
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
              address: data.address,
              hobbies: data.hobbies, // 兴趣爱好
              age: data.age,
              height: data.height,
              weight: data.weight,
              bloodType: data.bloodType,
              emergencyContact: data.emergencyContact,
              emergencyPhone: data.emergencyPhone,
              allergies: data.allergies,
              chronicDiseases: data.chronicDiseases,
            };
            console.log(data);
          } else {
            this.$message.error('获取数据失败');
          }
        })
        .catch(error => {
          if (error.response) {
            console.error('服务器响应错误:', error.response.data);
            console.error('状态码:', error.response.status);
            console.error('响应头:', error.response.headers);
            this.$message.error('获取数据失败: ' + error.response.data.message);
          } else if (error.request) {
            console.error(error.request);
          } else {
            console.error('Error', error.message);
          }
          this.$message.error('获取数据失败');
        });
    },
    // 更新数据
    save() {
      const id = localStorage.getItem('id');
      // 确保 hobbies 是数组格式，并且转换为字符串
      const hobbiesData = Array.isArray(this.formLabelAlign.hobbies)
        ? this.formLabelAlign.hobbies.join(',')  // 将数组转换为逗号分隔的字符串
        : '';
      this.$axios
        .put(`/api/oldman/save/${id}`, {
          username: this.formLabelAlign.username,
          phone: this.formLabelAlign.phone,
          faction: this.formLabelAlign.faction,
          address: this.formLabelAlign.address,
          hobbies: hobbiesData, // 确保发送数组格式
          age: this.formLabelAlign.age,
          height: this.formLabelAlign.height,
          weight: this.formLabelAlign.weight,
          bloodType: this.formLabelAlign.bloodType,
          emergencyContact: this.formLabelAlign.emergencyContact,
          emergencyPhone: this.formLabelAlign.emergencyPhone,
          allergies: this.formLabelAlign.allergies,
          chronicDiseases: this.formLabelAlign.chronicDiseases,
        })
        .then(response => {
          if (response.data.code === 200) {
            localStorage.setItem('username', this.formLabelAlign.username);
            localStorage.setItem('phone', this.formLabelAlign.phone);
            localStorage.setItem('faction', this.formLabelAlign.faction);
            localStorage.setItem('address', this.formLabelAlign.address);
            localStorage.setItem('hobbies', JSON.stringify(hobbiesData)); // 将数组转换为字符串存储
            localStorage.setItem('age', this.formLabelAlign.age);
            localStorage.setItem('height', this.formLabelAlign.height);
            localStorage.setItem('weight', this.formLabelAlign.weight);
            localStorage.setItem('bloodType', this.formLabelAlign.bloodType);
            localStorage.setItem('emergencyContact', this.formLabelAlign.emergencyContact);
            localStorage.setItem('emergencyPhone', this.formLabelAlign.emergencyPhone);
            localStorage.setItem('allergies', this.formLabelAlign.allergies);
            localStorage.setItem('chronicDiseases', this.formLabelAlign.chronicDiseases);
            
            this.$message.success('更新成功');
            // 关闭对话框
            this.detailVisible = false;
            // 刷新页面
            window.location.reload();
          }
          else {
            this.$message.error('更新失败，请检查输入是否正确');
          }
        })
        .catch(error => {
          console.error('更新失败:', error);
          this.$message.error('更新失败，请检查输入是否正确');
        });
    }
  }
}
</script>

<style scoped>
.custom-dialog {
  border-radius: 15px;
  overflow: hidden;
}

.form-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.form-column {
  flex: 1;
  min-width: 280px;
}

.dialog-footer {
  text-align: center;
  margin-top: 20px;
}

.dialog-footer .el-button {
  width: 120px;
  height: 40px;
  font-size: 16px;
}

/* 覆盖 element-ui 的默认样式 */
:deep(.el-dialog) {
  border-radius: 15px;
}

:deep(.el-dialog__header) {
  padding: 20px;
  border-bottom: 1px solid #eee;
}

:deep(.el-dialog__body) {
  padding: 30px;
}
</style>