import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/layout';

export const constantRoutes = [
  // 404页
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // 404页面
  { path: '*', redirect: '/404', hidden: true },
  // 登录页
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  // 仪表盘
  {
    path: '/',
    component: Layout,
    // 重定向，为了登录后跳转用
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '主页', icon: 'dashboard' }
      }
    ]
  },
  // 例子
  {
    path: '/example',
    component: Layout,
    // 重定向，为了登录后跳转用
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '文档', icon: 'example', activeMenu: '/example/tree' },
    children: [
      // 表格
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '下载', icon: 'table' }
      },
      // 树
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '接口', icon: 'tree' }
      },
      // 按钮
      {
        path: 'button',
        name: 'Button',
        component: () => import('@/views/button/index'),
        meta: { title: '用户', icon: 'user' }
      },
      // 表单
      {
        path: 'form',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '表单', icon: 'form' }
      },
      {
        path: 'errPage',
        name: 'errPage',
        component: () => import('@/views/404'),
        meta: { title: 'err', icon: 'form' }
      }
    ]
  }
];

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

export function resetRouter () {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
