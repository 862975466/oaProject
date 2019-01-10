import { get, post } from './http'
export const userLogin = param => post('api/login', param);

