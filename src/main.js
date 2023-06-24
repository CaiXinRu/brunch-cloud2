import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'
// // Import stylesheet
// import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

// import vee-validate 主套件
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'
// import vee-validate 全部規則
import AllRules from '@vee-validate/rules'
// import 多國語系功能
import { localize, setLocale } from '@vee-validate/i18n'
// 直接把中文匯入
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'
import { currency, date } from './methods/filters.js'

// 載入順序很重要
// import 'bootstrap/scss/bootstrap.scss'
import '@/assets/base.scss'
import '@/assets/layout.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
// eslint-disable-next-line import/no-duplicates
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faUser } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faLine } from '@fortawesome/free-brands-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faCloud } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line import/no-duplicates
// import { faCloud as farCloud } from '@fortawesome/free-regular-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faPhone } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faSquareMinus } from '@fortawesome/free-regular-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faCircleUp } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line import/no-duplicates
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

// 定義驗證規則，加入先前的設定檔
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 這個語系檔不能直接啟用它，所以會強制預設文字為中文 // 預設語系
setLocale('zh_TW')

/* add icons to the library */
library.add(
  faSquareFacebook,
  faSquareInstagram,
  faLine,
  faSquareGithub,
  faMagnifyingGlass,
  faUser,
  fasHeart,
  farHeart,
  faCartShopping,
  faCartPlus,
  faCloud,
  faLocationDot,
  faPhone,
  faEnvelope,
  faAngleRight,
  faArrowRight,
  faSquareMinus,
  faSquarePlus,
  faCircleXmark,
  faTrashCan,
  faPenToSquare,
  faBullhorn,
  faCircleUp,
  faUtensils
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
// 註冊vee-validate 三個全域元件，要在createAPP(APP)之後、mount之前
// eslint-disable-next-line vue/multi-word-component-names
app.component('Form', Form)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.config.globalProperties.$filters = {
  currency,
  date
}
app.use(router)
app.use(VueAxios, axios)
app.use(createPinia())
app.mount('#app')
