import tDivider from "./index.vue";

tDivider.install = (app) => {
  app.component(tDivider.name, tDivider);
};

export default tDivider;
