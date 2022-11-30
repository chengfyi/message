import Vue from 'vue'
import App from './App.vue'
//import ElementUI from 'element-ui';
import {Row, Button} from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

Vue.config.productionTip = false
//全局注入
//Vue.use(ElementUI);
//按需引入
Vue.use(Row)
Vue.use(Button)

new Vue({
  router,//挂载
  el:'#app',
  render: h => h(App),
}).$mount('#app')
