<template>
  <div>
    <a-row>
      <a-col :xs="{ span: 22, offset: 1 }" :lg="{ span: 14, offset: 5 }">
        <div class="glasscontent">
          <tooltitle :titletext="'服务器监控'"></tooltitle>
          <a-card class="card" title="服务器概览">
            <a-descriptions
              bordered
              :column="{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }"
              size="small"
            >
              <a-descriptions-item label="机房地址">{{
                v2info.node_datacenter
              }}</a-descriptions-item>
              <a-descriptions-item label="操作系统">{{
                v2info.os
              }}</a-descriptions-item>
              <a-descriptions-item label="虚拟化">{{
                v2info.vm_type
              }}</a-descriptions-item>
              <a-descriptions-item label="线路信息"
                >上海-美西(163)</a-descriptions-item
              >
              <a-descriptions-item label="带宽用量">
                <span>{{ datausetoSize }}GB/{{ monthly_datatoSize }}GB</span>
                <a-progress :percent="bandpercent" status="active" />
              </a-descriptions-item>
            </a-descriptions>
          </a-card>

          <a-card class="card" title="V2ray服务状态">
            <p>
              <a-tag>服务名称</a-tag>
              {{ v2ray[0] }}
            </p>
            <p>
              <a-tag>运行状态</a-tag>
              <a-badge
                v-if="v2ray[1] == 'active (running)'"
                status="processing"
              />
              <a-badge v-else status="error" text="Error" />
              {{ v2ray[1] }}
            </p>
            <p>
              <a-tag>主进程号</a-tag>
              {{ v2ray[2] }}
            </p>
            <p>
              <a-tag>运行时长</a-tag>
              {{ v2ray[3] }}
            </p>
          </a-card>

          <a-card class="card" title="KMS服务状态">
            <p>
              <a-tag>服务名称</a-tag>
              {{ kms[0] }}
            </p>
            <p>
              <a-tag>运行状态</a-tag>
              <a-badge
                v-if="kms[1] == 'active (running)'"
                status="processing"
              />
              <a-badge v-else status="error" text="Error" />
              {{ kms[1] }}
            </p>
            <p>
              <a-tag>主进程号</a-tag>
              {{ kms[2] }}
            </p>
            <p>
              <a-tag>运行时长</a-tag>
              {{ kms[3] }}
            </p>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import tooltitle from "@/components/tooltitle";
import { getv2info, getkmsstatus, getv2raystatus } from "@/network/server";

export default {
  name: "server",
  components: {
    tooltitle,
  },
  data() {
    return {
      v2info: {},
      kmsstatus: [],
      v2raystatus: [],
    };
  },

  methods: {},

  computed: {
    v2ray: function () {
      let v2ray = [];
      if (this.v2raystatus.length >= 1) {
        v2ray[0] = this.v2raystatus[0].substring(2, 29);
        v2ray[1] = this.v2raystatus[2].substring(11, 27);
        v2ray[2] = this.v2raystatus[3].substring(11);
        v2ray[3] = this.v2raystatus[2].substring(62);
      }
      return v2ray;
    },

    kms: function () {
      let kms = [];
      if (this.kmsstatus.length >= 1) {
        kms[0] = this.kmsstatus[0].substring(2, 29);
        kms[1] = this.kmsstatus[2].substring(11, 27);
        kms[2] = this.kmsstatus[3].substring(11);
        kms[3] = this.kmsstatus[2].substring(62);
      }
      return kms;
    },

    monthly_datatoSize: function () {
      if (this.v2info.plan_monthly_data === 0) return "0 B";
      var k = 1024, // or 1024
        i = Math.floor(Math.log(this.v2info.plan_monthly_data) / Math.log(k));
      return (this.v2info.plan_monthly_data / Math.pow(k, i)).toPrecision(3);
    },

    datausetoSize: function () {
      if (this.v2info.data_counter === 0) return "0 B";
      var k = 1024, // or 1024
        i = Math.floor(Math.log(this.v2info.data_counter) / Math.log(k));
      return (this.v2info.data_counter / Math.pow(k, i)).toPrecision(3);
    },
    bandpercent: function () {
      return Number(
        (
          Number(this.datausetoSize) / Number(this.monthly_datatoSize)
        ).toPrecision(1)
      );
    },
  },

  created() {
    getv2info().then((res) => {
      if (res == null) {
        (this.v2info.node_datacenter = "N/A"),
          (this.v2info.os = "N/A"),
          (this.v2info.vm_type = "N/A"),
          (this.v2info.plan_monthly_data = 0),
          (this.v2info.data_counter = 0);
        this.$message.warning("厂商API接口响应超时，请重试");
      } else {
        this.v2info = res;
      }
    });

    getkmsstatus().then((res) => {
      this.kmsstatus = res;
    });

    getv2raystatus().then((res) => {
      this.v2raystatus = res;
    });
  },
};
</script>

<style>
.card {
  margin-top: 20px;
}
</style>