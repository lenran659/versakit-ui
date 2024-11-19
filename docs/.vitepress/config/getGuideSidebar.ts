import { DefaultTheme } from "vitepress";

export const getGuideSidebar = (): DefaultTheme.Sidebar => {
  return [
    {
      text: "指南",
      items: [
        { text: "安装", link: "/guide/installation/" },
        { text: "更新日志", link: "/guide/log/" },
        { text: "暗黑模式", link: "/guide/dark/" },
      ],
    },
  ];
};
