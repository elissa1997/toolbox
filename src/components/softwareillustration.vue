<template>
  <div>
    <a-collapse v-model="activeKey">
      <a-collapse-panel key="1" header="特别提醒">
        <div class="img">
          <img src="@/assets/illustration/ISP.jpg" />
        </div>
        <a-alert
          message="晚高峰时间速度较慢"
          description="科学上网使用电信163线路，出国与回程方向使用163家庭宽带网络，国内汇聚层较拥挤"
          type="warning"
          show-icon
        />
      </a-collapse-panel>
      <a-collapse-panel key="2" header="Win端使用说明">
        <ol>
          <li>下载科学上网-PC</li>
          <li>解压到同名文件夹，并找到合适位置存放</li>
          <li>找到刚才存放目录，进入文件夹，找到v2rayN.exe并打开</li>
          <li>双击右下角任务栏中的图标</li>
          <div class="img-con">
            <img src="@/assets/illustration/illustrate-1.png" />
          </div>
          <li>向管理员询问链接，并复制链接</li>
          <li>
            在程序主界面选择，
            <b>服务器 -> 从剪切板导入批量URL</b>，即可导入服务器配置
          </li>
          <div class="img-con">
            <img src="@/assets/illustration/illustrate-2.png" />
          </div>

          <li>
            导入成功后关闭窗口，在
            <b>右下角图标 -> 右键 -> 服务器 -></b> 选择刚才导入的服务器
          </li>
          <div class="img-con">
            <img src="@/assets/illustration/illustrate-3.png" />
          </div>

          <li>
            <b>右下角图标 -> 右键 -> Http代理 -> 开启Http代理并自动配置代理服务器</b>
          </li>
          <div class="img-con">
            <img src="@/assets/illustration/illustrate-4.png" />
          </div>

          <li>右下角图标 为红色即可科学上网</li>
          <li>
            不使用时需要及时退出，
            <b>右下角图标 -> 退出</b>
          </li>
        </ol>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="安卓端使用说明">
        <ol>
          <li>下载科学上网-安卓</li>
          <li>向管理员询问链接，并复制链接</li>
          <li>
            打开BifrostV，顶部
            <b>添加图标 -> 导入 -> 从剪切板导入</b>
          </li>
          <div class="img-con">
            <img src="@/assets/illustration/illustrate-5.jpg" />
          </div>
          <li>选中所导入配置，被选中的配置左侧为深绿色</li>
          <div class="img-con">
            <img src="@/assets/illustration/illustrate-6.jpg" />
          </div>
          <li>点击下方图标，即可科学上网</li>
          <div class="img-con">
            <img src="@/assets/illustration/illustrate-7.jpg" />
          </div>
          <li>第一次使用时，同意建立科学上网连接</li>
          <div class="img-con">
            <img src="@/assets/illustration/illustrate-8.jpg" />
          </div>
          <li>
            不使用时需要及时退出，再次
            <b>下方角图标</b>或
            <b>清理后台</b>即可
          </li>
        </ol>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeKey: ["1"],
    };
  },
  watch: {
    activeKey(key) {
      console.log(key);
    },
  },
};
</script>

<style>
.img {
  text-align: center;
}

.img img,
.img-con img {
  max-width: 600px;
  height: auto;
}

@media screen and (max-width: 600px) {
  .img img,
  .img-con img {
    max-width: 100%;
    height: auto;
  }
}
</style>
