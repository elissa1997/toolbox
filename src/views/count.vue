<template>
  <a-row>
    <a-col :xs="{ span: 22, offset: 1 }" :lg="{ span: 14, offset: 5 }">
      <div class="glasscontent">
        <tooltitle :titletext="'倒计时'"></tooltitle>
        <a-card>
          <a-statistic-countdown
            title="距离过年"
            :value="deadline"
            format="D 天 H 时 m 分 s:SSS 秒"
          />
        </a-card>
      </div>
    </a-col>
  </a-row>
</template>

<script>
import tooltitle from "@/components/tooltitle";

export default {
  name: "count",
  components: {
    tooltitle,
  },
  data() {
    return {
      deadline: new Date(2021, 1, 12).getTime(),
    };
  },
};
</script>