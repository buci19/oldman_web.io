import Cookies from 'js-cookie';

// 获取token的key，需要和后端一致
const TokenKey = 'Authorization';

// 设置token
export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

// 获取token
export function getToken() {
  return Cookies.get(TokenKey);
}

// 移除token
export function removeToken() {
  return Cookies.remove(TokenKey);
}