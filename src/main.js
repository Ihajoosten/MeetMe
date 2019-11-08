import Vue from "vue";
import App from "./App.vue";
import router from "./Router/router";
import AppDropdown from "./components/shared/AppDropdown";
import AppHero from "./components/shared/AppHero";
import moment from "moment";
Vue.config.productionTip = false;

Vue.component("AppHero", AppHero);
Vue.component("AppDropdown", AppDropdown);

Vue.filter("capitalize", function(value) {
  if (value && typeof value === "string") {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  return "";
});

Vue.filter("day", value => {
  if (!value) {
    return "";
  } 

  return moment(value).format("DD");
});

Vue.filter("month", value => {
  if (!value) {
    return "";
  } 

  return moment(value).format("MMMM");
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
