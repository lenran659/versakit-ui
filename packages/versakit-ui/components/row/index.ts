import type { App } from "vue";
import VerRow from "./index.vue";

VerRow.install = (app: App) => {
  app.component("VerRow", VerRow);
};

export default VerRow;
