import router from './router';
import store from './store';
import { Message } from 'element-ui';
// 进度条
import NProgress from 'nprogress';
// 进度条样式
import 'nprogress/nprogress.css';
// 从cookie获取令牌
import { getToken } from '@/utils/auth';
import getPageTitle from '@/utils/get-page-title';

// NProgress配置
NProgress.configure({ showSpinner: true });
// 没有重定向白名单
const whiteList = ['/login'];

router.beforeEach(async (to, from, next) => {
  // 开始进度条
  NProgress.start();

  // 设置页面标题
  document.title = getPageTitle(to.meta.title);

  // 确定用户是否已登录
  const hasToken = getToken();

  if (hasToken) {
    if (to.path === '/login') {
      // 如果已登录，请重定向到主页
      next({ path: '/' });
      NProgress.done();
    } else {
      const hasGetUserInfo = store.getters.name;
      if (hasGetUserInfo) {
        next();
      } else {
        try {
          // 获取用户信息
          await store.dispatch('user/getInfo');
          next();
        } catch (error) {
          // 删除令牌并进入登录页面重新登录
          await store.dispatch('user/resetToken');
          Message.error(error || 'Has Error');
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    //  没有令牌
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免费登录白名单中，直接进入
      next();
    } else {
      // 其他无权访问的页面将重定向到登录页面。
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // 完成进度栏
  NProgress.done();
});
