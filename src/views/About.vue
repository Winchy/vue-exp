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
});
</script>

