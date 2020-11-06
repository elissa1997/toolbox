<template>
  <div>

    <a-row  class="home">
      <a-col :xs="{span:22 ,offset:1}" :lg="{span:18 ,offset:3}">
        <a-row :gutter="15">

        <div v-for="item in cardinfo" :key="item.id">
          <a-col :xs="24" :lg="6">
            <router-link :to="item.path">
            <a-card hoverable style="margin: 20px 0; ">
              <img
                slot="cover"
                alt="example"
                :src="item.img"
                style="margin: 20px 0; 
                margin-left: auto;
                margin-right: auto;
                width: 150px;
                height: 150px;"
              />
              <a-divider dashed  style="margin-top:0"/>
              <a-card-meta :title="item.title">
                <template slot="description">{{item.description}}</template>
              </a-card-meta>
            </a-card>
            </router-link>
          </a-col>
        </div>
        </a-row>
      </a-col>
    </a-row>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      cardinfo: [
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
        {
          key: 4,
          path: "/zhihu",
          img: require("@/assets/homeicon/zhihu.png"),
          title: "文章备份",
          description: "知乎文章备份",
        },
        {
          key: 5,
          path: "/waterline",
          img: require("@/assets/homeicon/faucet.png"),
          title: "水管开关",
          description: "水管路线开关图"
        }
      ],
    };
  },
  components: {

  },
};
</script>

<style>

</style>
