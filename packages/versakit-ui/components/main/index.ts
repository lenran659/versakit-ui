import VerMain from "./index.vue";

VerMain.install = (app) => {
  app.component(VerMain.name, VerMain);
};

export default VerMain;
