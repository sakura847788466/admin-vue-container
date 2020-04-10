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
        meta: { title: '主页', icon: 'dashboard', permissions: ['u1'] }, //permissions权限

      }
    ]
  },
  // 文档
  {
    path: '/example',
    component: Layout,
    // 重定向，为了登录后跳转用
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '文档', icon: 'example', activeMenu: '/example/tree', permissions: ['u2'] },
    children: [
      // 下载
      {
        path: 'download',
        name: 'Download',
        component: () => import('@/views/Download/index'),
        meta: { title: '下载', icon: 'table', permissions: ['u2_2'] }
      },
      // 接口
      {
        path: 'interFace',
        name: 'InterFace',
        component: () => import('@/views/InterFace/index'),
        meta: { title: '接口', icon: 'tree', permissions: ['u2_3'] }
      },
      // user
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/User/index'),
        meta: { title: '用户', icon: 'user', permissions: ['u2_3'] }
      },
      // 表单
      {
        path: 'test',
        name: 'Test',
        component: () => import('@/views/Test/Test'),
        meta: { title: '测试页', icon: 'form', permissions: ['u2_3'] }
      },
      {
        path: 'errPage',
        name: 'errPage',
        component: () => import('@/views/404'),
        meta: { title: 'err', icon: 'form', permissions: ['u2_3'] }
      },
      {
        path: 'document',
        name: 'document',
        component: () => import('@/views/Document/Document'),
        meta: { title: '文档', icon: 'form', permissions: ['u2_4'] }

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
