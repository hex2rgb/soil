import store from '@/store';
import router from '@/router';
import {Message} from 'element-ui';
import {getToken} from '@/utils/auth'; // getToken from cookie

const whiteList = ['/login']; // no redirect whitelist

router.beforeEach((to, from, next) => {
    if (getToken()) { // determine if there has token
        /* has token*/
        if (to.path === '/login') {
            next({path: '/'});
        } else {
            if (store.getters.roles.length == 0) { // 判断当前用户是否已拉取完user_info信息
                store.dispatch('GetUserInfo')
                    .then((res) => { // 拉取user_info
                        const roles = res.roles; // note: roles must be a array! such as: ['editor','develop']
                        store.dispatch('GenerateRoutes', {roles})
                            .then(() => { // 根据roles权限生成可访问的路由表
                                router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
                                next({...to, replace: true}); // hack方法 确保addRoutes已完成
                            });
                    })
                    .catch((err) => {
                        store.dispatch('LogOut')
                            .then(() => {
                                console.log(err);
                                Message.error('Verification failed, please login again');
                                next({path: '/'});
                            });
                    });
            } else {
                // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
                /*if (hasPermission(store.getters.roles, to.meta.roles)) {
                    next()//
                } else {
                    next({path: '/401', replace: true, query: {noGoBack: true}})
                }*/
                // 可删 ↑
                next();
            }
        }
    } else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            return next();
        }
        next('/login'); // 否则全部重定向到登录页
    }
});

router.afterEach(() => {

});
