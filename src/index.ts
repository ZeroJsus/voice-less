import type { NetlessApp } from "@netless/window-manager";

import { createApp } from "vue";
import styles from "./style.css?inline";
import App from "./App.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

/**
 * Register it before joining room:
 * ```js
 * WindowManager.register({
 *   kind: "Counter",
 *   src: Counter
 * })
 * ```
 * Then you can use it in your room:
 * ```js
 * manager.addApp({ kind: 'Counter' })
 * ```
 * Read more about how to make a netless app here:
 * https://github.com/netless-io/window-manager/blob/master/docs/develop-app.md
 */
const VoiceLess: NetlessApp = {
  kind: "大音希声",
  setup(context) {
    const box = context.getBox();
    box.mountStyles(styles);

    const $content = document.createElement("div");
    $content.className = "app-counter";
    box.mountContent($content);

    const app = createApp(App).provide("context", context);

    app.mount($content);
    app.use(ElementPlus);
    
    context.emitter.on("destroy", () => {
      app.unmount();
    });
  },
};

export default VoiceLess;
