import { createApp } from "vue";
import App from "./App.vue";
import Popper from "vue3-popper";

import "./assets/main.css";

const app = createApp(App);
app.component("PopperTooltip", Popper);
app.mount("body");
