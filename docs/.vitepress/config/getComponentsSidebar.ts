import { DefaultTheme } from "vitepress";

export const getComponentsSidebar = (): DefaultTheme.Sidebar => {
  return [
    {
      text: "Layout 布局组件",
      items: [
        { text: "Layout 布局", link: "/components/layout/" },
        { text: "Container 布局容器", link: "/components/container/" },
      ],
    },
    {
      text: "Basic 基础组件",
      items: [
        { text: "Button 按钮", link: "/components/button/" },
        { text: "Text 文本", link: "/components/text/" },
        { text: "Link 链接", link: "/components/link/" },
        { text: "Divider 分割线", link: "/components/divider/" },
      ],
    },
    {
      text: "Form 表单组件",
      items: [
        { text: "Input 输入框", link: "/components/input/" },
        { text: "Switch 开关", link: "/components/switch/" },
        { text: "Radio 单选框", link: "/components/radio/" },
        { text: "Textarea 文本域", link: "/components/textarea/" },
        { text: "Form 表单", link: "/components/form/" },
      ],
    },
    {
      text: "Data 数据展示组件",
      items: [
        { text: "Avatar 头像", link: "/components/avatar/" },
        { text: "Card 卡片", link: "/components/card/" },
        { text: "Tag 标签", link: "/components/tag/" },
      ],
    },
    {
      text: "Navigation 导航",
      items: [{ text: "Backtop 回到顶部", link: "/components/backtop/" }],
    },
    {
      text: "Feedback 反馈组件",
      items: [
        {
          text: "Alert 提示",
          link: "/components/alert/",
        },
        {
          text: "Dialog 对话框",
          link: "/components/dialog/",
        },
        {
          text: "Drawer 抽屉",
          link: "/components/drawer/",
        },
        {
          text: "Message 消息提示",
          link: "/components/message/",
        },
        {
          text: "Notification 通知",
          link: "/components/notification/",
        },
        {
          text: "Loading 加载",
          link: "/components/loading/",
        },
      ],
    },
  ];
};
