import { get, post } from './http'
//登录接口
export const userLogin = param => post('api/login', param);
//首页公告获取
export const getNoticelist = param => post('api/getNoticelist', param);
