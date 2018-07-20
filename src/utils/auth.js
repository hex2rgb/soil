import Cookies from 'js-cookie';

const TokenKey = 'Admin-Token';

export function getToken() {
    // 判断登录
    return Cookies.get(TokenKey);
    // return false;
}

export function setToken(token) {
    return Cookies.set(TokenKey, token);
}

export function removeToken() {
    return Cookies.remove(TokenKey);
}

