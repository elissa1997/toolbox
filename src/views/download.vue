<template>
  <a-row>
    <a-col :xs="{span:22 ,offset:1}" :lg="{span:14 ,offset:5}">
      <tooltitle :titletext="'软件下载'"></tooltitle>
      <div>
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" tab="软件列表">
              <softwarelist></softwarelist>
          </a-tab-pane>
            <a-tab-pane key="2" tab="使用说明">
<softwareillustration></softwareillustration>
          </a-tab-pane>
          <a-tab-pane key="3" tab="配置部署">
              <softwareconfig></softwareconfig>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-col>
  </a-row>
</template>

<script>
import tooltitle from "@/components/tooltitle";
import softwarelist from "@/components/softwarelist";
import softwareconfig from "@/components/softwareconfig";
import softwareillustration from "@/components/softwareillustration";



export default {
  name: "download",
  components: {
    tooltitle,
    softwarelist,
    softwareconfig,
    softwareillustration
  },
  data() {
    return {};
  },
};
</script>

<style>
/* .ant-tabs-nav-scroll{
    text-align: center;
} */
</style>