<template>
  <div>
    <a-row class="home">
      <a-col :xs="{ span: 22, offset: 1 }" :lg="{ span: 18, offset: 3 }">
        <a-row :gutter="15">
          <div v-for="item in routeinfo" :key="item.key">
            <a-col :xs="24" :lg="6">
              <router-link :to="item.path">
                <div class="homecard glasscard">
                  <img :src="item.img" class="homecard-img" />
                  <div class="homecard-meta">
                    <p class="font_l1">{{ item.title }}</p>
                    <p class="font_l2">{{ item.description }}</p>
                  </div>
                </div>
              </router-link>
            </a-col>
          </div>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  props: {
    routeinfo: Array,
  },
  data() {
    return {
    };
  },
  components: {},
};
</script>

<style>
.homecard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
  padding: 20px 10px;
  /* max-height: 230px; */
  box-shadow: 0 6px 25px 0 rgba(83, 83, 83, 0.37);
  transition: all 0.3s;
}

.homecard:hover{
  box-shadow: 0 10px 30px 2px rgba(83, 83, 83, 0.5);

}

.homecard-img {
  margin: 20px 0;
  margin-left: auto;
  margin-right: auto;
  width: 110px;
  height: 110px;
}
.homecard-meta{
  text-align: center;
  text-shadow: 0 0 4px rgba(0,0,0,0.7) ;
}
</style>
