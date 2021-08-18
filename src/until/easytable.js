import Vue from "vue";
// 引入样式
import "vue-easytable/libs/theme-default/index.css";
// 引入组件库
import { VeTable, VePagination, VeIcon, VeLoading, VeLocale } from "vue-easytable";

Vue.use(VeTable);
Vue.use(VePagination);
Vue.use(VeIcon);
Vue.use(VeLoading);

Vue.prototype.$veLoading = VeLoading;
Vue.prototype.$veLocale = VeLocale;
