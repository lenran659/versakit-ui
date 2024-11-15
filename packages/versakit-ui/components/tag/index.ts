import tTag from "./index.vue";

tTag.install = (app) => {
  app.component(tTag.name, tTag);
};

export default tTag;
