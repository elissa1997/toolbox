<template>
  <div>
    <Nav :routeinfo="routeinfo"></Nav>
    <router-view class="content" :routeinfo="routeinfo"></router-view>
    <foot></foot>
  </div>
</template>

<script>
import Nav from "@/views/Nav.vue";
import foot from "@/components/foot.vue";

export default {
  name: "App",
  data() {
    return {
      routeinfo: [
        {
          key: 1,
          path: "/server",
          img: require("@/assets/homeicon/server.png"),
          title: "服务器监控",
          description: "KMS&科学上网服务器监控",
        },
        {
          key: 2,
          path: "/count",
          img: require("@/assets/homeicon/countdown.png"),
          title: "倒计时",
          description: "重大事件倒计时",
        },
        {
          key: 3,
          path: "/download",
          title: "软件下载",
          img: require("@/assets/homeicon/download.png"),
          description: "常用软件下载与配置部署",
        },
        // {
        //   key: 4,
        //   path: "/zhihu",
        //   img: require("@/assets/homeicon/zhihu.png"),
        //   title: "文章备份",
        //   description: "知乎文章备份",
        // },
        {
          key: 4,
          path: "/waterline",
          img: require("@/assets/homeicon/faucet.png"),
          title: "水管开关",
          description: "水管路线开关图",
        },
      ],
    };
  },
  components: {
    Nav,
    foot,
  },
};
</script>

<style>
.content {
  padding: 40px 0;
  min-height: 80vh;
  background-image: url(./assets/background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
