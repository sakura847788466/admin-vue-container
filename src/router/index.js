import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/layout';
// 无权限的路由
export const constantRoutes = [
  // 全局layout
  {
    path: '/',
    component: Layout,

    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '主页',
        icon: 'dashboard',
      },

    }]
  },
  {
    path: '/example',
    component: Layout,
    // 重定向，为了登录后跳转用
    redirect: '/example/table',
    name: 'Example',
    meta: {
      title: '文档',
      icon: 'example',
      activeMenu: '/example/tree',
    },
    children: [
      {
        path: 'interFace',
        name: 'InterFace',
        component: () => import('@/views/InterFace/index'),
        meta: {
          title: '接口文档',
          icon: 'tree',
        }
      },
      {
        path: 'document',
        name: 'document',
        component: () => import('@/views/Document/Document'),
        meta: {
          title: '部署文档',
          icon: 'form',
        }

      }
    ]
  },
  {
    path:'/download',
    component:Layout,
    name: 'Download',
    meta: {
      title: '下载',
      icon: 'example',
    },
    children:[
      {
        path: 'download',
        name: 'Download',
        component: () => import('@/views/Download/index'),
        meta: {
          title: '下载',
          icon: 'table',
        }
      },
    ]
  },
  {
    path:'/sandbox',
    component:Layout,
    name: 'Sandbox',
    meta: {
      title: '沙箱环境',
      icon: 'example',
    },
    children:[
      {
        path: 'sandbox',
        name: 'sandbox',
        component: () => import('@/views/SandBox/SandBox'),
        meta: {
          title: '沙箱环境',
          icon: 'form',
        }
      },
    ]
  },

];

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({
      y: 0
    }),
    routes: constantRoutes
  });

const router = createRouter();

export function resetRouter() { //退出登录重新分
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
