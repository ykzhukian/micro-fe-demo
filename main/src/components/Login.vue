<template>
  <span>
    <a-button type="primary" @click="showModal" v-if="!login">
      登录
    </a-button>
    <a-modal v-model="visible" title="登录平台" ok-text="确认" cancel-text="取消" @ok="handleLogin">
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleLogin">
        <a-form-item label="用户名">
          <a-input
            v-model="username"
          />
        </a-form-item>
        <a-form-item label="密码">
          <a-input
            type="password"
          />
        </a-form-item>
      </a-form>
    </a-modal>
    <span v-if="login">欢迎，{{username}}</span>
  </span>
</template>
<script>
export default {
  props: ['update'],
  data() {
    return {
      username: '',
      login: false,
      visible: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
    handleLogin() {
      this.login = true
      this.visible = false
      this.$emit('update', this.username)
    },
  },
};
</script>
