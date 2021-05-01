import Vue from "vue";
import App from "./App.vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import './assets/css/all.css';

const axiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

axiosInstance
  .get("https://localhost:8081")
  .then(response => {
    console.log(response);
  })
  .catch(e => console.log(e));

Vue.use(VueAxios, axios)
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
