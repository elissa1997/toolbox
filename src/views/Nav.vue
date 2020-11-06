<template>
  <div>
    <a-row style="border-bottom: 1px solid #e8e8e8">
      <a-col :xs="{ span: 22, offset: 1 }" :lg="{ span: 18, offset: 3 }">
        <a-menu mode="horizontal" :selectedKeys="[this.$route.path]">
          <a-menu-item key="/">
            <router-link to="/"> <a-icon type="home" />主页 </router-link>
          </a-menu-item>
          <a-menu-item key="blog">
            <a
              href="https://www.makedream.site"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a-icon type="read" />返回博客
            </a>
          </a-menu-item>
          <!-- <a-menu-item key="app" disabled> <a-icon type="appstore" />Navigation Two </a-menu-item> -->

          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper">
              <a-icon type="tool" />小工具
            </span>
            <a-menu-item key="/server">
              <router-link to="/server">服务器监控</router-link>
            </a-menu-item>
            <a-menu-item key="/count">
              <router-link to="/count">倒计时</router-link>
            </a-menu-item>
            <a-menu-item key="/download">
              <router-link to="/download">软件下载</router-link>
            </a-menu-item>
            <a-menu-item key="/zhihu">
              <router-link to="/zhihu">文章备份</router-link>
            </a-menu-item>
            <a-menu-item key="/waterline">
              <router-link to="/waterline">水管开关</router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.ant-menu-horizontal {
  border-bottom: 0px !important;
}
</style>
