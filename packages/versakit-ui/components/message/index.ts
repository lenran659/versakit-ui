import { h, render } from "vue";
import VerMessage from "./index.vue";

interface Options {
  type: typeEnum;
  content: string;
  duration?: number;
}

type typeEnum = "success" | "error" | "warning" | "info";

export default ({ type, content, duration = 3000 }: Options) => {
  /**
   * 动画结束时的回调
   */
  const onDestroy = () => {
    // 3. message 销毁
    render(null, document.body);
  };

  // 1. 返回 vnode
  const vnode = h(VerMessage, {
    type,
    content,
    duration,
    destroy: onDestroy,
  });

  console.trace("render........");

  // 2. render
  render(vnode, document.body);
};
