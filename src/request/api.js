import { get, post } from './http'
//登录接口
export const userLogin = param => post('api/login', param);
//首页公告获取,在办，待办
export const getNoticelist = param => post('api/getNoticelist', param);
// export function getNoticelist(param){
//   return post('api/getNoticelist', param);
// }
