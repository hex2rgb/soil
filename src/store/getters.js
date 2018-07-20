const getters = {
    sidebar: (state) => {
        return state.app.sidebar;
    },
    language: (state) => {
        return state.app.language;
    },
    device: (state) => {
        return state.app.device;
    },
    visitedViews: (state) => {
        return state.tagsView.visitedViews;
    },
    cachedViews: (state) => {
        return state.tagsView.cachedViews;
    },
    token: (state) => {
        return state.user.token;
    },
    avatar: (state) => {
        return state.user.avatar;
    },
    name: (state) => {
        return state.user.name;
    },
    introduction: (state) => {
        return state.user.introduction;
    },
    status: (state) => {
        return state.user.status;
    },
    roles: (state) => {
        return state.user.roles;
    },
    setting: (state) => {
        return state.user.setting;
    },
    permission_routers: (state) => {
        return state.permission.routers;
    },
    addRouters: (state) => {
        return state.permission.addRouters;
    },
    errorLogs: (state) => {
        return state.errorLog.logs;
    }
};

export default getters;
