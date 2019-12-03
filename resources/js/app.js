require("./bootstrap");
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

window.Vue = require("vue");
Vue.use(BootstrapVue);

let axios = require("axios");
Vue.component("navbar", require("./components/Navbar.vue").default);
Vue.component(
    "footercomponent",
    require("./components/FooterComponent.vue").default
);

const app = new Vue({
    el: "#app"
});
