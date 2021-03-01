<template>
  <div class="nav">
    <div class="nav-logo">
      <img class="nav-logo-img" src="../assets/logo.svg" />
    </div>

    <div class="nav-bar">
      <a-menu
        :selectedKeys="[this.$route.path]"
        mode="horizontal"
        popupClassName="glasscard"
        style="
          text-align: end;
          border-bottom: none;
          line-height: calc(var(--height) - 1px);
          margin: 10px 5vw 10px 0;
          height: var(--height);
          background: none;
        "
        :overflowedIndicator="returnicon"
      >
        <a-menu-item key="/">
          <router-link to="/"><a-icon type="home" />主页</router-link>
        </a-menu-item>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="deployment-unit" />小工具列表
          </span>
          <a-menu-item :key="item.path" v-for="item in routeinfo"><router-link :to="item.path"> {{item.title}} </router-link></a-menu-item>
        </a-sub-menu>
        <a-menu-item key="app">
          <a href="https://www.makedream.site/" target="_blank">
            <a-icon type="profile" />返回博客
          </a>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    routeinfo: Array,
  },

  data() {
    return {};
  },

  methods: {
    returnicon() {
      return <a-icon type="menu" style="margin-right:0" />;
    },
  },
};
</script>

<style>
:root {
  --height: 60px;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: rgb(232 232 232) 0px 2px 8px;
  box-shadow: rgb(232 232 232) 0px 2px 8px;
  height: var(--height);
  background-color: white;
}

/* .nav-logo {
  margin: 0 20px;
} */

.nav-logo-img {
  height: 30px;
  width: auto;
  margin: 10px 0 10px 5vw;
}

.nav-bar {
  width: 40vw;
  /* height: var(--height); */
}
</style>
