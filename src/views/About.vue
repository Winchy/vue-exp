<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li><router-link to="/about/">/foo</router-link></li>
      <li><router-link to="/about/ab2">/bar</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
export default Vue.extend({
  data() {
    return {
      a: 1,
    };
  },
  beforeCreate() {
    // console.log("beforeCreate");
  },
  created() {
    // console.log("created", this.a);
  },
  beforeMount() {
    // console.log("beforeMount");
  },
  mounted() {
    // console.log("mounted");
  },
  beforeRouteEnter(to, from, next) {
    // console.log("beforeRouteEnter", to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    // console.log("beforeRouteLeave", to, from);
    next();
  },
});
</script>

