<template>
  <div class="wrapper">
    <v-topNav></v-topNav>
    <v-leftNav></v-leftNav>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <v-tag></v-tag>
      <div class="content">
        <router-view></router-view>
        <v-footer></v-footer>
      </div>
    </div>
  </div>
</template>

<script>
import vLeftNav from "@/components/common/LeftNav.vue";
import vTopNav from "@/components/common/TopNav.vue";
import vTag from "@/components/common/Tag.vue";
import vFooter from "@/components/common/Footer.vue";
import bus from "@/components/common/bus.js";
export default {
  name: "Home",
  data() {
    return {
      collapse: false
    };
  },
  components: {
    vLeftNav,
    vTopNav,
    vTag,
    vFooter
  },
  created() {
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  }
};
</script>
 
