import { DefaultTheme } from "vitepress";

export const getNav = (): DefaultTheme.NavItem[] => {
  return [
    { text: "指南", link: "/guide/dark/" },
    { text: "组件", link: "/components/layout/" },
  ];
};
