import type { App } from "vue";
import VerAlert from "./index.vue";

VerAlert.install = (app: App) => {
  app.component("VerAlert", VerAlert);
};

export default VerAlert;
