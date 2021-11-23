import { get, post } from './server';

// 获取用户列表
export const getUser = params => get('http://localhost:8888/getUser',params)

// 新增用户
export const addUser = params => post('http://localhost:8888/addUser',params)

// 编辑用户
export const editUser = params => post('http://localhost:8888/editUser',params)

// 删除用户
export const deletUser = params => post('http://localhost:8888/deletUser',params)