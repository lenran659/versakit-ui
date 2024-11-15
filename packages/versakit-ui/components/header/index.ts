import tHeader from "./index.vue";

tHeader.install = (app) => {
  app.component(tHeader.name, tHeader);
};

export default tHeader;
