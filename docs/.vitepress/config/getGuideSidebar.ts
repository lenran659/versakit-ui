import { DefaultTheme } from "vitepress";

export const getGuideSidebar = (): DefaultTheme.Sidebar => {
  return [
    {
      text: "指南",
      items: [
        { text: "Log 更新日志", link: "/guide/log/" },
        { text: "Dark 暗黑模式", link: "/guide/dark/" },
      ],
    },
  ];
};
