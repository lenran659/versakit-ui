import type { App, Component } from 'vue'
/* 组件 */
import VerButton from './components/button/index'
import VerText from './components/text/index'
import VerLink from './components/link/index'
import VerRow from './components/row/index'
import VerCol from './components/col/index'
import VerInput from './components/input/index'
import VerDialog from './components/dialog/index'
import VerDivider from './components/divider/index'
import VerAvatar from './components/avatar/index'
import VerCard from './components/card/index'
import VerTag from './components/tag/index'
import VerDrawer from './components/drawer/index'
import VerSwitch from './components/switch/index'
import VerRadio from './components/radio/index'
import VerMessage from './components/message/index'
import VerMessageVue from './components/message/src/index.vue'
import VerTextarea from './components/textarea/index'
import VerContainer from './components/container/index'
import VerHeader from './components/header/index'
import VerMain from './components/main/index'
import VerNotification from './components/notification/index'
import VerNotificationVue from './components/notification/src/index.vue'
import VerAlert from './components/alert/index'
import VerForm from './components/form/index'
import VerFormItem from './components/formItem/index'
import VerTab from './components/tab/index'

// 组件注册
const components: Component = [
  VerButton,
  VerRow,
  VerText,
  VerLink,
  VerCol,
  VerInput,
  VerDialog,
  VerAvatar,
  VerCard,
  VerTag,
  VerDivider,
  VerDrawer,
  VerSwitch,
  VerRadio,
  VerMessageVue,
  VerTextarea,
  VerContainer,
  VerHeader,
  VerMain,
  VerNotificationVue,
  VerAlert,
  VerForm,
  VerFormItem,
  VerTab,
]

export {
  VerButton,
  VerRow,
  VerText,
  VerLink,
  VerCol,
  VerInput,
  VerDialog,
  VerAvatar,
  VerCard,
  VerTag,
  VerDivider,
  VerDrawer,
  VerSwitch,
  VerRadio,
  VerMessage,
  VerTextarea,
  VerContainer,
  VerHeader,
  VerMain,
  VerNotification,
  VerAlert,
  VerForm,
  VerFormItem,
  VerTab,
}

// 全局注册
export default {
  install: (app: App) => {
    for (const c in components) {
      app.component(c, components[c])
    }
  },
}
