import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '主页标题'
    }
  },{
    path: '/auth/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: '用户登录'
    }
  },{
    path: '/auth/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      title: '用户注册',
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/**
* 给每一个页面单独设置 title 方法
*/
router.beforeEach(async (to) => {
    if (to.meta.title) {
      document.title = to.meta.title;
    }
}
)

export default router
