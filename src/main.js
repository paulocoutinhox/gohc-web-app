// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import store from './vuex/store'
import pingFormatFilter from "./filters/ping-format";
import hcStatusFormatFilter from "./filters/hc-status-format";

Vue.config.productionTip = false;
Vue.use(Buefy);

Vue.filter('pingFormat', pingFormatFilter);
Vue.filter('hcStatusFormat', hcStatusFormatFilter);

/* eslint-disable no-new */
new Vue({
	store,
	el: '#app',
	router,
	template: '<App/>',
	components: {App}
});
