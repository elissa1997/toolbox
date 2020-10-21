<template>
  <div>
    <p class="tooltitle">{{titletext}}</p>
    <a-divider dashed/>
  </div>
</template>

<script>
export default {
    name: "tooltitle",
    props: {
        titletext: String
    },
    data() {
        return {

        }
    }
}
</script>

<style>
.tooltitle{
  text-align: center;
  font-size: 20px;
}
</style>