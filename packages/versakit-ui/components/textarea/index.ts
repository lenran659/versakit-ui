import tTextarea from "./index.vue";

tTextarea.install = (app) => {
  app.component(tTextarea.name, tTextarea);
};

export default tTextarea;
