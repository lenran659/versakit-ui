# 快速开始

本节将介绍如何在项目中使用 Versakit。

## 用法

```javascript
// main.ts
import { createApp } from "vue";
import VersakitUI from "versakit-ui";
import App from "./App.vue";
import "versakit-ui/dist/style.css";

const app = createApp(App);

app.use(VersakitUI);
app.mount("#app");
```
