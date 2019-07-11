<template>
  <div id="app" class="app">
    <aside class="aside">
      <h1 class="aside__header">教育大脑{{count}}</h1>
      <div class="menu-selector">
        <button v-for="(menu, menuId) in menus" :key="menu.text" @click.prevent="showMenu(menuId)">{{menu.text}}</button>
      </div>
      <div class="menu-container" v-for="(menu, menuId) in menus" :key="menu.text">
        <transition name="menu-fade" mode="out-in"><MainMenu v-if="menuId === currentMenu" :menu="menu" /></transition>
      </div>
    </aside>
    <div id="content">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

import menus from "@/configs/main_menus";
import MainMenu from "@/components/MainMenu.vue";

export default Vue.extend({
  data: () => {
    return {
      menus,
      currentMenu: 0,
    };
  },
  computed: {
    ...mapState("schools", {
      count: ({count}): number => {
        return count;
      },
    }),
  },
  components: {
    MainMenu,
  },
  methods: {
    showMenu(menuId: number) {
      this.currentMenu = menuId;
      this.$store.commit("schools/increment", {amount: 10}, {  });
    },
  },
});
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

.aside {
  width: 300px;
}

.menu-fade-enter-active, .menu-fade-leave-active {
  transition: opacity 0.5s;
}

.menu-fade-enter , .menu-fade-leave-to {
  opacity: 0;
}

#content {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
