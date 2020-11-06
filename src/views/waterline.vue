<template>
  <a-row>
    <a-col :xs="{span:22 ,offset:1}" :lg="{span:14 ,offset:5}">
      <tooltitle :titletext="'水管开关'"></tooltitle>
      <img :src="imgsrc" class="img"/>
      <div style="text-align: center;margin-bottom: 20px;">
        <a-button-group>
            <a-button @click="changesrc(1)">太阳能</a-button>
            <a-button @click="changesrc(2)">上水</a-button>
            <a-button @click="changesrc(3)">热水器(自来水凉水)</a-button>
            <a-button @click="changesrc(4)">热水器(太阳能温水)</a-button>
        </a-button-group>
      </div>
      <waterlinetable></waterlinetable>
    </a-col>
  </a-row>
</template>

<script>
import tooltitle from "@/components/tooltitle";
import waterlinetable from "@/components/waterlinetable";

export default {
  name: "waterline",
  components: {
    tooltitle,
    waterlinetable
  },
  data() {
    return {
      imgsrc: require("@/assets/waterline/default.jpg"),
    };
  },
  methods: {
      changesrc(num){
          if (num == 1) {
              this.imgsrc = require("@/assets/waterline/use_solar.jpg")
          } else if(num == 2){
              this.imgsrc = require("@/assets/waterline/upload_solar.jpg")
          } else if(num == 3){
              this.imgsrc = require("@/assets/waterline/use_heater_incool.jpg")
              
          } else if(num == 4){
              this.imgsrc = require("@/assets/waterline/use_heater_insolar.jpg")
              
          }
      }
  }
};
</script>

<style>
.img{
    width: 100%;
    margin-bottom: 20px;
}
</style>