import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import "./style/style.scss";

let uuid = 0;

Vue.mixin({
  beforeCreate() {
    this.uuid = uuid.toString();
    uuid += 1;
  },
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
