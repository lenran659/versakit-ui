import tDialog from "./index.vue";

tDialog.install = (app) => {
  app.component(tDialog.name, tDialog);
};

export default tDialog;
