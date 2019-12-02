import Vue from 'vue';
import App from './App.vue';
import router from './Router/router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'uikit/dist/css/uikit.min.css';
import 'less-loader';
import HomeDropdown from './components/shared/HomeDropdown';
import Hometop from './components/shared/HomeTop';
import filters from './filters/appFilters';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import store from './store/index';
import Spinner from './components/shared/Spinner';
import vuelidate from 'vuelidate';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import AppSocket from './plugins/socketPlugin';


Vue.config.productionTip = false;

Vue.component('HomeTop', Hometop);
Vue.component('HomeDropdown', HomeDropdown);
Vue.component('Spinner', Spinner);

UIkit.use(Icons);

Vue.use(BootstrapVue);
Vue.use(VueToast);
Vue.use(vuelidate);
Vue.use(AppSocket, {connection: process.env.VUE_APP_URI});

// const conn = process.env.VUE_APP_URI

filters();

new Vue({
  router,
  store,
  vuelidate,
  render: h => h(App)
}).$mount('#app');
