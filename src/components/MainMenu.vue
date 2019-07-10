<template>
    <div class="main-menu">
        <ul class="menu">
            <li class="menu__item" v-for="(menuItem, idx) in menu.menu" v-bind:key="menuItem.text">
                <div v-if="menuItem.submenu">
                    <label v-bind:for="'menu' + idx">{{ menuItem.text }}</label>
                    <input type="radio" name="menu" :checked="idx===0" v-bind:id="'menu' + idx" />
                    <ul class="sub-menu">
                        <li class="sub-menu__item" v-for="submenuItem in menuItem.submenu" v-bind:key="submenuItem.text">
                        <router-link v-bind:to="submenuItem.target">{{ submenuItem.text }}</router-link>
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <router-link v-bind:to="menuItem.target">{{ menuItem.text }}</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "MainMenu",
    props: {
        menu: Object,
    },
});
</script>

<style lang="scss" scoped>
.sub-menu__item {
  height: 0;
  overflow: hidden;
}

input[name="menu"] {
  display: none;
  &:not(:checked) ~.sub-menu >.sub-menu__item {
    height: 0;
    transition: 0.25s ease-in-out 0s;
  }
  &:checked ~.sub-menu > .sub-menu__item {
    height: 1.5rem;
    transition: 0.25s ease-in-out 0s;
  }
}
</style>

