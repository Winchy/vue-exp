import Vue from "vue";
import Vuex from "vuex";
import schools from "./modules/schools";
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const myPlugin = (store: any) => {
  store.subscribe((mutation: any, state: any) => {
      console.log(mutation.type, state.schools.count);
  });
};

export default new Vuex.Store({
  modules: {
    schools,
  },
  plugins: [createLogger(), myPlugin]
});
