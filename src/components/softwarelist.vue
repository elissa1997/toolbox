<template>
  <a-list bordered :data-source="listdata.data">
    <a-list-item slot="renderItem" slot-scope="item">
      {{item.name}}
      <div class="listitemaction">
          <a-icon class="listitemaction-icon" v-if="item.os == 'windows'" type="windows" />
          <a-icon class="listitemaction-icon" v-if="item.os == 'android'" type="android" />
        <a :href="preurl+item.url" target="_blank" :download="item.name">
            <a-button shape="round" icon="download" size="small" type="primary">下载</a-button>
            </a>
      </div>
    </a-list-item>
  </a-list>
</template>
<script>
import { getsoftwarelist } from "@/network/download";

export default {
  name: "downloadlist",
  data() {
    return {
        preurl: "https://cdn.makedream.site/software/",
      listdata: [],
    };
  },
  created() {
    getsoftwarelist().then((res) => {
      this.listdata = res;
    });
  },
};
</script>
<style>
.listitemaction {
  float: right;
}

.listitemaction-icon{
    margin: 0 10px;
}
</style>
