<template>
  <div>
    <Nav></Nav>
    <router-view class="content"></router-view>
    <foot></foot>
  </div>
</template>

<script>
import Nav from "@/views/Nav.vue";
import foot from '@/components/foot.vue'

export default {
  name: "App",
  components: {
    Nav,
    foot
  },
};
</script>

<style>
.content{
  margin: 40px 0;
  min-height: 70vh;
}
</style>
