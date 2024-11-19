import type { App } from "vue";
import VerRadio from "./index.vue";

VerRadio.install = (app: App) => {
  app.component("VerRadio", VerRadio);
};

export default VerRadio;
