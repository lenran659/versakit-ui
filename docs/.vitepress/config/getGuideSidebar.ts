import { DefaultTheme } from "vitepress";

export const getGuideSidebar = (): DefaultTheme.Sidebar => {
  return [
    {
      text: "指南",
      items: [{ text: "Dark 暗黑模式", link: "/guide/dark/" }],
    },
  ];
};
