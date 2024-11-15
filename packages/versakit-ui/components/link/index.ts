import tLink from "./index.vue";

tLink.install = (app) => {
  app.component(tLink.name, tLink);
};

export default tLink;
