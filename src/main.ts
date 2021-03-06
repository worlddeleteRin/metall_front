import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueLazyLoad  from "vue3-lazyload";
// import main styles file
import "./main.css"
import 'mosha-vue-toastify/dist/style.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(VueLazyLoad)

app.mount("#app");
