import Vue from 'vue';

// CSS重置的现代替代方法
import 'normalize.css/normalize.css';
// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// global css
import '@/styles/index.scss';

import App from './App';
import store from './store';
import router from './router';

// icon
import '@/icons';
// 权限控制
// import '@/permission' 

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
