import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index";

import "@/style/reset.css";
import "@/mobile/flexible";
import { recomMusicApi } from "@/api";
async function fn() {
  const res = await recomMusicApi();
}
fn();

Vue.config.productionTip = false;
//vant组件
import {
  Tabbar,
  TabbarItem,
  NavBar,
  Col,
  Row,
  Image as VanImage,
  Cell,
  CellGroup,
  Icon,
  Search,
  List,
} from "vant";
Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Icon);
Vue.use(Search);
//---------------------------------分割线
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
