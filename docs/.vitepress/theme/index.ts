import Theme from "vitepress/theme";
import VersakitUI from "../../../packages/versakit-ui/index"; // 引入组件库

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(VersakitUI); // 注册组件库
  },
};
