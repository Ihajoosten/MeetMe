import Vue from "vue";
import App from "./App.vue";
import router from "./Router/router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "uikit/dist/css/uikit.min.css";
import 'less-loader';
import HomeDropdown from "./components/shared/HomeDropdown";
import Hometop from "./components/shared/HomeTop";
import moment from "moment";
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';


UIkit.use(Icons);

Vue.config.productionTip = false;

Vue.component("HomeTop", Hometop);
Vue.component("HomeDropdown", HomeDropdown);

Vue.filter("capitalize", function(value) {
  if (value && typeof value === "string") {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  return "";
});

Vue.filter("date", value => {
  if (!value) {
    return "";
  }

  return moment(value).format("DD MMM, YYYY");
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
