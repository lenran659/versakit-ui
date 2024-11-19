import type { App } from "vue";
import VerText from "./index.vue";

VerText.install = (app: App) => {
  app.component("VerText", VerText);
};

export default VerText;
