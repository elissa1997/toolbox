<template>
  <div>
    <div v-if="status != 'success'" style="text-align: center;">
      <a-input-password
        v-model="password"
        placeholder="input password"
        style="max-width: 400px; margin: 20px 0;"
      />
      <br />
      <a-button type="primary" icon="safety-certificate" @click="auth">验证</a-button>
    </div>

    <a-collapse v-if="status == 'success'">
      <a-collapse-panel v-for="(item,i) in configlist" :key="item.name" :header="item.name">
        <p id="config" style="word-break: break-all;">{{ item.url }}</p>
        <div class="option">
          <div :id="i"></div>
          <a-button-group>
            <a-button
              size="small"
              class="copy-btn"
              :data-clipboard-text="item.url"
              @click="copy"
            >复制链接</a-button>
            <a-button size="small" @click="qrcode(item.url,i)">生成二维码</a-button>
          </a-button-group>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import { getsoftwareconfig } from "@/network/download";
import { Base64 } from "js-base64";
import QRCode from "qrcodejs2";
import Clipboard from "clipboard";

export default {
  name: "downloadconfig",
  data() {
    return {
      password: "",
      configlist: [],
      status: "",
    };
  },
  methods: {
    auth() {
      getsoftwareconfig(this.password).then((res) => {
        this.status = res.msg;
        this.configlist = res.data;
        this.splitarray(res.data);
      });
    },

    splitarray(array) {
      for (let key in array) {
        let vmess = {};
        let shareurl = "";
        vmess.v = "2";
        vmess.add = "tool.makedream.site";
        vmess.port = "443";
        vmess.aid = "20";
        vmess.net = "ws";
        vmess.type = "none";
        vmess.host = "";
        vmess.path = "/crosswall";
        vmess.tls = "tls";
        vmess.ps = "洛杉矶CN2-" + array[key].name;
        vmess.id = array[key].UUID;
        shareurl = "vmess://" + Base64.encode(JSON.stringify(vmess));
        // console.log(shareurl);
        this.configlist[key].url = shareurl;
      }
    },

    qrcode(url, i) {
      document.getElementById("" + i).innerHTML = "";
      new QRCode(document.getElementById("" + i), {
        text: url,
        width: 150,
        height: 150,
        colorDark: "#333333", //二维码颜色
        colorLight: "#ffffff", //二维码背景色
        correctLevel: QRCode.CorrectLevel.L, //容错率，L/M/H
        render: "table"
      });
    },

    copy() {
        if (clipboard) {
          clipboard.destroy();
        }
      let clipboard = new Clipboard(".copy-btn");
      // let that = this
      clipboard.on("success", () => {
        this.$message.success("复制成功");
          clipboard.destroy();

      });
      clipboard.on("error", () => {
        this.$message.warning("浏览器暂不支持，手动复制");
          clipboard.destroy();

      });
    },
  },
};
</script>

<style>
.option {
  text-align: center;
}

.option img {
  display: initial !important;
  margin-bottom: 14px;
}
</style>