import VerAlert from "./index.vue";

VerAlert.install = (app) => {
  app.component(VerAlert.name, VerAlert);
};

export default VerAlert;
