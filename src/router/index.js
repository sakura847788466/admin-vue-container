import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/layout';
/*默认的页面路由 */
export const constantRoutes = [

  // 登录页
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  // 全局layout
  {
    path: '/',
    component: Layout,
    // 重定向，为了登录后跳转用
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '主页',
        icon: 'dashboard',
        permissions: ['admin','user']
      },

    }]
  },
  // 文档
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
      permissions: ['admin','user']
    },
    children: [
      // 下载
      {
        path: 'download',
        name: 'Download',
        component: () => import('@/views/Download/index'),
        meta: {
          title: '下载',
          icon: 'table',
          permissions: ['admin,user']
        }
      },
      // 接口
      {
        path: 'interFace',
        name: 'InterFace',
        component: () => import('@/views/InterFace/index'),
        meta: {
          title: '接口调试',
          icon: 'tree',
          permissions: ['admin,user']
        }
      },
      // user
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/User/index'),
        meta: {
          title: '用户',
          icon: 'user',
          permissions: ['admin,user']
        }
      },
      // 表单
      {
        path: 'test',
        name: 'Test',
        component: () => import('@/views/Test/Test'),
        meta: {
          title: '测试页',
          icon: 'form',
          permissions: ['admin']
        }
      },
      {
        path: 'errPage',
        name: 'errPage',
        component: () => import('@/views/404'),
        meta: {
          title: 'err',
          icon: 'form',
          permissions: ['admin']
        }
      },
      {
        path: 'document',
        name: 'document',
        component: () => import('@/views/Document/Document'),
        meta: {
          title: '部署文档',
          icon: 'form',
          permissions: ['admin','user']
        }

      },
      {
        path: 'sandbox',
        name: 'sandbox',
        component: () => import('@/views/SandBox/SandBox'),
        meta: {
          title: '沙箱环境',
          icon: 'form',
        }

      }
    ]
  },
  // 404页 最后加载
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // 404页面
  {
    path: '*',
    redirect: '/404',
    hidden: true
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
// 需要权限的路由
export const permissionRouter = [{
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
      // 下载
      {
        path: 'download',
        name: 'Download',
        component: () => import('@/views/Download/index'),
        meta: {
          title: '下载',
          icon: 'table',
        }
      },
      // 接口
      {
        path: 'interFace',
        name: 'InterFace',
        component: () => import('@/views/InterFace/index'),
        meta: {
          title: '接口',
          icon: 'tree',
        }
      },
      // user
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/User/index'),
        meta: {
          title: '用户',
          icon: 'user',
        }
      },
      // 测试页
      {
        path: 'test',
        name: 'Test',
        component: () => import('@/views/Test/Test'),
        meta: {
          title: '测试页',
          icon: 'form',
        }
      },
      {
        path: 'errPage',
        name: 'errPage',
        component: () => import('@/views/404'),
        meta: {
          title: 'err',
          icon: 'form',
        }
      },
      {
        path: 'document',
        name: 'document',
        component: () => import('@/views/Document/Document'),
        meta: {
          title: '文档',
          icon: 'form',
          permissions: ['admin','user']
        }

      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];

export default router;
