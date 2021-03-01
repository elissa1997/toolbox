<template>
  <div class="foot">
    <a-row>
      <a-col :xs="{span:22 ,offset:1}" :lg="{span:18 ,offset:3}">
        <a-row>
          <a-col :xs="24" :lg="8">
            <div class="footitem">
              <p class="footitem-title">工具箱-ToolBox</p>
              <div class="footitem-content">
                <p>Design & Created by Elissa</p>
                <a-modal v-model="visible" title="扫一扫添加好友" :footer="null">
                  <div style="text-align: center">

                  <img src="@/assets/footicon/wechatqr.png" style="width: 200px;">
                  </div>
                </a-modal>
                <p>
                  <a
                    href="tencent://Message/?Uin=524948583&websiteName=q-zone.qq.com&Menu=yes"
                    target="_blank"
                  >
                    <a-icon type="qq" style="margin-right: 5px;" />QQ
                  </a>
                  <a-divider type="vertical" />
                  <a @click="wechat">
                    <a-icon type="wechat" style="margin-right: 5px;" />微信
                  </a>
                  <a-divider type="vertical" />
                  <a href="mailto:elissa@qq.com" target="_blank">
                    <a-icon type="mail" style="margin-right: 5px;" />邮件
                  </a>
                </p>
              </div>
            </div>
          </a-col>

          <a-col :xs="24" :lg="8">
            <div class="footitem">
              <p class="footitem-title">技术支持</p>
              <div class="footitem-content">
                <p><img src="@/assets/footicon/ant.svg" style="width:14px; margin-right: 5px;">Ant Design组件库</p>
                <p><img src="@/assets/footicon/vue.png" style="width:14px; margin-right: 5px;">VUE框架</p>
              </div>
            </div>
          </a-col>

        <a-col :xs="24" :lg="8">
            <div class="footitem">
              <p class="footitem-title">更多内容</p>
              <div class="footitem-content">
                <a href="https://www.makedream.site" target="_blank">我的博客</a>
              </div>
            </div>
          </a-col>

        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "foot",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    wechat() {
        this.visible = true
    },
  },
};
</script>

<style>
.foot {
  background-color: #0f344a;
  padding: 20px 0;
}
.footitem {
  padding: 0 10px;
  margin: 30px 0;
}
.footitem-title {
  color: white;
  margin-bottom: 15px 0;
  font-size: 17px;
}

.footitem-content,
.footitem-content a {
  color: #dadada;
  /* line-height: 15px; */
}
</style>