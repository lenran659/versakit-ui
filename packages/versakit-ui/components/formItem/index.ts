import tFormItem from "./index.vue";

tFormItem.install = (app) => {
  app.component(tFormItem.name, tFormItem);
};

export default tFormItem;
