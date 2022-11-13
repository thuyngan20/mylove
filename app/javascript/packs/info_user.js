import Vue from "vue/dist/vue.esm";
import vSelect from "vue-select";
Vue.component("v-select", vSelect);
import selectUser from '../src/component/selectUser.vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#vvv-select_user",
    components: {
      "select-user": selectUser
    }
  });
});