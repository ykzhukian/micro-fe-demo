<template>
  <div class="main">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :selectedKeys="[selected]" @select="handleChange">
          <a-menu-item key="laravel">
            <a-icon type="user" />
            <span>Larave 项目</span>
          </a-menu-item>
          <a-menu-item key="vue3">
            <a-icon type="video-camera" />
            <span>Vue3 项目</span>
          </a-menu-item>
          <a-menu-item key="react">
            <a-icon type="upload" />
            <span>React 项目</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <login />
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          {{selected}}
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import Login from './components/Login'

export default {
  data() {
    return {
      collapsed: false,
      selected: 'laravel'
    };
  },
  components: {
    Login,
  },
  methods: {
    handleChange({ key }) {
      this.selected = key
    }
  },
};
</script>
<style>
.main section {
  height: 100vh;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>