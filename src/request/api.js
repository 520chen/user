import { get, post } from './server';

// 获取用户列表
export const getUser = params => get('/getUser',params)

// 新增用户
export const addUser = params => post('/addUser',params)

// 编辑用户
export const editUser = params => post('/editUser',params)

// 删除用户
export const deletUser = params => post('/deletUser',params)