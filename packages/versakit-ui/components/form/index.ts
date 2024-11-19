import type { App } from "vue";
import VerForm from "./index.vue";

VerForm.insatll = (app: App) => {
  app.component("VerForm", VerForm);
};

export default VerForm;
