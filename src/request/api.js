import { get, post } from './server';

// 获取用户列表
export const getUser = params => get('http://yc1314.yicp.io/getUser',params)

// 新增用户
export const addUser = params => post('http://yc1314.yicp.io/addUser',params)

// 编辑用户
export const editUser = params => post('http://yc1314.yicp.io/editUser',params)

// 删除用户
export const deletUser = params => post('http://yc1314.yicp.io/deletUser',params)