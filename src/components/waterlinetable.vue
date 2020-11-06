<template>
  <a-table :columns="columns" :data-source="data" bordered :pagination="false" size="middle">
    <span slot="valve1" slot-scope="text, record">
      <a-tag style="margin: 0;" v-if="record.valve1 == '开'" color="#87d068">开</a-tag>
      <a-tag style="margin: 0;" v-if="record.valve1 == '关'" color="#f50">关</a-tag>
    </span>
        <span slot="valve2" slot-scope="text, record">
      <a-tag style="margin: 0;" v-if="record.valve2 == '开'" color="#87d068">开</a-tag>
      <a-tag style="margin: 0;" v-if="record.valve2 == '关'" color="#f50">关</a-tag>
    </span>
        <span slot="valve3" slot-scope="text, record">
      <a-tag style="margin: 0;" v-if="record.valve3 == '开'" color="#87d068">开</a-tag>
      <a-tag style="margin: 0;" v-if="record.valve3 == '关'" color="#f50">关</a-tag>
    </span>
        <span slot="valve4" slot-scope="text, record">
      <a-tag style="margin: 0;" v-if="record.valve4 == '开'" color="#87d068">开</a-tag>
      <a-tag style="margin: 0;" v-if="record.valve4 == '关'" color="#f50">关</a-tag>
    </span>
  </a-table>
</template>

<script>
const columns = [
  {
    title: "使用模式",
    dataIndex: "mode"
  },
  {
    title: "阀门1",
    dataIndex: "valve1",
    scopedSlots: { customRender: "valve1" },
    align: "center"
  },
  {
    title: "阀门2",
    dataIndex: "valve2",
    scopedSlots: { customRender: "valve2" },
    align: "center"
  },
  {
    title: "阀门3",
    dataIndex: "valve3",
    scopedSlots: { customRender: "valve3" },
    align: "center"
  },
  {
    title: "阀门4",
    dataIndex: "valve4",
    scopedSlots: { customRender: "valve4" },
    align: "center"
  }
];

const data = [
  {
    key: "1",
    mode: "使用太阳能",
    valve1: "关",
    valve2: "关",
    valve3: "关",
    valve4: "开"
  },
  {
    key: "2",
    mode: "太阳能上水",
    valve1: "开",
    valve2: "关",
    valve3: "开",
    valve4: "关"
  },
  {
    key: "3",
    mode: "使用热水器(自来水)",
    valve1: "关",
    valve2: "开",
    valve3: "开",
    valve4: "关"
  },
  {
    key: "4",
    mode: "使用热水器(太阳能)",
    valve1: "开",
    valve2: "开",
    valve3: "关",
    valve4: "关"
  }
];

export default {
  name: "waterlinetable",
  data() {
    return {
      data,
      columns
    };
  }
};
</script>